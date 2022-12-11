import React from "react";
import resume from "../../Shared/SagorAhmed.pdf"

const Banner = () => {
  return (
    <section className="bg-primary text-secondary" id="home">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <h4 className="text-accent font-bold">HELLO, MY NAME IS</h4>
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
        Bashar Ahmed
			</h1>
			<p className="mt-6 mb-8 text-2xl sm:mb-12 text-accent ">
			I am a MERN Stack Developer.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded bg-neutral text-white">My Work</a>
				<a rel="noopener noreferrer" href={resume} download="resume" className="px-8 py-3 text-lg font-semibold border rounded border-neutral hover:bg-neutral hover:text-white transition ease-in-out delay-150">Download Resume</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://i.ibb.co/zH9QfVR/MERN-Stack-Development-Company.png"  alt="tech img"/>
		</div>
	</div>
</section>
  );
};

export default Banner;
