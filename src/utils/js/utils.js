export const isNegative = (num) =>
{
    // // return string.charAt(0) === '-';

    return num < 0;
}

export const toCurrency = (num, currency) =>
{
    // if (string.charAt(0) === '-')
    // {
    //     return '-' + currency + num.toString().substr(1, string.length);
    // }

    if (isNegative(num))
    {
        return '-' + currency + num.toString().substr(1, num.toString().length);
    }

    return currency + num.toString();
}