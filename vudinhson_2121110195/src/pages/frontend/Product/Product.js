import Footer from "../../../components/Public/Footer";
import Header from "../../../components/Public/Header";

function Product() {
    return ( 
        <>
        <Header/>
  <div className="breadcrumb-area">
    <div className="container">
      <div className="breadcrumb-content">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="active">Single Product</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Li's Breadcrumb Area End Here */}
  {/* content-wraper start */}
  <div className="content-wraper">
    <div className="container">
      <div className="row single-product-area">
        <div className="col-lg-5 col-md-6">
          {/* Product Details Left */}
          <div className="product-details-left">
            <div className="product-details-images slider-navigation-1">
              <div className="lg-image">
                <a
                  className="popup-img venobox vbox-item"
                  data-gall="myGallery"
                >
                  <img
                    src="images/product/large-size/1.jpg"
                    alt="product image"
                  />
                </a>
              </div>
            </div>
            <div className="product-details-thumbs slider-thumbs-1">
            </div>
          </div>
          {/*// Product Details Left */}
        </div>
        <div className="col-lg-7 col-md-6">
          <div className="product-details-view-content pt-60">
            <div className="product-info">
              <h2>Today is a good day Framed poster</h2>
              <span className="product-details-ref">Reference: demo_15</span>
              <div className="rating-box pt-20">
                <ul className="rating rating-with-review-item">
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li className="no-star">
                    <i className="fa fa-star-o" />
                  </li>
                  <li className="no-star">
                    <i className="fa fa-star-o" />
                  </li>
                  <li className="review-item">
                    <a href="#">Read Review</a>
                  </li>
                  <li className="review-item">
                    <a href="#">Write Review</a>
                  </li>
                </ul>
              </div>
              <div className="price-box pt-20">
                <span className="new-price new-price-2">$57.98</span>
              </div>
              <div className="product-desc">
                <p>
                  <span>
                    100% cotton double printed dress. Black and white striped
                    top and orange high waisted skater skirt bottom. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. quibusdam
                    corporis, earum facilis et nostrum dolorum accusamus
                    similique eveniet quia pariatur.
                  </span>
                </p>
              </div>
              <div className="product-variants">
                <div className="produt-variants-size">
                  <label>Dimension</label>
                  <select className="nice-select">
                    <option value={1} title="S" selected="selected">
                      40x60cm
                    </option>
                    <option value={2} title="M">
                      60x90cm
                    </option>
                    <option value={3} title="L">
                      80x120cm
                    </option>
                  </select>
                </div>
              </div>
              <div className="single-add-to-cart">
                <form action="#" className="cart-quantity">
                  <div className="quantity">
                    <label>Quantity</label>
                    <div className="cart-plus-minus">
                      <input
                        className="cart-plus-minus-box"
                        defaultValue={1}
                        type="text"
                      />
                      <div className="dec qtybutton">
                        <i className="fa fa-angle-down" />
                      </div>
                      <div className="inc qtybutton">
                        <i className="fa fa-angle-up" />
                      </div>
                    </div>
                  </div>
                  <button className="add-to-cart" type="submit">
                    Add to cart
                  </button>
                </form>
              </div>
              <div className="product-additional-info pt-25">
                <a className="wishlist-btn" href="wishlist.html">
                  <i className="fa fa-heart-o" />
                  Add to wishlist
                </a>
                <div className="product-social-sharing pt-25">
                  <ul>
                    <li className="facebook">
                      <a href="#">
                        <i className="fa fa-facebook" />
                        Facebook
                      </a>
                    </li>
                    <li className="twitter">
                      <a href="#">
                        <i className="fa fa-twitter" />
                        Twitter
                      </a>
                    </li>
                    <li className="google-plus">
                      <a href="#">
                        <i className="fa fa-google-plus" />
                        Google +
                      </a>
                    </li>
                    <li className="instagram">
                      <a href="#">
                        <i className="fa fa-instagram" />
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block-reassurance">
                <ul>
                  <li>
                    <div className="reassurance-item">
                      <div className="reassurance-icon">
                        <i className="fa fa-check-square-o" />
                      </div>
                      <p>
                        Security policy (edit with Customer reassurance module)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="reassurance-item">
                      <div className="reassurance-icon">
                        <i className="fa fa-truck" />
                      </div>
                      <p>
                        Delivery policy (edit with Customer reassurance module)
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="reassurance-item">
                      <div className="reassurance-icon">
                        <i className="fa fa-exchange" />
                      </div>
                      <p>
                        {" "}
                        Return policy (edit with Customer reassurance module)
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="product-area pt-35">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="li-product-tab">
            <ul className="nav li-product-menu">
              <li>
                <a className="active" data-toggle="tab" href="#description">
                  <span>Description</span>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#product-details">
                  <span>Product Details</span>
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#reviews">
                  <span>Reviews</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Begin Li's Tab Menu Content Area */}
        </div>
      </div>
      <div className="tab-content">
        <div id="description" className="tab-pane active show" role="tabpanel">
          <div className="product-description">
            <span>
              The best is yet to come! Give your walls a voice with a framed
              poster. This aesthethic, optimistic poster will look great in your
              desk or in an open-space office. Painted wooden frame with
              passe-partout for more depth.
            </span>
          </div>
        </div>
        <div id="product-details" className="tab-pane" role="tabpanel">
          <div className="product-details-manufacturer">
            <a href="#">
              <img
                src="images/product-details/1.jpg"
                alt="Product Manufacturer Image"
              />
            </a>
            <p>
              <span>Reference</span> demo_7
            </p>
            <p>
              <span>Reference</span> demo_7
            </p>
          </div>
        </div>
        <div id="reviews" className="tab-pane" role="tabpanel">
          <div className="product-reviews">
            <div className="product-details-comment-block">
              <div className="comment-review">
                <span>Grade</span>
                <ul className="rating">
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                  <li className="no-star">
                    <i className="fa fa-star-o" />
                  </li>
                  <li className="no-star">
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
              </div>
              <div className="comment-author-infos pt-25">
                <span>HTML 5</span>
                <em>01-12-18</em>
              </div>
              <div className="comment-details">
                <h4 className="title-block">Demo</h4>
                <p>Plaza</p>
              </div>
              <div className="review-btn">
                <a
                  className="review-links"
                  href="#"
                  data-toggle="modal"
                  data-target="#mymodal"
                >
                  Write Your Review!
                </a>
              </div>
              {/* Begin Quick View | Modal Area */}
              <div className="modal fade modal-wrapper" id="mymodal">
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-body">
                      <h3 className="review-page-title">Write Your Review</h3>
                      <div className="modal-inner-area row">
                        <div className="col-lg-6">
                          <div className="li-review-product">
                            <img
                              src="images/product/large-size/3.jpg"
                              alt="Li's Product"
                            />
                            <div className="li-review-product-desc">
                              <p className="li-product-name">
                                Today is a good day Framed poster
                              </p>
                              <p>
                                <span>
                                  Beach Camera Exclusive Bundle - Includes Two
                                  Samsung Radiant 360 R3 Wi-Fi Bluetooth
                                  Speakers. Fill The Entire Room With Exquisite
                                  Sound via Ring Radiator Technology. Stream And
                                  Control R3 Speakers Wirelessly With Your
                                  Smartphone. Sophisticated, Modern Design{" "}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="li-review-content">
                            {/* Begin Feedback Area */}
                            <div className="feedback-area">
                              <div className="feedback">
                                <h3 className="feedback-title">Our Feedback</h3>
                                <form action="#">
                                  <p className="your-opinion">
                                    <label>Your Rating</label>
                                    <span>
                                      <select className="star-rating">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                      </select>
                                    </span>
                                  </p>
                                  <p className="feedback-form">
                                    <label htmlFor="feedback">
                                      Your Review
                                    </label>
                                    <textarea
                                      id="feedback"
                                      name="comment"
                                      cols={45}
                                      rows={8}
                                      aria-required="true"
                                      defaultValue={""}
                                    />
                                  </p>
                                  <div className="feedback-input">
                                    <p className="feedback-form-author">
                                      <label htmlFor="author">
                                        Name<span className="required">*</span>
                                      </label>
                                      <input
                                        id="author"
                                        name="author"
                                        defaultValue=""
                                        size={30}
                                        aria-required="true"
                                        type="text"
                                      />
                                    </p>
                                    <p className="feedback-form-author feedback-form-email">
                                      <label htmlFor="email">
                                        Email<span className="required">*</span>
                                      </label>
                                      <input
                                        id="email"
                                        name="email"
                                        defaultValue=""
                                        size={30}
                                        aria-required="true"
                                        type="text"
                                      />
                                      <span className="required">
                                        <sub>*</sub> Required fields
                                      </span>
                                    </p>
                                    <div className="feedback-btn pb-15">
                                      <a
                                        href="#"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                      >
                                        Close
                                      </a>
                                      <a href="#">Submit</a>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            {/* Feedback Area End Here */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick View | Modal Area End Here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Product Area End Here */}
  {/* Begin Li's Laptop Product Area */}
  <section className="product-area li-laptop-product pt-30 pb-50">
    <div className="container">
      <div className="row">
        {/* Begin Li's Section Area */}
        <div className="col-lg-12">
          <div className="li-section-title">
            <h2>
              <span>15 other products in the same category:</span>
            </h2>
          </div>
          <div className="tab-content">
            <div id="li-new-product" className="tab-pane active show" role="tabpanel">
              <div className="row">
                {/* Product 1 */}
                <div className="col-lg-3">
                  <div className="single-product-wrap">
                    <div className="product-image">
                      <a href="/chi-tiet-san-pham">
                        <img
                          src="images/product/large-size/1.jpg"
                          alt="Li's Product Image"
                        />
                      </a>
                      <span className="sticker">New</span>
                    </div>
                    <div className="product_desc">
                      <div className="product_desc_info">
                        <div className="product-review">
                          <h5 className="manufacturer">
                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                          </h5>
                          <div className="rating-box">
                            <ul className="rating">
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li className="no-star">
                                <i className="fa fa-star-o" />
                              </li>
                              <li className="no-star">
                                <i className="fa fa-star-o" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <a className="product_name" href="single-product.html">
                            Accusantium dolorem1
                          </a>
                        </h4>
                        <div className="price-box">
                          <span className="new-price">$46.80</span>
                        </div>
                      </div>
                      <div className="add-actions">
                        <ul className="add-actions-link">
                          <li className="add-cart active">
                            <a href="#">Add to cart</a>
                          </li>
                          <li>
                            <a className="links-details" href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title="quick view"
                              className="quick-view-btn"
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Product 2 */}
                <div className="col-lg-3">
                  <div className="single-product-wrap">
                    <div className="product-image">
                      <a href="/chi-tiet-san-pham">
                        <img
                          src="images/product/large-size/2.jpg"
                          alt="Li's Product Image"
                        />
                      </a>
                      <span className="sticker">New</span>
                    </div>
                    <div className="product_desc">
                      <div className="product_desc_info">
                        <div className="product-review">
                          <h5 className="manufacturer">
                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                          </h5>
                          <div className="rating-box">
                            <ul className="rating">
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li className="no-star">
                                <i className="fa fa-star-o" />
                              </li>
                              <li className="no-star">
                                <i className="fa fa-star-o" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <a className="product_name" href="single-product.html">
                            Accusantium dolorem2
                          </a>
                        </h4>
                        <div className="price-box">
                          <span className="new-price">$55.00</span>
                        </div>
                      </div>
                      <div className="add-actions">
                        <ul className="add-actions-link">
                          <li className="add-cart active">
                            <a href="#">Add to cart</a>
                          </li>
                          <li>
                            <a className="links-details" href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title="quick view"
                              className="quick-view-btn"
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="single-product-wrap">
                    <div className="product-image">
                      <a href="/chi-tiet-san-pham">
                        <img
                          src="images/product/large-size/2.jpg"
                          alt="Li's Product Image"
                        />
                      </a>
                      <span className="sticker">New</span>
                    </div>
                    <div className="product_desc">
                      <div className="product_desc_info">
                        <div className="product-review">
                          <h5 className="manufacturer">
                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                          </h5>
                          <div className="rating-box">
                            <ul className="rating">
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li className="no-star">
                                <i className="fa fa-star-o" />
                              </li>
                              <li className="no-star">
                                <i className="fa fa-star-o" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <a className="product_name" href="single-product.html">
                            Accusantium dolorem2
                          </a>
                        </h4>
                        <div className="price-box">
                          <span className="new-price">$55.00</span>
                        </div>
                      </div>
                      <div className="add-actions">
                        <ul className="add-actions-link">
                          <li className="add-cart active">
                            <a href="#">Add to cart</a>
                          </li>
                          <li>
                            <a className="links-details" href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title="quick view"
                              className="quick-view-btn"
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="single-product-wrap">
                    <div className="product-image">
                      <a href="single-product.html">
                        <img
                          src="images/product/large-size/2.jpg"
                          alt="Li's Product Image"
                        />
                      </a>
                      <span className="sticker">New</span>
                    </div>
                    <div className="product_desc">
                      <div className="product_desc_info">
                        <div className="product-review">
                          <h5 className="manufacturer">
                            <a href="shop-left-sidebar.html">Graphic Corner</a>
                          </h5>
                          <div className="rating-box">
                            <ul className="rating">
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li>
                                <i className="fa fa-star-o" />
                              </li>
                              <li className="no-star">
                                <i className="fa fa-star-o" />
                              </li>
                              <li className="no-star">
                                <i className="fa fa-star-o" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          <a className="product_name" href="single-product.html">
                            Accusantium dolorem2
                          </a>
                        </h4>
                        <div className="price-box">
                          <span className="new-price">$55.00</span>
                        </div>
                      </div>
                      <div className="add-actions">
                        <ul className="add-actions-link">
                          <li className="add-cart active">
                            <a href="#">Add to cart</a>
                          </li>
                          <li>
                            <a className="links-details" href="wishlist.html">
                              <i className="fa fa-heart-o" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              title="quick view"
                              className="quick-view-btn"
                              data-toggle="modal"
                              data-target="#exampleModalCenter"
                            >
                              <i className="fa fa-eye" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Add more product columns as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</>

     );
}

export default Product;