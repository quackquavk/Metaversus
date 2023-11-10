import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d] flex justify-center items-center`}
    >
      <p className="font-bold text-[24px] text-white">0{number}</p>
    </div>
    <p className="font-semibold ml-[30px] flex-1 text-[18px] text-[#B0B0B0] leading-[32px]">{text}</p>
  </div>
);

export default StartSteps;
