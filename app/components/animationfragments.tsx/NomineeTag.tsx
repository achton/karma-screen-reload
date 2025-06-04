'use client';

import { Typo } from '@/app/components/typo';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  delay: number;
  duration: number;
};

export const NomineeTag = ({ title, delay, duration }: Props) => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration }}
    className="absolute top-12 left-12 z-10 overflow-hidden origin-left inline-block px-8 py-4 bg-reload-primary rounded-2xl"
    layout
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: duration / 4 } }}
      transition={{ delay, duration: 0.3 }}
      layout
    >
      <Typo variant="medium" className="text-black uppercase text-center whitespace-nowrap">
        {title}
      </Typo>
    </motion.div>
  </motion.div>
);
