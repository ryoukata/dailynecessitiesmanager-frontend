// APIを呼び出す関数
export async function getDailyItemslist() {
  const url = 'http://localhost:8081';
  const response = await fetch(url);
  return response.json();
}