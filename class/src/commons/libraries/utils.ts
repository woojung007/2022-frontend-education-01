export const getDate = (date: number) => {
  const NewDate = new Date(date);
  const yyyy = NewDate.getFullYear();
  const mm = NewDate.getMonth() + 1;
  const dd = NewDate.getDate();
  return `${yyyy}-${mm}-${dd}`;
};



