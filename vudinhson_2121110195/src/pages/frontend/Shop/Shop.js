import Footer from "../../../components/Public/Footer";
import Header from "../../../components/Public/Header";

function Shop() {
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
          <li className="active">Shop List Left Sidebar</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="content-wraper pt-60 pb-60">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 order-1 order-lg-2">
          {/* Begin Li's Banner Area */}
          <div className="single-banner shop-page-banner">
            <a href="#">
              <img src="images/bg-banner/2.jpg" alt="Li's Static Banner" />
            </a>
          </div>
          {/* Li's Banner Area End Here */}
          {/* shop-top-bar start */}
          <div className="shop-top-bar mt-30">
            <div className="shop-bar-inner">
              <div className="product-view-mode">
                <ul className="nav shop-item-filter-list" role="tablist">
                  <li role="presentation">
                    <a
                      data-toggle="tab"
                      role="tab"
                      aria-controls="grid-view"
                      href="#grid-view"
                    >
                      <i className="fa fa-th" />
                    </a>
                  </li>
                  <li className="active" role="presentation">
                    <a
                      aria-selected="true"
                      className="active show"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="list-view"
                      href="#list-view"
                    >
                      <i className="fa fa-th-list" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="toolbar-amount">
                <span>Showing 1 to 9 of 15</span>
              </div>
            </div>
            {/* product-select-box start */}
            <div className="product-select-box">
              <div className="product-short">
                <p>Sort By:</p>
                <select className="nice-select">
                  <option value="trending">Relevance</option>
                  <option value="sales">Name (A - Z)</option>
                  <option value="sales">Name (Z - A)</option>
                  <option value="rating">Price (Low &gt; High)</option>
                  <option value="date">Rating (Lowest)</option>
                  <option value="price-asc">Model (A - Z)</option>
                  <option value="price-asc">Model (Z - A)</option>
                </select>
              </div>
            </div>
            {/* product-select-box end */}
          </div>
          {/* shop-top-bar end */}
          {/* shop-products-wrapper start */}
          <div className="shop-products-wrapper">
            <div className="tab-content">
              <div id="grid-view" className="tab-pane fade" role="tabpanel">
                <div className="product-area shop-product-area">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 mt-40">
                      {/* single-product-wrap start */}
                      <div className="single-product-wrap">
                        <div className="product-image">
                          <a href="single-product.html">
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
                                <a href="product-details.html">
                                  Graphic Corner
                                </a>
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
                              <a
                                className="product_name"
                                href="single-product.html"
                              >
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
                                <a href="shopping-cart.html">Add to cart</a>
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
                              <li>
                                <a
                                  className="links-details"
                                  href="wishlist.html"
                                >
                                  <i className="fa fa-heart-o" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mt-40">
                      {/* single-product-wrap start */}
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
                                <a href="product-details.html">
                                  Graphic Corner
                                </a>
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
                              <a
                                className="product_name"
                                href="single-product.html"
                              >
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
                                <a href="shopping-cart.html">Add to cart</a>
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
                              <li>
                                <a
                                  className="links-details"
                                  href="wishlist.html"
                                >
                                  <i className="fa fa-heart-o" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* single-product-wrap end */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="list-view"
                className="tab-pane fade product-list-view active show"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col">
                    <div className="row product-layout-list">
                      <div className="col-lg-3 col-md-5 ">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img
                              src="images/product/large-size/12.jpg"
                              alt="Li's Product Image"
                            />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-7">
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="product-details.html">
                                  Graphic Corner
                                </a>
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
                              <a
                                className="product_name"
                                href="single-product.html"
                              >
                                Hummingbird printed t-shirt
                              </a>
                            </h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                            <p>
                              Beach Camera Exclusive Bundle - Includes Two
                              Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers.
                              Fill The Entire Room With Exquisite Sound via Ring
                              Radiator Technology. Stream And Control R3
                              Speakers Wirelessly With Your Smartphone.
                              Sophisticated, Modern Desig
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="shop-add-action mb-xs-30">
                          <ul className="add-actions-link">
                            <li className="add-cart">
                              <a href="#">Add to cart</a>
                            </li>
                            <li className="wishlist">
                              <a href="wishlist.html">
                                <i className="fa fa-heart-o" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a
                                className="quick-view"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                href="#"
                              >
                                <i className="fa fa-eye" />
                                Quick view
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row product-layout-list">
                      <div className="col-lg-3 col-md-5 ">
                        <div className="product-image">
                          <a href="single-product.html">
                            <img
                              src="images/product/large-size/6.jpg"
                              alt="Li's Product Image"
                            />
                          </a>
                          <span className="sticker">New</span>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-7">
                        <div className="product_desc">
                          <div className="product_desc_info">
                            <div className="product-review">
                              <h5 className="manufacturer">
                                <a href="product-details.html">
                                  Graphic Corner
                                </a>
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
                              <a
                                className="product_name"
                                href="single-product.html"
                              >
                                Hummingbird printed t-shirt
                              </a>
                            </h4>
                            <div className="price-box">
                              <span className="new-price">$46.80</span>
                            </div>
                            <p>
                              Beach Camera Exclusive Bundle - Includes Two
                              Samsung Radiant 360 R3 Wi-Fi Bluetooth Speakers.
                              Fill The Entire Room With Exquisite Sound via Ring
                              Radiator Technology. Stream And Control R3
                              Speakers Wirelessly With Your Smartphone.
                              Sophisticated, Modern Desig
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="shop-add-action mb-xs-30">
                          <ul className="add-actions-link">
                            <li className="add-cart">
                              <a href="#">Add to cart</a>
                            </li>
                            <li className="wishlist">
                              <a href="wishlist.html">
                                <i className="fa fa-heart-o" />
                                Add to wishlist
                              </a>
                            </li>
                            <li>
                              <a
                                className="quick-view"
                                data-toggle="modal"
                                data-target="#exampleModalCenter"
                                href="#"
                              >
                                <i className="fa fa-eye" />
                                Quick view
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="paginatoin-area">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <p>Showing 1-12 of 13 item(s)</p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ul className="pagination-box">
                      <li>
                        <a href="#" className="Previous">
                          <i className="fa fa-chevron-left" /> Previous
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#" className="Next">
                          {" "}
                          Next <i className="fa fa-chevron-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shop-products-wrapper end */}
        </div>
        <div className="col-lg-3 order-2 order-lg-1">
          {/*sidebar-categores-box start  */}
          <div className="sidebar-categores-box mt-sm-30 mt-xs-30">
            <div className="sidebar-title">
              <h2>Laptop</h2>
            </div>
            {/* category-sub-menu start */}
            <div className="category-sub-menu">
              <ul>
                <li className="has-sub">
                  <a href="# ">Prime Video</a>
                  <ul>
                    <li>
                      <a href="#">All Videos</a>
                    </li>
                    <li>
                      <a href="#">Blouses</a>
                    </li>
                    <li>
                      <a href="#">Evening Dresses</a>
                    </li>
                    <li>
                      <a href="#">Summer Dresses</a>
                    </li>
                    <li>
                      <a href="#">T-Rent or Buy</a>
                    </li>
                    <li>
                      <a href="#">Your Watchlist</a>
                    </li>
                    <li>
                      <a href="#">Watch Anywhere</a>
                    </li>
                    <li>
                      <a href="#">Getting Started</a>
                    </li>
                  </ul>
                </li>
                <li className="has-sub">
                  <a href="#">Computer</a>
                  <ul>
                    <li>
                      <a href="#">TV &amp; Video</a>
                    </li>
                    <li>
                      <a href="#">Audio &amp; Theater</a>
                    </li>
                    <li>
                      <a href="#">Camera, Photo</a>
                    </li>
                    <li>
                      <a href="#">Cell Phones</a>
                    </li>
                    <li>
                      <a href="#">Headphones</a>
                    </li>
                    <li>
                      <a href="#">Video Games</a>
                    </li>
                    <li>
                      <a href="#">Wireless Speakers</a>
                    </li>
                  </ul>
                </li>
                <li className="has-sub">
                  <a href="#">Electronics</a>
                  <ul>
                    <li>
                      <a href="#">Amazon Home</a>
                    </li>
                    <li>
                      <a href="#">Kitchen &amp; Dining</a>
                    </li>
                    <li>
                      <a href="#">Bed &amp; Bath</a>
                    </li>
                    <li>
                      <a href="#">Appliances</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* category-sub-menu end */}
          </div>
          {/*sidebar-categores-box end  */}
          {/*sidebar-categores-box start  */}
          <div className="sidebar-categores-box">
            <div className="sidebar-title">
              <h2>Filter By</h2>
            </div>
            {/* btn-clear-all start */}
            <button className="btn-clear-all mb-sm-30 mb-xs-30">
              Clear all
            </button>
            {/* btn-clear-all end */}
            {/* filter-sub-area start */}
            <div className="filter-sub-area">
              <h5 className="filter-sub-titel">Brand</h5>
              <div className="categori-checkbox">
                <form action="#">
                  <ul>
                    <li>
                      <input type="checkbox" name="product-categori" />
                      <a href="#">Prime Video (13)</a>
                    </li>
                    <li>
                      <input type="checkbox" name="product-categori" />
                      <a href="#">Computers (12)</a>
                    </li>
                    <li>
                      <input type="checkbox" name="product-categori" />
                      <a href="#">Electronics (11)</a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            {/* filter-sub-area end */}
            {/* filter-sub-area start */}
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
              <h5 className="filter-sub-titel">Categories</h5>
              <div className="categori-checkbox">
                <form action="#">
                  <ul>
                    <li>
                      <input type="checkbox" name="product-categori" />
                      <a href="#">Graphic Corner (10)</a>
                    </li>
                    <li>
                      <input type="checkbox" name="product-categori" />
                      <a href="#"> Studio Design (6)</a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            {/* filter-sub-area end */}
            {/* filter-sub-area start */}
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
              <h5 className="filter-sub-titel">Size</h5>
              <div className="size-checkbox">
                <form action="#">
                  <ul>
                    <li>
                      <input type="checkbox" name="product-size" />
                      <a href="#">S (3)</a>
                    </li>
                    <li>
                      <input type="checkbox" name="product-size" />
                      <a href="#">M (3)</a>
                    </li>
                    <li>
                      <input type="checkbox" name="product-size" />
                      <a href="#">L (3)</a>
                    </li>
                    <li>
                      <input type="checkbox" name="product-size" />
                      <a href="#">XL (3)</a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            {/* filter-sub-area end */}
            {/* filter-sub-area start */}
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
              <h5 className="filter-sub-titel">Color</h5>
              <div className="color-categoriy">
                <form action="#">
                  <ul>
                    <li>
                      <span className="white" />
                      <a href="#">White (1)</a>
                    </li>
                    <li>
                      <span className="black" />
                      <a href="#">Black (1)</a>
                    </li>
                    <li>
                      <span className="Orange" />
                      <a href="#">Orange (3) </a>
                    </li>
                    <li>
                      <span className="Blue" />
                      <a href="#">Blue (2) </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            {/* filter-sub-area end */}
            {/* filter-sub-area start */}
            <div className="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15">
              <h5 className="filter-sub-titel">Dimension</h5>
              <div className="categori-checkbox">
                <form action="#">
                  <ul>
                    <li>
                      <input type="checkbox" name="product-categori" />
                      <a href="#">40x60cm (6)</a>
                    </li>
                    <li>
                      <input type="checkbox" name="product-categori" />
                      <a href="#">60x90cm (6)</a>
                    </li>
                    <li>
                      <input type="checkbox" name="product-categori" />
                      <a href="#">80x120cm (6)</a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            {/* filter-sub-area end */}
          </div>
          {/*sidebar-categores-box end  */}
          {/* category-sub-menu start */}
          <div className="sidebar-categores-box mb-sm-0">
            <div className="sidebar-title">
              <h2>Laptop</h2>
            </div>
            <div className="category-tags">
              <ul>
                <li>
                  <a href="# ">Devita</a>
                </li>
                <li>
                  <a href="# ">Cameras</a>
                </li>
                <li>
                  <a href="# ">Sony</a>
                </li>
                <li>
                  <a href="# ">Computer</a>
                </li>
                <li>
                  <a href="# ">Big Sale</a>
                </li>
                <li>
                  <a href="# ">Accessories</a>
                </li>
              </ul>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
  </div>
  <Footer/>
</>

     );
}

export default Shop;