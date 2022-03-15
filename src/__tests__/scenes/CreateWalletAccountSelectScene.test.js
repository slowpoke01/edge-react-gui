/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { CreateWalletAccountSelect } from '../../components/scenes/CreateWalletAccountSelect.js'
import { getTheme } from '../../components/services/ThemeContext.js'
import { EDGE_CONTENT_SERVER } from '../../constants/WalletAndCurrencyConstants.js'

describe('CreateWalletAccountSelect', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      route: {
        name: 'createWalletAccountSelect',
        params: {
          accountHandle: '',
          selectedWalletType: 'BTC',
          selectedFiat: 'USD',
          isReactivation: true,
          existingWalletId: 'myWallet'
        }
      },

      wallets: {
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
      paymentCurrencyCode: 'USD',
      amount: '12345',
      supportedCurrencies: [true],
      activationCost: '11',
      paymentDenominationSymbol: '',
      walletAccountActivationQuoteError: (state = '', action) => {
        switch (action.type) {
          case 'WALLET_ACCOUNT_ACTIVATION_ESTIMATE_ERROR':
            return action.data
          default:
            return state
        }
      },
      currencyConfigs: [{ currencyCode: 'BTC' }],
      createAccountBasedWallet: async (walletName, walletType, fiatCurrencyCode) => {
        return {
          currencyConfig: {},
          username: 'some user',
          logSettings: { defaultLogLevel: 'info' },
          watch() {}
        }
      },
      fetchAccountActivationInfo: walletType => undefined,
      createAccountTransaction: (createdWalletId, accountName, paymentWalletId) => undefined,
      fetchWalletAccountActivationPaymentInfo: (paymentInfo, createdCoreWallet) => undefined,
      setWalletAccountActivationQuoteError: message => undefined,
      theme: getTheme()
    }
    const actual = renderer.render(<CreateWalletAccountSelect {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
