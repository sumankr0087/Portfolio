import Link from "next/link"

function Project() {
  return (
    <div className="md:px-[8rem] px-[2rem] mt-20">
      <div className="">
        <h1 className="flex justify-center text-3xl font-semibold mb-2 text-[#D9D9D9]">
          Projects
        </h1>
        <p className="flex justify-center text-base text-[#D9D9D9]">Things I've built so far</p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4 mt-8">
        <div className="bg-gray-800 rounded ">
          <img src="weather.png" alt="" className='rounded'/>
          <div className='p-3 flex flex-col justify-center items-center gap-4'>
          <div className="text-base font-medium text-[#D9D9D9]">Weather App</div>
          <p className='text-sm font-normal text-[#D9D9D9]'>ReactJS Weather Application where one can search for places they want the weather data for.</p>
          <div className='text-sm font-normal text-[#D9D9D9]'><span className='text-sm font-medium'>Tech Stack : </span>React JS, JavaScript, Tailwind CSS</div>
          <div>
            <Link href="https://github.com/sumankr0087/weatherapp" target="_blank" className='flex gap-2'>
            <img src="GitHub.png" alt=""  className='h-[16px] bg-white rounded-full'/>
            <span className='text-sm font-normal text-[#D9D9D9] underline'>View Code</span>
            </Link>
          </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded ">
          <img src="patient.jpeg" alt="" className="rounded" />
          <div className='p-3 flex flex-col justify-center items-center gap-4'>
          <div className="text-base font-medium text-[#D9D9D9]">Patient Appointment System</div>
          <p className='text-sm font-normal text-[#D9D9D9]'>A system where patients can be added and appointments can be scheduled with notes.</p>
          <div className='text-sm font-normal text-[#D9D9D9]'><span className='text-sm font-medium'>Tech Stack : </span>FastAPI, React JS, SQL, Tailwind CSS</div>
          <div>
            <Link href="https://github.com/sumankr0087/Patient-appointment-system" target="_blank" className='flex gap-2'>
            <img src="GitHub.png" alt=""  className='h-[16px] bg-white rounded-full'/>
            <span className='text-sm font-normal text-[#D9D9D9] underline'>View Code</span>
            </Link>
          </div>
          </div>
          
        </div>
        <div className="bg-gray-800 rounded">
          <img src="login.png" alt="" className="rounded" />
          <div className='p-3 flex flex-col justify-center items-center gap-4'>
          <div className="text-base font-medium text-[#D9D9D9]">User Authentication</div>
          <p className='text-sm font-normal text-[#D9D9D9]'>NextJs Application where user can Signup and Login.</p>
          <div className='text-sm font-normal text-[#D9D9D9]'><span className='text-sm font-medium'>Tech Stack : </span>NextJs, TypeScript, Tailwind CSS, MongoDB</div>
          <div>
            <Link href="https://github.com/sumankr0087/nextjsauth" target="_blank" className='flex gap-2'>
            <img src="GitHub.png" alt=""  className='h-[16px] bg-white rounded-full'/>
            <span className='text-sm font-normal text-[#D9D9D9] underline'>View Code</span>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
