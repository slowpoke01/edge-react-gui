/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../../components/services/ThemeContext.js'
import { FlipInputComponent as Request } from '../../components/themed/FlipInput.js'

describe('Request', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      overridePrimaryDecimalAmount: 'string',

      // Exchange rate
      exchangeSecondaryToPrimaryRatio: 'string',

      // Information regarding the primary and secondary field. Mostly related to currency name, code, and denominations
      primaryInfo: 'FlipInputFieldInfo',
      secondaryInfo: 'FlipInputFieldInfo',
      onNext: () => undefined,
      onFocus: () => undefined,
      onBlur: () => undefined,
      forceUpdateGuiCounter: 'number',

      // Callback when primaryDecimalAmount changes. **This is only called when the user types into a field or if
      // exchangeSecondaryToPrimaryRatio changes. This does NOT get called when overridePrimaryDecimalAmount is changed by the parent
      onAmountChanged: {
        exchangeAmount: 'string',
        nativeAmount: 'string'
      },
      isEditable: true,
      isFiatOnTop: true,
      isFocus: true,

      topReturnKeyType: 'string',
      inputAccessoryViewID: 'string',
      headerText: 'string',
      headerLogo: 'string' | undefined,
      headerCallback: () => undefined,
      keyboardVisible: true,
      flipInputRef: () => undefined,
      // onError?: (error: string | void) => void,
      theme: getTheme()
    }

    const actual = renderer.render(<Request {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
