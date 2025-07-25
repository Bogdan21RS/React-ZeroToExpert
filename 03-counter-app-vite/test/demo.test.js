describe("Demo tests", () => {
  test("This test should not fail", () => {
    const message1 = "Hola mundo";

    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
