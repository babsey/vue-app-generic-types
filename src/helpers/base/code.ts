import { BaseObj } from './base'
import type { BaseProject } from './project'

export class BaseCode extends BaseObj {
  project: BaseProject
  code: string

  constructor(project: BaseProject) {
    super()
    this.project = project
  }
}
