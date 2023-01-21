const bitcoin = async () => {
    try {
      const buscaPreco = await fetch('https://api.coincap.io/v2/assets/bitcoin');
      const { data } = await buscaPreco.json();
      console.log(`O preço do Bitcoin - ${data.symbol} em dólares hoje é $ ${data.priceUsd}`);
    } catch (err) {
      console.error(err);
    }
  };
  bitcoin();