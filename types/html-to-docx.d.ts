declare module 'html-to-docx' {
    interface HTMLtoDOCXOptions {
        table?: {
            row?: {
                cantSplit?: boolean;
            };
        };
        footer?: boolean;
        pageNumber?: boolean;
        styles?: {
            paragraphStyles?: Array<{
                id: string;
                name: string;
                run: {
                    size?: number;
                    color?: string;
                    font?: string;
                    bold?: boolean;
                    italics?: boolean;
                };
            }>;
            characterStyles?: Array<{
                id: string;
                name: string;
                run: {
                    bold?: boolean;
                    italics?: boolean;
                };
            }>;
        };
    }

    function HTMLtoDOCX(
        html: string,
        headerHTML: string | null,
        options?: HTMLtoDOCXOptions
    ): Promise<Buffer>;

    export = HTMLtoDOCX;
} 