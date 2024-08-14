import "./App.css";
import DataFetchingOne from "./hooks/useReducer/DataFetchingOne";


function App() {
  return (
    <div>
    <DataFetchingOne />
  </div>
 );
}
export default App;


// import { createContext, useReducer } from "react";
// import "./App.css";
// // import ComponentC from "./hooks/useContext/ComponentC";
// // import CounterOne from "./hooks/useReducer/CounterOne";
// // import CounterTwo from "./hooks/useReducer/CounterTwo";
// import CounterThree from "./hooks/useReducer/CounterThree";
// import ComponentA from "./hooks/contextReducer/ComponentA";
// import ComponentB from "./hooks/contextReducer/ComponentB";
// import ComponentC from "./hooks/useContext/ComponentC";


// // export const ThemeContext = createContext(null);
// export const CountContext = createContext();
// const initialState = 0
// const reducer = (state,action) => {

//   switch(action){
//       case 'increment': return state+1
//       case 'decrement' : return state -1
//       case 'reset':   return initialState
//       default: return state

//   }
// }

// //install axios
// function App() {
//   const [count,dispatch] = useReducer(reducer,initialState)
//   return (
//     <CountContext.Provider  value={{countState:count,countDispatch:dispatch}}>
//     <div>
//       {/* <CounterOne/> */}
//       {/* <CounterTwo/> */}
//       <CounterThree/>
//       <ComponentA/>
//       <ComponentB/>
//       <ComponentC/>
//     </div>
//     </CountContext.Provider>
//   );
// }

// export default App;
// import './App.css';
// import WeatherApp from './WeatherApp';
// // import ClassMouse from './hooks/useeffect/ClassMouse';
// // import HookMouse from './hooks/useeffect/HookMouse';
// // import MouseContainer from './hooks/useeffect/MouseContainer';
// // import ClassCounterOne from './hooks/useeffect/ClassCounterOne';
// // import CounterOne from './hooks/useeffect/CounterOne';
// // import ClassCounter from './hooks/usestate/ClassCounter';
// // import HookArray from './hooks/usestate/HookArray';
// // import HookCounter from './hooks/usestate/HookCounter';
// // import UsePrevCount from './hooks/usestate/UsePrevCount';
// // import UseStateObject from './hooks/usestate/UseStateObject';
// //import PostForm from './http/PostForm';
// //import Weather from './weather';
// // import Inline from './Styles/Inline';
// // import StyleSheet from './Styles/StyleSheet';
// // import Styles from './Styles/applyStyles.css';
// // import  './Styles/applyStyles.module.css';
// //import ListWithReadMore from './example/ListWithReadMore';
// // import Form from './formcomponents/Form';
// // import LifeCycleA from './formcomponents/LifeCyleA';
// // import Users from './http/Users';
// // import Greet from './components/Greet';
// // import Message from './components/Message';
// // import Counter from './components/Counter';
// // import FunctionClick from './components/FunctionClick';
// // import ClassClick from './components/ClassClick';
// // import UserGreeting from './components/UserGreeting';
// // import PackingList from './components/PackingList';
// // import PeopleList from './components/PeopleList';
// function App() {
  
//   // return (
//   //   <div className="App">
//   //      <h1 className="error">ERROR</h1>
//   //      <h1 className="success">Success</h1>
//   //    <StyleSheet  primary = {true}/>
//   //    <Inline/>
//   //   </div>
//   // );
//       /* <PackingList/>
//       <PeopleList/> */
//       /* <UserGreeting/>
//       <FunctionClick/>
//       <Counter/>
//       <Greet name="Vignika" alias="Nathi">
//       </Greet>
//       <ClassClick/>
//       <Message name= "Vignika" alias="Chatu"/> */
//       // return (
//       //   < div>
//       //      <Form/>
//       //      <LifeCycleA/>
//       //      <Users/> 
//       //        <PostForm/>
//      //         <ClassCounter/>
//       // <HookCounter/>
//       // <UsePrevCount/>
//       // <UseStateObject/>
//       // <HookArray/>
//       //        <Weather/>
//       // <ClassCounterOne/>
//       // <CounterOne/>
//       //    </div>)
      
//       return (
//        < div>
//           <WeatherApp/>
//         </div>
//         // <div className="App">
//         //   <h1>List with Read More/Read Less</h1>
//         //   <ListWithReadMore />
//         // <ClassMouse/>
//         // <HookMouse/>
//         // <MouseContainer/>
//         // </div>
        
//       );
// }

// export default App;


// //it responses to the state changes