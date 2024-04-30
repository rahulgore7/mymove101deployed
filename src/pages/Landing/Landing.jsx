import { useState } from "react";
import Accordion from "./Accordion";
import Video from "./Video";

export default function Landing() {
  const [activeTab, setActiveTab] = useState(3);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Video />
      <div className="max-w-[1280px] max-[767px]:flex-col px-auto container mx-auto px-[30px] flex gap-8 mt-10">
        <div className="w-1/2 space-y-8 max-[767px]:w-full">
          <div className="text-[#010B15] text-[28.8px] font-sans font-medium text-center">
            How Does &quot;MyMove101&quot; Services Work?
          </div>
          <img
            src="/dashboard/dashboard.jpg"
            alt="dashboard"
            className="w-full h-auto rounded-lg border-[#e7c14e] border-[10px]"
          />
          <div className="last:text-center">
            <a
              href="/get-started"
              className="text-[#010b15] font-bold text-center bg-white border border-solid border-primary py-[0.75rem] px-[1.5rem]"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="w-1/2 max-[767px]:w-full">
          {services.map((service, index) => (
            <div key={index} className="flex mt-20 gap-8">
              <div>
                <img
                  src={`/dashboard/icon-${index + 1}.png`}
                  alt={`dashboard-${index + 1}`}
                  className="w-[80px] h-[80px] max-w-none"
                />
                {index !== 3 && (
                  <div className="bg-[#cbb05b] w-[2px] h-full mx-auto" />
                )}
              </div>
              <div className="space-y-4">
                <div className="text-[#333333] text-[20px] font-sans font-bold">
                  {service.title}
                </div>
                <div className="text-[#868686] text-[16px] font-sans">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-[30px] mt-10 space-y-16">
        <div className="text-[44px] text-[#010B15] font-sans text-center font-bold">
          Making Moving Easier with MYMOVE101
        </div>
        <div className="flex gap-16 max-[700px]:flex-col">
          <img
            src="/dashboard/dashboard-1.jpg"
            alt="dashboard-1"
            className="w-3/5 my-auto h-auto max-[700px]:w-full"
          />
          <div className="my-auto w-2/5 space-y-16 max-[700px]:w-full">
            <div className="text-[#010B15] font-[400] text-[18px] font-sans">
              At <strong>MYMOVE101</strong>, our mission is to provide
              comprehensive resources and expert advice to make your moving
              process as smooth and stress-free as possible. Whether you&apos;re
              a first-time mover or a seasoned pro, we&apos;re here to guide you
              every step of the way.
            </div>
            <div className="last:text-center">
              <a
                href="/how-it-works"
                className="text-[#010b15] font-bold text-center bg-white border border-solid border-primary py-[0.75rem] px-[1.5rem]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-32 h-full max-[990px]:flex-col-reverse">
          <div className="relative w-1/2 my-auto max-[990px]:w-full">
            {activeTab === 1 && (
              <img
                src="/dashboard/dashboard-2.jpg"
                alt="image"
                className="mx-16 max-[990px]:mx-auto"
              />
            )}
            {activeTab === 2 && (
              <img
                src="/dashboard/dashboard-player.jpg"
                alt="player"
                className="w-full h-auto cursor-pointer"
              />
            )}
            {activeTab === 3 && (
              <img
                src="/dashboard/dashboard-2.jpg"
                alt="image"
                className="mx-8 max-[990px]:mx-auto"
              />
            )}
          </div>
          <div className="space-y-8 my-auto">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className="flex gap-8 cursor-pointer"
                onClick={() => handleTabClick(tab.number)}
              >
                {activeTab === tab.number ? (
                  <div className="h-auto w-[3px] bg-black" />
                ) : (
                  <div className="h-auto w-[3px] bg-white" />
                )}
                <div className="space-y-4">
                  <p className="text-[#010b15] text-[32px] font-sans">
                    {tab.title}
                  </p>
                  <p className="text-[#222222] text-[16px] font-sans">
                    {tab.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-32 max-[990px]:flex-col">
          <div className="space-y-8 w-1/2 max-[990px]:w-full">
            <div className="text-[#010b15] text-center text-[32px] font-sans font-bold">
              Discover the Benefits of Our Partnership with USPS for
              Change-of-Address Services
            </div>
            <div className="text-[#010b15] text-left text-[18px] font-sans">
              We have teamed up with USPS to provide you with a seamless and
              convenient change-of-address service. Say goodbye to the hassle of
              updating your address individually!
            </div>
            <div className="flex gap-8 max-[400px]:flex-col">
              <div className="w-1/2 space-y-4 max-[400px]:w-full">
                <img
                  src="/dashboard/icon.svg"
                  alt="icon"
                  className="w-[80px] h-[80px] mx-auto"
                />
                <div className="text-[#010b15] text-[32px] font-sans font-bold text-center">
                  Benefits
                </div>
                <div className="text-[#868686] text-[16px] font-sans text-center">
                  Save Time and Effort by Updating Your Address with USPS
                  Change-of-Address Services
                </div>
              </div>
              <div className="w-1/2 space-y-4 max-[400px]:w-full">
                <img
                  src="/dashboard/icon.svg"
                  alt="icon"
                  className="w-[80px] h-[80px] mx-auto"
                />
                <div className="text-[#010b15] text-[32px] font-sans font-bold text-center">
                  Convenience
                </div>
                <div className="text-[#868686] text-[16px] font-sans text-center">
                  Experience a Smooth Transition with Our USPS Change-of-Address
                  Partnership
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 w-[40%] justify-center items-center mx-[80px] h-auto max-[990px]:w-full  max-[990px]:justify-center max-[700px]:mx-auto">
            <img
              src="/dashboard/dashboard-3.jpg"
              alt="image"
              className="justify-center"
            />
            <div className="text-center cursor-pointer">
              <a
                href="/address-change-service"
                className="text-[#010b15] text-center text-[16px] bg-white border border-solid border-primary justify-center py-[0.75rem] px-[1.5rem]"
              >
                <strong className="bold-text-18">
                  Change Your Mailing Address
                </strong>
              </a>
            </div>
          </div>
        </div>
      </div>
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
      <div className="bg-white">
        <div className="max-w-[1280px] mx-auto px-[30px] mt-10 space-y-8">
          <div className="text-[#010b15] text-[48px] font-sans font-semibold">
            Still have questions?
          </div>
          <div className="text-[#010b15] text-[18px] font-sans">
            At <strong>MyMove101</strong> and with our partners we are able to
            analyze over 2,000+ utilities and home services plans, nationwide to
            provide you with a customized utility plan that aligns with your
            family needs. <br />
            <br />
            For personalized Utility Service Setup and Moving Assistance, please
            reach out to us.
          </div>
          <div className="max-w-[1000px] max-[650px]:flex-col flex mx-auto gap-16">
            <div className="space-y-4 w-2/5 max-[650px]:w-full">
              <div className="space-y-2">
                <img
                  src="/dashboard/email_icon.png"
                  alt="email_icon"
                  className="w-[32px] h-[32px]"
                />
                <div className="text-[#010b15] text-[20px] font-bold">
                  Email
                </div>
                <a
                  href="mailto:Support@MyMove101.com"
                  className="text-[#010b15] text-[16px] font-semibold underline cursor-pointer"
                >
                  Support@My Move101 .com
                </a>
              </div>
              <div className="space-y-2">
                <img
                  src="/dashboard/phone_icon.png"
                  alt="email_icon"
                  className="w-[25px] h-[25px]"
                />
                <div className="text-[#010b15] text-[20px] font-bold">
                  Phone
                </div>
                <a
                  href="tel:1-888-554-4609"
                  className="text-[#010b15] text-[16px] underline font-semibold cursor-pointer"
                >
                  +1 (512) 931-4112
                </a>
              </div>
            </div>
            <img
              src="/dashboard/dashboard-4.jpg"
              alt="image"
              className="w-3/5 h-auto max-[650px]:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const tabs = [
  {
    number: 1,
    title: "Moving Checklists and Utilities",
    description:
      "Stay organized with our comprehensive moving checklists and easily set up utilities at your new home.",
  },
  {
    number: 2,
    title: "Packing Tips and Guides",
    description:
      "Make your packing process smooth and efficient with our expert tips and guides.",
  },
  {
    number: 3,
    title: "Moving Resources",
    description:
      "Access a wide range of moving resources to help you throughout your relocation journey.",
  },
];

const services = [
  {
    title:
      "Consult our Concierge Services for assistance with arranging personalized Utility Services",
    description:
      "Let us know your needs for new utilities; internet, cable insurance, home security, and mail forwarding.",
  },
  {
    title:
      "Choose the Utilities and Services that correspond to your family's requirements",
    description:
      "Our Concierge Advisors will inform you about the service options available for your new home, and you can choose the ones you require.",
  },
  {
    title:
      "We will create a plan and keep you informed as we set up all your utilities and services",
    description:
      "We will create a plan and keep you informed as we set up all your utilities and services.",
  },
  {
    title:
      "Sit back, unwind, and allow us to alleviate the burden of setting up your utilities from your shoulders",
    description:
      "MyMove101 Concierge Advisors will keep you updated throughout the process, so all you have to do is let us handle the work for you. And yes, this service is absolutely free for you!",
  },
];
