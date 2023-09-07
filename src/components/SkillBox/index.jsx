import Image from "next/image"

export default function SkillBox(props) {
    const { title, thumbUrl } = props
    return (
        <>
        <div 
            className="tooltip tooltip-left tooltip-accent w-[130px] lg:w-[210px] h-[140px] mr-5 mb-5 flex justify-center items-center rounded-lg lg:rounded-2xl  bg-white shadow-md hover:bg-gray-100 hover:-translate-y-2 hover:shadow-lg transition" 
            data-tip={title}
        >
            <Image 
                src={`${thumbUrl}`}  
                width={90}
                height={90}
                alt={`${title}`}
            />
        </div>
        </>
    )
}