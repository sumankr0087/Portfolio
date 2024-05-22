import Link from "next/link"
function Footer() {
  return (
    <div className="mt-20">
      <div className="flex flex-col bg-gray-800">
        <div className="flex flex-row gap-6 p-4 justify-center mr-10">
            <div className="bg-zinc-200 rounded-full">  
                <Link href='https://www.linkedin.com/in/suman-kumar-b0802a185/'>
                <img src="LinkedIn.png" alt="" className="h-10 p-2"/>
                </Link>
            </div>
            <div className="bg-zinc-200 rounded-full">  
                <Link href='https://github.com/sumankr0087'>
                <img src="GitHub.png" alt="" className="h-10 p-2"/>
                </Link>
            </div>
            <div className="bg-zinc-200 rounded-full">  
                <Link href='https://x.com/SumanKumar865'>
                <img src="Twitter.png" alt="" className="h-10 p-2"/>
                </Link>
            </div>
        </div>
        <div className="border-t border-gray-500 p-4 flex text-sm justify-center text-gray-400">
        © 2024 Suman. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
