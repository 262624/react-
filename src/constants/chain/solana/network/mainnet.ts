import solanaChainImg from '~/images/chainImgs/openverse.png';
import solanaTokenImg from '~/images/symbols/openverse.png';
import type { SolanaNetwork } from '~/types/chain';

export const MAINNET: SolanaNetwork = {
  id: '174f6671-ef2d-4c30-a140-63f493c5a318',
  networkName: 'Mainnet',
  rpcURL: 'https://api.mainnet-beta.solana.com',
  displayDenom: 'SOL',
  tokenImageURL: solanaTokenImg,
  imageURL: solanaChainImg,
  explorerURL: 'https://explorer.solana.com',
  coinGeckoId: 'solana',
  decimals: 9,
  chainId: '102x'
};