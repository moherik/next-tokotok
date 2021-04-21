export const convertNumberToRP = (value: number) => {
  var rp = "";
  var splitNumber = value.toString().split("").reverse().join("");
  for (var i = 0; i < splitNumber.length; i++)
    if (i % 3 == 0) rp += splitNumber.substr(i, 3) + ".";
  return (
    "Rp. " +
    rp
      .split("", rp.length - 1)
      .reverse()
      .join("")
  );
};

export const convertRpToNumber = (rp: string) => {
  return parseInt(rp.replace(/,.*|[^0-9]/g, ""), 10);
};
