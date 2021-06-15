import type {
    DocumentContext,
    DocumentInitialProps,
} from 'next/document'
import Document, {
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

class CustomDocument extends Document {

    static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = context.renderPage

        try {
            context.renderPage = () => {
                return originalRenderPage({
                    enhanceApp: (App) => {
                        return (props) => {
                            return sheet.collectStyles(<App {...props} />)
                        }
                    },
                })
            }

            const initialProps = await Document.getInitialProps(context)

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    public render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="/fonts/styles.css"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default CustomDocument