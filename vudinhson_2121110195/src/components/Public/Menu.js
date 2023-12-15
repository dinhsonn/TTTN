import React from 'react';
function Menu() {
  return (
    <>
      <div className="product-area pt-60 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="li-product-tab">
                <ul className="nav li-product-menu">
                  <li>
                    <a className="active" data-toggle="tab" href="#li-new-product">
                      <span>New Arrival</span>
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#li-bestseller-product">
                      <span>Bestseller</span>
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#li-featured-product">
                      <span>Featured Products</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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

              </div>
            </div>
          </div>
        </div>
        {/* Quickview*/}
        <div className="modal fade modal-wrapper" id="exampleModalCenter">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-inner-area row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              {/* Product Details Left */}
              <div className="product-details-left">
                <div className="product-details-images slider-navigation-1">
                  <div className="lg-image">
                    <img
                      src="images/product/large-size/1.jpg"
                      alt="product image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6 col-sm-6">
              <div className="product-details-view-content pt-60">
                <div className="product-info">
                  <h2>Today is a good day Framed poster</h2>
                  <span className="product-details-ref">
                    Reference: demo_15
                  </span>
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
                        100% cotton double printed dress. Black and white
                        striped top and orange high waisted skater skirt bottom.
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. quibusdam corporis, earum facilis et nostrum
                        dolorum accusamus similique eveniet quia pariatur.
                      </span>
                    </p>
                  </div>
                  <div className="product-variants">
                    <div className="produt-variants-size">
                      <label>Dimension</label>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
