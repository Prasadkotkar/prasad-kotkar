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
import SkillCard from "./SkillCard";

/**
 * @returns Skills component
 */
const Skills = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                            <SkillCard 
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"

                            />
                        ))
                    }
                </div>


            </div>
        </section>
    )

}
// const skillItem = [
//   {
//     imgSrc: '/images/figma.svg',
//     label: 'Figma',
//     desc: 'Design tool'
//   },
//   {
//     imgSrc: '/images/figma.svg',
//     label: 'JAVA',
//     desc: 'Programming Language'
//   },
//   {
//     imgSrc: '/images/figma.svg',
//     label: 'MS.NET',
//     desc: 'Microsoft Framework'
//   },
//   {
//     imgSrc: '/images/figma.svg',
//     label: 'Spring Boot',
//     desc: 'Java Framework'
//   },
//   {
//     imgSrc: '/images/figma.svg',
//     label: 'Spring Security',
//     desc: 'Authentication & AuthZ'
//   },
//   {
//     imgSrc: '/images/figma.svg',
//     label: 'RESTful APIs',
//     desc: 'Communication Protocol'
//   },
//   {
//     imgSrc: '/images/figma.svg',
//     label: 'Hibernate',
//     desc: 'ORM Framework'
//   },
//   {
//     imgSrc: '/images/react.svg',
//     label: 'React',
//     desc: 'UI Framework'
//   },
//   {
//     imgSrc: '/images/figma.svg',
//     label: 'Redux',
//     desc: 'State Management'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'TailwindCSS',
//     desc: 'User Interface'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'GraphQL',
//     desc: 'API Query Language'
//   },
//   {
//     imgSrc: '/images/javascript.svg',
//     label: 'JavaScript',
//     desc: 'Interaction'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'Docker',
//     desc: 'Containerization Tool'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'Kubernetes',
//     desc: 'Orchestration Tool'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'Git/GitHub',
//     desc: 'Version Control'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'AWS',
//     desc: 'Cloud Services'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'Jenkins',
//     desc: 'CI/CD Tool'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'Postman',
//     desc: 'API Testing'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'Swagger',
//     desc: 'API Documentation'
//   },
//   {
//     imgSrc: '/images/tailwindcss.svg',
//     label: 'Linux',
//     desc: 'Environment'
//   },



//   {
//     imgSrc: '/images/css3.svg',
//     label: 'IntelliJ IDEA',
//     desc: 'Java IDE'
//   },
//    {
//     imgSrc: '/images/css3.svg',
//     label: 'VS Code',
//     desc: 'Code Editor'
//   },
//   {
//     imgSrc: '/images/mongodb.svg',
//     label: 'MongoDB',
//     desc: 'Database'
//   },
//   {
//     imgSrc: '/images/mongodb.svg',
//     label: 'MySQK',
//     desc: 'Database'
//   },

  
// ];
const skillItem = [
  // Design Tool
  // {
  //   imgSrc: '/images/figma.svg',
  //   label: 'Figma',
  //   desc: 'Design Tool'
  // },
  {
    imgSrc: '/images/java.svg',
    label: 'Java',
    desc: 'Backend Language'
  },
  {
    imgSrc: '/images/springboot.svg',
    label: 'Spring Boot',
    desc: 'Java Framework'
  },
  {
    imgSrc: '/images/springsecurity.svg',
    label: 'Spring Security',
    desc: 'Authentication & AuthZ'
  },
  {
    imgSrc: '/images/hibernate.svg',
    label: 'Hibernate',
    desc: 'ORM Framework'
  },
  {
    imgSrc: '/images/RestAPI.svg',
    label: 'RESTful APIs',
    desc: 'Communication Protocol'
  },
  {
    imgSrc: '/images/msnet.svg',
    label: 'MS.NET',
    desc: 'Microsoft Framework'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Frontend Language'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'UI Framework'
  },
  {
    imgSrc: '/images/redux.svg',
    label: 'Redux',
    desc: 'State Management'
  },
  
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'Tailwind CSS',
    desc: 'CSS Framework'
  },
  {
    imgSrc: '/images/graphql.svg',
    label: 'GraphQL',
    desc: 'API Query Language'
  },
  {
    imgSrc: '/images/github.svg',
    label: 'GitHub',
    desc: 'Version Control'
  },
  {
    imgSrc: '/images/docker.svg',
    label: 'Docker',
    desc: 'Containerization Tool'
  },
  {
    imgSrc: '/images/kubernetes.svg',
    label: 'Kubernetes',
    desc: 'Orchestration Tool'
  },
  {
    imgSrc: '/images/jenkins.svg',
    label: 'Jenkins',
    desc: 'CI/CD Tool'
  },
  // {
  //   imgSrc: '/images/aws.svg',
  //   label: 'AWS',
  //   desc: 'Cloud Services'
  // },
  {
    imgSrc: '/images/mysql.svg',
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/swagger.svg',
    label: 'Swagger',
    desc: 'API Documentation'
  },
  {
    imgSrc: '/images/postman.svg',
    label: 'Postman',
    desc: 'API Testing'
  },
  {
    imgSrc: '/images/intellij.svg',
    label: 'IntelliJ IDEA',
    desc: 'Java IDE'
  },
  {
    imgSrc: '/images/vscode.svg',
    label: 'VS Code',
    desc: 'Code Editor'
  },
  {
    imgSrc: '/images/linux.svg',
    label: 'Linux',
    desc: 'Environment'
  },

];

export default Skills;