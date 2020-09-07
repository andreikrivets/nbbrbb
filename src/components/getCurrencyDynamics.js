const getCurrencyDynamics = async (id) => {
  const date = new Date(Date.now());
  const from = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const to = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  console.log(from, to);
  const url = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${id}?startDate=${from}&endDate=${to}`;
  const req = await fetch(url);
  const json = await req.json();
  return json.map((el) => [
    el.Date.slice(0, 10),
    +el.Cur_OfficialRate.toFixed(3),
  ]);
};

export default getCurrencyDynamics;
