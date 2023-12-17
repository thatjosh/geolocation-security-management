import { test, expect } from "@playwright/test";

const DEV_URL = "https://geolocation-security-web-client.netlify.app/";
const LOCAL_URL = "http://127.0.0.1:5173/";

test("adding_event_test", async ({ page }) => {
  await page.goto(LOCAL_URL);

  // Obtain latest Event ID before creating event
  const prev_event_id = await page
    .getByTestId("new-events-text")
    .nth(2)
    .textContent();
  const prev_id_no = prev_event_id?.match(/\d+/)?.[0];

  await page.getByText("Add event").click();
  await page
    .locator("div")
    .filter({ hasText: /^To navigate, press the arrow keys\.$/ })
    .nth(1)
    .click();
  await page
    .locator("div")
    .filter({
      hasText:
        /^Bandar SunwaySunway GeoSunway PyramidSunway South QuaySunway Lagoon$/,
    })
    .getByRole("combobox")
    .selectOption("Sunway Geo");
  await page
    .locator("div")
    .filter({ hasText: /^HighMidLow$/ })
    .getByRole("combobox")
    .selectOption("mid");
  await page
    .locator("div")
    .filter({ hasText: /^Add event$/ })
    .click();
  await page.goto(LOCAL_URL);

  // Obtain latest Event ID after creating event
  const curr_event_id = await page
    .getByTestId("new-events-text")
    .nth(2)
    .textContent();
  const curr_id_no = curr_event_id?.match(/\d+/)?.[0];

  // Assert that the latest Even ID incremented by 1
  if (curr_id_no != null && prev_id_no != null) {
    expect(parseInt(prev_id_no, 10)).toBe(parseInt(curr_id_no, 10) - 1);
  }
});
