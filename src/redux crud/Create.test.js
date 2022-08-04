import { render, screen, fireEvent } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { Route } from "react-router-dom";
import Create from "./Create";
// import configureStore from "redux-mock-store";

test("create adhar", () => {
//   const store = {};

  render(
    // <Provider store={store}>
    //   <Route>
        <Create />
    //   </Route>
    // </Provider>
  );

  const name = screen.getByTestId("name");
  // const fname   = screen.getByTestId("fathername");
  // const anumber = screen.getByTestId("adharnumber");
  // const mnumber = screen.getByTestId("mobilenumber");
  // const dob     = screen.getByTestId("dob");

  // fireEvent.click(anumber);
  // fireEvent.click(dob);
  // fireEvent.click(mnumber);
  // fireEvent.click(name);
  // fireEvent.click(fname);
  fireEvent.change(name, { target: { name: "name", value: "kingston" } });
  expect(name.value).toBe("kingston");
});
