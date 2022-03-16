/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { CurrencyNotificationComponent } from '../../components/scenes/CryptoExchangeScene.js'
import { getTheme } from '../../components/services/ThemeContext.js'
import { fakeNavigation } from '../util/fake/fakeNavigation.js'

describe('CurrencyNotificationComponent', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      navigation: fakeNavigation,
      route: '',
      userId: '',
      disklet: {
        state: {
          core: {
            disklet: () => undefined
          }
        }
      },
      enableNotifications: (currencyCode, hours, enabled) => undefined,
      theme: getTheme()
    }

    const actual = renderer.render(<CurrencyNotificationComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
