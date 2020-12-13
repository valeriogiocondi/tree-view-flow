type NodeType = {
  id:                 string
  payload?:           Array<any>
  level:              number
  isParentLastChild:  Array<boolean>
}

export default NodeType;