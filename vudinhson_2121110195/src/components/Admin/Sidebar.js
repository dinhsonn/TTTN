function Sidebar() {
    return ( 
        <div
  className="page-wrapper"
  id="main-wrapper"
  data-layout="vertical"
  data-navbarbg="skin6"
  data-sidebartype="full"
  data-sidebar-position="fixed"
  data-header-position="fixed"
>
  <aside className="left-sidebar">
    <div>
      <div className="brand-logo d-flex align-items-center justify-content-between">
        <a href="/admin" className="text-nowrap logo-img">
          <img src="../assets/images/logos/dark-logo.svg" width={180} alt="" />
        </a>
        <div
          className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
          id="sidebarCollapse"
        >
          <i className="ti ti-x fs-8" />
        </div>
      </div>
      {/* Sidebar navigation*/}
      <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="/admin"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-layout-dashboard" />
              </span>
              <span className="hide-menu">Trang Chủ</span>
            </a>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">Danh mục</span>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="/admin/product"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-article" />
              </span>
              <span className="hide-menu">Danh sách sản phẩm</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="/admin/category"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-alert-circle" />
              </span>
              <span className="hide-menu">Danh sách loại sản phẩm</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="/admin/brand"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-alert-circle" />
              </span>
              <span className="hide-menu">Danh sách thương hiệu</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="./ui-card.html"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-cards" />
              </span>
              <span className="hide-menu">Khách hàng</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="./ui-forms.html"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-file-description" />
              </span>
              <span className="hide-menu">Đơn hàng</span>
            </a>
          </li>
          <li className="nav-small-cap">
            <i className="ti ti-dots nav-small-cap-icon fs-4" />
            <span className="hide-menu">AUTH</span>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="./authentication-login.html"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-login" />
              </span>
              <span className="hide-menu">Đăng nhập</span>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              className="sidebar-link"
              href="./authentication-register.html"
              aria-expanded="false"
            >
              <span>
                <i className="ti ti-user-plus" />
              </span>
              <span className="hide-menu">Đăng xuất</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>

  <div className="body-wrapper">
  </div>
</div>

     );
}

export default Sidebar;