export const getClassesFromString = (classes = '', styles: Record<string, unknown>) => {
  return (
    classes
      ?.split(' ')
      .filter((cls) => cls != '')
      .map((cls) => `${styles[cls]} `)
      .toString()
      .replace(/,/, '') ?? ''
  );
};
