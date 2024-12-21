import type { BaseProject } from './project'
import type { Class } from '../types'
import { BaseConnection } from './connection'
import { BaseModel } from './model'
import { BaseNode } from './node'
import { BaseObj } from './base'
import { NodeGroup } from './nodeGroup'

interface IBaseNetworkProps<
  TModel extends BaseModel = BaseModel,
  TNode extends BaseNode<TModel> = BaseNode<TModel>,
  TConnection extends BaseConnection<TModel> = BaseConnection<TModel>,
> {
  Model: Class<TModel>
  Node: Class<TNode>
  Connection: Class<TConnection>
}

export class BaseNetwork<
  TModel extends BaseModel = BaseModel,
  TNode extends BaseNode<TModel> = BaseNode<TModel>,
  TConnection extends BaseConnection<TModel> = BaseConnection<TModel>,
> extends BaseObj {
  connections: TConnection[] = []
  nodes: NodeGroup<TNode> = new NodeGroup<TNode>(this)
  project: BaseProject
  props: IBaseNetworkProps<TModel | BaseModel, TNode | BaseNode, TConnection | BaseConnection> = {
    Model: BaseModel,
    Node: BaseNode,
    Connection: BaseConnection,
  }

  constructor(
    project: BaseProject,
    props: IBaseNetworkProps<TModel | BaseModel, TNode | BaseNode, TConnection | BaseConnection> = {
      Model: BaseModel,
      Node: BaseNode,
      Connection: BaseConnection,
    },
  ) {
    super()
    this.project = project
    this.props = { ...this.props, ...props }
    this.init()
  }

  get firstConnection(): TConnection {
    return this.connections[0]
  }

  get code() {
    return this.project.simulation.code
  }

  init() {
    this.nodes.children.push(new this.props.Node(this, this.props) as TNode)
    this.connections.push(new this.props.Connection(this, this.props) as TConnection)
  }
}
