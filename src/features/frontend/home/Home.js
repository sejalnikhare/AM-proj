import React from 'react';

import Comp1 from "../components/comp1/Comp1";
import Comp2 from "../components/comp2/Comp2";
import { BrowserRouter as Router,Link,Route, Switch} from "react-router-dom";

const Home = () => {
    return (<>
        <h1>Home Component</h1>

        <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/comp1">Comp1</Link>
              </li>
              <li>
                <Link to="/comp2">Comp2</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/comp2">
              <Comp1 />
            </Route>
            <Route path="/comp1">
              <Comp2 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

    </>);
}
export default Home;


// import Comp1 from "./components/Comp1";
// import Comp2 from "./components/Comp2";
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Routes,
//   Switch
// } from "react-router-dom";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/comp1">Comp1</Link>
//               </li>
//               <li>
//                 <Link to="/comp2">Comp2</Link>
//               </li>
//             </ul>
//           </nav>

//           <Switch>
//             <Route path="/comp2">
//               <Comp1 />
//             </Route>
//             <Route path="/comp1">
//               <Comp2 />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }
