import { useCurrentChain } from '~/Popup/hooks/useCurrent/useCurrentChain';

import Aptos from './Aptos';
import Bitcoin from './Bitcoin';
import Cosmos from './Cosmos';
import Ethereum from './Ethereum';
import Sui from './Sui';
import Solana from './Solana';
// import Solana from './Solana';

export default function Entry() {
  const { currentChain } = useCurrentChain();
  // console.log('currentChain', currentChain);

  if (currentChain.line === 'COSMOS') {
    return <Cosmos chain={currentChain} />;
  }

  if (currentChain.line === 'ETHEREUM') {
    return <Ethereum chain={currentChain} />;
  }

  if (currentChain.line === 'APTOS') {
    return <Aptos chain={currentChain} />;
  }

  if (currentChain.line === 'SUI') {
    return <Sui chain={currentChain} />;
  }

  if (currentChain.line === 'BITCOIN') {
    return <Bitcoin chain={currentChain} />;
  }

  if (currentChain.line === 'SOLANA') {
    return <Solana chain={currentChain} />;
  }

  return null;
}
