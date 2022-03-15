/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../../components/services/ThemeContext.js'
import { ExchangeQuoteComponent } from '../../components/themed/ExchangeQuoteComponent.js'

describe('ExchangeQuote', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      isTop: true | undefined,
      walletIcon: 'string',
      cryptoAmount: 'string',
      currency: 'string',
      currencyCode: 'string',
      fiatCurrencyCode: 'string',
      fiatCurrencyAmount: 'string',
      walletName: 'string',
      total: 'string',
      miningFee: 'string' | undefined,
      theme: getTheme()
    }
    const actual = renderer.render(<ExchangeQuoteComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
