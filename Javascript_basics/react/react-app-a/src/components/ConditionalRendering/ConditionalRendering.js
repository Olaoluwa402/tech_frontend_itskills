import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  //   using &&
  return (
    isloggedIn && (
      <div>
        <h2>You are welcome John</h2>
        <button onClick={(e) => setIsLoggedIn(false)}>Logout</button>
      </div>
    )
  );

  //   using a variable
  //   let res;
  //   if (isloggedIn) {
  //     res = (
  //       <div>
  //         <h2>You are welcome John</h2>
  //         <button onClick={(e) => setIsLoggedIn(false)}>Logout</button>
  //       </div>
  //     );
  //   } else {
  //     res = (
  //       <div>
  //         <h2>You are welcome Guest</h2>
  //         <button onClick={(e) => setIsLoggedIn(true)}>Login</button>
  //       </div>
  //     );
  //   }

  //   return res;
  // //ternary
  // return isloggedIn ? (
  //   <div>
  //     <h2>You are welcome John</h2>
  //     <button onClick={(e) => setIsLoggedIn(false)}>Logout</button>
  //   </div>
  // ) : (
  //   <div>
  //     <h2>You are welcome Guest</h2>
  //     <button onClick={(e) => setIsLoggedIn(true)}>Login</button>
  //   </div>
  // );

  //   if/else
  //   if (isloggedIn) {
  //     return (
  //       <div>
  //         <h2>You are welcome John</h2>
  //         <button onClick={(e) => setIsLoggedIn(false)}>Logout</button>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h2>You are welcome Guest</h2>
  //         <button onClick={(e) => setIsLoggedIn(true)}>Login</button>
  //       </div>
  //     );
  //   }
};

export default ConditionalRendering;
