import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Tree from './Components/Tree/Tree';

const data = [
  {
    id: "1",
    payload: [
      { id: "1-1",
        payload: [
          { id: "1-1-1",
            payload: [
              { id: "1-1-1-1" },
            ]
          },
          { id: "1-1-2",
            payload: [
              { id: "1-1-2-1",
                payload: [
                  { id: "1-1-2-1-1" },
                  { id: "1-1-2-1-2" },
                ] 
            },
              { id: "1-1-2-2" },
            ]
          },
        ]
      },
      { id: "1-2",
        payload: [
          { id: "1-2-1",
            payload: [
              { id: "1-2-1-1" },
              { id: "1-2-1-2" },
            ]
          },
        ]
      },
      { id: "1-2" },
      { id: "1-3" },
    ]
  },
  {
    id: "2",
    payload: [
      { id: "2-1" },
      { id: "2-2" },
      { 
        id: "2-3",
        payload: [
          { id: "2-3-1" },
          { id: "2-3-2" },
        ]
      },
    ]
  },
]

ReactDOM.render(
  <React.StrictMode>
    <Tree payload={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
