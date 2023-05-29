import Layout from "@/components/Layout";
import ProjectList from "@/components/ProjectList";
import HeadingTitle from "@/components/partials/HeadingTitle";

export default function Projects() {
    return (
        <>
        <Layout pageTitle="Projects | Agung Prasetyo">
        <div className="flex flex-col">
            <HeadingTitle text="Projects" />
            <ProjectList />
        </div>
        </Layout>
        </>
    )
}