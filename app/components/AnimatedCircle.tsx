'use client';

import { Typo } from '@/app/components/typo';
import { motion } from 'framer-motion';

export default function AnimatedTextWithSVG() {
  return (
    <div className="relative inline-block">
      <Typo font="grotesk" variant="medium" weight={700} className="uppercase">
        KOLLEGAER SIGER
      </Typo>

      {/* Inline SVG */}
      <motion.svg
        viewBox="0 0 200 50"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[-6px] left-0 w-full"
      >
        <motion.path
          d="M10 25 Q 100 0, 190 25"
          stroke="black"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.svg>
    </div>
  );
}
