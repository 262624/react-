import { SOLANA_NETWORKS } from '~/constants/chain';
import { useExtensionStorage } from '~/Popup/hooks/useExtensionStorage';
import type { SolanaNetwork } from '~/types/chain';

export function useCurrentShownSolanaNetworks() {
  const { extensionStorage, setExtensionStorage } = useExtensionStorage();

  const { showSolanaNetworks } = extensionStorage;

  const currentShownSolanaNetwork = SOLANA_NETWORKS.filter((network) => showSolanaNetworks.includes(network.id));

  const addShownSolanaNetwork = async (network: SolanaNetwork) => {
    if (showSolanaNetworks.find((shownSolanaNetworkId) => shownSolanaNetworkId === network.id)) {
      return;
    }

    await setExtensionStorage('showSolanaNetworks', [...showSolanaNetworks, network.id]);
  };

  const addShownSolanaNetworks = async (networks: SolanaNetwork[]) => {
    const networkIds = networks.map((network) => network.id);

    const newShownSolanaNetworkIds = Array.from(new Set([...showSolanaNetworks, ...networkIds]));

    await setExtensionStorage('showSolanaNetworks', newShownSolanaNetworkIds);
  };

  const removeShownSolanaNetwork = async (network: SolanaNetwork) => {
    if (!showSolanaNetworks.find((shownSolanaNetworkId) => shownSolanaNetworkId === network.id)) {
      return;
    }

    const newShownSolanaNetworkIds = showSolanaNetworks.filter((shownSolanaNetworkId) => shownSolanaNetworkId !== network.id);

    await setExtensionStorage('showSolanaNetworks', newShownSolanaNetworkIds);
  };

  const removeShownSolanaNetworks = async (networks: SolanaNetwork[]) => {
    const networkIds = networks.map((network) => network.id);

    const newShownSolanaNetworkIds = showSolanaNetworks.filter((shownSolanaNetworkId) => !networkIds.includes(shownSolanaNetworkId));

    await setExtensionStorage('showSolanaNetworks', newShownSolanaNetworkIds);
  };

  return {
    currentShownSolanaNetwork,
    addShownSolanaNetwork,
    addShownSolanaNetworks,
    removeShownSolanaNetwork,
    removeShownSolanaNetworks,
  };
}