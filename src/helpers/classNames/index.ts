type Mods = Record<string, boolean | string>;

type Params = {
  classNames: string;
  mods?: Mods;
  additional?: string[];
};

export const buildClassNames = (params: Params): string => {
  const { classNames, mods = {}, additional = [] } = params;

  return [
    classNames,
    ...additional,
    ...Object.entries(mods)
      .filter((field) => Boolean(field[1]))
      .map(([className]) => className),
  ].join(' ');
};
