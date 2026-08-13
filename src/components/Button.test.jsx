import { render, screen } from "@testing-library/react";
import Botao from "./Button";

test("renderiza o texto do botao", () => {
    render(<Botao texto="Salvar" />)

    expect(screen.getByText("Salvar")).toBeInTheDocument()
})

test('não quebra quando texto é vazio', () => {
    const { rerender } = render(<Botao texto="" />)
    expect(screen.getByRole("button")).toHaveTextContent('')
    rerender(<Botao/>)
    expect(screen.getByRole("button")).toBeInTheDocument()
})