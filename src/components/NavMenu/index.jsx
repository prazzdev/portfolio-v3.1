import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
    return (
        <>
        <div id="" className="fixed bottom-14 right-5 p-2 rounded-md bg-teal-500">
            <Image src={'/images/icons/menu.svg'} height={28} width={28} />
        </div>
        </>
    )
}