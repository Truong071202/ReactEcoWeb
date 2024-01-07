import React, { useState } from "react";

import img_select from "../img/poduct/Product Image.png";
import img_select1 from "../img/poduct/caithia.jpg";
import img_select2 from "../img/poduct/20190406102910Hạt giống cải chip.jpg";
import img_select3 from "../img/poduct/145323.jpg";
import star_prd from "../img/poduct/Star 1.svg";
import leaf from "../img/poduct/Group 20.svg";
import social1 from "../img/Group 15.svg";
import social2 from "../img/poduct/instagram 1.svg";
import social3 from "../img/poduct/pinterest 1.svg";
import social4 from "../img/poduct/twitter 1.svg";
import tick from "../img/poduct/check 1.svg";
import { toast } from "react-toastify";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(img_select);
  const [quantityCart, setQuantityCart] = useState(0);
  const [addToCart, setAddToCart] = useState("");

  const handleAlertAddCart = () => {
    if (quantityCart > 0) {
      toast.success("Added to cart successfully");
    } else {
      toast.error("The number of product must be more than 0");
    }
  };

  const increaseQuantity = () => {
    setQuantityCart((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantityCart > 0) {
      setQuantityCart((prevQuantity) => prevQuantity - 1);
    } else {
      toast.error("The number must more than 0");
    }
  };

  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };
  return (
    <>
      <div className="container my-4">
        <div className="product-single">
          <div className="box-product row">
            <div className="col-md-6 d-flex">
              <div className="block-img-selected">
                <img
                  className="img-selected-prd"
                  alt=""
                  src={img_select}
                  onClick={() => handleImageClick(img_select)}
                />
                <img
                  className="img-selected-prd"
                  alt=""
                  src={img_select1}
                  onClick={() => handleImageClick(img_select1)}
                />
                <img
                  className="img-selected-prd"
                  alt=""
                  src={img_select2}
                  onClick={() => handleImageClick(img_select2)}
                />
                <img
                  className="img-selected-prd"
                  alt=""
                  src={img_select3}
                  onClick={() => handleImageClick(img_select3)}
                />
              </div>
              <div className="main-prd-img">
                <img className="img-prd" alt="" src={selectedImage} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-product">
                <div className="product-meta">
                  <div className="single-product-title">
                    <h1 className="product-title">Chinese Cabbage</h1>
                    <span className="in-stock">In Stock</span>
                  </div>
                  <div className="product-rating">
                    <div className="rating-review">
                      <div className="star-rating">
                        <img className="svg-star" alt="" src={star_prd} />
                        <img className="svg-star" alt="" src={star_prd} />
                        <img className="svg-star" alt="" src={star_prd} />
                        <img className="svg-star" alt="" src={star_prd} />
                        <img className="svg-star" alt="" src={star_prd} />
                      </div>
                      <span className="review-rating">4 reviews</span>
                    </div>
                    <span>•</span>
                    <div className="sku-prd">
                      <p className="title-sku">Sku:</p>
                      <p className="number-sku">2,51,594</p>
                    </div>
                  </div>
                  <div className="container-prd-price">
                    <span className="org-price">$48.00</span>
                    <span className="main-price">$17.28</span>
                    <span className="discount-main-prd">64% Off</span>
                  </div>
                </div>
                <hr className="product-meta-line" />
                <div className="description-product">
                  <div className="brand-social-prd">
                    <div className="brand-product">
                      <p className="title-brand-prd my-auto">Brand:</p>
                      <div className="icon-brand-prd">
                        <img src={leaf} alt="" className="img-icon-leaf" />
                        <span className="text-icon-leaf">farmary</span>
                      </div>
                    </div>
                    <div className="social-product">
                      <p className="m-auto share-social">Share item:</p>
                      <div className="icon-social-prd">
                        <img src={social2} alt="" className="social-svg-prd" />
                        <img src={social3} alt="" className="social-svg-prd" />
                        <img src={social4} alt="" className="social-svg-prd" />
                      </div>
                    </div>
                  </div>
                  <div className="block-caption-descript">
                    <p className="cation-des-product">
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Nulla nibh diam,
                      blandit vel consequat nec, ultrices et ipsum. Nulla varius
                      magna a consequat pulvinar.
                    </p>
                  </div>
                </div>
                <hr className="product-meta-line" />
                <div className="container-add-cart">
                  <div className="block-up-down">
                    <button className="down-cart" onClick={decreaseQuantity}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2.33398 7H11.6673"
                          stroke="#666666"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <p className="number-up-down my-auto">{quantityCart}</p>
                    <button className="up-cart" onClick={increaseQuantity}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2.33398 6.99998H11.6673M7.00065 2.33331V11.6666V2.33331Z"
                          stroke="#1A1A1A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <button
                    className="click-add-cart"
                    onClick={handleAlertAddCart}
                  >
                    <div className="btn-add-to-cart">
                      Add to cart
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M5.66667 7.33333H3.16667L1.5 16.5H16.5L14.8333 7.33333H12.3333M5.66667 7.33333V4.83333C5.66667 2.99239 7.15905 1.5 9 1.5V1.5C10.8409 1.5 12.3333 2.99238 12.3333 4.83333V7.33333M5.66667 7.33333H12.3333M5.66667 7.33333V9.83333M12.3333 7.33333V9.83333"
                          stroke="white"
                          stroke-width="1.3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div className="add-favorite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.9996 17.5451C-6.66672 8.33336 4.99993 -1.66664 9.9996 4.65674C14.9999 -1.66664 26.6666 8.33336 9.9996 17.5451Z"
                        stroke="#2C742F"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-info-product">
        <button className="btn-info-prd">Descriptions</button>
        <button className="btn-info-prd">Additional Information</button>
        <button className="btn-info-prd">Customer Feedback</button>
      </div>
      <div className="container py-4">
        <div className="section-text-info-prd row">
          <div className="col-md-6 left-info-text">
            <p className="text-des-product">
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
              posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
              vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet
              nisi porttitor vel. Etiam tincidunt metus vel dui interdum
              sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam
              mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla
              facilisi. Nam scelerisque vitae justo a convallis. Morbi urna
              ipsum, placerat quis commodo quis, egestas elementum leo. Donec
              convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla
              elit.
              <br />
              <br /> Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
              dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi
              viverra velit, pellentesque tristique neque mi eget nulla. Proin
              luctus elementum neque et pharetra.{" "}
            </p>
            <div className="ingredient-inf-prd">
              <div className="block-ingredient">
                <img className="check-ingredient" alt="" src={tick}></img>
                <p className="text-ingredient">
                  100 g of fresh leaves provides.
                </p>
              </div>
              <div className="block-ingredient">
                <img className="check-ingredient" alt="" src={tick}></img>
                <p className="text-ingredient">
                  Aliquam ac est at augue volutpat elementum.
                </p>
              </div>
              <div className="block-ingredient">
                <img className="check-ingredient" alt="" src={tick}></img>
                <p className="text-ingredient">
                  Quisque nec enim eget sapien molestie.
                </p>
              </div>
              <div className="block-ingredient">
                <img className="check-ingredient" alt="" src={tick}></img>
                <p className="text-ingredient">
                  Proin convallis odio volutpat finibus posuere.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IOrp93p-olQ?si=2lootHYK8g_AyTDx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
