/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../components/services/ThemeContext.js'
import { CryptoExchangeFlipInputWrapperComponent } from '../components/themed/CryptoExchangeFlipInputWrapperComponent.js'

describe.skip('CryptoExchangeFlipInputWrapper', () => {
  it('should render with some props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      walletId: 'myWallet',
      buttonText: {
        fontSize: getTheme(),
        color: {
          theme: {
            textLink: () => 'text'
          }
        }
      },
      currencyLogo: {
        height: 11,
        width: 11,
        resizeMode: 'contain'
      },
      headerText: 'headerText',
      primaryCurrencyInfo: {
        displayCurrencyCode: 'BTC',
        exchangeCurrencyCode: 'BTC',
        displayDenomination: {
          multiplier: '10000000000',
          name: 'Bitcoin'
        },
        exchangeDenomination: {
          multiplier: '10000000000',
          name: 'Bitcoin'
        }
      },
      secondaryCurrencyInfo: {
        displayCurrencyCode: 'BTC',
        exchangeCurrencyCode: 'BTC',
        displayDenomination: {
          multiplier: '10000000000',
          name: 'Bitcoin'
        },
        exchangeDenomination: {
          multiplier: '10000000000',
          name: 'Bitcoin'
        }
      },
      fiatPerCrypto: 'string',
      forceUpdateGuiCounter: 111,
      overridePrimaryExchangeAmount: 'string',
      isFocused: true,
      isThinking: true,
      focusMe: () => undefined,
      launchWalletSelector: () => undefined,
      onCryptoExchangeAmountChanged: (exchangeAmount, nativeAmount) => undefined,
      onNext: () => undefined,
      onFocus: () => undefined,
      onBlur: () => undefined,
      name: 'string',
      cryptoAmount: 'string',
      theme: getTheme()
    }
    const actual = renderer.render(<CryptoExchangeFlipInputWrapperComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
