import { Chains, Chain, Gas } from "./types/chains"

/**
 * Initialize initial Cosmos chains into local storage from the chain registry.
 *
 * @param args - The request handler args as object.
 * @returns The result of the method (boolean).
 * @throws If an error occurs.
 */
export const initializeChains = (): Chains => {
    let chains: Chains = {
        chains: [
          {
            chain_id: "cosmos-4",
            name: "Cosmos Hub",
            rpc: "",
            coin_type: "",
            prefix: "",
            gas: {
              default: 100000,
              denom: "uatom",
            },
          }
        ]
      }
    return chains
}