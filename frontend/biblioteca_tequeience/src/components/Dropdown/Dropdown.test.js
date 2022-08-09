import {Dropdown} from "./Dropdown";
// import "@testing-library/jest-dom";
// import {scren, render} from "@testing-library/react"
// import userEvent from '@testing-library/user-event';
//Importando do test index

import {render, screen, userEvent} from "../../tests"; 

//definir variaveis
const title = "Selecione aqui";
const options = ["Categorias","Favoritos", "opções", "Contato"];

describe('Dropdown', () => {
//Se está fechado
  it('should start closed', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />)

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    
  });
  
});
