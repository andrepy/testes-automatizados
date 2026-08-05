import { render, screen } from "@testing-library/react";
import Botao from "./Button";

test("renderiza o texto do botao", () => {
    render(<Botao texto="Salvar" />)

    expect(screen.getByText("Salvar")).toBeInTheDocument()
})