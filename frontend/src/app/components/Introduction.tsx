function Introduction() {
    return (
        <div className="md:px-[8rem] px-[2rem] mt-40 flex">
            <div className="w-[40rem] items-center text-4xl font-medium">
                <p className="text-2xl font-medium mb-2 flex text-[#D9D9D9]">Hi <img src="Waving_Hand.png" className="h-[30px] ml-2" alt="" />, My name is</p>
                <h1 className="text-3xl font-semibold mb-2 text-[#D9D9D9]">Suman Kumar</h1>
                <div className="text-base font-normal mb-5 text-[#D9D9D9]">
                    Specialized in building optimised website using
                    Python, Django, Git, Vue.js, Nuxt.js, React.js, Next.js, Vuex, HTML, CSS, Tailwind.
                </div>
                <div className="text-base font-normal mb-8 text-[#D9D9D9]">
                    I am a professional Software Developer with 3+ years of experience.
                </div>

                <div>
                    <a href="/suman_resume.pdf" download="suman_resume.pdf" className="border border-blue-300 w-fit flex rounded-full px-4 py-2 text-base text-black font-normal bg-blue-300">
                        <img src="download.png" alt="Download icon" className="h-[14px] mt-1" /> 
                        <span className="ml-2">Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Introduction
