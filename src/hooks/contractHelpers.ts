import { Contract } from "@ethersproject/contracts";
import type { Signer } from "@ethersproject/abstract-signer";
import type { Provider } from "@ethersproject/providers";
import { simpleRpcProvider } from "utils/providers";

const getContract = (abi: any, address: string, signer?: Signer | Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider;

  return new Contract(address, abi, signerOrProvider);
};

/**
 * example
 * */

// export const getSomeContract = (signer?: Signer | Provider) => {
//   return getContract(SomeAbi, SomeAddress, signer);
// };
