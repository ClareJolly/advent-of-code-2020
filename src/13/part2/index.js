const modInverse = (a, m) => {
  const g = gcd(a, m);

  if (g === 1n) {
    return power(a, m - 2n, m);
  }
};

const power = (x, y, m) => {
  if (y === 0n) return 1n;

  let p = power(x, y / 2n, m) % m;
  p = (p * p) % m;

  return y % 2n === 0n ? p : (x * p) % m;
};

const gcd = (a, b) => {
  return a === 0n ? b : gcd(b % a, a);
};

const part2 = (inputData) => {
  const data = inputData[1].split(',').map((bus) => {
    return Number(bus) ? BigInt(bus) : bus;
  });

  const withOffset = data
    .map((id, i) => {
      if (typeof id === 'bigint') return [id, BigInt(i)];
    })
    .filter((id) => id);

  let sum = 1n;
  withOffset.forEach((bus) => (sum *= bus[0]));
  const Ni = withOffset.map((bus) => sum / bus[0]);
  const b = withOffset.map((bus, i) => (i === 0 ? 0n : bus[0] - bus[1]));
  const x = withOffset.map((item, i) => modInverse(Ni[i], item[0]));
  const bnx = Ni.map((item, i) => item * b[i] * x[i]);

  const finalSum = bnx.reduce((acc, item) => acc + item);
  return finalSum - (finalSum / sum) * sum;
};
export default part2;
