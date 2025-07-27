/**
 * @copyright 2025 PrasadKotkar
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import ReactLenis from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

/**
 * Register gsap plugin
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// eslint-disable-next-line no-unused-vars
import { element } from "prop-types";

/**
 * @returns Work component
 */
const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up')

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
          // markers: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
          <Hero />
          <About />
          <Skills />
          <Work />
          <Review />
          <Contact />
          <Footer />
          <SpeedInsights />

      </main>
    </ReactLenis>
  )
}

export default App;