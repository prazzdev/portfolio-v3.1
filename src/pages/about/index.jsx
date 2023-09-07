import Layout from "@/components/Layout";
import HeadingTitle from "@/components/partials/HeadingTitle";
import ListDot from "@/components/partials/ListDot";
import ListDotLine from "@/components/partials/ListDotLine";
import ListOn from "@/components/partials/ListOn";

export default function About() {
    return (
        <>
        <Layout pageTitle="About Me | Agung Prasetyo">
            <div>
                <section id="about-me" className="flex justify-between mb-2 px-6 py-6 lg:py-0 lg:p-0">
                    <div className="w-full lg:w-[70%]">
                        <HeadingTitle text="About Me" />
                        <h3 id="name"
                            className="text-teal-500 font-bold text-[20px] lg:text-2xl drop-shadow-xl py-0 lg:py-1">Agung Prasetyo</h3>
                        <div id="description" className="text-justify">
                            <p className="my-3">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, dolor?
                            </p>
                            <p className="my-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt quas quo maxime deleniti explicabo maiores nulla fugit magni et?
                            </p>
                            <p className="my-3">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ad totam alias numquam eum dolorem modi id qui tempore molestias nihil quo expedita, facere obcaecati natus ex voluptas neque! At.
                            </p>
                            <p className="my-3 mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eveniet rem doloribus veniam iste, pariatur saepe omnis animi est voluptatem inventore eius, laboriosam quae quia reiciendis nisi. Eius atque non, officia impedit numquam doloribus molestiae totam expedita deleniti veritatis eaque.
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex justify-center w-[30%] h-fit rounded-full">
                        <img 
                            src="/images/me.webp" 
                            alt="Foto Agung" 
                            width={190} 
                            height={190} 
                            className="bg-teal-400 rounded-full shadow-lg" 
                        />
                    </div>
                </section>
                <section id="education" className="mb-2 px-6 lg:p-0">
                    <HeadingTitle text="Education" />
                    {/* <div className="relative col-span-12 px-12 space-y-6 sm:col-span-9 mt-2">
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                            <ListOn 
                                title="University"
                                sub1="STIMIK Tunas Bangsa Banjarnegara"
                                sub2="Informatics"
                                date="2021 - Present" 
                            />
                        </div>
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1]">
                            <ListOn 
                                title="Senior High School"
                                sub1="SMA Muhammadiyah 1 Banjarnegara"
                                sub2="Matematic and Natural Science"
                                date="2018 - 2021" 
                            />
                        </div>
                        <div className="absolute -top-[17px] left-[9px] flex flex-wrap flex-col items-center w-fit">
                            <ListDot />
                            <ListDotLine />
                            <ListDot />
                        </div>
                    </div> */}
                    <ul class="steps steps-vertical">
                        <li class="step step-success mb-4">
                            <div className="flex flex-col text-left">
                                <ListOn 
                                    title="University"
                                    sub1="STIMIK Tunas Bangsa Banjarnegara"
                                    sub2="Informatics"
                                    date="2021 - Present" 
                                />
                            </div>
                        </li>
                        <li class="step step-success">
                            <div className="flex flex-col text-left">
                                <ListOn 
                                    title="Senior High School"
                                    sub1="SMA Muhammadiyah 1 Banjarnegara"
                                    sub2="Matematic and Natural Science"
                                    date="2018 - 2021" 
                                />
                            </div>
                        </li>
                    </ul>
                </section>
                {/* <section id="work-experience" className="">
                    <HeadingTitle text="Work Experience" />
                </section> */}
                <section id="resume" className="mb-16 px-6 lg:p-0">
                    <HeadingTitle text="Resume" />
                    <p className="mt-1">
                        You can read my resume <a href="#">here</a>.
                    </p>
                </section>
            </div>
        </Layout>
        </>
    )
}