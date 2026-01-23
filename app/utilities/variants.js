export const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.125 },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.375 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.375 },
  },
};
