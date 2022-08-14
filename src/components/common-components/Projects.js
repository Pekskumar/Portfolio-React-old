import Section_heading from "./Section_heading";
import Web_developement from '../../images/highlights/web-developement.png';
import hasWebsite from '../../images/projects/has-website.png';
import hasWebsiteReact from '../../images/projects/has-website-react.png';
import Cross_browser from '../../images/highlights/cross-browser.png';


function Projects() {
    return (
        <>
            <section className="projects gp bg-white">
                <div className="container">
                    <Section_heading
                        heading='My works'
                        subHeading='All Projects'
                    />
                    <div className="highlights-inner d-flex justify-space-between">
                        <div className="item bg-white text-center d-flex justify-space-between">

                            <a target="_blank" href="https://pekskumar.github.io/Has-Websites-Reactjs-js/" class="screen">
                                <img className="pro-react" src={hasWebsiteReact} />
                            </a>
                            <div className="project-details">
                                <h3 className="project-title">Project 1</h3> 
                                <ul>
                                    <li>React Js</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                </ul>
                            </div>

                        </div>

                        <div className="item bg-white text-center d-flex justify-space-between flex-raw-reverse">
                            <a target="_blank" href="https://pekskumar.github.io/Has-Websites/" class="screen">
                                <img  src={hasWebsite} />
                            </a>
                            <div className="project-details">
                                <h3 className="project-title">Project 2</h3> 
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Projects;

// import Section_heading from "./Section_heading"
// function Projects() {
//     return (
//         <>
//             <section className="highlights gp">
//                 <div className="container">
//                     <Section_heading
//                         heading='our expertise'
//                         subHeading='Lorem ipsum'
//                     />
//       </>
//     )
// }

// export default Projects;