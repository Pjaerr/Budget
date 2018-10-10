export const isNegative = (string) =>
{
    return string.charAt(0) === '-';
}

export const toCurrency = (string, currency) =>
{
    return currency + string;
}