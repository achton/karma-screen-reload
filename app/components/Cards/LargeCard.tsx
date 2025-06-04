'use client';

import { NomineeTag } from '@/app/components/animationfragments.tsx/NomineeTag';
import { Typo } from '@/app/components/typo';
import { springSettings } from '@/lib/config';
import { KarmaNominee } from '@/types';
import { motion } from 'framer-motion';

const DEFAULT_ANIMATION_DURATION = 0.6;
const ANIMATION_DELAY = 1.2;

const animationConfig = {
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

const fadeInWithBlur = (duration: number) => ({
  initial: { opacity: 0, filter: 'blur(5px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: {
      duration: duration / 2,
      delay: ANIMATION_DELAY,
      ...springSettings.default,
    },
  },
  exit: {
    opacity: 0,
    filter: 'blur(5px)',
    transition: { duration, delay: ANIMATION_DELAY },
  },
});

const VoteItem = ({ text }: { text: string }) => (
  <motion.div variants={animationConfig.item} className="relative pl-12">
    <span className="absolute left-0 top-[0.3em] scale-200">→</span>
    <Typo variant="medium" weight={400}>
      {text}
    </Typo>
  </motion.div>
);

type Props = {
  nominee: KarmaNominee;
  duration?: number;
};

export default function LargeCard({ nominee, duration = DEFAULT_ANIMATION_DURATION }: Props) {
  return (
    <motion.div
      className="w-full h-full relative bg-black text-white overflow-hidden grid grid-rows-[1fr_minmax(30%,min-content)]"
      transition={{ duration }}
    >
      <NomineeTag title={nominee.title} delay={duration} duration={duration} />

      {/* Image */}
      <motion.img
        src={nominee.avatar_url}
        alt={nominee.full_name}
        className="object-cover h-full w-full"
        {...fadeInWithBlur(duration)}
      />

      {/* Text content */}
      <motion.div
        className="bg-reload-secondary h-full px-16 py-20 text-black"
        {...fadeInWithBlur(duration)}
      >
        <motion.div
          variants={animationConfig.container}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-10"
        >
          <motion.div variants={animationConfig.item}>
            <Typo as="h1" variant="xlarge" weight={700} className="mb-10">
              {nominee.full_name}
            </Typo>
          </motion.div>

          <motion.div variants={animationConfig.container} className="space-y-10">
            {nominee.votes.map((vote, i) => (
              <VoteItem key={i} text={vote} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
