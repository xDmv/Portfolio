import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row m-3">
        <div className="col-4">
          <h1>Makushyn Dima</h1>
        </div>
        <div className="col-2"></div>
        <div className="col-6 border-start border-danger">
            <h2 className="mb-2">SUMMARY</h2>
            <figcaption>Thanks to my proposal for integrating Stripe into the mobile application, my client was able to increase profits by an additional 10-15% without changing the prices of their services. Due to my optimization of the client's website and the elimination of memory leaks, the site's performance improved by 30%.
            </figcaption>
        </div>
      </div>
        <div className="row">
            <h2 className="text-center">EMPLOYMENT EXPERIENCE</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Face IT (Web Development Agency) <br/> Senior JavaScript Full Stack Engineer
                        </button>
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Developed web applications using Angular (versions 5 to 17), React.js, and Angular
                                    Universal (SSR).
                                </li>
                                <li>Integrated various third-party services and libraries.</li>
                                <li>Built sleek and functional front-end interfaces.</li>
                                <li>Developed robust back-end systems with Node.js and Nest.js.</li>
                                <li>Designed and implemented user-friendly UIs.</li>
                                <li>Debugged production issues and implemented effective fixes.</li>
                                <li>Actively participated in meetings, contributing ideas to enhance projects.</li>
                                <li>Optimized applications for maximum speed and scalability.</li>
                                <li>Collaborated effectively with other developers and stakeholders.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Yfix group <br/> Middle full stack software developer
                        </button>
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Developed iOS mobile applications.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Qooors OÜ <br/> Junior full stack software developer
                        </button>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Utilized Angular 5/6.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            «Zaporizhstal» Steel Works <br/> Junior Software Engineer
                        </button>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                         data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Developed and implemented automation systems.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
