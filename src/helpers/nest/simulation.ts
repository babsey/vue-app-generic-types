import { BaseSimulation } from '../base/simulation'
import { NESTCode } from './code'
import type { NESTNetwork } from './network'
import type { NESTProject } from './project'

export class NESTSimulation extends BaseSimulation<NESTCode> {
  constructor(project: NESTProject) {
    super(project, { Code: NESTCode })
  }

  override get network(): NESTNetwork {
    return this.project.network
  }

  override init() {
    this.code = new NESTCode(this.project) as NESTCode
  }
}
