import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-1 flex-col sm:w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} rounded-[24px] bg-[#323f5d] h-[70px]`}
    >
      <img src={imgUrl} alt="image" className="w-1/2 h-1/2 object-contain" />
    </div>
    <h1 className="leading-[30px] text-white mt-[26px] font-bold text-[24px]">
      {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
