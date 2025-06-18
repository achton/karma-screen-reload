import { animationConfig } from '@/app/components/Cards/WhiteSpaceCard';
import { Typo } from '@/app/components/typo';
import { motion } from 'motion/react';

export const NomineeVote = ({ text }: { text: string }) => (
  <motion.div variants={animationConfig.item} className="relative pl-12">
    <svg
      className="absolute left-0 top-[0.2em] w-5 h-5 text-black "
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 5l7 7-7 7M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <Typo weight={400}>{text}</Typo>
  </motion.div>
);
