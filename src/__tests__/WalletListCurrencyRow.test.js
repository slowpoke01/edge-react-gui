/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../components/services/ThemeContext.js'
import { WalletListRowComponent as Request } from '../components/themed/WalletListCurrencyRow.js'

describe('Request', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      currencyCode: 'string',
      gradient: true,
      onPress: () => undefined,
      onLongPress: () => undefined,
      showRate: true,
      paddingRem: 11 | [11],
      walletId: 'string',
      // eslint-disable-next-line react/no-unused-prop-types
      walletName: 'string',

      cryptoAmount: 'string',
      fiatBalanceSymbol: 'string',
      fiatBalanceString: 'string',
      walletNameString: 'string',
      exchangeRate: 'string',
      exchangeRates: 'GuiExchangeRates',
      fiatExchangeRate: 'string',
      walletFiatSymbol: 'string',
      theme: getTheme()
    }
    const actual = renderer.render(<Request {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
