/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import WalletIcon from '../../assets/images/createWallet/wallet_icon_lg.png'
import { CryptoExchangeComponent } from '../../components/scenes/CryptoExchangeScene.js'
import { getTheme } from '../../components/services/ThemeContext.js'
import { EDGE_CONTENT_SERVER } from '../../constants/WalletAndCurrencyConstants.js'

describe('CryptoExchangeComponent', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      fromWalletId: '',
      fromWalletBalances: [''],
      fromFiatCurrencyCode: 'USD',
      fromIsoFiatCurrencyCode: {
        wallet: {
          fiatCurrencyCode: 'USD'
        }
      },
      fromWalletName: name ?? '',
      fromExchangeAmount: string,
      fromWalletPrimaryInfo: GuiCurrencyInfo,
      fromFiatToCrypto: string,
      toWalletId: '',
      toFiatCurrencyCode: 'USD',
      toIsoFiatCurrencyCode: {
        wallet: {
          fiatCurrencyCode: 'USD'
        }
      },
      toWalletName: name ?? '',
      toExchangeAmount: string,
      toWalletPrimaryInfo: {
        id: 'SXq1f3x21H2e/h5A4ANvrMoK5xs+sQcDoFWHtCG25BA=',
        type: 'wallet:monero',
        name: 'Monero',
        primaryNativeBalance: '1492780012',
        nativeBalances: { XMR: '1492780012' },
        currencyNames: { XMR: 'Monero' },
        currencyCode: 'XMR',
        isoFiatCurrencyCode: 'iso:USD',
        fiatCurrencyCode: 'USD',
        denominations: [{}],
        allDenominations: { XMR: {} },
        metaTokens: [],
        enabledTokens: [],
        receiveAddress: { metadata: {}, nativeAmount: '0', publicAddress: '432hJPUp2C...' },
        blockHeight: 1688551,
        symbolImage: `${EDGE_CONTENT_SERVER}/XMR/XMR.png`,
        symbolImageDarkMono: `${EDGE_CONTENT_SERVER}/XMR/XMR_dark.png`,
        key: 'SXq1f3x21H2e/h5A4ANvrMoK5xs+sQcDoFWHtCG25BA='
      },
      toFiatToCrypto: string,
      pluginId: string,
      fromCurrencyCode: 'BTC',
      fromCurrencyIcon: WalletIcon,
      toCurrencyIcon: WalletIcon,
      toCurrencyCode: 'BTC',
      forceUpdateGuiCounter: 0,
      calculatingMax: true,
      hasMaxSpend: true,
      insufficient: false,
      genericError: null,
      onSelectWallet: async (walletId, currencyCode, direction) => undefined,
      getQuoteForTransaction: (fromWalletNativeAmount, onApprove: () => undefined) => undefined,
      exchangeMax: async () => undefined,
      theme: getTheme()
    }
    const actual = renderer.render(<CryptoExchangeComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
