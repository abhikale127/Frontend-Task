import Carousel from "react-multi-carousel";
import Img_Card1 from "../../Assets/Img_Card1.png";
import Img_Card3 from "../../Assets/Img_Card3.png";
import Img_Card2 from "../../Assets/Img_Card2.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  <div className="Carousel_Image">
    <img className="copic" src={Img_Card1} alt="Img_Cards" />
    <div class="middle">
      <div class="text">GEORGIA LAMBROU RESIDENCE</div>
    </div>
  </div>,
  <div className="Carousel_Image">
    <img className="copic" src={Img_Card2} alt="Img_Cards" />
    <div class="middle">
      <div class="text">GEORGIA LAMBROU RESIDENCE</div>
    </div>
  </div>,
  <div className="Carousel_Image">
    <img className="copic" src={Img_Card3} alt="Img_Cards" />
    <div class="middle">
      <div class="text">GEORGIA LAMBROU RESIDENCE</div>
    </div>
  </div>,
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      arrows={false}
      autoPlay={true}
    >
      {images.slice(0, 5).map((image) => {
        return images.map((Img_Card) => {
          return Img_Card;
        });
      })}
    </Carousel>
  );
};

export default Simple;
