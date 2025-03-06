import { useCurrentChain } from '~/Popup/hooks/useCurrent/useCurrentChain';

import Aptos from './Aptos';
import Bitcoin from './Bitcoin';
import Cosmos from './Cosmos';
import Ethereum from './Ethereum';
import Sui from './Sui';
// 修改
import Open from './Open';

export default function Entry() {
  const { currentChain } = useCurrentChain();

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
  // 修改
  if (currentChain.line === 'SOLANA') {
    return <Open chain={currentChain} />;
  }

  return null;
}
