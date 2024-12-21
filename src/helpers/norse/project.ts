import { BaseConnection } from '../base/connection'
import { BaseNetwork } from '../base/network'
import { BaseNode } from '../base/node'
import { BaseProject } from '../base/project'
import { BaseSimulation } from '../base/simulation'
import { NorseCode } from './code'
import { NorseModel } from './model'

export class NorseProject extends BaseProject {
  constructor() {
    super()
  }

  init() {
    this.network = new BaseNetwork<NorseModel>(this, {
      Model: NorseModel,
      Node: BaseNode,
      Connection: BaseConnection,
    })
    this.simulation = new BaseSimulation<NorseCode>(this, { Code: NorseCode })
  }
}
