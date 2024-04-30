import PropTypes from "prop-types";
import { format } from "date-fns";

const BlogBox = ({ title, imageUrl, excerpt, onClick, date }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 " onClick={onClick}>
      <div className="max-w-[370px] mx-auto mb-10">
        <div className="rounded overflow-hidden mb-8">
          <img src={imageUrl} alt="image" className="w-full" />
        </div>
        <div>
          <span
            className="
             bg-primary
             rounded
             inline-block
             text-center
             py-1
             px-4
             text-xs
             leading-loose
             font-semibold
             text-black
             mb-5
             "
          >
           Date
          </span>
          <h3>
            <a
              href="javascript:void(0)"
              className="
                font-semibold
                text-xl
                sm:text-2xl
                lg:text-xl
                xl:text-2xl
                mb-4
                inline-block
                text-black
                hover:text-blue-500
                "
            >
              {title}
            </a>
          </h3>
          <p className="text-black text-body-color">{excerpt}</p>
        </div>
      </div>
    </div>
  );
};
BlogBox.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  excerpt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  date: PropTypes.string,
};

export default BlogBox;
