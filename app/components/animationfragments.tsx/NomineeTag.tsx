'use client';

import { Typo } from '@/app/components/typo';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type Variant = 'largeCardHalf' | 'whiteSpaceCard';

type Props = {
  title: string;
  delay: number;
  duration: number;
  variant: Variant;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  largeCardHalf:
    'absolute top-12 left-12 z-10 overflow-hidden origin-left inline-block px-8 py-4 bg-reload-primary rounded-xl',
  whiteSpaceCard:
    'bg-reload-primary inline-block px-4 py-2 text-black border border-gray-200 rounded-lg shadow-sm w-min',
};

export const NomineeTag = ({ title, delay, duration, variant, className }: Props) => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration }}
    className={cn(variantClasses[variant], className)}
    layout
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: duration / 4 } }}
      transition={{ delay, duration: 0.3 }}
      layout
    >
      <Typo className="text-black uppercase text-center whitespace-nowrap">{title}</Typo>
    </motion.div>
  </motion.div>
);
