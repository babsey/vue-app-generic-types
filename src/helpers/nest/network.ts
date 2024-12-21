import { BaseNetwork } from '../base/network'
import { NESTConnection } from './connection'
import { NESTModel } from './model'
import { NESTNode } from './node'
import type { NESTProject } from './project'

export class NESTNetwork extends BaseNetwork<NESTModel, NESTNode, NESTConnection> {
  constructor(project: NESTProject) {
    super(project, { Model: NESTModel, Node: NESTNode, Connection: NESTConnection })
  }
}
