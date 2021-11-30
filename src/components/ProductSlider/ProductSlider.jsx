import React from "react";
import Slider from "react-slick";
import "./ProductSlider.scss";

const ProductSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <header>
      <Slider {...settings}>
        <div className="product-slide">
          <div className="details">
            <div>
              <h2>PRODUCT</h2>
              <h1>ONE</h1>
            </div>
            <button className="btn">COMPRAR</button>
          </div>
          <div className="shape">
            <img src="/assets/shape1.svg" alt="shape" />
            <div className="price">
              <span className="currency">U$S</span>
              <p>
                <span>59</span>
                <span className="price-info">
                  <sup>.99</sup>
                  <sub>/ mes</sub>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="product-slide">
          <div className="details">
            <div>
              <h2>PRODUCT</h2>
              <h1>TWO</h1>
            </div>
            <button className="btn">COMPRAR</button>
          </div>
          <div className="shape">
            <img src="/assets/shape1.svg" alt="shape" />
            <div className="price">
              <span className="currency">U$S</span>
              <p>
                <span>99</span>
                <span className="price-info">
                  <sup>.50</sup>
                  <sub>/ mes</sub>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="product-slide">
          <div className="details">
            <div>
              <h2>PRODUCT</h2>
              <h1>THREE</h1>
            </div>
            <button className="btn">COMPRAR</button>
          </div>
          <div className="shape">
            <img src="/assets/shape1.svg" alt="shape" />
            <div className="price">
              <span className="currency">U$S</span>
              <p>
                <span>105</span>
                <span className="price-info">
                  <sup>.00</sup>
                  <sub>/ mes</sub>
                </span>
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </header>
  );
};

export default ProductSlider;
