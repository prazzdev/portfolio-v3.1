import Head from "next/head"
import Header from "../Header"
import Footer from "../Footer"
import NavMenu from "../NavMenu"

export default function Layout(props) {
    const { pageTitle, children } =  props
    return (
        <>
        <Head>
            <title>{pageTitle}</title>
        </Head>
        <Header />
        <div id="container" 
            className="flex flex-column min-h-screen lg:w-[60%] mx-auto lg:py-[90px]"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="600"
        >
            {children}
        </div>
        <NavMenu />
        <Footer />
        </>
    )
}