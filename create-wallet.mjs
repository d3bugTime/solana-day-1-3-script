import {
    address,
    generateKeyPairSigner,
    createSolanaRpc,
    devnet,
} from "@solana/kit";

const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
const wallet = await generateKeyPairSigner();

console.log("Wallet address:", wallet.address);
console.log(
    "\n--- Go to https://faucet.solana.com/ and airdrop SOL to this address ---",
);
console.log(
    "--- Then run this script again with the same address to check the balance ---\n",
);

// To check a specific address you've already funded, replace the line below:
const { value: balance } = await rpc
    .getBalance(address("8GYSHopVFWMQ9A9qd2ecztiEpn8L6yRzJGkR4W9K5ChA"))
    .send();
// const { value: balance } = await rpc.getBalance(wallet.address).send();
const balanceInSol = Number(balance) / 1_000_000_000;

console.log(`Balance: ${balanceInSol} SOL`);
