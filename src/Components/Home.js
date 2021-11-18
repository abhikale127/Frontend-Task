import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import Card1 from "../Assets/Card1.png";
import Card2 from "../Assets/Card2.png";
import Card3 from "../Assets/Card3.png";
import Card4 from "../Assets/Card4.png";
import Card5 from "../Assets/Card5.png";
import Card6 from "../Assets/Card6.png";
import Index from "./Image_Carousel/Img_Card_Carousel";
import image2 from "../Assets/clients/image 2.png";
import image3 from "../Assets/clients/image 3.png";
import image4 from "../Assets/clients/image 4.png";
import image5 from "../Assets/clients/image 5.png";
import image6 from "../Assets/clients/image 6.png";
import image7 from "../Assets/clients/image 7.png";
import image8 from "../Assets/clients/image 8.png";
import image9 from "../Assets/clients/image 9.png";
import image10 from "../Assets/clients/image 10.png";
import image11 from "../Assets/clients/image 11.png";
import image12 from "../Assets/clients/image 12.png";
import image13 from "../Assets/clients/image 13.png";
import image14 from "../Assets/clients/image 14.png";
import image15 from "../Assets/clients/image 15.png";
import image16 from "../Assets/clients/image 16.png";
import image17 from "../Assets/clients/image 17.png";
import image18 from "../Assets/clients/image 18.png";
import image19 from "../Assets/clients/image 19.png";
import Img_Card1 from "../Assets/Img_Card1.png";
import Img_Card3 from "../Assets/Img_Card3.png";
import Img_Card2 from "../Assets/Img_Card2.png";

function Home() {
  return (
    <div>
      <Banner />
      <div>
        <div className="Consulting" id="Consulting">
          <h1>C.A.S Consulting Ltd</h1>
          <p className="Consulting_p">
            {" "}
            <b>C.A.S Consulting Ltd</b> is an independent engineering
            consultancy office established in 2012 specializing in Electrical,
            Mechanical and Energy Building Services.{" "}
          </p>
         <p2> &gt; About us</p2> 
        </div>
        <div className="Engineering_Sectors" id="Engineering_Sectors">
          <h1>Engineering Sectors</h1>
          <div className="Sector_Cards">
            <Card
              Card_Image={Card1}
              Card_Heading="Electrical Installation Design"
            />
            <Card
              Card_Image={Card2}
              Card_Heading="Electrical Inspection & Testing"
            />
            <Card Card_Image={Card3} Card_Heading="Lighting Design" />
          </div>
          <div className="Sector_Cards">
            <Card
              Card_Image={Card4}
              Card_Heading="Photovoltaic Design & Installation"
            />
            <Card
              Card_Image={Card5}
              Card_Heading="Energy Performance Certificates"
            />
            <Card
              Card_Image={Card6}
              Card_Heading="Electrical Equipment Testing (PAT)"
            />
          </div>
          <p2>&gt; Engineering Sectors</p2>
        </div>
        <div className="projects" id="projects">
          <h1 className="project_text">Our Projects</h1>
          <div className="carousel_project">
            <Index />
          </div>
          <div className="project_Images">
            <div className="Carousel_Image">
              <img className="copic" src={Img_Card1} alt="Img_Cards" />
              <div class="middle">
                <div class="text">GEORGIA LAMBROU RESIDENCE</div>
              </div>
            </div>
            <div className="Carousel_Image">
              <img className="copic" src={Img_Card2} alt="Img_Cards" />
              <div class="middle">
                <div class="text">GEORGIA LAMBROU RESIDENCE</div>
              </div>
            </div>
            <div className="Carousel_Image">
              <img className="copic" src={Img_Card3} alt="Img_Cards" />
              <div class="middle">
                <div class="text">GEORGIA LAMBROU RESIDENCE</div>
              </div>
            </div>
          </div>
          <p2 className="project_text_P"> &gt; Our Projects</p2>
        </div>
        <div className="Our_Clients" id="Our_Clients">
          <h1 className="project_text">Our Clients</h1>
          <div className="clients_Images_line">
            <img className="clients-Image" src={image2} alt="clients" />
            <img className="clients-Image" src={image3} alt="clients" />
            <img className="clients-Image" src={image4} alt="clients" />
            <img className="clients-Image" src={image5} alt="clients" />
            <img className="clients-Image" src={image6} alt="clients" />
            <img className="clients-Image" src={image7} alt="clients" />
          </div>
          <div className="clients_Images_line">
            <img className="clients-Image" src={image8} alt="clients" />
            <img className="clients-Image" src={image9} alt="clients" />
            <img className="clients-Image" src={image10} alt="clients" />
            <img className="clients-Image" src={image11} alt="clients" />
            <img className="clients-Image" src={image12} alt="clients" />
            <img className="clients-Image" src={image13} alt="clients" />
          </div>
          <h1 className="project_text">We are Members of</h1>
          <div className="clients_Images_line">
            <img className="clients-Image" src={image14} alt="clients" />
            <img className="clients-Image" src={image15} alt="clients" />
            <img className="clients-Image" src={image16} alt="clients" />
            <img className="clients-Image" src={image17} alt="clients" />
            <img className="clients-Image" src={image18} alt="clients" />
            <img className="clients-Image" src={image19} alt="clients" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
