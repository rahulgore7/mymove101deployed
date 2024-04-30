const Footer = () => {
  return (
    <footer className="p-16 space-y-8">
      <div className="w-full h-[1px] bg-[#010b15]" />
      <div className="max-w-[1280px] px-auto container mx-auto px-[30px] max-[400px]:px-0 gap-16 flex max-[910px]:flex-col">
        <div className="space-y-4 max-[910px] mx-auto">
          <div className="ml-6">
            <img
              src="/mark.png"
              alt="mark"
              className="max-w-[129px] max-h-[121px]"
            />
          </div>
          <div className="flex gap-4">
            <div className="min-w-min">
              <a href="https://www.facebook.com/people/MyMove101/61557667365565/">
                <img
                  src="/footer/facebook_icon.png"
                  alt="facebook_icon"
                  className="w-[20px] h-[20px]"
                />
              </a>
            </div>
            <div className="min-w-min">
              <a href="https://www.instagram.com/mymove101/">
                <img
                  src="/footer/instagram_icon.png"
                  alt="instagram_icon"
                  className="w-[18px] h-[18px]"
                />
              </a>
            </div>
            <div className="min-w-min">
              <a href="https://twitter.com/DavidB44588">
                <img
                  src="/footer/twitter_icon.png"
                  alt="twitter_icon"
                  className="w-[24px] h-[20px]"
                />
              </a>
            </div>
            <div className="min-w-min">
              <a href="https://www.linkedin.com/company/mymove101">
                <img
                  src="/footer/linkedin_icon.png"
                  alt="linkedin_icon"
                  className="w-[20px] h-[20px]"
                />
              </a>
            </div>
            <div className="min-w-min">
              <a href="http://www.youtube.com/@MyMove101">
                <img
                  src="/footer/youtube_icon.png"
                  alt="youtube_icon"
                  className="w-[25px] h-[25px] items-center"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex border-l: broove w-full gap-4 max-[596px]:flex-col">
          <div className="justify-center space-y-4 pl-8 max-[596px]:mx-auto max-[596px]:pl-0">
            <div className="text-[#666666] font-bold text-[16px] font-sans">
              MOVING GUIDE
            </div>
            <div className="space-y-2 flex-col">
              <a
                href="/address-change-service"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>Change Your Address</div>
              </a>
              <a
                href="/utilities/insurance"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>Get Your Insurance</div>
              </a>
              <a
                href="/utilities/internet"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>Set Up Internet</div>
              </a>
            </div>
          </div>
          <div className="justify-center mx-auto space-y-4">
            <div className="text-[#666666] text-[16px] font-bold font-sans">
              HOME UTILITIES
            </div>
            <div className="space-y-2 flex-col">
              <a
                href="/utilities/internet"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>Internet</div>
              </a>
              <a
                href="/utilities/tv-streaming-services"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>TV & Streaming</div>
              </a>
              <a
                href="/utilities/electricity"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>Electricity</div>
              </a>
              <a
                href="/utilities/insurance"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>Insurance</div>
              </a>
              <a
                href="/utilities/security"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>Home Security</div>
              </a>
            </div>
          </div>
          <div className="items-center space-y-4 max-[596px]:mx-auto">
            <div className="text-[#666666] font-bold text-[16px] font-sans">
              COMPANY
            </div>
            <div className="space-y-2 flex-col">
              <a
                href="/about-us"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>About Us</div>
              </a>
              <a
                href="/how-it-works"
                className="text-[#444444] text-[12.8px] font-sans"
              >
                <div>How It Works</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto gap-4 justify-center items-center max-[325px]:flex-col">
        <a
          href="/privacy-policy"
          className="text-[#010b15] text-[14px] font-sans italic underline"
        >
          <div>Privacy Policy</div>
        </a>
        <a
          href="/terms-and-conditions"
          className="text-[#010b15] text-[14px] font-sans italic underline"
        >
          <div>Terms and Conditions</div>
        </a>
        <a
          href="/cookie-policy"
          className="text-[#010b15] text-[14px] font-sans italic underline"
        >
          <div>Cookie Policy</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
