import Link from "next/link"
function Header() {
    return (
        <div className="flex flex-row md:px-8 px-4 py-2 z-10 fixed right-0 left-0 top-0 bg-gray-800 border-b border-gray-800">
            <div className="grow">
                <img src="letter-s.gif" alt="Computer man" className="md:h-12 h-10"></img>
            </div>
            <div className="flex grow justify-end md:gap-5 gap-2 items-center">
                <div className="text-sm font-normal text-[#D9D9D9]"><Link href="/">Home</Link></div>
                <div className="text-sm font-normal text-[#D9D9D9]"><Link href="/about">About Me</Link></div>
                <div className="text-sm font-normal text-[#D9D9D9]">
                    <Link href="/tech-stack">Tech Stack</Link></div>
                    <div className="text-sm  font-normal text-[#D9D9D9]">
                    <Link href="/project">Project</Link></div>
                <div className="text-sm font-normal text-[#D9D9D9]">
                    <Link href="/contact">Contact Me</Link></div>
            </div>
        </div>
    )
}

export default Header
