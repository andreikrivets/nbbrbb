import { currentDate } from "./dateCorrect";

const getCurrentRates = async (id, dat) => {
  const current = currentDate();
  let date;
  if (new Date(dat) > new Date(current)) date = current;
  else date = dat;
  const url = `https://www.nbrb.by/api/exrates/rates/${id}?ondate=${date}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
// 145, 292, 298

export default getCurrentRates;
