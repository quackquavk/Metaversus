import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4 justify-center mx-auto"
  >
    <img
      src={imgUrl}
      alt="lol"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-start items-center">
      <div className="flex-1 md:ml-[30px] ml-[20px] flex flex-col max-w-[650px]">
        <h4 className="text-[30px] text-white  sm:text-[20px]">{title}</h4>
        <p className="text-white opacity-[70%] font-normal lg:text-[20px] sm:text-[150px] text-[40px] mt-5">
          {subtitle}
        </p>
      </div>
      <div className="lg:flex hidden justify-center items-center bg-transparent border-[1px] border-white h-[100px] w-[100px] rounded-full ml-5">
      <img src="arrow.svg" alt="arrow"  className="w-[40%] h-[40%] object-contain"/>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
