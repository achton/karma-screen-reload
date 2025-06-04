'use client';

import { Typo } from '@/app/components/typo';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.8 },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.4 },
  },
};

export default function NomineeText({ fullName, votes }: { fullName: string; votes: string[] }) {
  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-reload-secondary h-full px-16 py-20 text-black relative z-10"
    >
      <Typo as="h1" variant="xlarge" weight={700} className="mb-10">
        {fullName}
      </Typo>
      <div className="space-y-4">
        {votes.map((vote, i) => (
          <div key={i} className="space-y-4">
            <Typo variant="medium" weight={400}>
              {vote}
            </Typo>
            {i < votes.length - 1 && (
              <Typo variant="medium" weight={400}>
                –
              </Typo>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
