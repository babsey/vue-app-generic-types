import { BaseConnection } from '../base/connection'
import { NESTModel } from './model'
import type { NESTNetwork } from './network'

export class NESTConnection extends BaseConnection<NESTModel> {
  constructor(network: NESTNetwork) {
    super(network, { Model: NESTModel })
  }
}
