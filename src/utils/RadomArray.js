export function randomArray(arr,num) {
  for (let i = 0; i < num; i++) {
      let randomIndex = parseInt(num * Math.random());
      let temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
  }
  return arr;
}