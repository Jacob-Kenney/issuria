"use client";

import { useEffect, useState } from "react";
import { Loader2, FileText, FileDown } from "lucide-react";
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'

export default function Page({ params, }: { params: { prompt: string}}) {
    const prompt = decodeURIComponent(params.prompt);
    const [isLoading, setIsLoading] = useState(true);
    const [generatedHtml, setGeneratedHtml] = useState<string>('');
    const [currentContent, setCurrentContent] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleExport = async (format: 'pdf' | 'docx') => {
        try {
            const response = await fetch('/api/export', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: currentContent || generatedHtml, // Use current content if available, fallback to generated
                    format
                })
            });

            if (!response.ok) {
                throw new Error(`Failed to export ${format}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `document.${format}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error(`Error exporting ${format}:`, error);
            // You might want to show a toast notification here
        }
    };

    useEffect(() => {
        // Process prompt to make JSON response
        const response = {}

        // Process JSON to make template
        const generateDocument = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const apiResponse = await fetch('/api/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(response)
                });

                if (!apiResponse.ok) {
                    throw new Error('Failed to generate document');
                }

                const data = await apiResponse.json();
                setGeneratedHtml(data.html);
                setCurrentContent(data.html); // Initialize current content with generated HTML
            } catch (error) {
                console.error('Error generating document:', error);
                setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        generateDocument();
    }, [prompt])

    // Loader
    if (isLoading) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-4 text-muted-foreground">Processing your request...</p>
            </div>
        )
    // Editor content 
    } else {
        if (error) {
            return <div>Error: {error}</div>;
        }
        return (
            <div className="h-screen flex flex-col">
                {/* Extract button */}
                <div className="flex justify-center md:justify-end gap-2 p-4 border">
                    <button
                        onClick={() => handleExport('pdf')}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        <FileText className="w-4 h-4" />
                        Export PDF
                    </button>
                    <button
                        onClick={() => handleExport('docx')}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <FileDown className="w-4 h-4" />
                        Export DOCX
                    </button>
                </div>
                {/* Editor */}
                <div className="flex-1 overflow-hidden">
                    <SimpleEditor 
                        initialContent={generatedHtml} 
                        onUpdate={setCurrentContent}
                    />
                </div>
            </div>
        )
    }
}