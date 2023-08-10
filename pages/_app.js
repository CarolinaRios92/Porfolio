import '@/styles/globals.css'
import {Space_Grotesk} from "@next/font/google";
import { NextUIProvider } from '@nextui-org/react';

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500"]
})

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
        <main className={spaceGrotesk.className}>
            <Component {...pageProps} />
        </main>
    </NextUIProvider>
    )
}
