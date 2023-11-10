"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { TypingText, ExploreCard, TitleText, StartSteps } from "../components";
import { useState } from "react";
import { exploreWorlds, startingFeatures } from "../constants";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      viewport={{ once: false, amount: ".25" }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      whileInView="show"
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/get-started.png"
          alt="get started"
          className="h-[90%] w-full object-contain block "
        ></img>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.25, 1)}
          className="flex-col flex flex-[0.75] justify-center"
        >
          <TypingText title="|How metaversus works" textStyles="text-white" />
          <TitleText title={<>Get Started With Just few Clicks</>} />
          <div className="mt-[35px] gap-[24px] flex flex-col max-w-[370px]">
            {startingFeatures.map((feature,index) => (
              <StartSteps
              key={feature}
              number={index+1}
              text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
  </section>
);

export default GetStarted;
