import Layout from "@/components/Layout";
import ProjectList from "@/components/ProjectList";
import HeadingTitle from "@/components/partials/HeadingTitle";

export default function Projects() {
    return (
        <>
        <Layout pageTitle="Projects | Agung Prasetyo">
        <div className="flex flex-col px-6 py-6 pb-12 lg:p-0">
            <HeadingTitle text="Projects" />
            <ProjectList />
        </div>
        </Layout>
        </>
    )
}