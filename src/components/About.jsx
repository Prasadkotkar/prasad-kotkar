/**
 * @copyright 2025 PrasadKotkar
 * @license Apache-2.0
 */

/**
 * Node modules
 */

/**
 *  Components
 */

/**
 * @returns About component
 */
const About = () => {
    return (
        <section 
        id="about"        
        className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Prasad, a Full Stack Developer and DevOps Enthusiast passionate about building modern, scalable, and high-performance web applications. With hands-on experience in React, Spring Boot, and cloud platforms, I blend intuitive design with robust functionality. From dynamic e-commerce platforms to cloud-deployed services, I transform ideas into reliable digital solutions that are fast, secure, and production-ready.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                    <img 
                    src="/images/logo.png" 
                    alt="Logo" 
                    width={60}
                    height={60}
                    className="ml-auto md:w-[40px] md:h-[40px]" 
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}
const aboutItems = [
  {
    label: 'Project done',
    number: 3
  },
  {
    label: 'Years of experience',
    number: 1.5
  }
];
export default About;