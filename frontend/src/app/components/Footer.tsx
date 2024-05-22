'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <div className="flex z-10 fixed right-0 left-0 bottom-0 bg-gray-800 border-b border-gray-800">
      <div className="flex flex-col bg-gray-800 w-fill-available">
        <div className="flex flex-row gap-6 p-4 justify-center mr-10">
          <div className="bg-zinc-200 rounded-full">
            <Link target="_blank" href='https://www.linkedin.com/in/suman-kumar-b0802a185/'>
              <img src="LinkedIn.png" alt="LinkedIn" className="h-10 p-2" />
            </Link>
          </div>
          <div className="bg-zinc-200 rounded-full">
            <Link target="_blank" href='https://github.com/sumankr0087'>
              <img src="GitHub.png" alt="GitHub" className="h-10 p-2" />
            </Link>
          </div>
          <div className="bg-zinc-200 rounded-full">
            <Link target="_blank" href='https://x.com/SumanKumar865'>
              <img src="Twitter.png" alt="Twitter" className="h-10 p-2" />
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-500 p-4 flex text-sm justify-center text-gray-400">
          © {year} Suman. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
