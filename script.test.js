const { oneLet, temperature, myNeatArray } = require("./script.js");



describe("Troubleshooting 3", () => {
  test("oneLet exists", () => {
    expect(oneLet).not.toBeUndefined();
  });
  test("temperature exists", () => {
    expect(temperature).not.toBeUndefined();
  });
  test("myNeatArray Exists", () => {
    expect(myNeatArray).not.toBeUndefined();
  });
  test("myNeatArray is an Array", () => {
    expect(Array.isArray(myNeatArray)).toBeTruthy();
  });
});


