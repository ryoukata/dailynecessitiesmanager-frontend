import { useState } from "react";
import { registDailyItem } from "./dailyNecessitiesItems-api.js";

export function AddItem() {
  // 入力欄のアイテム名の状態を管理
  const [addItemName, setAddItemName] = useState('');
  // 入力欄のカテゴリーの状態を管理
  const [addItemCategory, setAddItemCategory] = useState('');
  // アイテム登録API呼び出しの結果を管理
  const [registItem, setRegistItem] = useState({});

  // 入力欄のアイテム名に対してリアルタイム変更を確認のための関数
  const itemNameChange = e => setAddItemName(e.target.value);
  // 入力欄のカテゴリー名に対してリアルタイム変更を確認のための関数
  const itemCategoryChange = e => setAddItemCategory(e.target.value);
  
  // API呼び出しのたびに登録したアイテムの内容を変更
  const resitItem = (() => {
    registDailyItem(addItemName, addItemCategory).then(data => {
          setRegistItem(data);
        });
  });

  return (
    <>
      <h2>Input: {addItemName} Category: {addItemCategory}</h2>
      アイテム名：<input value={addItemName} onChange={itemNameChange} />  カテゴリー名：<input value={addItemCategory} onChange={itemCategoryChange} />
      <p>id={registItem.id} name={registItem.name} category={registItem.category}</p>
      <button onClick={resitItem}>登録</button>
    </>
  )
}