function About() {
  return (
    <div className="md:px-[8rem] px-[2rem] mt-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-[#D9D9D9]">About Me</h1>
        <div className="grid gap-6 mt-6 justify-center text-center items-center">
          <div className="">
          <p className="text-base font-normal text-[#D9D9D9] mb-2">I have 3 years of professional experience software developer. A passionate front-end developer and back-end enthusiast.</p>
          <p className="text-base font-normal text-[#D9D9D9] mb-2">I am working on Frontend technologies(HTML5, CSS3, Javascript, React.js, Vue.js, Nuxt.js).</p>
          <p className="text-base font-normal text-[#D9D9D9] mb-2">Backend technologies(Python, Django, FastAPI).</p>
          </div>
          
          {/* <img src="suman.jpeg" alt="" className="md:h-[25rem] h-[15rem] w-[100%]"/> */}
        </div>

      </div>
    </div>
  )
}

export default About
