import { BaseObj } from './base'
import { BaseNetwork } from './network'
import { BaseNode } from './node'

export class NodeGroup<TNode extends BaseNode = BaseNode> extends BaseObj {
  network: BaseNetwork
  children: (TNode | NodeGroup<TNode>)[] = []

  constructor(network: BaseNetwork) {
    super()
    this.network = network
  }

  get firstNode(): TNode {
    return this.children[0] as TNode
  }
}
