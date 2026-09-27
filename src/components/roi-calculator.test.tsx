import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RoiCalculator } from "./roi-calculator";

describe("RoiCalculator", () => {
  it("updates the visible opportunity when the practice size changes", () => {
    render(<RoiCalculator />);

    expect(screen.getByText("400", { selector: "strong" })).toBeInTheDocument();
    expect(screen.getByText("$6,000")).toBeInTheDocument();
    expect(screen.getByText("12x")).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Active patients"), {
      target: { value: "2000" },
    });

    expect(screen.getByText("800", { selector: "strong" })).toBeInTheDocument();
    expect(screen.getByText("$12,000")).toBeInTheDocument();
    expect(screen.getByText("24x")).toBeInTheDocument();
  });
});
