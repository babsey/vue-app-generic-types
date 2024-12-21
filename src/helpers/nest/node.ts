import { BaseNode } from '../base/node'
import { NESTModel } from './model'
import type { NESTNetwork } from './network'

export class NESTNode extends BaseNode<NESTModel> {
  constructor(network: NESTNetwork) {
    super(network, { Model: NESTModel })
  }
}
