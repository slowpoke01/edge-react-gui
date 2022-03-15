export const fakeAirshipBridge = {
  resolve: value => undefined,
  // eslint-disable-next-line node/handle-callback-err
  reject: error => undefined,
  remove: () => undefined,
  on: (name, callback) => () => undefined,
  onResult: callback => undefined
}
