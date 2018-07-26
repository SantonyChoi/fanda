const Fanda = artifacts.require("Fanda");
const TokenManager = artifacts.require('TokenManager');

contract('TokenManager', (accounts) => {

  beforeEach(async () => {
    TM = await TokenManager.new();
    const tokenAddr = await TM.tokenAddr();
    
    FD = await Fanda.at(tokenAddr);
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
  });

  it("mint a fanda", async () => {
    let info = await TM.getFanda(1);
    assert.equal(info[5], 0);   

    await TM.mintFanda(1);
    // await FD.mint(accounts[0], 101, "nothing");

    info = await TM.getFanda(1);
    assert.equal(info[5], 1); 

    const total_supply = await FD.totalSupply();
  });
  
  it("get balance of", async () => {
    await TM.mintFanda(1);
    let balance = await FD.balanceOf(accounts[0]);
    assert.equal(balance, 1);   
  });
  
  it("tokensOfOwner", async () => {
    await TM.mintFanda(1);
    let tokens = await TM.tokensOfOwner(accounts[0]);
    
    assert.equal(tokens[0], 1000);
    assert.equal(tokens[1], undefined);

    await TM.mintFanda(1);

    tokens = await TM.tokensOfOwner.call(accounts[0]);
    assert.equal(tokens[0], 1000);
    assert.equal(tokens[1], 1001);
    assert.equal(tokens[2], undefined);
  });
});
