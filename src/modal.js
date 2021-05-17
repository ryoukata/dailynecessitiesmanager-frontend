import React from 'react';
import { useState } from "react";
import './Modal.css';

// hooksでのコンポーネントの値の受け取りには引数を指定
export function Modal({show, setShow, content}) {
    const closeModal = () => setShow(false);

    if(show) {
      return (
        <>
        <div id="overlay" onClick={closeModal} >
          <div id="modal-content" onClick={(e) => e.stopPropagation()} >
            <p>{content}</p>
            <p><button onClick={closeModal}>Close</button></p>
          </div>
        </div>
        </>
      )
    } else {
      return null;
    }
}