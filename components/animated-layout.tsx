import { motion } from "framer-motion";
import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AnimatedLayout: NextPage<Props> = ({ children }) => (
  <motion.div
    initial={{ x: 350, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -350, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
);
export default AnimatedLayout;
