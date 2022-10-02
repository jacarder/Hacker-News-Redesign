import { render, screen } from "@testing-library/react";
import App from "./App";
// TODO find out why test erroring
// Cannot find module 'react' from '../../../node_modules/@emotion/styled/dist/emotion-styled.cjs.dev.js'
test("renders page", () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 4 })
  expect(heading).toStrictEqual("Hacker News");
});
