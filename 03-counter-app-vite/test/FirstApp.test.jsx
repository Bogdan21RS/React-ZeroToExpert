import { render } from "@testing-library/react";
import FirstApp from "../src/firstApp";

describe("Pruebas de FirstApp", () => {
  // test("Should match with the snapshot", () => {
  //   const title = "Hola Mundo";
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test("Should show the title on h1", () => {
    const title = "Hola Mundo";
    const { container, getByText } = render(<FirstApp title={title} />);

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
    expect(getByText(title)).toBeTruthy();
    expect(getByText(title)).toBeTruthy();
  });
});
