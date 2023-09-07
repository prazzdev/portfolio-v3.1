import Layout from "@/components/Layout";
import SkillList from "@/components/SkillList";
import HeadingTitle from "@/components/partials/HeadingTitle";

export default function Skills() {
    return (
        <>
        <Layout pageTitle="Skills | Agung Prasetyo">
            <div className="flex flex-col px-6 py-6 lg:p-0">
                <HeadingTitle text="Skills" />
                <SkillList />
            </div>
        </Layout>
        </>
    )
}