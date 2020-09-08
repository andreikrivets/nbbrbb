const currentDate = () => {
  const date = new Date(Date.now());
  const y = date.getFullYear();
  const m =
    date.getMonth().length === 2
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;
  const d = date.getDate().length === 2 ? date.getDate() : `0${date.getDate()}`;
  return `${y}-${m}-${d}`;
};

const getStartDate = (dat) => {
  const array = dat.split("-");
  array[1] -= 1;
  const from = array.join("-");
  return from;
};

export { currentDate, getStartDate };
