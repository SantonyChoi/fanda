const TokenManager = artifacts.require('TokenManager');

contract('TokenManager', (accounts) => {

  beforeEach(async () => {
    TM = await TokenManager.new();
  });

  it("check if it's a correct manager contract", async () => {
    const ret = await TM.isTokenManager();
    assert.equal(ret, true);
  });

  it("open a new fanda", async () => {
    let fandaCount = await TM.fandaCount();
    assert.equal(fandaCount, 0);

    await TM.openNewFanda(1, 1000, 100, "https://www.github.com/");

    fandaCount = await TM.fandaCount();
    assert.equal(fandaCount, 1);

    const info = await TM.getFanda(1);
    console.log(info);
  });

  it("mint a fanda", async () => {
    let info = await TM.getFanda(1);
    assert.equal(info[5], 0)   

    await TM.mintFanda(1);

    info = await TM.getFanda(1);
    assert.equal(info[5], 1)   
  });
});
