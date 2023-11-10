"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils";
import { TypingText, ExploreCard, TitleText, NewFeatures } from "../components";
import { useState } from "react";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      viewport={{ once: false, amount: ".25" }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      whileInView="show"
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.25, 1)}
        className="flex-col flex flex-[0.75] justify-center"
      >
        <TypingText title="|How metaversus works" textStyles="text-white" />
        <TitleText title={<>Whats new about the metaversus</>} />
        <div className="mt-[48px] flex-wrap gap-[24px] flex justify-center">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/whats-new.png"
          alt="get started"
          className="h-[90%] w-full object-contain block "
        ></img>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
