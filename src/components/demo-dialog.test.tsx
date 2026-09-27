import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DemoDialog } from "./demo-dialog";

describe("DemoDialog", () => {
  it("opens from the CTA and confirms a valid demo request", async () => {
    const user = userEvent.setup();
    render(<DemoDialog triggerLabel="Book a 20-minute demo" />);

    await user.click(
      screen.getByRole("button", { name: "Book a 20-minute demo" }),
    );

    expect(
      screen.getByRole("dialog", { name: "See RecallCall in action" }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("What would you like to see?")).toHaveValue("both");

    await user.type(screen.getByLabelText("Your name"), "Dr. Chen");
    await user.type(
      screen.getByLabelText("Practice email"),
      "doctor@example.com",
    );
    await user.type(
      screen.getByLabelText("Practice name"),
      "Chen Family Dental",
    );
    await user.click(screen.getByRole("button", { name: "Request my demo" }));

    expect(
      screen.getByRole("status", { name: "Demo requested" }),
    ).toHaveTextContent("You’re on the list, Dr. Chen.");
  });
});
