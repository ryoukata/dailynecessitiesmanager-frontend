// APIを呼び出す関数
export async function getDailyItemslist() {
  const url = 'http://localhost:8080/items';  // Java版のURL
  // const url = 'http://localhost:8081';
  const response = await fetch(url);
  return response.json();
}

export async function registDailyItem(addItemName, addItemCategory) {
  const jsonBody = {"name": addItemName, "category": addItemCategory};
  const params = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(jsonBody)
  };
  const url = 'http://localhost:8080/insert/item';  // java版のURL
  const response = await fetch(url, params);
  return response.json();
}