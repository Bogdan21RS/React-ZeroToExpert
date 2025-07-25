import { render, screen } from "@testing-library/react";
import FirstApp from "../src/firstApp";

describe("Pruebas de FirstApp", () => {
  const title = "Hola Mundo";
  test("Should match with the snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Should show the message 'Hello World' ", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Should show the title in h1", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });
});
