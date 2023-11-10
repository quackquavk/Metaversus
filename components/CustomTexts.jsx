"use client";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textContainer,
  textVariant2,
} from "../utils";

export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={`${textStyles}`}>
    {title}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    className={`${textStyles} text-white md:text-[64px] text-[40px] font-bold mt-8`}
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    {title}
  </motion.h2>
);
