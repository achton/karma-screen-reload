'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const imageVariants = {
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.2 },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    transition: { duration: 0.5 },
  },
};

export default function NomineeImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 z-0"
    >
      <Image src={src} alt={alt} fill className="object-cover h-full w-full" />
    </motion.div>
  );
}
