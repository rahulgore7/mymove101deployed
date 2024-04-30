import "../../css/normalize.css";
import "../../css/components.css";
import "../../css/davids-cool-site-c7af88.css";
// import "./styles.css";

const contents = [
  {
    image1: "/Howitworks/image-1.svg",
    title1: "Change Your Address",
    description1: {
      __html:
        "Skip in the line at the post office and update <br /> your address online",
    },
    content1: "CHANGE YOUR ADDRESS",
    url1: "/address-change-service",
    image2: "/Howitworks/image-2.svg",
    title2: "Mover Checklists",
    description2: {
      __html:
        "Skip in the line at the post office and update <br /> your address online",
    },
    content2: "VIEW CHECKLISTS",
    url2: "/how-it-works",
  },
  {
    image1: "/Howitworks/image-3.svg",
    title1: "Find Internet Near Me",
    description1: {
      __html:
        "Get the hookup with the best prices and packages <br /> in your new neighbourhood.",
    },
    content1: "LEARN MORE",
    url1: "/utilities/internet",
    image2: "/Howitworks/image-4.svg",
    title2: "Set Up Utilities",
    description2: {
      __html:
        "Find out how to update power, water and more at <br /> your new home.",
    },
    content2: "LEARN MORE",
    url2: "/get-started",
  },
  {
    image1: "/Howitworks/image-5.png",
    title1: "Set Up Electricity",
    description1: {
      __html: "Find how to set up electricity at your <br /> new home.",
    },
    content1: "LEARN MORE",
    url1: "/utilities/electricity",
    image2: "/Howitworks/image-6.png",
    title2: "Set Up Security",
    description2: {
      __html:
        "Explore how to enhance security measures at <br /> your new residence.",
    },
    content2: "LEARN MORE",
    url2: "/utilities/security",
  },
  {
    image1: "/Howitworks/image-7.png",
    title1: "Insurance",
    description1: {
      __html:
        "Navigate the process of updating insurance and <br /> safeguarding your new residence.",
    },
    content1: "LEARN MORE",
    url1: "/utilities/insurance",
    image2: "/Howitworks/image-8.png",
    title2: "TV Streaming Services",
    description2: {
      __html:
        "Discover how to update your TV streaming services effortlessly <br /> in your new home.",
    },
    content2: "LEARN MORE",
    url2: "/utilities/security",
  },
];

export default function Electricity() {
  return (
    <div className="w-full h-full">
      <div className="bg-[#222] pt-8 max-w-nax space-y-4 px-auto">
        <div className="text-[#FDD835] text-2xl font-sans text-center">
          HOW IT WORKS
        </div>
        <div className="text-white text-[56px] font-bold font-sans text-center">
          Unpack all things
          <br /> moving with MYMOVE101
        </div>
      </div>
      <img
        src="/Howitworks/back-bottom.svg"
        alt="back-bottom"
        className="w-full h-auto"
      />
      <div className="mt-8 space-y-4">
        <div className="text-[#FDD835] text-2xl font-sans font-bold text-center">
          GET YOUR MOVE ON
        </div>
        <div className="text-black text-[48px] font-sans font-bold text-center">
          Keep all the moving parts organized <br />
          before, during and after Moving Day
        </div>
        <div className="space-y-16">
          {contents.map((content, index) => (
            <div
              className="flex max-[800px]:flex-col max-[800px]:items-center"
              key={index}
            >
              <div className="w-1/2 space-y-1 text-center">
                <img
                  src={content.image1}
                  className="w-[96px] h-[96px] m-auto"
                  alt={content.title1}
                />
                <div className="text-[#222222] text-5xl font-sans font-bold">
                  {content.title1}
                </div>
                <div
                  className="text-[#222222] text-2xl font-sans"
                  dangerouslySetInnerHTML={content.description1}
                />
                <a
                  href={content.url1}
                  className="text-[#010B15] text-2xl font-sans font-bold underline"
                >
                  {content.content1}
                </a>
              </div>
              <div className="w-1/2 space-y-1 text-center max-[800px]:pt-16">
                <img
                  src={content.image2}
                  className="w-[96px] h-[96px] m-auto"
                  alt={content.title2}
                />
                <div className="text-[#222222] text-5xl font-sans font-bold">
                  {content.title2}
                </div>
                <div
                  className="text-[#222222] text-2xl font-sans"
                  dangerouslySetInnerHTML={content.description1}
                />
                <a
                  href={content.url2}
                  className="text-[#010B15] text-2xl font-sans font-bold underline"
                >
                  {content.content2}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <img
          src="/Howitworks/back-top.svg"
          alt="back-top"
          className="w-full h-auto"
        />
        <div className="flex gap-16 px-16 max-md:flex-col max-md:items-center bg-[#222] border border-[#222]">
          <div className="w-1/2 space-y-4 my-auto max-md:w-full">
            <div className="text-[#FDD85] text-[40px] font-sans font-bold">
              FIRST THINGS FIRST
            </div>
            <div className="text-white text-[56px] font-sans font-bold">
              Change Your Address
            </div>
            <div className="text-white text-2xl font-sans font-medium">
              The first and most important step you can take for your move is .
              This will ensure that your mail is forwarded to your new address
              and you don&apos;t miss anything. (It&apos;s also a great way to
              access deals from great brands!)
            </div>
          </div>
          <img
            src="/Howitworks/background-1.png"
            className="w-1/2 h-auto my-auto max-md:w-full"
            alt="image"
          />
        </div>
        <img
          src="/Howitworks/back-bottom.svg"
          alt="back-bottom"
          className="w-full h-auto"
        />
      </div>
      <div className="flex gap-24 px-24 max-md:flex-col">
        <img
          src="/Howitworks/background-2.png"
          className="w-1/4 h-auto m-auto max-md:w-full"
          alt="background-3"
        />
        <div className="space-y-4 w-1/2 ml-auto max-md:w-full">
          <div className="text-[#FDD835] text-[32px] font-sans font-bold">
            READ ON
          </div>
          <div className="text-[#010B15] text-[48px] font-sans font-bold">
            Learn From Moving Experts
          </div>
          <div className="text-[#222222] text-[24px] font-sans font-medium">
            There tend to be more questions than answers during a move, so
            we&apos;ve compiled tips, guides and free. We weigh the pros and
            cons for you. Curious about what you can do to sell your house
            faster? We share trade secrets on that, too. If you have a question,
            we&apos;ve got the answers.
          </div>
        </div>
      </div>
      <div>
        <img
          src="/Howitworks/back-top.svg"
          alt="back-top"
          className="w-full h-auto"
        />
        <div className="flex gap-16 px-8 bg-[#222] max-md:flex-col">
          <div className="text-[56px] text-white m-auto font-sans font-bold">
            Movers spend nearly $10,000 <br />
            in total during the 3-month <br />
            &quot;HYPER-SPEND&quot; window.
          </div>
          <div className="w-1/2 max-md:mx-auto max-sm:w-full">
            <img
              src="/Howitworks/background-3.png"
              className="w-4/5 h-auto m-auto max-lg:w-full"
              alt="background-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
