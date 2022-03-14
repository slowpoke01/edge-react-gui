export const fakeAirshipBridge = {
  resolve: value => undefined,
  // eslint-disable-next-line node/handle-callback-err
  reject: error => undefined,
  remove: () => undefined,
  on: (name, callback) => () => undefined,
  onResult: callback => undefined
}

export const fakeAirshipBridgeDate = {
  resolve: value => () => (number, format) => require('dateformat')(number, format, true),
  // eslint-disable-next-line node/handle-callback-err
  reject: error => undefined,
  remove: () => undefined,
  on: (name, callback) => () => undefined,
  onResult: callback => undefined
}

export const fakeAirshipBridgeWallet = {
  resolve: value => (id, key) => undefined,
  // eslint-disable-next-line node/handle-callback-err
  reject: error => undefined,
  remove: () => undefined,
  on: (name, callback) => () => undefined,
  onResult: callback => undefined
}
