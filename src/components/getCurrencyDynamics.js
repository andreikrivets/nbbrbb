import { currentDate, getStartDate } from "./dateCorrect";

const getCurrencyDynamics = async (id, dat) => {
  const current = currentDate();
  let date;
  if (new Date(dat) > new Date(current)) date = current;
  else date = dat;
  const from = getStartDate(date);
  const url = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${id}?startDate=${from}&endDate=${date}`;
  const req = await fetch(url);
  const json = await req.json();
  return json.map((el) => [
    el.Date.slice(0, 10),
    +el.Cur_OfficialRate.toFixed(3),
  ]);
};

export default getCurrencyDynamics;
