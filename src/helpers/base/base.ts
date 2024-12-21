export class BaseObj {
  get name(): string {
    return this.constructor.name
  }
}
