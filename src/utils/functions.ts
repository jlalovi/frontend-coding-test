export function getRandomColor(): string {
  let randomColor = "#";

  randomColor += Math.floor(Math.random() * (999999 - 0 + 1) + 0);
  return randomColor;
}