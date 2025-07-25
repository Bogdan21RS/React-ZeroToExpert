import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

const initialValue = 100;
describe("Pruebas de CounterApp", () => {
  test("Should match snapshot", () => {
    const { container } = render(<CounterApp value={100} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the value initialValue", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test("should increment with the +1 button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("should decrement with the -1 button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("should reset to initialValue when pressing reset button", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("reset"));
    expect(screen.getByText("100")).toBeTruthy();
  });
});
