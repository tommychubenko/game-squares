export const getInfo = async () => {
  const response = await fetch('https://demo7919674.mockable.io/').then(r =>
    r.json()
  );
  return response;
};
