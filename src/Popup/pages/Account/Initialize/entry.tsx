import { useEffect } from 'react';
import { useResetRecoilState } from 'recoil';

import { APTOS_NETWORKS, ETHEREUM_NETWORKS, SOLANA_NETWORKS, SUI_NETWORKS } from '~/constants/chain';
import { APTOS } from '~/constants/chain/aptos/aptos';
import { BITCOIN } from '~/constants/chain/bitcoin/bitcoin';
import { SIGNET } from '~/constants/chain/bitcoin/signet';
import { SIGNET_TAPROOT } from '~/constants/chain/bitcoin/signetTaproot';
import { BITCOIN_TAPROOT } from '~/constants/chain/bitcoin/taproot';
import { COSMOS } from '~/constants/chain/cosmos/cosmos';
import { ETHEREUM } from '~/constants/chain/ethereum/ethereum';
import { SUI } from '~/constants/chain/sui/sui';
import { useCurrentPassword } from '~/Popup/hooks/useCurrent/useCurrentPassword';
import { useExtensionStorage } from '~/Popup/hooks/useExtensionStorage';
import { useNavigate } from '~/Popup/hooks/useNavigate';
import { useTranslation } from '~/Popup/hooks/useTranslation';
import IconButton from '~/Popup/pages/Account/Initialize/components/IconButton';
import { newMnemonicAccountState } from '~/Popup/recoils/newAccount';

import { ButtonContainer, Container, LogoContainer, LogoImageContainer, LogoTextContainer } from './styled';

import Cosmostation21Icon from '~/images/icons/Cosmostation21.svg';
import CreateAccount28Icon from '~/images/icons/CreateAccount28.svg';
import Import28Icon from '~/images/icons/Import28.svg';
import Logo40Icon from '~/images/icons/Logo40.svg';
import { SOLANA } from '~/constants/chain/solana/solana';

export default function Entry() {
  const { navigate } = useNavigate();
  const { t } = useTranslation();

  const resetNewAccount = useResetRecoilState(newMnemonicAccountState);

  const { setExtensionStorage } = useExtensionStorage();

  const { setCurrentPassword } = useCurrentPassword();

  useEffect(() => {
    resetNewAccount();

    void setExtensionStorage('queues', []);
    void setExtensionStorage('windowId', null);
    void setExtensionStorage('accounts', []);
    void setExtensionStorage('accountName', {});
    void setExtensionStorage('additionalChains', []);
    void setExtensionStorage('additionalEthereumNetworks', []);
    void setExtensionStorage('encryptedPassword', null);
    void setExtensionStorage('selectedAccountId', '');

    // 修改
    void setExtensionStorage('selectedSolanaNetworkId', SOLANA.id);
    // SOLANA_NETWORKS
    void setExtensionStorage('showSolanaNetworks', [...SOLANA_NETWORKS.map((network) => network.id)]);

    void setExtensionStorage('allowedChainIds', [ETHEREUM.id, COSMOS.id, APTOS.id, SUI.id, BITCOIN.id, BITCOIN_TAPROOT.id, SIGNET.id, SIGNET_TAPROOT.id,SOLANA.id]);
    void setExtensionStorage('shownEthereumNetworkIds', [...ETHEREUM_NETWORKS.map((network) => network.id)]);
    void setExtensionStorage('shownAptosNetworkIds', [...APTOS_NETWORKS.map((network) => network.id)]);
    void setExtensionStorage('shownSuiNetworkIds', [...SUI_NETWORKS.map((network) => network.id)]);
    void setExtensionStorage('allowedOrigins', []);
    void setExtensionStorage('selectedChainId', '');
    void setExtensionStorage('selectedEthereumNetworkId', ETHEREUM_NETWORKS[0].id);
    void setExtensionStorage('selectedAptosNetworkId', APTOS_NETWORKS[0].id);
    void setExtensionStorage('selectedSuiNetworkId', SUI_NETWORKS[0].id);
    void setExtensionStorage('selectedBitcoinChainId', BITCOIN.id);
    void setExtensionStorage('encryptedPassword', null);

    void setCurrentPassword(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <LogoContainer>
        <LogoImageContainer>
          <Logo40Icon />
        </LogoImageContainer>
        <LogoTextContainer>
          <Cosmostation21Icon />
        </LogoTextContainer>
      </LogoContainer>
      <ButtonContainer>
        <IconButton Icon={CreateAccount28Icon} onClick={() => navigate('/account/initialize/new/mnemonic/step1')}>
          {t('pages.Account.Initialize.entry.createWallet')}
        </IconButton>
        <IconButton Icon={Import28Icon} onClick={() => navigate('/account/initialize/import')}>
          {t('pages.Account.Initialize.entry.importWallet')}
        </IconButton>
      </ButtonContainer>
    </Container>
  );
}
