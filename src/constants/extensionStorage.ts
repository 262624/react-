export const ACCOUNT_TYPE = {
  MNEMONIC: 'MNEMONIC',
  PRIVATE_KEY: 'PRIVATE_KEY',
  LEDGER: 'LEDGER',
} as const;

export const LANGUAGE_TYPE = {
  KO: 'ko',
  EN: 'en',
  // 修改
  ZH: 'zh',
} as const;

export const CURRENCY_TYPE = {
  USD: 'usd',
  KRW: 'krw',
  EUR: 'eur',
  JPY: 'jpy',
  CNY: 'cny',
  BTC: 'btc',
  ETH: 'eth',
} as const;

export const HOME_TAB_INDEX_TYPE = {
  ETHEREUM: 'ethereum',
  COSMOS: 'cosmos',
  SUI: 'sui',
  APTOS: 'aptos',
  BITCOIN: 'bitcoin',
  // 修改
  OPENVERSE:'openverse',
  SOLANA: 'solana',
} as const;
