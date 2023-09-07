import Layout from "@/components/Layout"
import Image from "next/image"

export default function Home() {
  return (
    <Layout pageTitle="Agung Prasetyo | Junior Fullstack Web Developer">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center mx-auto w-[100%]  lg:h-100vh">
        <div className="sm:flex flex-col lg:mr-[150px] mt-10 px-10 lg:p-0">
          <h1 className="font-bold text-[25px] lg:text-[35px] text-center lg:text-left">
            Agung Prasetyo
          </h1>
          <h3 id="typewriter" className="text-teal-500 font-bold sm:text-[20px] lg:text-[25px] text-center lg:text-start drop-shadow-xl">
            Junior Front End Web Developer
          </h3>
          <p className="text-[15px] lg:text-lg text-center lg:text-start">
            Hi,everyone. Welcome to my portfolio website.
          </p>
        </div>
        <div className="h-[280px] w-[280px] lg:-mt-[50px] bg-teal-200 lg:bg-[#eee] rounded-xl lg:rounded-none">
          <Image 
            src={"/images/me/me1.svg"} 
            width={500}
            height={500}
          />
        </div>
      </div>
    </Layout>
  )
}
