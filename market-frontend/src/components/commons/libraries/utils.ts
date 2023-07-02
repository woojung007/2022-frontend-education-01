export const getDate = () => {
  const NewDate = new Date();
  const yyyy = NewDate.getFullYear();
  const mm = NewDate.getMonth() + 1;
  const dd = NewDate.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
