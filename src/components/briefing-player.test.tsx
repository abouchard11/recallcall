import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { BriefingPlayer } from "./briefing-player";

describe("BriefingPlayer", () => {
  it("reveals the sample owner briefing on demand", async () => {
    const user = userEvent.setup();
    render(<BriefingPlayer />);

    const trigger = screen.getByRole("button", {
      name: "Play sample nightly briefing",
    });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    await user.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region", { name: "Sample nightly briefing" })).toHaveTextContent(
      "5 booked",
    );
  });
});
