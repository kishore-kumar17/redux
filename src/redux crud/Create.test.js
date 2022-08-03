import { render ,screen,fireEvent} from "@testing-library/react";
import Create from "./Create";


test( "create adhar",()=>{
    render(<Create />)


    const name =screen.getByTestId("name");
    const fname = screen.getAllByAltText("fathername");
    const anumber = screen.getAllByAltText("adharnumber");
    const mnumber = screen.getAllByAltText("mobilenumber");
    const dob = screen.getAllByAltText("dob");

    fireEvent.click(anumber);  
    fireEvent.click(dob);
    fireEvent.click(mnumber);
    fireEvent.click(name);
    fireEvent.click(fname);





})