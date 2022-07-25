import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "./Slice";

const Counter = () => {
  const counterApp = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        variant="outline-warning"
        onClick={() => dispatch(CounterActions.add)}
      >
        ADD
      </Button>
      <span>{counterApp}</span>_
    </div>
  );
};
export default Counter;
