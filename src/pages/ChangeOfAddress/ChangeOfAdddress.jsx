import "../../css/components.css";
import "../../css/davids-cool-site-c7af88.css";
import "../../css/normalize.css";
import Image1 from "../../assets/images/placeholder-image.svg";
import Image2 from "../../assets/images/City.jpg";
import Accordion from ".././ChangeOfAddress/Accordion";

const ChangeOfAdddress = () => {
  return (
    <div className="page-wrapper">
      <main className="cont">
        <header className="section_address-change-service_1_header">
          <div className="padding-global-2">
            <div className="container-small">
              <div className="padding-section-large">
                <div className="text-align-center">
                  <div className="margin-bottom margin-small">
                    <h1 className="text-color-white-2 text-6xl font-bold">
                      Finish your move with <br />
                      USPS® Change-of-Address{" "}
                    </h1>
                  </div>
                  <p className="text-size-medium text-color-white">
                    <strong className="bold-text">
                      After relocating, the last thing you want is to discover
                      that your mail is still going to your previous address.
                      Avoid an unnecessary trip to the post office by updating
                      your address with MYMOVE101 and forwarding your mail to
                      your new residence through USPS.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="address-change-service_1_header_background-image-wrapper">
            <div className="image-overlay-layer"></div>
            <img
              src={Image1}
              loading="eager"
              alt=""
              className="address-change-service_1_header_background-image"
            />
          </div>
        </header>
        <section className="section_address-change-service_2_feature">
          <div className="padding-global-2">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="w-layout-grid address-change-service_2_feature_component">
                  <div className="address-change-service_2_feature_content">
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-7">
                        What is the procedure for updating my address?
                      </h2>
                    </div>
                    <div className="margin-bottom margin-small">
                      <p className="text-size-medium">
                        By clicking <strong>Get Started</strong>, you agree to
                        the USPS® Privacy Policy and Terms of Use. Your
                        information will be sent to the USPS for processing your
                        Change-of-Address.
                      </p>
                    </div>
                    <div className="address-change-service_2_feature_item-list">
                      <div
                        id="w-node-_800d416e-6180-9a66-b353-a3f34933598d-6ffe499f"
                        className="address-change-service_2_feature_item"
                      >
                        <div className="address-change-service_2_feature_item-icon-wrapper">
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
                        <div className="address-change-service_2_feature_item-text-wrapper">
                          <p className="paragraph-10">
                            MYMOVE101 partners with USPS®. By providing your
                            Change-of-Address information, you can access
                            special discounts and moving services when you sign
                            up for an account.
                          </p>
                        </div>
                      </div>
                      <div
                        id="w-node-_800d416e-6180-9a66-b353-a3f349335993-6ffe499f"
                        className="address-change-service_2_feature_item"
                      >
                        <div className="address-change-service_2_feature_item-icon-wrapper">
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
                        <div className="address-change-service_2_feature_item-text-wrapper">
                          <p className="paragraph-9">
                            To complete the Online Change-of-Address, you will
                            need a valid email address and a valid debit or
                            credit card for the $1.10 charge from the USPS®.
                            MYMOVE101 does not collect or store your payment
                            information.
                          </p>
                        </div>
                      </div>
                      <div
                        id="w-node-_800d416e-6180-9a66-b353-a3f349335999-6ffe499f"
                        className="address-change-service_2_feature_item"
                      >
                        <div className="address-change-service_2_feature_item-icon-wrapper">
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
                        <div className="address-change-service_2_feature_item-text-wrapper">
                          <p className="paragraph-8">
                            The individual completing and submitting this form
                            affirms that they are the person, executor,
                            guardian, authorized officer, or agent of the
                            individual for whom mail will be redirected under
                            this order. Providing false or misleading
                            information on this form may result in fines,
                            imprisonment, or both as outlined in Sections 2,
                            1001, 1702, and 1708 of Title 18, United States
                            Code.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="button-group">
                        <a
                          href="https://moversguide.usps.com/mgo/address-info?referral=UMOVE"
                          className="button is-secondary w-button"
                        >
                          <strong>Get Started</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="address-change-service_2_feature_image-wrapper">
                    <img
                      src={Image2}
                      loading="lazy"
                      sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, (max-width: 1439px) 41vw, 562.5px"
                      alt=""
                      className="address-change-service_2_feature_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[#14142b05]">
          <div className="mx-auto p-[30px] mt-10 space-y-16">
            <div className="max-w-[464px] mx-auto">
              <div className="text-[38px] text-[#010B15] font-sans text-center font-bold">
                Frequently Asked Questions
              </div>
              <div className="text-[16px] text-[#868686] font-sans text-center">
                In our FAQ section, we&apos;ve compiled answers to some of the
                most common questions about selecting an Internet provider with
                MyMove101.
              </div>
            </div>
            <div className="max-w-[792px] mx-auto">
              <Accordion />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChangeOfAdddress;
