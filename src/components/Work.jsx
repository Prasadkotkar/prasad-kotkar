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
import ProjectCard from "./ProjctCard";

/**
 * @returns Work component
 */
const Work = () => {
    return (
        <section 
        id="work" 
        className="section"
        >
            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    My Portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink },
                    key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
const works = [
  // {
  //   imgSrc: '/images/project-1.jpg',
  //   title: 'Full stack music app',
  //   tags: ['API', 'MVC', 'Development'],
  //   projectLink: 'https://musify-5al0.onrender.com/'
  // },
  // {
  //   imgSrc: '/images/project-2.jpg',
  //   title: 'Free stock photo app',
  //   tags: ['API', 'SPA'],
  //   projectLink: 'https://pixstock-official.vercel.app/'
  // },
  
  {
    imgSrc: '/images/project-3.jpg',
    title: 'Addhirafire.com',
    tags: ['Web-design', 'Development', 'Live'],
    projectLink: 'https://addhirafire.com'
  },
  {
    imgSrc: '/images/project-6.jpg',
    title: 'Personal portfolio',
    tags: ['Web-design', 'Development', 'Live'],
    projectLink: 'https://github.com/Prasadkotkar/prasad-kotkar'
  },
  // {
  //   imgSrc: '/images/project-4.jpg',
  //   title: 'Real state website',
  //   tags: ['Web-design', 'Development'],
  //   projectLink: 'https://github.com/codewithsadee-org/wealthome'
  // },
  {
    imgSrc: '/images/project-5.jpg',
    title: 'ShopNexGen eCommerce webapp',
    tags: ['eCommerce', 'Development', 'Demo', 'Live'],
    projectLink: 'https://github.com/Prasadkotkar/shopnexgen-ui'
  }
];
export default Work;