const getCurrencyDynamics = async id => {
  const date = new Date(Date.now());
  const from = `${date.getFullYear() - 1}-${date.getMonth()}-${date.getDay()}`;
  const to = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
  const url = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${id}?startDate=${from}&endDate=${to}`;
  const req = await fetch(url);
  const json = await req.json();
  return json.map(el => el.Cur_OfficialRate);
};

export default getCurrencyDynamics;
