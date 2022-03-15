/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { CreateWalletSelectFiatComponent } from '../../components/scenes/CreateWalletSelectFiat.js'
import { getTheme } from '../../components/services/ThemeContext.js'
import { fakeNavigation } from '../../util/fake/fakeNavigation.js'

describe('CreateWalletSelectFiatComponent', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      navigation: fakeNavigation,
      route: {
        name: 'createWalletReview',
        params: {
          accountHandle: '',
          selectedWalletType: 'BTC',
          selectedFiat: 'USD',
          isReactivation: true,
          existingWalletId: 'myWallet'
        }
      },
      supportedFiats: [
        {
          label: '',
          value: ''
        }
      ],
      theme: getTheme()
    }
    const actual = renderer.render(<CreateWalletSelectFiatComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
