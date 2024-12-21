import { BaseProject } from '../base/project'
import { NESTNetwork } from './network'
import { NESTSimulation } from './simulation'

export class NESTProject extends BaseProject {
  constructor() {
    super()
  }

  override init() {
    this.network = new NESTNetwork(this)
    this.simulation = new NESTSimulation(this)
  }
}
