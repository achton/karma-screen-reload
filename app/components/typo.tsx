'use client';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';

export const variants = {
  variant: {
    xlarge: 'text-4xl',
    large: 'text-2xl',
    medium: 'text-1xl',
    base: 'text-base',
    small: 'text-sm',
  },
  weight: {
    400: 'font-normal',
    500: 'font-medium',
    700: 'font-bold',
  },
  font: {
    grotesk: 'font-grotesk',
    mono: 'font-mono',
  },
};

const typographyVariants = cva('selection:bg-black selection:text-white leading-relaxed', {
  variants: variants,
  defaultVariants: {
    variant: 'base',
    weight: 400,
    font: 'mono',
  },
});

export interface TypoProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

const Typo = forwardRef<HTMLElement, TypoProps>(
  ({ variant, weight, font, className, as, asChild = false, children, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : (as ?? 'p');

    return (
      <Comp
        className={cn(typographyVariants({ variant, weight, font, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Typo.displayName = 'Typo';

export { Typo, typographyVariants };
