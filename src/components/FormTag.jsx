import PropTypes from "prop-types";

const FormTag = ({ title, type, placeholder }) => {
  return (
    <div className="w-1/2 flex flex-col justify-center mb-[10px]">
      <label htmlFor="firstName" className="text-[#444] pl-[12px]">
        {title}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-[60%] outline-none text-black px-[12px] py-[8px] h-[30px]"
      />
      <div className="border w-[80%] mt-[8px] ml-[10px]"></div>
    </div>
  );
};

FormTag.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormTag;
