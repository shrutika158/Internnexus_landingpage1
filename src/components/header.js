// import logo from './logo.svg';
// import './App.css';
import image from './image1.png';

import img from './White.png';
import signup from './signup.jpeg';
import discover from './discover.jpeg'
import intern from './intern.jpeg'
import profile from './profile (1).jpeg';
import reward1 from './reward-1.png';
import reward2 from './reward-2.png';
import reward3 from './reward-3.png';
import reward4 from './reward-4.png';
import intern1 from './intern-1.png';
import intern2 from './intern-2.png';
import intern3 from './intern-3.png';
import intern4 from './intern-4.png';
import intern5 from './intern-5.png';
import intern6 from './intern-6.png';
import intern7 from './intern-7.png';
import intern8 from './intern-8.png';
import intern9 from './intern-9.png';
import intern10 from './intern-10.png';
import intern111 from './intern-111.png';
import intern12 from './intern-12.png';
import intern13 from './intern-13.png';
import tech1 from './tech-1.png';
import tech2 from './tech-2.png';
import tech3 from './tech-3.png';
import tech4 from './tech-4.png';
import tech5 from './tech-5.png';
import tech6 from './tech-6.png';
import tech7 from './tech-7.png';
import tech8 from './tech-8.png';
// import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




import './header.css';
function Header() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <a class="navbar-brand" href="#"><img height="70%" width="70%" src={img}></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>

              {/* <li class="nav-item">
          <a class="nav-link" href="#">Webinar</a>
        </li> */}

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Webinar</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Resources</a>
              </li>
              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
              {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            <form class="d-flex">
              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
              <button class="btn btn-outline-success" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>


      <div className="container-fluid back">
        <section className="about">
          <div >
            <img src={image} alt='image' className="about-image" width={"600px"} height={"400px"}></img>
          </div>
          <div className="about-section">
            <h1>From zero experience to your <span style={{ "color": "#06ddfa" }}>Dream job</span></h1>
            <p>Helping students and recent graduates start their career.
              Enabling skills development in a live environment, making students industry ready.</p>

          </div>
        </section>
      </div>
      <div className='heading-new'>
        <u><h2><span style={{ "color": "black" }}>How The </span>InternNexus <span style={{ "color": "black" }}>Works</span></h2></u>
      </div>

      <div class="row steps">
        <div class="card col-2 colorcard" style={{ "width": " 18rem;" }}>
          <img src={signup} class="card-img-top" alt="..." />
          <div class="card-body">
            <b><h5 class="card-title">Step 1- Registration</h5></b>
            <p class="card-text">Enroll in InternNexus and have your activity analyzed by AI to receive relevant content recommendations.</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>


        <div class="card col-2 colorcard" style={{ "width": " 18rem;" }}>
          <img src={discover} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Step 2- Activity</h5>
            <p class="card-text">InternNexus provides users with the opportunity to enroll in live webinars.Provides technical support as well.</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        <div class="card col-2 colorcard" style={{ "width": " 18rem;" }}>
          <img src={profile} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Step 3- Analyse</h5>
            <p class="card-text">Our AI-based system evaluates daily user activity and offers customized internship opportunities for immediate application..</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        <div class="card col-2 colorcard" style={{ "width": " 18rem;" }}>
          <img src={intern} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Step 4- internship opportunity</h5>
            <p class="card-text">InternNexus tracks your activity and AI-powered analysis provides insights to potential hiring companies after applying for an internship. .</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>
      <div className='heading-new'>
        <u><h2><span style={{ "color": "black" }}>Learn The Trending Technology</span> <span style={{ "color": "black" }}></span></h2></u>
      </div>
      <div class='row container'>
        <div class='col-lg-3 col-12'>
          <img src={tech1} class="card-img-tops" alt="..." height="100" width="150" />
        </div>


        <div class='col-lg-3 col-12'>
          <img src={tech2} class="card-img-tops" alt="..." height="100" width="150" />
        </div>


        <div class='col-lg-3 col-12'>
          <img src={tech3} class="card-img-tops" alt="..." height="100" width="150" />

        </div>

        <div class='col-lg-3 col-12'>
          <img src={tech4} class="card-img-tops" alt="..." height="120" width="150" />


        </div>
      </div>
      <div class='row container'>
        <div class='col-lg-3 col-12'>
          <img src={tech5} class="card-img-tops" alt="..." height="120" width="150" />
        </div>


        <div class='col-lg-3 col-12'>
          <img src={tech6} class="card-img-tops" alt="..." height="90" width="150" />
        </div>


        <div class='col-lg-3 col-12'>
          <img src={tech7} class="card-img-tops" alt="..." height="100" width="150" />

        </div>

        <div class='col-lg-3 col-12'>
          <img src={tech8} class="card-img-tops" alt="..." height="90" width="150" />


        </div>
      </div>


      <div className='heading-new'>
        <u><h2><span style={{ "color": "black" }}>Apply For Guide</span> <span style={{ "color": "black" }}></span></h2></u>
      </div>
      <div class='row container'>
        <div class='col-lg-3 col-12'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="IconChangeColor" height="60" width="60"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" id="mainIconPathAttribute" fill="blue"></path></svg>
          <h3>Work from anywhere</h3>
          <p>Embrace the freedom of working from anywhere and enjoy the benefits of a more flexible and fulfilling work-life balance.</p>
        </div>

        <div class='col-lg-3 col-12'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" id="mainIconPathAttribute" fill="blue"></path> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" id="mainIconPathAttribute" fill="blue"></path> </svg>
          <h3>Work in flexible hours</h3>
          <p>Enjoy the freedom of setting your own schedule and achieving a better work-life balance with the flexibility of working in flexible hours</p>
        </div>

        <div class='col-lg-3 col-12'>
          <svg width="60" height="60" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor"> <path d="M11 3C11 2.44772 10.5523 2 10 2C9.44771 2 9 2.44772 9 3V4C9 4.55228 9.44771 5 10 5C10.5523 5 11 4.55228 11 4V3Z" fill="blue" id="mainIconPathAttribute"></path> <path d="M15.6568 5.75731C16.0473 5.36678 16.0473 4.73362 15.6568 4.34309C15.2663 3.95257 14.6331 3.95257 14.2426 4.34309L13.5355 5.0502C13.145 5.44072 13.145 6.07389 13.5355 6.46441C13.926 6.85494 14.5592 6.85494 14.9497 6.46441L15.6568 5.75731Z" fill="blue" id="mainIconPathAttribute"></path> <path d="M18 10C18 10.5523 17.5523 11 17 11H16C15.4477 11 15 10.5523 15 10C15 9.44771 15.4477 9 16 9H17C17.5523 9 18 9.44771 18 10Z" fill="blue" id="mainIconPathAttribute"></path> <path d="M5.05019 6.46443C5.44071 6.85496 6.07388 6.85496 6.4644 6.46443C6.85493 6.07391 6.85493 5.44074 6.4644 5.05022L5.7573 4.34311C5.36677 3.95259 4.73361 3.95259 4.34308 4.34311C3.95256 4.73363 3.95256 5.3668 4.34308 5.75732L5.05019 6.46443Z" fill="blue" id="mainIconPathAttribute"></path> <path d="M5 10C5 10.5523 4.55228 11 4 11H3C2.44772 11 2 10.5523 2 10C2 9.44771 2.44772 9 3 9H4C4.55228 9 5 9.44771 5 10Z" fill="blue" id="mainIconPathAttribute"></path> <path d="M8 16V15H12V16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16Z" fill="blue" id="mainIconPathAttribute"></path> <path d="M12.0009 14C12.0155 13.6597 12.2076 13.3537 12.4768 13.1411C13.4046 12.4086 14 11.2738 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 11.2738 6.59545 12.4086 7.52319 13.1411C7.79241 13.3537 7.98451 13.6597 7.99911 14H12.0009Z" fill="blue" id="mainIconPathAttribute"></path> </svg>
          <h3>Nurture the Eco-Sytem</h3>
          <p>Have used Landwind to create functional websites</p>
        </div>

        <div class='col-lg-3 col-12'>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" id="mainIconPathAttribute" fill="blue"></path> </svg>
          <h3>Make your tech team</h3>
          <p>Build a high-performing tech team by identifying your needs, finding the right talent, and creating a supportive environment that encourages growth and success.</p>
        </div>
      </div>

      <div className='heading-new'>
        <u><h2><span style={{ "color": "black" }}>Our </span>Interns <span style={{ "color": "black" }}>Works With</span></h2></u>
      </div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={intern1} class="card-img-top" height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern2} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern3} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern4} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern5} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern6} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern7} class="card-img-top" alt="..." height="120" width="100" />
          </div>


          <div class="slide">
            <img src={intern8} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern9} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern10} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern111} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern12} class="card-img-top" alt="..." height="120" width="100" />
          </div>
          <div class="slide">
            <img src={intern13} class="card-img-top" alt="..." height="120" width="100" />
          </div>


        </div>
      </div>


      <div className='heading-new'>
        <u><h2><span style={{ "color": "black" }}>Rewards & Recognition</span> <span style={{ "color": "black" }}></span></h2></u>
      </div>
      <div class='row container'>
        <div class='col-lg-3 col-12'>
          <img src={reward1} class="card-img-top" alt="..." />
          <p>The CEO of InternNexus has been invited to share their expertise on "Technology-based Entrepreneurship" as a guest speaker at Dibrugarh University. This is an exciting opportunity to learn from a successful entrepreneur who has used technology to build a thriving business.</p>
        </div>


        <div class='col-lg-3 col-12'>
          <img src={reward2} class="card-img-top" alt="..." />
          <p>Great news! Internnexs has been selected as one of the 25 start-ups to be shortlisted for rent-free office space in Bihar's Start-Up Hub. This is a fantastic opportunity for the company to grow and expand its operations in a supportive and nurturing environment.</p>
        </div>


        <div class='col-lg-3 col-12'>
          <img src={reward3} class="card-img-top" alt="..." />
          <p>Internnexus, an innovative EdTech startup, has been recognized for its commitment to using technology to improve learning outcomes for students. The company has been nominated as a potential startup of the year 2021 by both the Bihar State government and industry experts.</p>

        </div>

        <div class='col-lg-3 col-12'>
          <img src={reward4} class="card-img-top" alt="..." />
          <p>Dibrugarh University invited Intern Nexus for the event titled “Rhapsody” which was held on 19 October 2019. Where Piyush Pandey Founder cum CTO of Intern Nexus delivered a session on “Technology-Based Entrepreneurship”.</p>


        </div>
      </div>


      <footer class="footer-section">
        <div class="container">
          <div class="footer-cta pt-5 pb-5">
            <div class="row"></div>
          </div>
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                  <img src={img} class="card-img-topp" alt="..." height="60" width="150"/>
                  </div>
                  <div class="footer-text">
                 
                    <p>
                      InternNexus is a rising platform for connecting students and
                      companies by providing internships to students As well as
                      consulting to the startups or companies for the technology
                      advancements with technical support in the form of resource
                      deployment or remote work.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h5>USEFUL LINKS</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h5>TERMS OF USE</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h5>OTHERS</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="#">User</a>
                    </li>
                    <li>
                      <a href="#">Guide</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 mb-30">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h5>SOCIAL MEDIA </h5>
                    <div class="footer-social--icons">
                      <div>
                        <FaFacebookF class="icons" />
                      </div>
                      <div>
                        <FaTwitter class="icons" />
                      </div>
                      <div>
                        <FaLinkedin class="icons" />
                      </div>
                      <div>
                        <FaInstagram class="icons" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="copyright-area">
            <div class="container">
              <div class="row">
                <div className='text-center'>
                  <div class="copyright-text">
                    <p>
                      &copy; 2023 TechIntelliverse Private Limited. All
                      rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </footer>
























    </div>
  );
}

export default Header;
