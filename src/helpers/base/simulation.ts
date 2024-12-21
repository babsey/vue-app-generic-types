import type { BaseNetwork } from './network'
import type { BaseProject } from './project'
import type { Class } from '../types'
import { BaseCode } from './code'
import { BaseObj } from './base'

export class BaseSimulation<TCode extends BaseCode = BaseCode> extends BaseObj {
  project: BaseProject
  code: TCode
  props: { Code: Class<TCode | BaseCode> }

  constructor(project: BaseProject, props: { Code: Class<TCode | BaseCode> } = { Code: BaseCode }) {
    super()
    this.project = project
    this.props = props
    this.init()
  }

  get network(): BaseNetwork {
    return this.project.network
  }

  init() {
    this.code = new this.props.Code(this.project) as TCode
  }
}
