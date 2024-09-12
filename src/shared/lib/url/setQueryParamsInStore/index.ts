export const setQueryParamsInStore = (
  searchParams: URLSearchParams,
  paramsActionsMap: { [key: string]: (value: string) => void },
) => {
  Object.entries(paramsActionsMap).forEach(([param, action]) => {
    const value = searchParams.get(param);

    if (value) {
      action(value);
    }
  });
};
