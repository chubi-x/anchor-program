import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { assert } from "chai";
import { AnchorProgram } from "../target/types/anchor_program";
const { SystemProgram } = anchor.web3;

describe("anchor-program", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.local()
  anchor.setProvider(provider);
  let _myAccount = null;

  it("Is initialized!", async () => {
    const program = anchor.workspace.AnchorProgram as Program<AnchorProgram>;
    const myAccount = anchor.web3.Keypair.generate();

    await program.rpc.initialize({
      accounts: {
        myAccount: myAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      },
      signers: [myAccount]
    })
    // Fetch the newly created account from the cluster.
    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    // Add your test here.
    assert.equal(account.data, 0);
    _myAccount = myAccount

  });

  it("Update Test", async () => {
    const myAccount = _myAccount;

    const program = anchor.workspace.AnchorProgram as Program<AnchorProgram>;
    
    await program.rpc.update(new anchor.BN(4),{
      accounts: {
        myAccount: myAccount.publicKey}
    })
    // Fetch the newly created account from the cluster.
    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    // Add your test here.
    assert.equal(account.data, 4);
    // const tx = await program.methods.update([data: new anchor.BN(4)]).rpc();
    // console.log("Your transaction signature", tx);
  });
  it("Increment Test", async () => {
    const myAccount = _myAccount;

    const program = anchor.workspace.AnchorProgram as Program<AnchorProgram>;


    await program.rpc.increment({
      accounts: {
        myAccount: myAccount.publicKey}
    })
    // Fetch the newly created account from the cluster.
    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    // Add your test here.
    assert.equal(account.data,5);
    // const tx = await program.methods.update([data: new anchor.BN(4)]).rpc();
    // console.log("Your transaction signature", tx);
  });
  it("Decrement Test", async () => {
    const myAccount = _myAccount;

    const program = anchor.workspace.AnchorProgram as Program<AnchorProgram>;


    await program.rpc.decrement({
      accounts: {
        myAccount: myAccount.publicKey}
    })
    // Fetch the newly created account from the cluster.
    const account = await program.account.myAccount.fetch(myAccount.publicKey);

    // Add your test here.
    assert.equal(account.data,4);
    // const tx = await program.methods.update([data: new anchor.BN(4)]).rpc();
    // console.log("Your transaction signature", tx);
  });
});
