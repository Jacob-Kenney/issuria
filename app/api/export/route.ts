import { NextResponse } from 'next/server';
import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import HTMLtoDOCX from 'html-to-docx';

interface MammothElement {
    type: string;
    styleName?: string;
    level?: number;
    [key: string]: any;
}

export async function POST(request: Request) {
    try {
        const { content, format } = await request.json();

        if (format === 'docx') {
            // Read the template file to get the styling
            const templatePath = path.join(process.cwd(), 'lib/template/template.docx');
            const templateBuffer = fs.readFileSync(templatePath);

            // Convert the template to HTML to get its structure and styles
            const templateResult = await mammoth.convertToHtml({ 
                buffer: templateBuffer
            }, {
                styleMap: [
                    "p[style-name='Normal'] => p:fresh",
                    "p[style-name='Heading 1'] => h1:fresh",
                    "p[style-name='Heading 2'] => h2:fresh",
                    "r[style-name='Strong'] => strong",
                    "r[style-name='Emphasis'] => em",
                    "r[style-name='Code'] => code",
                    "table => table",
                    "tr => tr",
                    "td => td"
                ],
                includeDefaultStyleMap: true,
                includeEmbeddedStyleMap: true
            });

            // Extract styles from the template
            const styleMatch = templateResult.value.match(/<style>([\s\S]*?)<\/style>/);
            const extractedStyles = styleMatch ? styleMatch[1] : '';

            // Process the content to ensure it's properly formatted
            const processedContent = content
                .replace(/<p><br><\/p>/g, '') // Remove empty paragraphs
                .replace(/<p>\s*<\/p>/g, '') // Remove empty paragraphs with whitespace
                .replace(/<p>(.*?)<\/p>/g, (_match: string, p1: string) => {
                    // Preserve paragraph formatting
                    return `<p style="margin: 0; padding: 0;">${p1}</p>`;
                });

            // Create a new HTML document that combines the template structure with the content
            const combinedHtml = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        ${extractedStyles}
                        /* Additional styles to preserve formatting */
                        body { font-family: Calibri, Arial, sans-serif; }
                        p { margin: 0; padding: 0; }
                        h1, h2, h3, h4, h5, h6 { margin: 0; padding: 0; }
                        table { border-collapse: collapse; width: 100%; }
                        td, th { border: 1px solid #000; padding: 8px; }
                        strong { font-weight: bold; }
                        em { font-style: italic; }
                    </style>
                </head>
                <body>
                    ${processedContent}
                </body>
                </html>
            `;

            // Convert HTML to DOCX using html-to-docx with enhanced options
            const buffer = await HTMLtoDOCX(combinedHtml, null, {
                table: { row: { cantSplit: true } },
                footer: true,
                pageNumber: true,
                styles: {
                    paragraphStyles: [
                        {
                            id: 'Normal',
                            name: 'Normal',
                            run: {
                                size: 24,
                                color: '000000',
                                font: 'Calibri'
                            }
                        },
                        {
                            id: 'Heading1',
                            name: 'Heading 1',
                            run: {
                                size: 32,
                                bold: true,
                                color: '000000',
                                font: 'Calibri'
                            }
                        },
                        {
                            id: 'Heading2',
                            name: 'Heading 2',
                            run: {
                                size: 28,
                                bold: true,
                                color: '000000',
                                font: 'Calibri'
                            }
                        }
                    ],
                    characterStyles: [
                        {
                            id: 'Strong',
                            name: 'Strong',
                            run: {
                                bold: true
                            }
                        },
                        {
                            id: 'Emphasis',
                            name: 'Emphasis',
                            run: {
                                italics: true
                            }
                        }
                    ]
                }
            });

            return new NextResponse(buffer, {
                headers: {
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'Content-Disposition': 'attachment; filename=document.docx'
                }
            });
        } else if (format === 'pdf') {
            // PDF export logic here
            return NextResponse.json({ error: 'PDF export not implemented' }, { status: 501 });
        }

        return NextResponse.json({ error: 'Invalid format' }, { status: 400 });
    } catch (error) {
        console.error('Error exporting document:', error);
        return NextResponse.json(
            { error: 'Failed to export document' },
            { status: 500 }
        );
    }
} 