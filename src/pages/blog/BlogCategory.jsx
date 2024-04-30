import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryPost } from "../../services/services";
import BlogBox from "./BlogBox";
import Blognav from "./Blognav";

const BlogCategory = () => {
  function capitalizeFirstLetter(str) {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getCategoryPost(category);
        console.log(postData);
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <div className="h-[20rem] bg-slate-200 flex items-center justify-left w-full pl-20">
        <h1 className="font-bold text-7xl font-domine">
          {capitalizeFirstLetter(category)}
        </h1>
      </div>
      <Blognav />
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap">
            {posts.map((post, index) => (
              <BlogBox
                key={index}
                title={post.node.title}
                imageUrl={post.node.featuredImage.url}
                excerpt={post.node.excerpt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCategory;
