const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinsInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}
export function fetchTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}
export function fetchPriceData(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
}
