export const getValueFromLS = (name: string): string => {
  if (!localStorage.getItem(`${name}`)) {
    localStorage.setItem(`${name}`, '[]');
  }
  return localStorage.getItem(`${name}`)!;
};
