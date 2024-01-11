function binarySearch(guessNumber: number, numArr: number[]) {
  //first mid of array

  let firstMidValue = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (firstMidValue == guessNumber) {
      console.log("guess found", firstMidValue);
      break;
    }

    firstMidValue = numArr[numArr.length / 2 - 1];

    if (firstMidValue > guessNumber) {
      let findIndex = numArr.indexOf(firstMidValue);
      let leftSlicedArr = numArr.slice(0, findIndex);

      firstMidValue = leftSlicedArr[leftSlicedArr.length / 2 - 1];
    } else if (firstMidValue == guessNumber) {
      console.log(new Date().getMilliseconds());
      return {
        message: "successfully found guess number",
      };
    } else {
      let findIndex = numArr.indexOf(firstMidValue);
      let rightSlicedArr = numArr.slice(findIndex, numArr.length - 1);

      firstMidValue = rightSlicedArr[rightSlicedArr.length / 2 - 1];
    }
  }
}

binarySearch(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
