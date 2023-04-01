// // ! React Routing
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// //! Here we using Routes instead of Switch
// import Home from './other/Home';
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import "./Global.css";
// import Nav from "./header/Nav";
// import PageNotFound from "./other/PageNotFound";
// import DashBoard from "./Dashboard/DashBoard";
// import MyAccount from "./Dashboard/MyAccount";
// import UserProfile from "./Dashboard/UserProfile";
// import BaseRoutes from './Routes/BaseRoutes';
// import Users from './other/Users';

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <Nav />
//         <Routes>
//           {/* <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
// <Route path="/:name" element={<Users/>}/> */}

//           {/* here the below component is nested */}
//            {/* <Route path="/dashboard" element={<DashBoard />}>
            // ! index is used to display the default page in UI
//           <Route index element={<UserProfile/>}/>
//             <Route path="myaccount" element={<MyAccount />} />
//             <Route path="userprofile" element={<UserProfile />} />
//           </Route>
//           <Route path="/register" element={<Register />} />
//           <Route path="*" element={<PageNotFound />} /> */}

//           <BaseRoutes/>
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;



// ===================================

// ! React Routing using the useReact react hook
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import "./Global.css";
import Nav from "./header/Nav";
import BaseRoutes from './Routes/BaseRoutes';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
          <BaseRoutes/>
      </Router>
    </div>
  );
};
export default App;
