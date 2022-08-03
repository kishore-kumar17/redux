import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CounterApp = () => {
  const [count, setcount] = useState(0);
  const plus = () => {
    setcount((added) => added + 5);
  };
  const min = () => {
    setcount((del) => del - 5);
  };

  return (
    <div className="body">
      <h1>TEST CASE</h1>

      <br />
      <Button onClick={plus} data-testid="increment">
        +
      </Button>
      <span data-testid="count"> CLICK {count} TIMES</span>
      <Button onClick={min} data-testid="decrement">
        -
      </Button>
    </div>
  );
};

export default CounterApp;
