import { ISealableVaultFactory, IVault } from '@shapeshiftoss/hdwallet-native-vault'
import { wrap } from 'comlink'

import Worker from './vault.worker'

const worker = wrap<{
  GENERATE_MNEMONIC: string
  port: MessagePort
}>(new Worker())

export const GENERATE_MNEMONIC: Promise<string> = worker.GENERATE_MNEMONIC as Promise<string>

export const Vault: Promise<ISealableVaultFactory<IVault>> = (async () => {
  const RemoteVaultFactory = (await import('@shapeshiftoss/hdwallet-native-vault'))
    .RemoteVaultFactory
  return new RemoteVaultFactory(worker.port)
})()
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Vault = IVault
