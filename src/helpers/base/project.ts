import { BaseObj } from './base'
import { BaseCode } from './code'
import { BaseNetwork } from './network'
import { BaseSimulation } from './simulation'

export class BaseProject extends BaseObj {
  network: BaseNetwork
  simulation: BaseSimulation
  code: BaseCode

  constructor() {
    super()
    this.init()
  }

  init() {
    this.network = new BaseNetwork(this)
    this.simulation = new BaseSimulation(this)
    this.code = new BaseCode(this)
  }
}
