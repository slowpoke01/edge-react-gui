/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { AccelerateTxModelComponent } from '../../components/modals/AccelerateTxModel.js'
import { getTheme } from '../../components/services/ThemeContext.js'
import { fakeAirshipBridge } from './TestHelpers.js'

describe('AccelerateTxModelComponent', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      bridge: fakeAirshipBridge,
      edgeTransaction: {
        blockHeight: 0,
        currencyCode: 'BCH',
        date: 0,
        nativeAmount: '-681',
        networkFee: '681',
        otherParams: {},
        ourReceiveAddresses: ['123123123'],
        signedTx: '',
        txid: ''
      },

      wallet: {
        fiatCurrencyCode: 'iso:USD',
        addCustomToken: 'shib',
        currencyInfo: {
          currencyCode: 'SHIB'
        },
        parseUri: (address, currencyCode) => {}
      },
      exchangeRates: ['string'],
      getDisplayDenomination: (pluginId, currencyCode) => ['EdgeDenomination'],
      getExchangeDenomination: (pluginIdg, currencyCode) => ['EdgeDenomination'],
      theme: getTheme()
    }
    const actual = renderer.render(<AccelerateTxModelComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
