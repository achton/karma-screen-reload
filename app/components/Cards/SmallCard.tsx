'use client';

import { KarmaNominee } from '@/types';
import { motion } from 'motion/react';
import Image from 'next/image';
type Props = {
  nominee: KarmaNominee;
};

export default function SmallCard({ nominee }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="w-full h-full bg-black text-white flex flex-col items-center justify-center px-6 py-12 my-auto absolute inset-0"
    >
      <Image
        src={nominee.avatar_url}
        alt={nominee.full_name}
        width={256}
        height={256}
        className="w-64 h-64 rounded-full object-cover border-4 border-white mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold text-center mb-2">{nominee.full_name}</h1>
      <p className="text-xl text-center text-pink-300 font-semibold mb-6">{nominee.title}</p>
      <div className="text-lg space-y-4 max-w-xl text-center">
        {nominee.votes.map((vote, i) => (
          <p key={i} className="italic opacity-90">
            “{vote}”
          </p>
        ))}
      </div>
    </motion.div>
  );
}
