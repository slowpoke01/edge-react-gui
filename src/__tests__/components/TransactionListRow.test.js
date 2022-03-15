/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../../components/services/ThemeContext.js'
import { TransactionListRowComponent } from '../../components/themed/TransactionListRow.js'

describe('Request', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      cryptoAmount: 'string',
      denominationSymbol: 'string',
      fiatAmount: 'string',
      fiatSymbol: 'string',
      isSentTransaction: true,
      requiredConfirmations: 11,
      selectedCurrencyName: 'string',
      thumbnailPath: 'string',
      walletBlockHeight: 11,
      // eslint-disable-next-line react/no-unused-prop-types
      walletId: 'string',
      // eslint-disable-next-line react/no-unused-prop-types
      currencyCode: 'string',
      transaction: 'string' | 11,
      theme: getTheme()
    }
    const actual = renderer.render(<TransactionListRowComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
