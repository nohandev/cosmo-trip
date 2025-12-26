const formatterToBrl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export const formatCurrencyBRL: (value: number) => string  = (value) => formatterToBrl.format(value)
