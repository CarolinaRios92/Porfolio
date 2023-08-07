import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const Layout = ({children}) => {
    return (
        <div className="max-w-7xl">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}