import axios from "axios";
import { expect } from "chai";

describe("GET API Request Tests", () => {
  it("should be able get user list", async () => {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    console.log("Page:     ", res.data.page);
    console.log("Per page: ", res.data.per_page);
    expect(res.data.page).equal(2);
    expect(res.data.per_page).equal(6);
  });
});
