import Head from "next/head"
import Header from "../Header"
import Footer from "../Footer"
import NavMenu from "../NavMenu"

export default function Layout(props) {
    let { pageTitle, children } =  props
    console.log(pageTitle)
    if(pageTitle == 'Agung Prasetyo | Junior Front End Web Developer'){
        pageTitle = 'Agung Prasetyo | Junior Front End Web Developer'
    } else {
        pageTitle = pageTitle + ' - Agung Prasetyo | Junior Front End Web Developer'
    }
    return (
        <>
        <Head>
            <meta name="title" content="Agung Prasetyo | Junior Front End Web Developer" />
            <meta name="description" content="As a junior front end web developer, I'm passionate about crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I'm eager to contribute to creating visually appealing and responsive websites. I'm dedicated to staying up-to-date with the latest web development trends and technologies, always striving to enhance my skills and deliver high-quality web solutions. Let's collaborate and turn your web ideas into reality together!" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://agungpraz31.my.id/" />
            <meta property="og:title" content="Agung Prasetyo | Junior Front End Web Developer" />
            <meta property="og:description" content="As a junior front end web developer, I'm passionate about crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I'm eager to contribute to creating visually appealing and responsive websites. I'm dedicated to staying up-to-date with the latest web development trends and technologies, always striving to enhance my skills and deliver high-quality web solutions. Let's collaborate and turn your web ideas into reality together!" />
            <meta property="og:image" content="https://agungpraz31.my.id/images/meta-tags.png" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://agungpraz31.my.id/" />
            <meta property="twitter:title" content="Agung Prasetyo | Junior Front End Web Developer" />
            <meta property="twitter:description" content="As a junior front end web developer, I'm passionate about crafting engaging and user-friendly web experiences. With a strong foundation in HTML, CSS, and JavaScript, I'm eager to contribute to creating visually appealing and responsive websites. I'm dedicated to staying up-to-date with the latest web development trends and technologies, always striving to enhance my skills and deliver high-quality web solutions. Let's collaborate and turn your web ideas into reality together!" />
            <meta property="twitter:image" content="https://agungpraz31.my.id/images/me2.svg" />
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