import { render } from "@/test/testUtils";

import { SomeComponent } from "./index";

describe("SomeComponent", () => {
  it("should renders the Component", () => {
    const { getByText } = render(<SomeComponent />);
    const component = getByText("something");

    expect(component).toBeInTheDocument();
  });
});
