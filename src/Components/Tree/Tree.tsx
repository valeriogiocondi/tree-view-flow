import React from 'react';
import "./Tree.css";

import NodeType from '../../Entities/NodeType';
import Node from '../Node/Node';


type TreeProps = {

  payload: Array<NodeType>
}

const Tree = (props: TreeProps) => {

  const renderTree = (arr: Array<NodeType>) => {

    return arr.map((x: NodeType, index: number) => {
  
      return (
        <li 
          key={ index } 
          className={`index-${index}`}
        >
          <Node 
            id={ x.id } 
            payload={ x.payload } 
            level={ 0 }
            isParentLastChild={ [(index === arr.length-1)] } 
            />
        </li>
      );
    });
  }

  return (
    <>
      <div className="tree-content">
        <ul>
          { renderTree(props.payload) }
        </ul>
      </div>
    </>
  );
};

export default Tree;