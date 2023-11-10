"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import navVarients from "../utils";

const Navbar = () => (
  <motion.nav
    varients={navVarients}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0  gradient-01" />
    <div className={`${styles.innerWidth} mx-auto justify-between gap-8 flex`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
        Metaversus
      </h2>
      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain"/>
    </div>
  </motion.nav>
);

export default Navbar;
