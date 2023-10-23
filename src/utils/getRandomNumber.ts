function getRandomNumber(maxNumber: number): number {
  const numbers: number[] = [];
  for (let i = 1; i <= maxNumber; i++) {
    numbers.push(i);
  }

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers[0];
}
