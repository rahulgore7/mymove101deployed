import "../../css/normalize.css";
import "../../css/components.css";
import "../../css/davids-cool-site-c7af88.css";
// import "./styles.css";
import { useNavigate } from "react-router-dom";

const contents = [
  {
    title: "MyMove101: Simplifying Your Move",
    description:
      "At MyMove101, we address a universal challenge encountered during moving - setting up utilities. With a myriad of service providers nationwide, the absence of a unified platform made comparing and initiating utility services a tedious and time-consuming task. This often led to movers spending excessive time researching, dealing with customer service, and, more often than not, making costly uninformed decisions. Our mission at MyMove101 is to streamline the utility setup process, offering both time and financial savings by providing easy access to comprehensive information and innovative technology.",
  },
  {
    title: "Streamlining Utility Setup",
    description:
      "We revolutionize the utility setup process. Forget the hassle of navigating through countless websites, deciphering marketing jargon, and puzzling over complex plans. MyMove101 simplifies everything for you. We conduct thorough research based on your address, bringing together the best available options for internet, gas, electricity, home security, TV/cable, and water services. Our platform organizes these plans, filtering them according to your preferences, presenting them in an easily understandable format. This ensures you make informed decisions, selecting plans that truly fit your needs.",
  },
  {
    title: "Empowering Informed Decisions",
    description:
      "MyMove101 is your one-stop platform for comparing and connecting all your utility services. Without a comprehensive understanding of available services, it's easy to overspend or get trapped in unsuitable plans. We cater to all preferences - whether you're inclined to manage your utilities online or speak directly with an advisor for a deeper insight. With MyMove101, you're shielded from aggressive sales tactics and the confusion of options. Our unbiased team of Advisors is here to simplify your utility setup, offering expert advice and information. We're deeply invested in ensuring you have the knowledge and support to choose wisely.",
  },
  {
    title: "Unbiased Guidance at Your Fingertips",
    description:
      "Our established relationships with utility providers mean you always get the best deals through MyMove101. Our Advisors, reachable via phone, email, chat, or text, are dedicated to clarifying any uncertainties, ensuring you make choices with confidence. We advocate on your behalf, ensuring you receive the services you want, exactly when you need them. We're more than a service; we're your ally in the moving process.",
  },
  {
    title: "Effortless Connection Process",
    description:
      "MyMove101 enables you to finalize and initiate your utility services seamlessly, all from one platform. Avoid the hassle of navigating multiple websites or enduring lengthy waits on customer service calls. Our technology directly fetches accurate prices and plans from providers, ensuring transparency without hidden charges. With MyMove101, you're equipped to make smart, informed purchases promptly, freeing you to focus on other aspects of your move. Experience the convenience of signing up for all your utilities online or setting everything up with just one phone call.",
  },
  {
    title: "Your Comprehensive Utility Partner",
    description:
      "MyMove101 stands as your comprehensive solution for all utility connections, offering a free, user-friendly service dedicated to saving you time and money efficiently. We're committed to your satisfaction, striving to secure your desired service dates and plans that offer true value. With MyMove101, utility setup is one less thing to worry about during your move.",
  },
];

export default function Electricity() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/Get-Started");
  };
  return (
    <div className="space-y-10">
      <div className="relative flex-grow">
        <img
          src="/about-us/image.jpg"
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative flex items-center justify-center h-full">
          <div className="text-center space-y-10 my-20">
            <div className="text-white text-[56px] font-sans">About Us</div>
            <div className="text-[#FAFCCD] text-[32px] font-sans">
              MyMove101
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 max-w-[920px] mx-auto px-[20px]">
        {contents.map((content, index) => (
          <div key={index} className="space-y-4">
            <div className="text-[24px] text-[#222222] font-sans font-bold">
              {content.title}
            </div>
            <div className="text-[16px] text-[#222222] font-sans">
              {content.description}
            </div>
          </div>
        ))}
        <div
          className="border border-black max-w-max mx-auto px-[25px] py-[12px] cursor-pointer"
          onClick={handleGetStartedClick}
        >
          <p className="text-[16px] font-sans text-[#010B15] font-bold">
            Get Started!
          </p>
        </div>
      </div>
    </div>
  );
}
