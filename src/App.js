import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Wrappe from "./Components/Wrappe";

export default function App() {
  return (
    <div>
      <Header />
      <Wrappe />

      <Footer />
    </div>
  );
}

// class App extends Component {
//   state = {
//     counter: 0,
//     //  intId: null,
//   };

//   stop = () => {
//     clearInterval(this.intId);
//   };
//   // incr = () => {
//   //   this.setState(({ counter }) => ({ counter: counter + 1 }));
//   // };
//   componentDidMount() {
//     setInterval(() => {
//       this.intId = this.setState(({ counter }) => ({ counter: counter + 1 }));
//     }, 1000);
//   }
//   render() {
//     const { counter } = this.state;
//     return (
//       <div style={{ margin: 40 }}>
//         <Login />
//         {/* {counter}
//         <button onClick={this.stop}>+</button> */}
//       </div>
//     );
//   }
// }

// class Counter extends Component {
//   render() {
//     const { counter, incr, name, color } = this.props;
//     return (
//       <>
//         <h1></h1>
//       </>
//     );
//   }
// }

//export default App;
