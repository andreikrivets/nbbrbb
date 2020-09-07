const getCurrentRates = async id => {
  const url = `https://www.nbrb.by/api/exrates/rates/${id}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
// 145, 292, 298

export default getCurrentRates;
