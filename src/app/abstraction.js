export const formatNumber = (num) => {
  return Math.abs(num) <= 999
    ? Math.sign(num) * Math.abs(num)
    : Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k'
}