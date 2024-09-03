export const getInputFont = (inputElement: HTMLInputElement) => {
  const style = window.getComputedStyle(inputElement);

  return `${style.fontSize} ${style.fontFamily}`;
};
