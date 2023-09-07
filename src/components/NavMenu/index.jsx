import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
    return (
        <>
        <div class="absolute top-0 drawer">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <label for="my-drawer" id="" className="lg:hidden fixed bottom-14 right-5 p-2 rounded-md bg-teal-500">
                    <Image src={'/images/icons/menu.svg'} height={28} width={28} />
                </label>
            </div> 
            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu absolute bottom-12 p-4 w-50 h-fit text-base-content">
                {/* <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li> */}
                <div id="headerMenu" className="flex flex-col w-[120px] z-99">
                    <Link href="/" className="font-bold px-5 py-2 bg-white text-gray-800 rounded-md shadow-md mb-3 transition hover:bg-gray-100">Home</Link>
                    <Link href="/about" className="font-bold px-4 py-2 bg-white text-black rounded-md shadow-md mb-3 transition hover:bg-gray-100">About</Link>
                    <Link href="/skills" className="font-bold px-4 py-2 bg-white text-black rounded-md shadow-md mb-3 transition hover:bg-gray-100">Skills</Link>
                    <Link href="/projects" className="font-bold px-4 py-2 bg-white text-black rounded-md shadow-md mb-3 transition hover:bg-gray-100">Projects</Link>
                    <Link href="https://agungpraz.hashnode.dev" className="font-bold px-4 py-2 bg-white text-black rounded-md shadow-md mb-3 transition hover:bg-gray-100" target="_blank">Blog</Link>
                </div>
                
                </ul>
            </div>
        </div>
        </>
    )
}