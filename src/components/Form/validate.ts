export const isDateValid = (value: string) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const inputValue = new Date(value);

  return inputValue <= new Date(currentDate);
};
