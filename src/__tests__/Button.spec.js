import React from "react";
import { create } from "react-test-renderer";
const Button = () => <h1>Nothing to do for now</h1>;
describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button).toBe(<h1>Nothing to do for now</h1>);
  });
});
