import { NextResponse } from 'next/server'
import mammoth from "mammoth"
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
    try {
        // Get the JSON data from the request
        const jsonData = await request.json()

        // Read the template file
        const templatePath = path.join(process.cwd(), 'lib/template/template.docx')
        const buffer = fs.readFileSync(templatePath)

        // Convert docx to HTML
        const result = await mammoth.convertToHtml({ buffer })
        let html = result.value

        // Replace all placeholders with their corresponding values
        Object.entries(jsonData).forEach(([key, value]) => {
            const placeholder = `{{${key}}}`
            html = html.replace(new RegExp(placeholder, 'g'), String(value))
        })

        // Return the processed HTML
        return NextResponse.json({ html })
    } catch (error) {
        console.error('Error processing template:', error)
        return NextResponse.json(
            { error: 'Failed to process template' },
            { status: 500 }
        )
    }
}

