import { animationConfig, fadeInWithBlur } from '@/app/components/Cards/WhiteSpaceCard';
import { Typo } from '@/app/components/typo';
import { cn } from '@/lib/utils';
import { KarmaNominee } from '@/types';
import { motion } from 'motion/react';

type NomineeCardProps = {
  nominee: KarmaNominee;
  className?: string;
  duration?: number;
};

export const NomineeCard = ({ nominee, className, duration = 0.6 }: NomineeCardProps) => {
  return (
    <div className={cn('grid grid-cols-[1fr_min-content] gap-x-8 text-black', className)}>
      <div>
        <motion.img
          src={nominee.avatar_url}
          alt={nominee.full_name}
          className=""
          {...fadeInWithBlur(duration)}
        />
        <motion.div
          className="mt-8 flex justify-between items-center"
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
      </div>
      <motion.div {...fadeInWithBlur(duration)}>
        <Typo className="writing-vertical" font={'grotesk'} variant={'xlarge'}>
          {nominee.full_name}
        </Typo>
      </motion.div>
    </div>
  );
};
