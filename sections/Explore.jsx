"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { useState } from "react";
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <TypingText
          title="| The World"
          textStyles="text-center text-white font-bold"
        />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 text-white ">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
