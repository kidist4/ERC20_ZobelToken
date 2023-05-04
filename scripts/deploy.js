const hre = require("hardhat");

async function main() {
  const ZobelToken = await hre.ethers.getContractFactory("ZobelToken");
  const zobelToken = await ZobelToken.deploy();

  await zobelToken.deployed();

  console.log("Zobel Token deployed: ", zobelToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});