# Anchor Solana Progrm
Anchor is a very beneficial framework that abstracts away a lot of boilerplate code when writing Solana programs.       
The anchor program was created by running    
`` anchor init anchor_program``   
## Getting started
Make sure you're on localhost by running ```solana config set --url localhost```   
You also have to make sure you have a solana wallet that is not empty. if you don't have one you can run ``` solana-keygen new ```   
Run ```airdrop 100 ``` to airdrop yourself some SOL to deploy the program   

## Details
This particular program runs 4 simple instructions. it initializes an unsigned integer, updates it to a value specified in the front end, increments, and decrements it. 
The focus on front end code in this prorgam was on writing tests to make sure the program works as expected.   

## Build and deploy the program
 
After you clone the repo run the following command in the directory:   
`` anchor build ``
After building anchor generates a keypair and shared object file for the program in the target/deploy directory. You need to run      
```solana address -k <KEYPAIR PATH> ``` to generate a public key for the program. You will copy the generated public key and paste it into the ```declare_id!()``` macro in
the ```lib.rs``` file in ```src``` folder.   
Now you will run  ```anchor build``` again   
Next you will run ```anchor deploy``` to deploy the program

### Front end tests
As stated earlier, their is no front end code but rather tests to make sure the program acts as expected    
To run the tests, run ```anchor test``` in your terminal.
