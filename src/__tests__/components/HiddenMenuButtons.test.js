/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../../components/services/ThemeContext.js'
import { HiddenMenuButtonsComponent as Request } from '../../components/themed/HiddenMenuButtons.js'

describe('Request', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      rightSwipable: {
        label: 'string',
        children: 'string',
        color: 'success' | 'danger' | 'default',
        onPress: async () => undefined || undefined
      },
      leftSwipable: {
        label: 'string',
        children: 'string',
        color: 'success' | 'danger' | 'default',
        onPress: async () => undefined || undefined
      },
      right: {
        label: 'string',
        children: 'string',
        color: 'success' | 'danger' | 'default',
        onPress: async () => undefined || undefined
      },
      left: {
        label: 'string',
        children: 'string',
        color: 'success' | 'danger' | 'default',
        onPress: async () => undefined || undefined
      },
      isSwipingRight: true,
      isSwipingLeft: true,
      swipeDirection: 'left' | 'right' | undefined,
      theme: getTheme()
    }
    const actual = renderer.render(<Request {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
