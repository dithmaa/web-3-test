export const getShortAddress = (address: string) => {
  const shortAddress = address?.slice(0, 6);
  return shortAddress;
};
