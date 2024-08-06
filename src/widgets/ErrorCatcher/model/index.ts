export const useModel = () => {
  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals -- exception
    location.reload();
  };

  return { reloadPage };
};
