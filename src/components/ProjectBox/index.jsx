import Image from "next/image"

export default function ProjectBox(props) {
    const { title, desc, repoUrl, projectUrl, children } = props
    const repoUri = "https://github.com/prazzdev/"
    return (
        <>
        <div 
            className="w-[100%] lg:w-[420px] min-h-[190px] lg:mr-5 mb-5 flex flex-col px-6 pt-8 rounded-2xl overflow-hidden bg-white shadow-md hover:bg-gray-100 hover:-translate-y-2 hover:shadow-lg transition">
            <div id="head" className="flex justify-between mb-4">
                <h3 className="font-bold text-xl">{title}</h3>
                <div id="opt" className="">
                    <button className="mx-2">
                        <a href={repoUri+repoUrl} className="" target="_blank">
                            <Image 
                                src={"/images/icons/fork.svg"} 
                                width={20}
                                height={20}
                            />
                        </a>
                    </button>
                    <button className="mx-2">
                        <a href={projectUrl} className="" target="_blank">
                            <Image 
                                src={"/images/icons/direct.svg"} 
                                width={20}
                                height={20}
                            />
                        </a>
                    </button>
                </div>
            </div>
            <div id="desc" className="mb-5">
                <span className="">{desc}</span>
            </div>
            <div id="tech" className="flex flex-row items-center">
                {children}
            </div>
        </div>
        </>
    )
}