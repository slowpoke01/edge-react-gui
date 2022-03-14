// @flow

/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { getTheme } from '../components/services/ThemeContext.js'
import { AddressTileComponent } from '../components/themed/AddressTile.js'

describe('AddressTile', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      coreWallet: {
        addCustomToken: 'shib',
        currencyInfo: {
          currencyCode: 'SHIB'
        },
        parseUri: (address, currencyCode) => {}
      },
      currencyCode: 'SHIB',
      title: 'Title',
      recipientAddress: 'bc1',
      onChangeAddress: async (guiMakeSpendInfo, parsedUri) => undefined,
      resetSendTransaction: () => undefined,
      lockInputs: true,
      addressTileRef: {},
      isCameraOpen: true,
      fioToAddress: 'FIO',

      clipboard: 'clip',
      loading: true,
      theme: getTheme()
    }
    const actual = renderer.render(<AddressTileComponent {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
