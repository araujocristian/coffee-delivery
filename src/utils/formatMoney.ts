export function formatMoney(value: number) {
  return value.toLocaleString("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
