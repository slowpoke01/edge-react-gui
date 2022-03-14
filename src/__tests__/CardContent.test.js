/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../components/services/ThemeContext.js'
import { CardContentComponent as Request } from '../components/themed/CardContent.js'

describe('Request', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      image: 11,
      title: 'string' | 11,
      subTitle: 'string',
      value: 'string' | 11,
      subValue: 'string',
      paddingRem: [11] | 11,
      theme: getTheme()
    }
    const actual = renderer.render(<Request {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
