/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../components/services/ThemeContext.js'
import { ClickableRowComponent as Request } from '../components/themed/ClickableRow.js'

describe('Request', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      onPress: () => undefined | (async () => undefined),
      onLongPress: () => undefined | (async () => undefined),
      highlight: 11,
      gradient: 11,
      autoHeight: 11,
      children: 'String',
      underline: 11,
      // eslint-disable-next-line react/no-unused-prop-types
      marginRem: [11] | 11,
      // eslint-disable-next-line react/no-unused-prop-types
      paddingRem: [11] | 11,
      theme: getTheme()
    }
    const actual = renderer.render(<Request {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
