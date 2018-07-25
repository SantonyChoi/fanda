const TokenManager = artifacts.require('TokenManager');

contract('TokenManager', (accounts) => {

  beforeEach(async () => {
    TM = await TokenManager.new();
  });

  it('check if it\'s a correct manager contract', async () => {
    const ret = await TM.isTokenManager();
    assert.equal(ret, true);
  });
});
