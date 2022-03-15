/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { AddToken } from '../../components/scenes/AddTokenScene'
import { getTheme } from '../../components/services/ThemeContext.js'
import { EDGE_CONTENT_SERVER } from '../../constants/WalletAndCurrencyConstants.js'

describe('AddToken', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      route: {
        name: 'addToken',
        params: ''
      },
      addNewToken: (walletId, currencyName, currencyCode, contractAddress, denomination, type) => undefined,
      addTokenPending: true,
      currentCustomTokens: [{
      currencyName: 'Monero',
      currencyCode: 'XMR',
  contractAddress: '42834283',
  multiplier: '100000000000',
  denomination: string, // eventually change to mandatory
  denominations: [{multiplier: '1111111111',
    name: 'XMR'
      }],
    },
      wallet: {
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
      theme: getTheme()
    }
    const actual = renderer.render(<AddToken {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
