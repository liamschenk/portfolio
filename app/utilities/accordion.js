export const hoveredOpacity = (index, openIndex, hoveredIndex) => {
  if (openIndex === null) {
    return hoveredIndex === null || hoveredIndex === index ? 1 : 0.5;
  }
  return openIndex === index || hoveredIndex === index ? 1 : 0.5;
};
