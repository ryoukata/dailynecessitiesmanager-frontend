import { useEffect, useState } from "react";
import { getDailyItemslist } from "./dailyNecessitiesItems-api.js";

export function DailyNecessitiesItemsList() {
  // レスポンスがJSONの配列のため、配列の初期化を行う
  const [dailyNecessitiesItems, setDailyNecessitiesItems] = useState([]);

  useEffect(() => {
    getDailyItemslist().then(data => {
      setDailyNecessitiesItems(data);
    });
  }, []);

  return (
    <>
      <h2>日用品リスト</h2>
      <div>
        <ul>
        {dailyNecessitiesItems.map((item) => {
          console.log(item)
          return <li>id={item.id} name={item.name} category={item.category}</li>
        })}
        </ul>
      </div>
    </>
  );
}

// function ItemList(props) {
//   const items = props.dailyNecessitiesItems;
//   const itemList = items.map((item) => <li>id={item.id} name={item.name} category={item.category}</li>);
//   return (<ul>{itemList}</ul>);
// }