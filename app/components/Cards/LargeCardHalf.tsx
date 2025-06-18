'use client';

import { NomineeTag } from '@/app/components/animationfragments.tsx/NomineeTag';
import { Typo } from '@/app/components/typo';
import { springSettings } from '@/lib/config';
import { KarmaNominee } from '@/types';
import { motion } from 'framer-motion';

const DEFAULT_ANIMATION_DURATION = 0.3;
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

const VoteItem = ({ text }: { text: string }) => (
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

type Props = {
  nominee: KarmaNominee;
  duration?: number;
};

export default function LargeCardHalf({ nominee, duration = DEFAULT_ANIMATION_DURATION }: Props) {
  return (
    <motion.div
      className="w-full h-full relative bg-black text-white overflow-hidden grid grid-rows-[minmax(200px,1fr)_minmax(50%,auto)]"
      transition={{ duration }}
    >
      <NomineeTag
        title={nominee.title}
        delay={duration}
        duration={duration}
        variant="largeCardHalf"
      />

      {/* Image */}
      <motion.img
        src={nominee.avatar_url}
        alt={nominee.full_name}
        className="object-cover h-full w-full"
        {...fadeInWithBlur(duration)}
      />

      {/* Text content */}
      <motion.div
        className="bg-reload-secondary flex flex-col px-12 py-8 text-black overflow-auto space-y-10 "
        {...fadeInWithBlur(duration)}
      >
        <motion.div
          variants={animationConfig.container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div variants={animationConfig.item}>
            <Typo as="h1" font={'grotesk'} variant="xlarge" weight={500} className="mb-6">
              {nominee.full_name}
            </Typo>
          </motion.div>

          <motion.div variants={animationConfig.container} className="space-y-4">
            {nominee.votes.map((vote, i) => (
              <VoteItem key={i} text={vote} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-auto flex justify-between items-center"
          variants={animationConfig.container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Typo variant={'small'} weight={700} className="uppercase">
            Uge {nominee.week}
          </Typo>
          <Typo variant={'small'} weight={700} className="uppercase">
            kollegerne siger
          </Typo>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
