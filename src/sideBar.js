import React from 'react';
import { useState } from "react";
import { Drawer } from "@material-ui/core";

export function SideBar() {

  const [open, setOpen] = useState(false);

  const changeSideBar = (() => {
    setOpen(!open);
    console.log(open);
  });

  // ローカルで試したい場合、index.htmlのbundle.jsを読み込むコードをコメントアウトしないとonClickが動かない
  return (
    <> 
      <p>サイドバー</p>
      <button onClick={changeSideBar}>サイドバー</button>
      <Drawer anchor="left" open={open} width={200} onClose={changeSideBar}>
        <p>サイドバー</p>
      </Drawer>
    </>
  )
}