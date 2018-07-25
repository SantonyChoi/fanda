// SDK is imported into the global namespace as bitski
const bitskiInstance = new bitski.Bitski('655c5046-b608-4223-81b6-484f57a2ec7c');
window.web3 = bitskiInstance.getWeb3('rinkeby');
document.addEventListener('DOMContentLoaded', function() {
  bitskiInstance.getUser().then(user => {
    if (user && !user.expired) {
      //already logged in
    } else {
      const containerElement = document.querySelector('#bitski-button');
      const connectButton = bitskiInstance.getConnectButton(containerElement);
      connectButton.completion = function(error, user) {
        containerElement.removeChild(connectButton.element);
      }
    }
  });
});