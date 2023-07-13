import SkillBox from "../SkillBox";
import ListStruct from "../ListStruct";

export default function SkillList() {
    const imgUrl = "images/tech/"
    return (
        <>
        <ListStruct title="Language">
            <SkillBox 
                title="HTML" 
                thumbUrl={imgUrl + "html.svg"}
            />
            <SkillBox 
                title="CSS" 
                thumbUrl={imgUrl + "css.svg"}
            />
            <SkillBox 
                title="Javascript" 
                thumbUrl={imgUrl + "js.svg"}
            />
            <SkillBox 
                title="PHP" 
                thumbUrl={imgUrl + "php.svg"}
            />
            {/* <SkillBox 
                title="C++" 
                thumbUrl={imgUrl + "cpp.svg"}
            /> */}
        </ListStruct>
        <ListStruct title="Framework/Library">
            <SkillBox 
                title="ReactJS" 
                thumbUrl={imgUrl + "react.svg"}
            />
            <SkillBox 
                title="NextJS" 
                thumbUrl={imgUrl + "next.svg"}
            />
            <SkillBox 
                title="NodeJS" 
                thumbUrl={"/" + imgUrl + "node.webp"}
            />
            <SkillBox 
                title="ExpressJS" 
                thumbUrl={"/" + imgUrl + "express.webp"}
            />
            {/* <SkillBox 
                title="Laravel" 
                thumbUrl={imgUrl + "laravel.svg"}
            /> */}
            <SkillBox 
                title="AOS" 
                thumbUrl={"/" + imgUrl + "aos.webp"}
            />
            <SkillBox 
                title="grammY" 
                thumbUrl={"/" + imgUrl + "grammy.webp"}
            />
        </ListStruct>
        <ListStruct title="UI Framework/Component">
            <SkillBox 
                title="Tailwind CSS" 
                thumbUrl={imgUrl + "tailwind.svg"}
            />
            <SkillBox 
                title="Daisy UI" 
                thumbUrl={imgUrl + "daisyui.svg"}
            />
            <SkillBox 
                title="Mamba UI" 
                thumbUrl={imgUrl + "mambaui.svg"}
            />
            <SkillBox 
                title="Flowbite" 
                thumbUrl={"/" + imgUrl + "flowbite.webp"}
            />
            <SkillBox 
                title="Hyper UI" 
                thumbUrl={"/" + imgUrl + "hyperui.webp"}
            />
            <SkillBox 
                title="Meraki UI" 
                thumbUrl={"/" + imgUrl + "merakiui.svg"}
            />
        </ListStruct>
        <ListStruct title="DBMS">
            <SkillBox 
                title="MySQL" 
                thumbUrl={imgUrl + "mysql.svg"}
            />
            {/* <SkillBox 
                title="MongoDB" 
                thumbUrl={imgUrl + "mongodb.svg"}
            /> */}
        </ListStruct>
        <ListStruct title="Operating System">
            <SkillBox 
                title="Windows" 
                thumbUrl={imgUrl + "windows.svg"}
            />
            <SkillBox 
                title="GNU/Linux" 
                thumbUrl={imgUrl + "linux.svg"}
            />
            <SkillBox 
                title="Ubuntu" 
                thumbUrl={imgUrl + "ubuntu.svg"}
            />
        </ListStruct>
        <ListStruct title="Misc">
            <SkillBox 
                title="GIT" 
                thumbUrl={imgUrl + "git.svg"}
            />
        </ListStruct>
        </>
    )
}