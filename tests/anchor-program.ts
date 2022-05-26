import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorProgram } from "../target/types/anchor_program";

describe("anchor-program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorProgram as Program<AnchorProgram>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
