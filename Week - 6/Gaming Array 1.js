function gamingArray(arr) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      count++;
    }
  }
  if (count % 2 == 0) {
    return "ANDY";
  } else {
    return "BOB";
  }
}
