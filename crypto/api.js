import { Sha256 } from 'asmcrypto.js'
import Base58 from './api/deps/Base58'
import Base64 from './api/deps/Base64'
import { base58PublicKeyToAddress } from './api/wallet/base58PublicKeyToAddress'
import { validateAddress } from './api/wallet/validateAddress'
import { decryptChatMessage, decryptChatMessageBase64 } from './api/transactions/chat/decryptChatMessage'
import _ from 'lodash'

window.Sha256 = Sha256
window.Base58 = Base58
window.Base64 = Base64
window._ = _
window.base58PublicKeyToAddress = base58PublicKeyToAddress
window.validateAddress = validateAddress
window.decryptChatMessage = decryptChatMessage
window.decryptChatMessageBase64 = decryptChatMessageBase64

export { initApi, store } from './api_deps.js'
export * from './api/deps/deps.js'
export * from './api/api.js'
export * from './api/registerUsername.js'
export { createWallet } from './api/createWallet.js'
