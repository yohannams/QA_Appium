const HomePage = require("../pageobjects/home.page");
const { delay } = require("../../helpers/delayHelper");

describe("Mobile App Test Suite", () => {
  it("Follow & Message Account", async () => {
    await delay(5000);
    await HomePage.followAndMessageAccount();
  });
  it("Follow Account", async () => {
    await delay(5000);
    await HomePage.followAccount();
  });
  it("Message Account", async () => {
    await delay(5000);
    await HomePage.messageAction();
  });
});
