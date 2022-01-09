import {
  GENERATE_MNEMONIC,
  RemoteVaultFactoryServer,
  Vault
} from '@shapeshiftoss/hdwallet-native-vault'
import { expose, transfer } from 'comlink'

// eslint-disable-next-line import/no-default-export
export default {} as typeof Worker & { new (): Worker }

const server = new RemoteVaultFactoryServer(Vault)

expose({
  GENERATE_MNEMONIC,
  port: transfer(server.messagePort, [server.messagePort])
})
