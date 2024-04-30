import BlogSection from "./BlogSection";
import Blognav from "./Blognav";
import Image1 from "../../assets/images/image.png";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-[20rem] w-full pl-20 relative">
        <img
          src={Image1}
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="bg-slate-400 bg-opacity-50 absolute inset-0 flex items-center justify-left">
          <h1 className="font-bold text-7xl font-domine text-black pl-20">
            Blogs
          </h1>
        </div>
      </div>
      <Blognav />
      <BlogSection />
    </div>
  );
};

export default Blog;
