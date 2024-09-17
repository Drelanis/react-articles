export type ClassNamesModsType = Record<string, boolean | undefined | null>;

type Params = {
  classNames: string;
  additional?: string[];
  mods?: ClassNamesModsType;
};

export const buildClassNames = (params: Params): string => {
  const { classNames, mods = {}, additional = [] } = params;

  return [
    classNames,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter((field) => Boolean(field[1]))
      .map(([className]) => className),
  ].join(' ');
};
