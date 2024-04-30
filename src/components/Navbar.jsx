import { Logos } from "../assets/logos";
import { useState } from "react";
import { Images } from "../assets/images";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState({
    navOpt1: false,
    navOpt2: false,
    navOpt3: false,
  });
  const navigate = useNavigate();

  const navStyle = {
    display: "flex",
    width: "100vw",
    maxWidth: "100%",
    borderBottom: "1px solid var(--border-color--border-primary)",
    backgroundColor: "var(--base-color-neutral--white)",
    paddingLeft: "5%",
    paddingRight: "5%",
    position: "absolute",
    top: "100%",
    bottom: "auto",
    left: "0%",
    right: "0%",
    overflow: "hidden",
  };
  const setNavDefault = () => {
    setNavOpen({ navOpt1: false, navOpt2: false, navOpt3: false });
  };
  return (
    <div className="header-bar page-wrapper">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar5_component w-nav"
      >
        <div className="navbar5_container">
          <a
            className="navbar5_logo-link w-nav-brand cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={Logos.Master_Logo}
              loading="lazy"
              width="120"
              alt=""
              className="navbar5_logo"
            />
          </a>
          <nav role="navigation" className="navbar5_menu w-nav-menu ml-40">
            <div className="flex justify-center items-center mr-auto pl-0 max-w-[1280px]">
              <div
                data-hover="true"
                data-delay="300"
                className="moving-guide w-dropdown"
              >
                <div
                  onMouseEnter={() => setNavOpen({ navOpt1: true })}
                  onMouseLeave={() => setNavOpen({ navOpt1: false })}
                  className="navbar5_dropdown-toggle w-dropdown-toggle"
                >
                  <a href="#" className="nav-dropdown-link w-inline-block">
                    <div className="text-block-6">Moving Guides</div>
                  </a>
                  <div className="dropdown-chevron w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <nav
                  onMouseEnter={() => setNavOpen({ navOpt1: true })}
                  onMouseLeave={() => setNavOpen({ navOpt1: false })}
                  style={navOpen.navOpt1 ? navStyle : {}}
                  className="navbar5_dropdown-list w-dropdown-list"
                >
                  <div className="navbar5_container">
                    <div className="navbar5_dropdown-content">
                      <div className="navbar5_dropdown-content-left">
                        <div className="navbar5_dropdown-link-list">
                          <div onClick={() => navigate("/get-started")}>
                            <Link
                              onClick={setNavDefault}
                              className="navbar5_dropdown-link w-inline-block"
                            >
                              <div className="navbar5_icon-wrapper">
                                <div className="icon-embed-xsmall w-embed">
                                  <svg
                                    width="currentWidth"
                                    height="currentHeight"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <address className="navbar5_item-right">
                                <div className="text-weight-semibold">
                                  Set Up Utilities
                                </div>
                              </address>
                            </Link>
                          </div>
                          <div
                            onClick={() => navigate("/change-of-address")}
                            className="cursor-pointer"
                          >
                            <a className="navbar5_dropdown-link w-inline-block">
                              <div className="navbar5_icon-wrapper">
                                <div className="icon-embed-xsmall w-embed">
                                  <svg
                                    width="currentWidth"
                                    height="currentHeight"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                              <div className="navbar5_item-right">
                                <div className="text-weight-semibold">
                                  Change Your Address
                                </div>
                              </div>
                            </a>
                          </div>
                          <a
                            href="http://davids-cool-site-c7af88.webflow.io/blogs/how-to-change-your-voter-registration"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Update Voter Registrations
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="navbar5_dropdown-link-list"></div>
                      </div>
                      <div className="navbar5_dropdown-content-right">
                        <div className="navbar5_dropdown-content-wrapper z-index-1">
                          <h4 className="text-size-small text-weight-semibold">
                            Featured from Blog
                          </h4>
                          <div
                            id="w-node-b9851ac6-c3e8-8838-000f-97c85f6bc7b9-5ab5f7bc"
                            className="navbar5_blog-list-wrapper"
                          >
                            <div className="navbar5_blog-list">
                              <div
                                id="w-node-b9851ac6-c3e8-8838-000f-97c85f6bc7bb-5ab5f7bc"
                                className="w-dyn-list"
                              >
                                <div role="list" className="w-dyn-items">
                                  <div
                                    role="listitem"
                                    className="navbar5_blog-item w-dyn-item"
                                  >
                                    <div className="navbar5_blog-image-wrapper">
                                      <img
                                        loading="lazy"
                                        src={Images.placeholderImg}
                                        alt=""
                                        className="navbar5_blog-image w-dyn-bind-empty"
                                      />
                                    </div>
                                    <div className="navbar5_large-item-content">
                                      <div className="margin-bottom margin-tiny">
                                        <div className="text-weight-semibold w-dyn-bind-empty"></div>
                                      </div>
                                      <p className="text-size-small w-dyn-bind-empty"></p>
                                      <div className="margin-top margin-xxsmall">
                                        <a href="#" className="w-inline-block">
                                          <div className="text-style-link text-size-small">
                                            Read more
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-dyn-empty">
                                  <div>No items found.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="button-group">
                            <a
                              href="#"
                              className="button is-link is-icon w-inline-block"
                            >
                              <div>See all articles</div>
                              <div className="icon-embed-xxsmall w-embed">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 3L11 8L6 13"
                                    stroke="CurrentColor"
                                    strokeWidth="1.5"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="navbar5_dropdown-background-layer"></div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div
                data-hover="true"
                data-delay="300"
                className="moving-guide w-dropdown"
              >
                <div
                  onMouseEnter={() => setNavOpen({ navOpt2: true })}
                  onMouseLeave={() => setNavOpen({ navOpt2: false })}
                  className="navbar5_dropdown-toggle w-dropdown-toggle"
                >
                  <a
                    href="/category/home-services"
                    className="nav-dropdown-link w-inline-block"
                  >
                    <div className="text-block-4">Home Services</div>
                  </a>
                  <div className="dropdown-chevron w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <nav
                  onMouseEnter={() => setNavOpen({ navOpt2: true })}
                  onMouseLeave={() => setNavOpen({ navOpt2: false })}
                  style={navOpen.navOpt2 ? navStyle : {}}
                  className="navbar5_dropdown-list w-dropdown-list"
                >
                  <div className="navbar5_container">
                    <div className="navbar5_dropdown-content">
                      <div className="navbar5_dropdown-content-left">
                        <div className="navbar5_dropdown-link-list">
                          <h4 className="text-size-small text-weight-semibold">
                            Home Services
                          </h4>
                          <Link
                            onClick={setNavDefault}
                            to={"./internet"}
                            aria-current="page"
                            className="navbar5_dropdown-link w-inline-block w--current"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Internet
                              </div>
                            </div>
                          </Link>
                          <a
                            href="../utilities/tv-streaming-services.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                TV &amp; Streaming
                              </div>
                            </div>
                          </a>
                          <Link
                            onClick={setNavDefault}
                            to={"./electricity"}
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Electricity
                              </div>
                            </div>
                          </Link>
                          <Link
                            onClick={setNavDefault}
                            to={"./insurance"}
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Insurance
                              </div>
                            </div>
                          </Link>
                          <a
                            href="../utilities/security.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Home Security
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="navbar5_dropdown-content-right">
                        <div className="navbar5_dropdown-content-wrapper z-index-1">
                          <h4 className="text-size-small text-weight-semibold">
                            Featured from Blog
                          </h4>
                          <div
                            id="w-node-b0440b08-4123-5961-5d41-07f4b0158057-5ab5f7bc"
                            className="navbar5_blog-list-wrapper"
                          >
                            <div className="navbar5_blog-list">
                              <div
                                id="w-node-f5cdbb53-3071-9769-0a37-c75fcc1e4336-5ab5f7bc"
                                className="w-dyn-list"
                              >
                                <div role="list" className="w-dyn-items">
                                  <div
                                    role="listitem"
                                    className="navbar5_blog-item w-dyn-item"
                                  >
                                    <div className="navbar5_blog-image-wrapper">
                                      <img
                                        src={Images.placeholderImg}
                                        loading="lazy"
                                        alt=""
                                        className="navbar5_blog-image w-dyn-bind-empty"
                                      />
                                    </div>
                                    <div className="navbar5_large-item-content">
                                      <div className="margin-bottom margin-tiny">
                                        <div className="text-weight-semibold w-dyn-bind-empty"></div>
                                      </div>
                                      <p className="text-size-small w-dyn-bind-empty"></p>
                                      <div className="margin-top margin-xxsmall">
                                        <a href="#" className="w-inline-block">
                                          <div className="text-style-link text-size-small">
                                            Read more
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-dyn-empty">
                                  <div>No items found.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="button-group">
                            <a
                              href="#"
                              className="button is-link is-icon w-inline-block"
                            >
                              <div>See all articles</div>
                              <div className="icon-embed-xxsmall w-embed">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 3L11 8L6 13"
                                    stroke="CurrentColor"
                                    strokeWidth="1.5"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="navbar5_dropdown-background-layer"></div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div
                data-hover="true"
                data-delay="300"
                className="moving-guide w-dropdown"
              >
                <div
                  onMouseEnter={() => setNavOpen({ navOpt3: true })}
                  onMouseLeave={() => setNavOpen({ navOpt3: false })}
                  className="navbar5_dropdown-toggle w-dropdown-toggle"
                >
                  <a
                    onClick={() => navigate("/blog")}
                    className="nav-dropdown-link w-inline-block"
                  >
                    <div className="text-block-4">Blogs</div>
                  </a>
                  <div className="dropdown-chevron w-embed">
                    <svg
                      width=" 100%"
                      height=" 100%"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
                <nav
                  onMouseEnter={() => setNavOpen({ navOpt3: true })}
                  onMouseLeave={() => setNavOpen({ navOpt3: false })}
                  style={navOpen.navOpt3 ? navStyle : {}}
                  className="navbar5_dropdown-list w-dropdown-list"
                >
                  <div className="navbar5_container">
                    <div className="navbar5_dropdown-content">
                      <div className="navbar5_dropdown-content-left">
                        <div className="navbar5_dropdown-link-list">
                          <h4 className="text-size-small text-weight-semibold">
                            Categories
                          </h4>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Interior Design
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Home Improvement
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Carpet Cleaning
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Pest Control
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Home Cleaning
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Home Maintenance
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="navbar5_dropdown-link-list">
                          <h4 className="text-size-small text-weight-semibold">
                            Categories
                          </h4>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Home Security
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                TV, Streaming, &amp; Internet
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Setup Utilities
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Home Services
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Storage Solutions
                              </div>
                            </div>
                          </a>
                          <a
                            href="../category-home-page.html"
                            className="navbar5_dropdown-link w-inline-block"
                          >
                            <div className="navbar5_icon-wrapper">
                              <div className="icon-embed-xsmall w-embed">
                                <svg
                                  width="currentWidth"
                                  height="currentHeight"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <div className="navbar5_item-right">
                              <div className="text-weight-semibold">
                                Moving &amp; Moving Tips
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="navbar5_dropdown-content-right">
                        <div className="navbar5_dropdown-content-wrapper z-index-1">
                          <h4 className="text-size-small text-weight-semibold">
                            Featured from Blog
                          </h4>
                          <div
                            id="w-node-bda57823-797d-4426-b45a-95c584d43f37-5ab5f7bc"
                            className="navbar5_blog-list-wrapper"
                          >
                            <div className="navbar5_blog-list">
                              <div
                                id="w-node-bda57823-797d-4426-b45a-95c584d43f39-5ab5f7bc"
                                className="w-dyn-list"
                              >
                                <div role="list" className="w-dyn-items">
                                  <div
                                    role="listitem"
                                    className="navbar5_blog-item w-dyn-item"
                                  >
                                    <div className="navbar5_blog-image-wrapper">
                                      <img
                                        src={Images.placeholderImg}
                                        loading="lazy"
                                        alt=""
                                        className="navbar5_blog-image w-dyn-bind-empty"
                                      />
                                    </div>
                                    <div className="navbar5_large-item-content">
                                      <div className="margin-bottom margin-tiny">
                                        <div className="text-weight-semibold w-dyn-bind-empty"></div>
                                      </div>
                                      <p className="text-size-small w-dyn-bind-empty"></p>
                                      <div className="margin-top margin-xxsmall">
                                        <a href="#" className="w-inline-block">
                                          <div className="text-style-link text-size-small">
                                            Read more
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-dyn-empty">
                                  <div>No items found.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="button-group">
                            <a
                              href="#"
                              className="button is-link is-icon w-inline-block"
                            >
                              <div>See all articles</div>
                              <div className="icon-embed-xxsmall w-embed">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M6 3L11 8L6 13"
                                    stroke="CurrentColor"
                                    strokeWidth="1.5"
                                  ></path>
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="navbar5_dropdown-background-layer"></div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            <div
              className="navbar5_menu-right"
              onClick={() => navigate("/get-started")}
            >
              <a className="button is-secondary is-small w-button">
                Get Started
              </a>
            </div>
          </nav>
          <div className="navbar5_menu-button w-nav-button">
            <div className="menu-icon">
              <div className="menu-icon_line-top"></div>
              <div className="menu-icon_line-middle">
                <div className="menu-icon_line-middle-inner"></div>
              </div>
              <div className="menu-icon_line-bottom"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="global-styles w-embed"></div>
    </div>
  );
};

export default Navbar;
