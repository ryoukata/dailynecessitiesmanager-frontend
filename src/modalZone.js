import React from 'react';
import { useState } from "react";
import { Modal } from "./modal";

export function ModalZone() {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);

  return (
    <>
      <div>
        <p>モーダル</p>
        <button onClick={showModal}>モーダルウィンドウ</button>
        <Modal show={show} setShow={setShow} content={"Change Contents from Parent Component."} />
      </div>
    </>
  )
}