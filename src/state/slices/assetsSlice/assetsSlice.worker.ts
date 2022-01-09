import { AssetService } from '@shapeshiftoss/asset-service'
import { expose } from 'comlink'

// eslint-disable-next-line import/no-default-export
export default {} as typeof Worker & { new (): Worker }

expose({
  create: async (...args: ConstructorParameters<typeof AssetService>): Promise<AssetService> => {
    return new AssetService(...args)
  }
})
