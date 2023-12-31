"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils";
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col ${styles.flexCenter}`}
    >
      <TypingText
        title="| About Metaversus"
        textStyles="text-center text-white font-bold "
      />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-8 text-center sm:text-[28px] text-[20px] text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaversus</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really{" "}
        <span className="font-extrabold text-white">
          the madness of the metaverse{" "}
        </span>{" "}
        of today, using only{" "}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{" "}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>
      <motion.img
        src="/arrow-down.svg"
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="w-[14px] h-[28px] object-contain mt-[30px]"
      />
    </motion.div>
  </section>
);

export default About;
