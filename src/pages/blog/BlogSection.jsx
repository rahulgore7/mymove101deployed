import BlogBox from "./BlogBox";
import { getPosts } from "../../services/services";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPosts(); // Call the getPosts function to fetch data
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (category, slug) => {
    history(`/blog/${category}/${slug}`);
  };

  return (
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap ">
          {posts.map((post, index) => (
            <BlogBox
              key={index}
              title={post.node.title}
              imageUrl={post.node.featuredImage.url}
              excerpt={post.node.excerpt}
              onClick={() =>
                handleClick(post.node.categories[0].name, post.node.slug)
              }
            />
          ))}
          {posts.map((post, index) => (
            <BlogBox
              key={index}
              title={post.node.title}
              imageUrl={post.node.featuredImage.url}
              excerpt={post.node.excerpt}
              date={post.node.createdAt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
