'use client';

import { NomineeCard } from '@/app/components/animationfragments.tsx/NomineeCard';
import { NomineeTag } from '@/app/components/animationfragments.tsx/NomineeTag';
import NomineeText from '@/app/components/animationfragments.tsx/NomineeText';
import { springSettings } from '@/lib/config';
import { KarmaNominee } from '@/types';
import { motion } from 'framer-motion';

const DEFAULT_ANIMATION_DURATION = 0.3;
const ANIMATION_DELAY = 1.2;

export const animationConfig = {
  item: {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  },
  container: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        delay: 0.4,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  },
};

export const fadeInWithBlur = (duration: number) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration / 2,
      delay: ANIMATION_DELAY,
      ...springSettings.default,
    },
  },
  exit: {
    opacity: 0,

    transition: { duration, delay: ANIMATION_DELAY },
  },
});

type Props = {
  nominee: KarmaNominee;
  duration?: number;
};

export default function WhiteSpaceCard({ nominee, duration = DEFAULT_ANIMATION_DURATION }: Props) {
  return (
    <motion.div
      className="bg-reload-secondary bg-black text-white grid grid-rows-[1fr_minmax(200px, min-content)] max-h-screen gap-12 py-12 px-8 h-screen"
      transition={{ duration }}
    >
      <div>
        <NomineeTag
          title={'Karma'}
          delay={duration}
          duration={duration}
          variant="whiteSpaceCard"
          className="mb-12"
        />
        <NomineeCard nominee={nominee} duration={duration} />
      </div>
      <NomineeText nominee={nominee} duration={duration} />
    </motion.div>
  );
}
