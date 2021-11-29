import Slider from "react-slick";

const ProductSlider = () => {
  return (
    <header>
      <Slider
        dots={false}
        infinite={true}
        speed={700}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </header>
  );
};

export default Slider;
