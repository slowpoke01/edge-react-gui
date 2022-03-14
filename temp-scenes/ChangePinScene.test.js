/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { ChangePinComponent } from '../components/modals/ChangePinScene.js'
import { getTheme } from '../components/services/ThemeContext.js'
import { fakeUser } from '../src/util/fake-user.js'
import { fakeNavigation } from '../util/fake/fakeNavigation.js'

describe('ChangePinComponent', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      navigation: fakeNavigation,
      account: () => fakeUser,
      context: { apiKey: '', appId: '' }, // used  EdgeContextOptions
      theme: getTheme()
    }
    const actual = renderer.render(<ChangePinComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
