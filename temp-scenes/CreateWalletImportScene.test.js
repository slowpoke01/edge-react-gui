/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { CreateWalletImportComponent } from '../components/modals/CreateWalletImportComponent.js'
import { getTheme } from '../components/services/ThemeContext.js'
import { fakeUser } from '../src/util/fake-user.js'
import { fakeNavigation } from '../util/fake/fakeNavigation.js'

describe('CreateWalletImportComponent', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      navigation: fakeNavigation,
      route: {
        name: 'createWalletImport',
        params: {
          accountHandle: '',
          selectedWalletType: 'BTC',
          selectedFiat: 'USD',
          isReactivation: true,
          existingWalletId: 'myWallet'
        }
      },
      account: () => fakeUser,
      context: { apiKey: '', appId: '' }, // used  EdgeContextOptions
      theme: getTheme()
    }
    const actual = renderer.render(<CreateWalletImportComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
