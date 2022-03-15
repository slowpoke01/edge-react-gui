/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { CreateWalletAccountSetup } from '../../components/scenes/CreateWalletAccountSetup.js'
import { getTheme } from '../../components/services/ThemeContext.js'
import { fakeNavigation } from '../../util/fake/fakeNavigation.js'

describe('CreateWalletAccountSelect', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      navigation: fakeNavigation,
      route: {
        name: 'createWalletAccountSetup',
        params: {
          accountHandle: '',
          selectedWalletType: 'BTC',
          selectedFiat: 'USD',
          isReactivation: true,
          existingWalletId: 'myWallet'
        }
      },

      handleAvailableStatus: 'AVAILABLE' | 'INVALID' | 'UNAVAILABLE' | 'UNKNOWN_ERROR' | '',
      isCheckingHandleAvailability: true,
      currencyConfigs: [{ currencyCode: 'BTC' }],
      checkHandleAvailability: handle => undefined,
      theme: getTheme()
    }
    const actual = renderer.render(<CreateWalletAccountSetup {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
