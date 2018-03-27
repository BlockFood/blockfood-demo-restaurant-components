const formatter = Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

export const formatCurrency = amount => formatter.format(amount);
