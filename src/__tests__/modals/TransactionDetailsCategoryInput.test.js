/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { TransactionDetailsCategoryInput } from '../../components/modals/TransactionDetailsCategoryInput'
import { getTheme } from '../../components/services/ThemeContext.js'
import { fakeAirshipBridge } from './TestHelpers.js'

describe('TransactionDetailsCategoryInput', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      bridge: fakeAirshipBridge,
      categories: {
        Exchange: 'Buy Bitcoin',
        Income: 'Sell Bitcoin',
        Expense: 'Air Travel'
      },
      subCategories: ['Exchange', 'Income', 'Expense'],
      category: {
        key: '121321',
        syntax: ''
      },
      subCategory: {
        index: 123,
        item: '',
        separators: {}
      },
      // eslint-disable-next-line no-empty-pattern
      setNewSubcategory: (string, []) => undefined,
      theme: getTheme()
    }
    const actual = renderer.render(<TransactionDetailsCategoryInput {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
