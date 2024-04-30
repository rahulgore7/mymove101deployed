import Image from "../../assets/images/get-started-image.png";
import FormTag from "../../components/FormTag";
export default function GetStarted() {
  return (
    <div className="h-[100vh] flex flex-row mx-[5rem] mt-[1rem] border overflow-auto rounded-lg">
      <div className="w-[40%] flex justify-left border-r">
        <img
          src={Image}
          alt="getStartedImage"
          className="object-cover overflow-auto"
        />
      </div>
      <div className="w-[60%]">
        <div className="flex flex-col items-center justify-center p-[10px]">
          <h1 className="font-bold text-center text-base">
            Have MyMove101&apos;s team setup your Utility Services For Free!!`
          </h1>
          <p className="text-black mt-[10px]">
            Please fill in your address for where you would like our Concierge
            Team to assist you:
          </p>
          <div className="border w-[80%] mt-[8px] "></div>
        </div>

        {/* form */}
        <form>
          <div>
            <div className="flex h-[70px]">
              <FormTag
                title="First Name"
                placeholder="First Name*"
                type="text"
              />
              <FormTag title="Last Name" placeholder="Last Name*" type="text" />
            </div>
            <div className="flex">
              <FormTag title="Email" placeholder="Email*" type="email" />
              <FormTag
                title="Phone Number"
                placeholder="Phone Number*"
                type="tel"
              />
            </div>
            <div className="flex">
              <FormTag
                title="Address Line 1"
                placeholder="Street 1*"
                type="text"
              />
              <FormTag
                title="Address Line 2"
                placeholder="Street 2"
                type="text"
              />
            </div>
            <div className="flex">
              <FormTag title="City" placeholder="City*" type="text" />
              <FormTag title="State" placeholder="State*" type="text" />
            </div>
            <div className="flex">
              <FormTag title="Zipcode" placeholder="Zipcode*" type="number" />
              <FormTag
                title="Move In Date"
                placeholder="Move In Date*"
                type="date"
              />
            </div>
            <div className="mb-[10px]">
              <label
                htmlFor="referralCode"
                className="text-black font-bold pl-[12px]"
              >
                Referral Code
              </label>
              <input
                type="text"
                placeholder="Referral Code"
                className="w-full outline-none text-black px-[12px] py-[8px] h-[30px]"
              />
              <div className="border w-[80%] mt-[8px] ml-[10px]"></div>
            </div>
            <div className="mb-[10px]">
              <label
                htmlFor="referralCode"
                className="text-black font-bold pl-[12px]"
              >
                Comments
              </label>
              <textarea
                type="text"
                placeholder="Please indicate which services you'd like for MyMove101 to establish such as electricity, cable, home security or insurance."
                className="w-[80%] outline-none text-black px-[12px] py-[8px] h-[60px]"
              />
              <div className="border w-[80%] mt-[8px] ml-[10px]"></div>
            </div>

            <div>
              <p className="text-black px-[10px]">
                By selecting &apos;Submit,&apos; you consent to MyMove101
                sending you communications through text messages and emails.
                Standard messaging rates may apply.
              </p>
            </div>

            <div className="flex justify-center items-center mt-[10px] h-auto">
              <button className="px-[15px] py-[9px] w-[60%] bg-[#3898ec] text-white rounded-lg">
                Submit
              </button>
            </div>
            <div className="mt-[10px]">
              <p className="text-black px-[10px]">
                Note: Please be aware that certain services, including but not
                limited to gas, water, and in some cases, electricity, are
                subject to regulatory constraints that necessitate the property
                owner to personally fill out the service application. For such
                services, we will provide you with the necessary application
                details via email to initiate the service.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
