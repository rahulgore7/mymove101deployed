import React from "react";

const Video = () => (
  <div className="relative overflow-hidden">
    <div
      data-autoplay="true"
      data-loop="true"
      className="background-video-3 w-background-video"
    >
      <video
        autoPlay
        loop
        style={{ backgroundImage: 'url("/dashboard/dashboard_video.jpg")' }}
        muted
      >
        <source src="/dashboard/dashboard_video.webm" />
      </video>
    </div>
    <div className="max-w-[940px] absolute top-0 bottom-0 left-0 right-0 mx-auto mt-[125px]">
      <div className="aspect-auto object-cover bg-[#00000033] px-[40px] py-[40px]">
        <h1 className="text-white text-center font-sans text-[50px] font-bold mb-[1rem]">
          Make Moving Easy with MYMOVE101!
        </h1>
        <p className="text-white text-center font-sans text-[12px]">
          Discover our comprehensive services and tools for a stress-free moving
          experience.
        </p>
        <div className="mt-[40px] flex justify-center">
          <div className="flex-wrap justify-start items-center mt-[30px] flex">
            <a
              href="/get-started"
              className="text-[#010b15] text-center bg-white border border-solid border-primary py-[0.75rem] px-[1.5rem]"
            >
              <strong className="bold-text-18">Learn More</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Video;
