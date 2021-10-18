export const IncNUmber = (num = 5) => {
  return { type: "ADD", payload: num };
};
export const DecNUmber = (num) => {
  num = 5;
  return { type: "SUB", payload: num };
};
