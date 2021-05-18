
function superbowlWin(arr) {
  let result = arr.find((x) => x.result === "W");
  if(result.year !== undefined) {
    return result.year;
  }
}
