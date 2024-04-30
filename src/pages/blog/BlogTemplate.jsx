import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/services";
import { format } from "date-fns";
import { RichText } from "@graphcms/rich-text-react-renderer";

const BlogTemplate = () => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4 mt-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4 mt-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-3xl mb-4 mt-10">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-one":
        return (
          <h1 key={index} className="text-md font-semibold mb-4 mt-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h1>
        );
      case "heading-five":
        return (
          <h5 key={index} className="text-md font-semibold mb-4 mt-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h5>
        );
      case "heading-six":
        return (
          <h6 key={index} className="text-md font-semibold mb-4 mt-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h6>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case "bulleted-list":
        return <RichText content={post.content.raw.children[2]} />;

      default:
        return modifiedText;
    }
  };
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostDetails(slug);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased text-black">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-10 mt-10 text-left text-5xl font-domine font-bold leading-tight text-[#32313a] lg:mb-10 lg:text-4xl">
              {post.title}
            </h1>
            <address className="flex items-center mb-10 mt-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-black">
                <img
                  className="mr-4 w-12 h-12 rounded-full"
                  src={post.author.photo.url}
                  alt={post.author.name}
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-m font-bold text-gray-900 dark:text-black"
                  >
                    {post.author.name}
                  </a>
                  <p className="text-m text-gray-500 dark:text-gray-400">
                    {post.author.bio}
                  </p>
                  <p className="text-m text-gray-500 dark:text-gray-400">
                    <time>
                      {format(new Date(post.createdAt), "dd MMMM yyyy")}
                    </time>
                  </p>
                </div>
              </div>
            </address>
          </header>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </article>
      </div>
    </main>
  );
};

export default BlogTemplate;
