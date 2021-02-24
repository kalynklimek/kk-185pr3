import './App.css';

import Body from './component/body';
import Tablist from './component/tablist';
// import { Component } from 'react';
import { useState } from 'react';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       active :1
//     }
//     this.changetab =(id) =>{
//       this.setState({
//         active :id
//       })
//     }
//   }

//   render() {
//     const tabs =[{
//       id:1,
//       title:'Home'
//     },
//     {
//       id:2,
//       title:'Text'
//     },
//     {
//       id:3,
//       title:'Image'
//     },
//     {
//       id:4,
//       title:'Video'
//     },
//     {
//       id:5,
//       title:'Table'
//     },
//     {
//       id:6,
//       title:'Email'
//     }]


//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}
//         <h1>Tabs Demo</h1>
//         <div classname="nav-bar">
//           <TabList tabs ={tabs} activetab ={this.state.active} ctab ={this.changetab}/>
//         </div>
//         <div classname="main-body">
//           <Body activetab ={this.state.active}/>
//         </div>
//       </div>
//     );
//   }
// }

function App() {
  const [active, setactive] = useState(1)
  const tabs =[{
    id:1,
    title:'home'
  },
  {
    id:2,
    title:'text'
  },
  {
    id:3,
    title:'image'
  },
  {
    id:4,
    title:'video'
  },
  {
    id:5,
    title:'table'
  },
  {
    id:6,
    title:'email'
  }]
  const changetab =(id) =>{
    setactive(id)
  }

  return (
    <div className="App">
      <div className="nav-bar">
        <Tablist tabs ={tabs} activetab ={active} ctab ={changetab}/>
      </div>
      <div className="main-body">
        <Body activetab ={active}/>
      </div>
    </div>
  );
}

export default App;
