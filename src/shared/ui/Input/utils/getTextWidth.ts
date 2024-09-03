export const getTextWidth = (text: string, font: string) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (!context) {
    return 0;
  }

  context.font = font;
  const metrics = context.measureText(text);

  return metrics.width;
};
