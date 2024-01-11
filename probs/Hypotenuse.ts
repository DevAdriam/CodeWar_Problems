let findHypotenuse = (a: number, b: number): string | number => {
  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    return "cannot be calcuated with invalid inputs";
  }

  //equation
  // (a+b)(a-b)=c2

  let lefthandSize = Math.pow(a, a) + Math.pow(b, b);

  return +Math.sqrt(lefthandSize).toFixed(2);
};

console.log(findHypotenuse(1, 3));
