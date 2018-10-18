export const isNegative = (string) =>
{
    return string.charAt(0) === '-';
}

export const toCurrency = (string, currency) =>
{
    if (string.charAt(0) === '-')
    {
        return '-' + currency + string.substr(1, string.length);
    }

    return currency + string;
}