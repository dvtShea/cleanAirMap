const aqicnKey = process.env.REACT_APP_AQICN_KEY;

export default async (search, signal) => {
  const res = await fetch(
    `https://api.waqi.info/search/?token=${aqicnKey}&keyword=${search}`,
    { signal: signal }
  );

  return res;

  // res.json().then(response => {
  //   return response.data;
  // });
};
