import React, { useEffect, useState } from 'react';
import "./Node.css";

import NodeType from '../../Entities/NodeType';


const Node: React.FC<NodeType> = (props) => {

  const [isOpen, setIsOpen] = useState(true);

  const payload = (props.payload) ?? [];
  const marginLeft = 70*props.level;
  const payloadStyle = (!isOpen) ? "hidden" : "";
  const buttonClass = (!props.payload || props.payload.length === 0) ? "no-children" : "";

  return (
    <>
      <LineV level={ props.level } isParentLastChild={ props.isParentLastChild } />
      <LineH level={ props.level } />
      <div 
        className={`node lev-${props.level}`}
        style={{ marginLeft: marginLeft }}
      >
        #{ props.id } 
        <button 
          className={`toggle-children ${buttonClass}`}
          onClick={ () => setIsOpen(!isOpen) }
        >
          { (isOpen) ? "-" : "+" }
        </button>
      </div>
      {
        (payload.length > 0) ? (
          <div className={`children-wrapper ${payloadStyle}`}>
            <ul>
              {payload.map((x: NodeType, index: number)=> { 

                const isLastChild = [ ...props.isParentLastChild, (index === payload.length-1)];
                
                return (
                  <li 
                    key={ index } 
                    className={`index-${index}`}
                  >
                    <Node 
                      id={ x.id } 
                      payload={ x.payload } 
                      level={ props.level + 1 } 
                      isParentLastChild={ isLastChild } 
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : ( <></> )
      }
    </>
  );
};

type LineHProps = {
  level: number
};
const LineH: React.FC<LineHProps> = (props) => {
  
  const style = { marginLeft: 20*props.level + 50*(props.level-1) };
  
  return (
    <>
      { (props.level > 0 && (<div className="line-h" style={ style} ></div>)) }
    </>
  );
};

type LineVProps = {
  level:              number 
  isParentLastChild:  Array<boolean>
};
const LineV: React.FC<LineVProps> = (props) => {

  const [component, setComponent] = useState<JSX.Element>(<></>);
  const lineLevNMarginLeft = 20*props.level + 50*(props.level-1);

  useEffect(() => {

    let arrLinesV: Array<JSX.Element> = [];
    let style = {};

    for (let i=0; i<props.isParentLastChild.length-2; i++) {

      style = (props.isParentLastChild[i+1]) ? { marginLeft: (i*70 + 20), opacity: 0 } : { marginLeft: (i*70 + 20) };

      arrLinesV.push( <div className="line-v lev-0" style={ style }></div> );
    }

    if (props.level === 1) {
      setComponent(
        <div className="line-v"></div>
      );
    } else if (props.level > 1) {
      setComponent(
        <>
          { arrLinesV.map(x => x) }
          <div className="line-v" style={{ marginLeft: lineLevNMarginLeft }}></div>
        </>
      );
    }
  }); 

  return (
    <>
      { component }
    </>
  );
};

export default Node;