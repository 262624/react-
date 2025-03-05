import { useExtensionStorage } from '~/Popup/hooks/useExtensionStorage';
import type { Chain, CosmosChain, EthereumChain, SolanaChain } from '~/types/chain';
import { SOLANA } from '~/constants/chain/solana/solana';
export function useCurrentAdditionalChains() {
  const { extensionStorage, setExtensionStorage } = useExtensionStorage();

  const { additionalChains } = extensionStorage;

  const cosmosAdditionalChains = additionalChains.filter((chain) => chain.line === 'COSMOS') as CosmosChain[];
  const ethereumAdditionalChains = additionalChains.filter((chain) => chain.line === 'ETHEREUM') as EthereumChain[];
  // 修改
  const solanaAdditionalChains = additionalChains.filter((chain) => chain.line === 'SOLANA') as SolanaChain[];
  const addAdditionalChains = (chain: Chain) => setExtensionStorage('additionalChains', [...additionalChains, chain]);
  const removeAdditionalChains = (chain: Chain) =>
    setExtensionStorage(
      'additionalChains',
      additionalChains.filter((item) => item.id !== chain.id),
    );

  return {
    currentAdditionalChains: additionalChains,
    currentCosmosAdditionalChains: cosmosAdditionalChains,
    currentEthereumAdditionalChains: ethereumAdditionalChains,
    // 修改
    currentSolanaAdditionalChains: solanaAdditionalChains,
    addAdditionalChains,
    removeAdditionalChains,
  };
}
