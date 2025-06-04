export const springSettings = {
  default: {
    type: 'spring',
    stiffness: 137,
    damping: 21.4,
    mass: 1,
  },
  slower: {
    type: 'spring',
    stiffness: 60, // lower = slower acceleration
    damping: 20, // keeps it smooth, less bounce
    mass: 1, // slightly heavier for drag
  },
};
