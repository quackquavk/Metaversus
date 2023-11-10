"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText, NewFeatures } from "../components";
import { useState } from "react";

const World = () => (
  <section
    className={`${styles.paddings} relative z-10 justify-center text-center items-center`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      viewport={{ once: false, amount: ".25" }}
      className={`${styles.innerWidth} mx-auto flex-col    items-center justify-center`}
      whileInView="show"
    >
      <TypingText
        title="| People in the World"
        textStyles="text-white  font-bold"
      />
      <TitleText
        title={
          <>
            Track your friends around you and invite them to play together in
            the same world
          </>
        }
      />
    </motion.div>
    <motion.div
       variants={fadeIn('up', "tween", 0.2, 1)} 
      className="relative mt-[68px] flex w-[70%] h-[550px] mx-auto"
    >
      <img src="/map.png" alt="map" className="w-full h-full object-cover" />

      <div className="absolute h-[70px] w-[70px] rounded-full bg-gray-600 p-[6px] left-20 top-20">
        <img src="/people-03.png" alt="map" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
      <div className="absolute h-[70px] w-[70px] rounded-full bg-gray-600 p-[6px] right-20 bottom-20">
        <img src="/people-01.png" alt="map" className="w-full h-full" />
      </div>
    </motion.div>
  </section>
);

export default World;
