// @flow

import { sprintf } from 'sprintf-js'

import s from '../locales/strings.js'

/** Explains BitPay Error options */
type BitPayErrorOptions = {
  body?: string,
  header?: string,
  method?: string,
  statusCode?: string,
  text?: string,
  uri?: string
}

/** Alias for BitPay error handler function */
type BitPayErrorHandler = (error: BitPayErrorOptions) => string

export const BitPayErrorCode = {
  EmptyOutputInvoice: 'EmptyOutputInvoice',
  EmptyVerificationHexReq: 'EmptyVerificationHexReq',
  FetchFailed: 'FetchFailed',
  MultiOutputInvoice: 'MultiOutputInvoice',
  MultiInstructionInvoice: 'MultiInstructionInvoice',
  TxVerificationMismatch: 'TxVerificationMismatch'
}

/**
 * @internal
 * Internal Mapping object from BitPayErrorCode to a BitPayErrorHandler
 */
const HandlersByCode = {
  [BitPayErrorCode.EmptyOutputInvoice]: (params: { uri: string }) => s.strings.error_bitpay_empty_output_invoice,
  [BitPayErrorCode.EmptyVerificationHexReq]: (params: { uri: string }) => s.strings.error_bitpay_empty_verification_hex_req,
  [BitPayErrorCode.FetchFailed]: (params: { uri: string, body: string, header: string, method: string, statusCode: string, text: string }) =>
    sprintf(s.strings.error_bitpay_fetch, params.header, params.statusCode, params.text),
  [BitPayErrorCode.MultiOutputInvoice]: (params: { uri: string }) => s.strings.error_bitpay_multi_output_invoice,
  [BitPayErrorCode.MultiInstructionInvoice]: (params: { uri: string }) => s.strings.error_bitpay_multi_tx_invoice,
  [BitPayErrorCode.TxVerificationMismatch]: (params: { uri: string }) => sprintf(s.strings.error_bitpay_tx_verification_failed)
}

/**
 * BitPay Error class is designed to control every error being thrown by BitPay
 * @param code - Error Code
 * - EmptyOutputInvoice - Invoice response contained no target output
 * - EmptyVerificationHexReq - No hex strings generated for verification request
 * - FetchFailed - Fetch returned status other than 200
 * - MultiOutputInvoice - Invoice response asking for multiple outputs
 * - MultiInstructionInvoice - Invoice response gives multiple payment instructions
 * - TxVerificationMismatch - BitPay's tx verification response doesn't match our request
 * @param body: Body attached to the fetch request
 * @param header: Headers attached to the fetch request
 * @param method: POST/GET
 * @param statusCode: Numeric status code from fetch
 * @param text: Text data from failed fetch
 * @param uri: Uri that was being used
 */
export class BitPayError extends Error {
  body: string
  code: string
  header: string
  method: string
  statusCode: string
  text: string
  uri: string

  constructor(code: string, options: BitPayErrorOptions) {
    const bitPayErrorHandler: BitPayErrorHandler = HandlersByCode[code]
    const { body, header, method, statusCode, text, uri } = options
    super(bitPayErrorHandler({ body, header, method, statusCode, text, uri }))
    this.body = body || ''
    this.code = code
    this.header = header || ''
    this.statusCode = statusCode || ''
    this.text = text || ''
    this.uri = uri || ''
    this.name = 'BitPayError'
    Object.setPrototypeOf(this, BitPayError.prototype)
  }
}
