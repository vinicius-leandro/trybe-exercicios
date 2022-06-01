const append = (cryptList) => {
  const olCrypto = document.getElementById('olCrypto');
  const li = document.createElement('li');
  li.innerHTML = `${cryptList.name} ${cryptList.symbol}: ${cryptList.priceUsd}`;
  olCrypto.appendChild(li);
};

const createPhrase = (data) => {
  data.forEach((array) => {
    const cryptoTransformed = {
      name: array.name,
      symbol: array.symbol,
      priceUsd: array.priceUsd,
    }
    append(cryptoTransformed);
  });
}

const filterCryptos = (data) => {
  const crypto = data.filter((cryptomoeda) => cryptomoeda.rank <= 10);
  createPhrase(crypto);
};

const fetchCrypto = async () => {
  const url = `https://api.coincap.io/v2/assets/`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    filterCryptos(data.data);
  } catch (error) {
    console.log(error);
  }
};

window.onload = () => fetchCrypto();