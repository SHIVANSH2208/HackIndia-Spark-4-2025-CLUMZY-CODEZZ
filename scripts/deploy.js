const { ethers } = require("hardhat");
//0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
async function main() {
    const CrowdFunding = await ethers.getContractFactory("CrowdFunding"); // Ensure this matches your contract name
    const crowdfunding = await CrowdFunding.deploy(); // Deploy contract

    await crowdfunding.waitForDeployment(); // Correct function instead of `deployed()`

    console.log("Crowdfunding contract deployed at:", crowdfunding.target); // Use `target` instead of `address`
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
