// APIを呼び出す関数
export async function getDailyItemslist() {
  var headers = new Headers();
  headers.append('method', 'GET');
  const params = {
    mode: 'cors',
    headers
  };
  // Nginxでプロキシしている場合、ホストとポートはNginxが動くサーバー名を指定。これがOriginヘッダーに指定される
  const url = 'http://localhost:8080/items';
  const response = await fetch(url, params);
  return response.json();
}

export async function registDailyItem(addItemName, addItemCategory) {
  const jsonBody = {"name": addItemName, "category": addItemCategory};
  const params = {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(jsonBody)
  };
  const url = 'http://localhost:8080/insert/item';
  const response = await fetch(url, params);
  return response.json();
}