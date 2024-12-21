import { BaseObj } from './base'
import { BaseModel } from './model'
import type { BaseNetwork } from './network'
import type { Class } from '../types'

export class BaseNode<TModel extends BaseModel = BaseModel> extends BaseObj {
  model: TModel
  network: BaseNetwork

  constructor(network: BaseNetwork, props: { Model: Class<TModel> }) {
    super()
    this.network = network
    this.model = new props.Model() as TModel
  }
}
