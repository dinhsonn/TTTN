function Header() {
    return (
<header>
  <div className="header-top">
    <div className="container">
      <div className="row">
        {/* Begin Header Top Left Area */}
        <div className="col-lg-3 col-md-4">
          <div className="header-top-left">
            <ul className="phone-wrap">
              <li>
                <span>Telephone Enquiry:</span>
                <a href="#">(+123) 123 321 345</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Header Top Left Area End Here */}
        {/* Begin Header Top Right Area */}
        <div className="col-lg-9 col-md-8">
          <div className="header-top-right">
            <ul className="ht-menu">
              {/* Begin Setting Area */}
              <li>
              <div className="ht-setting-trigger">
  <ul>
    <li>
      <a href="/dang-nhap">My Account</a>
    </li>
  </ul>
</div>
              </li>
            </ul>
          </div>
        </div>
        {/* Header Top Right Area End Here */}
      </div>
    </div>
  </div>
  <div className="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
    <div className="container">
      <div className="row">
        {/* Begin Header Logo Area */}
        <div className="col-lg-3">
          <div className="logo pb-sm-30 pb-xs-30">
            <a href="/">
              <img src="images/menu/logo/1.jpg" alt="" />
            </a>
          </div>
        </div>

        <div className="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
          <form action="#" className="hm-searchbox">
            <input type="text" placeholder="Enter your search key ..." />
            <button className="li-btn" type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
          <div className="header-middle-right">
            <ul className="hm-menu">
              <li className="hm-wishlist">
                <a href="wishlist.html">
                  <span className="cart-item-count wishlist-item-count">0</span>
                  <i className="fa fa-heart-o" />
                </a>
              </li>
              {/* Header Middle Wishlist Area End Here */}
              {/* Begin Header Mini Cart Area */}
              <li className="hm-minicart">
                <div className="hm-minicart-trigger">
                  <span className="item-icon" />
                  <span className="item-text">
                    £80.00
                    <span className="cart-item-count">2</span>
                  </span>
                </div>
                <span />
                <div className="minicart">
                  <ul className="minicart-product-list">
                    <li>
                      <a
                        href="single-product.html"
                        className="minicart-product-image"
                      >
                        <img
                          src="images/product/small-size/5.jpg"
                          alt="cart products"
                        />
                      </a>
                      <div className="minicart-product-details">
                        <h6>
                          <a href="single-product.html">Aenean eu tristique</a>
                        </h6>
                        <span>£40 x 1</span>
                      </div>
                      <button className="close" title="Remove">
                        <i className="fa fa-close" />
                      </button>
                    </li>
                    <li>
                      <a
                        href="single-product.html"
                        className="minicart-product-image"
                      >
                        <img
                          src="images/product/small-size/6.jpg"
                          alt="cart products"
                        />
                      </a>
                      <div className="minicart-product-details">
                        <h6>
                          <a href="single-product.html">Aenean eu tristique</a>
                        </h6>
                        <span>£40 x 1</span>
                      </div>
                      <button className="close" title="Remove">
                        <i className="fa fa-close" />
                      </button>
                    </li>
                  </ul>
                  <p className="minicart-total">
                    SUBTOTAL: <span>£80.00</span>
                  </p>
                  <div className="minicart-button">
                    <a
                      href="shopping-cart.html"
                      className="li-button li-button-fullwidth li-button-dark"
                    >
                      <span>View Full Cart</span>
                    </a>
                    <a
                      href="checkout.html"
                      className="li-button li-button-fullwidth"
                    >
                      <span>Checkout</span>
                    </a>
                  </div>
                </div>
              </li>
              {/* Header Mini Cart Area End Here */}
            </ul>
          </div>
          {/* Header Middle Right Area End Here */}
        </div>
        {/* Header Middle Right Area End Here */}
      </div>
    </div>
  </div>
  {/* Header Middle Area End Here */}
  {/* Begin Header Bottom Area */}
  <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Begin Header Bottom Menu Area */}
          <div className="hb-menu">
            <nav>
              <ul>
                <li className="dropdown-holder">
                  <a href="/">Trang chủ</a>
                </li>
                <li className="megamenu-holder">
                  <a href="/san-pham">Sản phẩm</a>
                  <ul className="megamenu hb-megamenu">
                    <li>
                      <a href="shop-left-sidebar.html">Shop Page Layout</a>
                      <ul>
                        <li>
                          <a href="shop-3-column.html">Shop 3 Column</a>
                        </li>
                        <li>
                          <a href="shop-4-column.html">Shop 4 Column</a>
                        </li>
                        <li>
                          <a href="shop-left-sidebar.html">Shop Left Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">
                            Shop Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-list.html">Shop List</a>
                        </li>
                        <li>
                          <a href="shop-list-left-sidebar.html">
                            Shop List Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-list-right-sidebar.html">
                            Shop List Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="single-product-gallery-left.html">
                        Single Product Style
                      </a>
                      <ul>
                        <li>
                          <a href="single-product-carousel.html">
                            Single Product Carousel
                          </a>
                        </li>
                        <li>
                          <a href="single-product-gallery-left.html">
                            Single Product Gallery Left
                          </a>
                        </li>
                        <li>
                          <a href="single-product-gallery-right.html">
                            Single Product Gallery Right
                          </a>
                        </li>
                        <li>
                          <a href="single-product-tab-style-top.html">
                            Single Product Tab Style Top
                          </a>
                        </li>
                        <li>
                          <a href="single-product-tab-style-left.html">
                            Single Product Tab Style Left
                          </a>
                        </li>
                        <li>
                          <a href="single-product-tab-style-right.html">
                            Single Product Tab Style Right
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="single-product.html">Single Products</a>
                      <ul>
                        <li>
                          <a href="single-product.html">Single Product</a>
                        </li>
                        <li>
                          <a href="single-product-sale.html">
                            Single Product Sale
                          </a>
                        </li>
                        <li>
                          <a href="single-product-group.html">
                            Single Product Group
                          </a>
                        </li>
                        <li>
                          <a href="single-product-normal.html">
                            Single Product Normal
                          </a>
                        </li>
                        <li>
                          <a href="single-product-affiliate.html">
                            Single Product Affiliate
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-holder">
                  <a href="blog-left-sidebar.html">Blog</a>
                  <ul className="hb-dropdown">
                    <li className="sub-dropdown-holder">
                      <a href="blog-left-sidebar.html">Blog Grid View</a>
                      <ul className="hb-dropdown hb-sub-dropdown">
                        <li>
                          <a href="blog-2-column.html">Blog 2 Column</a>
                        </li>
                        <li>
                          <a href="blog-3-column.html">Blog 3 Column</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Grid Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">
                            Grid Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-dropdown-holder">
                      <a href="blog-list-left-sidebar.html">Blog List View</a>
                      <ul className="hb-dropdown hb-sub-dropdown">
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-list-left-sidebar.html">
                            List Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-list-right-sidebar.html">
                            List Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-dropdown-holder">
                      <a href="blog-details-left-sidebar.html">Blog Details</a>
                      <ul className="hb-dropdown hb-sub-dropdown">
                        <li>
                          <a href="blog-details-left-sidebar.html">
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="sub-dropdown-holder">
                      <a href="blog-gallery-format.html">Blog Format</a>
                      <ul className="hb-dropdown hb-sub-dropdown">
                        <li>
                          <a href="blog-audio-format.html">Blog Audio Format</a>
                        </li>
                        <li>
                          <a href="blog-video-format.html">Blog Video Format</a>
                        </li>
                        <li>
                          <a href="blog-gallery-format.html">
                            Blog Gallery Format
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="megamenu-static-holder">
                  <a href="index.html">Pages</a>
                  <ul className="megamenu hb-megamenu">
                    <li>
                      <a href="blog-left-sidebar.html">Blog Layouts</a>
                      <ul>
                        <li>
                          <a href="blog-2-column.html">Blog 2 Column</a>
                        </li>
                        <li>
                          <a href="blog-3-column.html">Blog 3 Column</a>
                        </li>
                        <li>
                          <a href="blog-left-sidebar.html">Grid Left Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-right-sidebar.html">
                            Grid Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-list-left-sidebar.html">
                            List Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-list-right-sidebar.html">
                            List Right Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-details-left-sidebar.html">
                        Blog Details Pages
                      </a>
                      <ul>
                        <li>
                          <a href="blog-details-left-sidebar.html">
                            Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-audio-format.html">Blog Audio Format</a>
                        </li>
                        <li>
                          <a href="blog-video-format.html">Blog Video Format</a>
                        </li>
                        <li>
                          <a href="blog-gallery-format.html">
                            Blog Gallery Format
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="index.html">Other Pages</a>
                      <ul>
                        <li>
                          <a href="login-register.html">My Account</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="compare.html">Compare</a>
                        </li>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="shopping-cart.html">Shopping Cart</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="index.html">Other Pages 2</a>
                      <ul>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="404.html">404 Error</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="/lien-he">Contact</a>
                </li>
                <li>
                  <a href="shop-left-sidebar.html">Smartwatch</a>
                </li>
                <li>
                  <a href="shop-left-sidebar.html">Accessories</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Header Bottom Menu Area End Here */}
        </div>
      </div>
    </div>
  </div>
  {/* Header Bottom Area End Here */}
  {/* Begin Mobile Menu Area */}
  <div className="mobile-menu-area d-lg-none d-xl-none col-12">
    <div className="container">
      <div className="row">
        <div className="mobile-menu"></div>
      </div>
    </div>
  </div>
  {/* Mobile Menu Area End Here */}
</header>


      );
}

export default Header;