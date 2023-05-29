import Layout from "@/components/Layout";
import SkillList from "@/components/SkillList";
import HeadingTitle from "@/components/partials/HeadingTitle";

export default function Skills() {
    return (
        <>
        <Layout pageTitle="Skills | Agung Prasetyo">
            <div className="flex flex-col">
                <HeadingTitle text="Skills" />
                <SkillList />
            </div>
        </Layout>
        </>
    )
}