import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("offers a keyboard-accessible path from the main navigation to the core sections", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Your recall list isn’t going to call itself.",
      }),
    ).toBeInTheDocument();

    const navigation = screen.getByRole("navigation", {
      name: "Primary navigation",
    });
    expect(within(navigation).getByRole("link", { name: "How it works" })).toHaveAttribute(
      "href",
      "#how-it-works",
    );
    expect(within(navigation).getByRole("link", { name: "Aftercare" })).toHaveAttribute(
      "href",
      "#aftercare",
    );
    expect(within(navigation).getByRole("link", { name: "Pricing" })).toHaveAttribute(
      "href",
      "#pricing",
    );
    expect(within(navigation).getByRole("link", { name: "FAQ" })).toHaveAttribute(
      "href",
      "#faq",
    );
  });

  it("offers the paper-to-digital aftercare product beside RecallCall", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "A paper handout becomes a living recovery guide.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Billy Be Good", { selector: ".recovery-brand" })).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "See both products" })).toHaveLength(2);
  });
});
