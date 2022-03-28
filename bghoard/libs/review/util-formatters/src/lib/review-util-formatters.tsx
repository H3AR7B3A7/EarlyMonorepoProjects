export const currencyFormat = (amount: number) => {
  return `$${amount.toFixed(2)}`;
}

export const ratingFormat = (rating: number) => {
  return `${rating.toFixed(0)}/5`;
}
