import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("GifExpertApp", () => {
  test("should show another category when typing an input", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "One Piece" } });
    fireEvent.submit(form);

    const cards = screen.getAllByRole("heading", { level: 3 });

    expect(cards.length).toBeGreaterThan(0);

    fireEvent.input(input, { target: { value: "Hunter X Hunter" } });
    fireEvent.submit(form);

    const newCards = screen.getAllByRole("heading", { level: 3 });

    expect(newCards.length).toBeGreaterThan(1);
  });

  test("should add a new category in front of the previous after an input", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Hunter X Hunter" } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: "One Piece" } });
    fireEvent.submit(form);

    const newCards = screen.getAllByRole("heading", { level: 3 });

    expect(newCards[0].textContent).toBe("One Piece");
  });

  test("should not add a new category if it already exists", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "Hunter X Hunter" } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: "One Piece" } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: "One Piece" } });
    fireEvent.submit(form);

    const newCards = screen.getAllByRole("heading", { level: 3 });

    expect(
      newCards.filter((category) => category.textContent === "One Piece").length
    ).toBe(1);
  });
});
