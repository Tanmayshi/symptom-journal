'use client';

import { motion } from 'motion/react';
import { cn } from '../../lib/Cn'; // ye helper agar tu use kar raha hai

function FlipButton({
  frontText,
  backText,
  transition = { type: 'spring', stiffness: 280, damping: 20 },
  className,
  frontClassName,
  backClassName,
  from = 'top',
  ...props
}) {
  const isVertical = from === 'top' || from === 'bottom';
  const rotateAxis = isVertical ? 'rotateX' : 'rotateY';

  const frontOffset = from === 'top' || from === 'left' ? '50%' : '-50%';
  const backOffset = from === 'top' || from === 'left' ? '-50%' : '50%';

  const buildVariant = (opacity, rotation, offset = null) => {
    return {
      opacity,
      [rotateAxis]: rotation,
      ...(isVertical && offset !== null ? { y: offset } : {}),
      ...(!isVertical && offset !== null ? { x: offset } : {}),
    };
  };

  const frontVariants = {
    initial: buildVariant(1, 0, '0%'),
    hover: buildVariant(0, 90, frontOffset),
  };

  const backVariants = {
    initial: buildVariant(0, 90, backOffset),
    hover: buildVariant(1, 0, '0%'),
  };

  const DEFAULT_SPAN_CLASS_NAME =
    'absolute inset-0 flex items-center justify-center rounded-lg';

  return (
    <motion.button
      data-slot="flip-button"
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      className={cn(
        'relative inline-block h-12 w-40 px-4 py-2 text-xl font-larg cursor-pointer perspective-[1000px] focus:outline-none',
        className
      )}
      {...props}
    >
      <motion.span
        data-slot="flip-button-front"
        variants={frontVariants}
        transition={transition}
        className={cn(
          DEFAULT_SPAN_CLASS_NAME,
          'bg-gray-900 text-black dark:text-white',
          frontClassName
        )}
      >
        {frontText}
      </motion.span>
      <motion.span
        data-slot="flip-button-back"
        variants={backVariants}
        transition={transition}
        className={cn(
          DEFAULT_SPAN_CLASS_NAME,
          'bg-gray-900 text-primary-foreground',
          backClassName
        )}
      >
        {backText}
      </motion.span>
      <span className="invisible">{frontText}</span>
    </motion.button>
  );
}

export { FlipButton };
