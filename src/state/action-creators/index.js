export const depositMoney = (amount) => {
  //we will return a function jo ki ek function lega.
  return (dispath) => {
    dispath({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  //we will return a function jo ki ek function lega.
  return (dispath) => {
    dispath({
      type: "withdraw",
      payload: amount,
    });
  };
};
