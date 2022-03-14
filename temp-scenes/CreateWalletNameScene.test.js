/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { CreateWalletName } from '../components/scenes/CreateWalletName.js'
import { getTheme } from '../components/services/ThemeContext.js'
import { fakeNavigation } from '../util/fake/fakeNavigation.js'

describe('createWalletName', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      navigation: fakeNavigation,
      route: {
        name: 'createWalletName',
        params: {
          accountHandle: '',
          selectedWalletType: 'BTC',
          selectedFiat: 'USD',
          isReactivation: true,
          existingWalletId: 'myWallet'
        }
      },
      theme: getTheme()
    }
    const actual = renderer.render(<CreateWalletName {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
