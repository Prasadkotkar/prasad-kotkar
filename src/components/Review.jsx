/**
 * @copyright 2025 PrasadKotkar
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugin
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 *  Components
 */
import ReviewCard from "./ReviewCard";

/**
 * @returns Review Component
 */
const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: 'scrub-slide',
        start: '-200 80%',
        end: '400% 80%',
        scrub: true,
        // markers: true
      },
      x: '-1000'
    })
  });
  
    return (
        <section
          id="reviews"
          className="section overflow-hidden"
        >
          <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
              What our customers say
            </h2>

            <div className="scrub-slide flex items-stretch gap-3 w-fit">
              {reviews.map(({ content, name, imgSrc, company}, key) => (
                <ReviewCard
                key={key} 
                name={name}
                imgSrc={imgSrc}
                company={company}
                content={content}
                />
              ))}
            </div>
          </div>
        </section>
    )
}
const reviews = [
  // {
  //   content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
  //   name: 'Sophia Ramirez',
  //   imgSrc: '/images/people-1.jpg',
  //   company: 'PixelForge'
  // },
  // {
  //   content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
  //   name: 'Ethan Caldwell',
  //   imgSrc: '/images/people-2.jpg',
  //   company: 'NexaWave'
  // },
  // {
  //   content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
  //   name: 'Liam Bennett',
  //   imgSrc: '/images/people-3.jpg',
  //   company: 'CodeCraft'
  // },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    name: 'dolor sit',
    imgSrc: '/images/people-3.jpg',
    company: 'eiusmod'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Professional work! Great communication.',
    name: 'Mr. Sanket Kotkar',
    imgSrc: '/images/people-4.jpg',
    company: 'Addhira Fire Protection Pvt. Ltd.'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'elit, sed',
    imgSrc: '/images/people-5.jpg',
    company: 'incididunt'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    name: 'dolor sit',
    imgSrc: '/images/people-6.jpg',
    company: 'eiusmod'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'elit, sed',
    imgSrc: '/images/people-2.jpg',
    company: 'incididunt'
  },
  // {
  //   content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
  //   name: 'Ava Thompson',
  //   imgSrc: '/images/people-5.jpg',
  //   company: 'TechMosaic'
  // },
  // {
  //   content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
  //   name: 'Jonathan',
  //   imgSrc: '/images/people-6.jpg',
  //   company: 'Skyline Digital'
  // }
];
export default Review;