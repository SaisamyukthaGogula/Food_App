import Contact from "../Contact";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load a Contact component",()=>{ 

    render(<Contact/>);

    const heading= screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component",()=>{

    render(<Contact/>);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();

});

test("Should check 2 input text from contact component", ()=>{
    
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");
    
    console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2); 

})

