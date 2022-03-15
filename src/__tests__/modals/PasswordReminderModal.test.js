/* globals describe it expect */
/* eslint-disable flowtype/require-valid-file-annotation */

import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import { PasswordReminderModalComponent as Request } from '../../components/modals/PasswordReminderModal.js'
import { getTheme } from '../../components/services/ThemeContext.js'
import { fakeUser } from '../../util/fake-user.js'

describe('Request', () => {
  it('should render with loading props', () => {
    const renderer = new ShallowRenderer()

    const props = {
      bridge: undefined,
      account: () => fakeUser,
      onSuccess: () => undefined,
      onPostpone: () => undefined,
      onRequestChangePassword: () => undefined,
      password: {
        needsPasswordCheck: true,
        lastPasswordUseDate: 112120,
        passwordUseCount: 12,
        nonPasswordLoginsCount: 50,
        nonPasswordDaysLimit: 11,
        nonPasswordLoginsLimit: 11
      },
      spinning: true,
      theme: getTheme()
    }
    const actual = renderer.render(<Request {...props} />)

    expect(actual).toMatchSnapshot()
  })
})
