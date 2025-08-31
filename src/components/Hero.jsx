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
import { ButtonPrimary, ButtonOutline } from "./Button";


/**
 * @returns Hero component
 */
const Hero = () => {
    return (
        <section 
        id="home"
        className="pt-28 lg:pt-36"
        >
            <div className="container lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className="flext items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img 
                            src="/images/avatar-1.jpg" 
                            width={40}
                            height={40}
                            alt="Prasad Kotkar portrait"
                            className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb:10">
                        Crafting full-stack web solutions with robust backend architecture, sleek frontend design, and cloud-ready deployment {/* — turning ideas into performant, future-proof digital experiences. */}
                    </h2>

                    <div className="flex items-center gap-3 ">
                        <ButtonPrimary 
                            href="/images/Full stack dev CV.pdf"
                            label="Download CV"
                            icon="download"
                            target="_blank"
                            

                        
                        />

                        <ButtonOutline 
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>


                </div>   

                <div className="hidden lg:block">
                    <figure className="w-full max-x-[480px} mask-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400 to-65% rounded-[65px] overflow-hidden">
                        <img 
                        src="/images/hero-banner.png" 
                        width={656}
                        height={800}
                        alt="Prasad Kotkar" 
                        className="w-full" 
                        />
                    </figure>
                </div>

            </div>

        </section>
        



    )

}
export default Hero;