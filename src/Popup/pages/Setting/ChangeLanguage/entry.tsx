import SelectButton from '~/Popup/components/SelectButton';
import { useTranslation } from '~/Popup/hooks/useTranslation';

import { Container, ListContainer } from './styled';

export default function Entry() {
  const { language, changeLanguage } = useTranslation();
  return (
    <Container>
      <ListContainer>
        <SelectButton isActive={language === 'en'} onClick={() => changeLanguage('en')}>
          English
        </SelectButton>
        <SelectButton isActive={language === 'ko'} onClick={() => changeLanguage('ko')}>
          한국어
        </SelectButton>
        {/* 修改 */}
        <SelectButton isActive={language === 'zh'} onClick={() => changeLanguage('zh')}>
          简体中文
        </SelectButton>
      </ListContainer>
    </Container>
  );
}
