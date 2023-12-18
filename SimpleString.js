function stringExpansion(s) {
  let strArr = s.split("");
  let refilterArr = [];
  let text = "";

  const findOnlyNumbersArr = strArr
    .map((value, index) => ({ value, index }))
    .filter((item) => !isNaN(item.value));

  if (findOnlyNumbersArr.length === 0) {
    return s;
  } else if (findOnlyNumbersArr.length === 1) {
    let thatNumber = findOnlyNumbersArr[0];
    let splicedArr = strArr.splice(thatNumber.index, strArr.length);
    let restArr = strArr.splice(0, thatNumber.index);
    let comboArr = [];
    let testText = "";

    for (let i = 0; i < splicedArr.length - 1; i++) {
      comboArr.push([splicedArr[0], splicedArr[i + 1]]);
    }

    for (let i = 0; i < comboArr.length; i++) {
      for (let j = 0; j < comboArr[i][0]; j++) {
        testText += comboArr[i][1];
      }
    }
    if (restArr.length) {
      return (text += `${restArr[0]}${testText}`);
    } else {
      return (text += testText);
    }
  } else {
    for (let i = 0; i < strArr.length; i++) {
      if (!isNaN(strArr[i]) && isNaN(strArr[i + 1])) {
        refilterArr.push([strArr[i], strArr[i + 1]]);
      }
    }

    for (let i = 0; i < refilterArr.length; i++) {
      for (let j = 0; j < refilterArr[i][0]; j++) {
        text += refilterArr[i][1];
      }
    }

    return text;
  }
}

console.log(stringExpansion("3abc"));
console.log(stringExpansion("3D2a5d2f"));
console.log(stringExpansion("0d0a0v0t0y"));
console.log(stringExpansion("3d332f2a"));
console.log(stringExpansion("abcde"));
console.log(stringExpansion("a2bcde"));
