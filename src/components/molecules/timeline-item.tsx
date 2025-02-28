"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import { Heading, Lead } from "@/atoms/text";

const TimelineItem = ({
  stepNumber,
  stepTitle,
  stepContent,
  isLastItem = false,
}: {
  stepNumber: string;
  stepTitle: string;
  stepContent: string;
  isLastItem?: boolean;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <div className="flex pb-28 gap-8 relative" ref={ref}>
      <motion.div
        className="text-black text-6xl font-bold opacity-5"
        style={{
          opacity: scrollYProgress,
        }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <p>{stepNumber}</p>
      </motion.div>
      <motion.div
        style={{
          opacity: scrollYProgress,
        }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <Heading as="h3" className="mb-4">
          {stepTitle}
        </Heading>
        <Lead className="text-lg">{stepContent}</Lead>
      </motion.div>
      {!isLastItem && (
        <motion.div
          className="rounded-full"
          style={{
            scaleY: scrollYProgress,
            position: "absolute",
            top: 60,
            left: 30,
            bottom: 0,
            width: 3,
            originY: 0,
            backgroundColor: "#10b981",
          }}
        />
      )}
    </div>
  );
};
export default TimelineItem;
