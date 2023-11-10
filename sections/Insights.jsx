"use client";
import { insights } from "../constants";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import { TypingText, ExploreCard, TitleText, NewFeatures } from "../components";
import { useState } from "react";
import { newFeatures } from "../constants";
import{ InsightCard   } from "../components";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto flex flex-col"
    >
      <TypingText
        title="| Insights"
        textStyles="text-center text-white font-semibold"
      />
      <TitleText title="Insights About Metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight- ${index}`}{...insight} index={index+1}/>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
