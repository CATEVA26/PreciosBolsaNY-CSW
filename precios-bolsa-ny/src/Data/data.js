let nombreEmpresas = [
    { name: 'Apple', ticker: 'AAPL' },
    { name: 'Microsoft', ticker: '	MSFT' },
    { name: 'Amazon.com', ticker: 'AMZN' },
    { name: 'NVIDIA', ticker: 'NVDA' },
    { name: 'Meta Platforms', ticker: 'META' },
    { name: 'Tesla', ticker: 'TSLA' },
    { name: 'Walmart', ticker: 'WMT' },
    { name: 'Exxon Mobil', ticker: 'XOM' },
    { name: 'Mastercard', ticker: 'MA' },
    { name: 'Eli Lilly', ticker: 'LLY' },
    { name: 'Alphabet A', ticker: 'GOOGL' },
];

let obtenerPreciosActuales = () => {
    const resultados =  Promise.all(
        nombreEmpresas.map(async function (empresa) {
            const symbol = empresa.ticker;
            const urlPrecio = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=clls8cpr01qske4s3m10clls8cpr01qske4s3m1g`;
            const res = await fetch(urlPrecio);
            const datos = await res.json();
            return {
                datos,
                name: empresa.name,
                ticker: empresa.ticker
            };
        })
    );
    return resultados;
};

export default obtenerPreciosActuales;