import React, { useEffect, useState } from 'react';
import './Square.css';
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={() => onClick()}>
      {value}
    </button>
  );
}

export default Square;
