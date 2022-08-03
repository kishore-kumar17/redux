import { render, screen, fireEvent } from "@testing-library/react";
import CounterApp from "./CounterApp";

test("increment add", () => {
  render(<CounterApp />);

  const count = screen.getByTestId("count");
  const addincrement = screen.getByTestId("increment");
//   const del =screen.getByTestId("decrement");

  fireEvent.click(addincrement);
//   fireEvent.click(del);



  expect(count).toHaveTextContent("5");
});
