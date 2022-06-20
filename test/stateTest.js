const StateVar = artifacts.require("StateVar");

contract("StateVar", () => {
  it("Should initialise the state variable", async () => {
    const stateVar = await StateVar.deployed();
    const result = await stateVar.rollNumber();
    assert(result.toNumber() === 10);
  });
});
