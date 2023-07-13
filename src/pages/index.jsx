import Layout from "@/components/Layout"
import Image from "next/image"
import Typewriter from 'typewriter-effect/dist/core'
const randomstring = require("randomstring")
const rdText = (length) => randomstring.generate(length)
const mark = "style-"

export default function Home() {
  return (
    <Layout pageTitle="Agung Prasetyo | Junior Fullstack Web Developer">
      <div className={mark+rdText(7) + " flex flex-row justify-center items-center mx-auto w-[100%]"}>
        <div className={mark+rdText(10) + " mr-[150px]"}>
          <h1 className={mark+rdText(5) + " font-bold text-[35px]"}>
            Agung Prasetyo
          </h1>
          <h3 id="typewriter" className={mark+rdText(4) + " text-teal-500 font-bold text-[25px] drop-shadow-xl mb-2"}>
            Junior Front End Web Developer
          </h3>
          {/* <Typewriter 
            options={{
              strings: ['Hello', 'World'],
              autoStart: true,
              loop: true,
              delay: 10
            }}
            onInit={(typewriter) => {
              typewriter
              .typeString('Junior Fullstack Web Developer')
              .pauseFor(1000)
              .deleteAll(10)
              .typeString('FOSS Enthusiast')
              .pauseFor(1000)
              .deleteAll(10)
              .typeString('STIMIK Tunas Bangsa Student')
              .pauseFor(1000)
              .start()
            }}
          /> */}
          <p className={mark+rdText(3) + " text-lg"}>
            Hi,everyone. Welcome to my portfolio website.
          </p>
        </div>
        <div className={mark+rdText(11) + " h-[280px] w-[280px] -mt-[100px]"}>
          <Image 
            src={"/images/me/me1.svg"} 
            width={500}
            height={500}
            className={mark+rdText(12)}
          />
        </div>
      </div>
      <p id="mobile" 
        className="absolute top-[50%] left-[50%] right-[50%]">Mobile screen only</p>
    </Layout>
  )
}
