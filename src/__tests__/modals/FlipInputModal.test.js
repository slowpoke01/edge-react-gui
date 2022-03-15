/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { FlipInputModalComponent } from '../../components/modals/FlipInputModal'
import { getTheme } from '../../components/services/ThemeContext.js'
import { EDGE_CONTENT_SERVER } from '../../constants/WalletAndCurrencyConstants.js'
import { convertCurrencyFromExchangeRates, getExchangeRate } from '../../selectors/WalletSelectors.js'
import { getAvailableBalance } from '../../util/CurrencyWalletHelpers.js'
import { fakeAirshipBridge } from './TestHelpers'

describe('FlipInputModalComponent', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      bridge: fakeAirshipBridge,
      walletId: 'myWallet',
      currencyCode: 'BTC',
      onFeesChange: () => undefined,
      onAmountChanged: (nativeAmount, exchangeAmount) => undefined,
      balanceCrypto: getAvailableBalance(),
      flipInputHeaderText: 'Exchange Header',
      flipInputHeaderLogo: function getCurrencyIcon(pluginId, contractAddress = pluginId) {
        const url = `${EDGE_CONTENT_SERVER}/currencyIcons/${pluginId.toLowerCase()}/${contractAddress.toLowerCase().replace('0x', '')}`
        return {
          symbolImage: `${url}.png`,
          symbolImageDarkMono: `${url}_dark.png`
        }
      },
      primaryInfo: {
        displayCurrencyCode: 'BTC',
        exchangeCurrencyCode: 'BTC',
        displayDenomination: { multiplier: '100000000000', name: 'BTC' },
        exchangeDenomination: { multiplier: '100000000000', name: 'BTC' }
      },
      secondaryInfo: {
        displayCurrencyCode: 'BTC',
        exchangeCurrencyCode: 'BTC',
        displayDenomination: {
          name: 'Bitcoin',
          multiplier: '1'
        },
        exchangeDenomination: {
          name: 'Bitcoin',
          multiplier: '1'
        }
      },
      fiatPerCrypto: getExchangeRate(),
      overridePrimaryExchangeAmount: '0',
      forceUpdateGuiCounter: 123,
      pluginId: 'Wyre',
      feeCurrencyCode: 'BTC',
      feeDisplayDenomination: { multiplier: '100000000000', name: 'BTC' },
      feeExchangeDenomination: { multiplier: '100000000000', name: 'BTC' },
      feeNativeAmount: convertCurrencyFromExchangeRates,
      feeAmount: convertCurrencyFromExchangeRates,
      updateMaxSpend: (walletId, currencyCode) => undefined,
      updateTransactionAmount: (nativeAmount, exchangeAmount, walletId, currencyCode) => undefined,
      theme: getTheme()
    }
    const actual = renderer.render(<FlipInputModalComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
