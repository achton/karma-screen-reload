'use client';

import { NomineeVote } from '@/app/components/animationfragments.tsx/NomineeVote';
import { animationConfig, fadeInWithBlur } from '@/app/components/Cards/WhiteSpaceCard';
import { cn } from '@/lib/utils';
import { KarmaNominee } from '@/types';
import { motion } from 'framer-motion';

interface NomineeTextProps {
  nominee: KarmaNominee;
  duration?: number;
  className?: string;
}

export default function NomineeText({ nominee, duration = 0.3, className }: NomineeTextProps) {
  return (
    <motion.div
      className={cn('text-black space-y-10 mt-auto overflow-visible', className)}
      {...fadeInWithBlur(duration)}
    >
      <motion.div
        variants={animationConfig.container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div variants={animationConfig.container} className="space-y-4">
          {nominee.votes.map((vote, i) => (
            <NomineeVote key={i} text={vote} />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
