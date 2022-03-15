/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import WalletIcon from '../../assets/images/createWallet/wallet_icon_lg.png'
import { CryptoExchangeQuoteScreenComponent } from '../../components/scenes/CryptoExchangeQuoteScene.js'
import { getTheme } from '../../components/services/ThemeContext.js'
import { fakeUser } from '../../util/fake-user.js'
describe('CryptoExchangeQuoteScreen', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      account: () => fakeUser,
      route: {
        name: 'exchangeQuotes',
        params: {
          accountHandle: '',
          selectedWalletType: 'BTC',
          selectedFiat: 'USD',
          isReactivation: true,
          existingWalletId: 'myWallet'
        }
      },
      fromCurrencyIcon: WalletIcon,
      fromDenomination: 'BTC',
      fromWalletCurrencyName: { fromDenomination: '' },
      pending: true,
      toCurrencyIcon: WalletIcon,
      toDenomination: 'BTC',
      toWalletCurrencyName: { fromDenomination: '' },

      // eslint-disable-next-line flowtype/no-types-missing-file-annotation
      shift: (swapInfo, onApprove: () => undefined) => undefined,
      // eslint-disable-next-line flowtype/no-types-missing-file-annotation
      timeExpired: (swapInfo, onApprove: () => undefined) => undefined,
      theme: getTheme()
    }
    const actual = renderer.render(<CryptoExchangeQuoteScreenComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
