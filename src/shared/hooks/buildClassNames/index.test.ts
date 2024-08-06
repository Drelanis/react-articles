import { buildClassNames } from '.';

describe('buildClassNames', () => {
  test('with only first param', () => {
    expect(buildClassNames({ classNames: 'someClass' })).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';

    expect(
      buildClassNames({
        classNames: 'someClass',
        additional: ['class1', 'class2'],
      }),
    ).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';

    expect(
      buildClassNames({
        classNames: 'someClass',
        additional: ['class1', 'class2'],
        mods: { hovered: true, scrollable: true },
      }),
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hovered';

    expect(
      buildClassNames({
        classNames: 'someClass',
        additional: ['class1', 'class2'],
        mods: { hovered: true, scrollable: false },
      }),
    ).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';

    expect(
      buildClassNames({
        classNames: 'someClass',
        additional: ['class1', 'class2'],
        mods: { hovered: true, scrollable: undefined },
      }),
    ).toBe(expected);
  });
});
