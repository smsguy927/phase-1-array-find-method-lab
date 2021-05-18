
function superbowlWin(arr) {
  let result = arr.find((x) => x.result === "W");
  if(result !== undefined) {
    return result["year"]
  }
}
