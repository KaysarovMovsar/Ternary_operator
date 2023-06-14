// import './App.css';
// import React from "react";
//
// function App(props) {
//     const isDay = props.hours > 18
//
//   return (
//     <div className="App">
//       {isDay ? "сейчас день": "сейчас вечер"}
//     </div>
//   );
// }

// export default App;

//Про задание 2 Я бы не сказал что оно выводит первое значение при любых условиях поскольку оно выводит второе при значении
//0,'',false


// import './App.css'
//
// function App() {
//     const dark = true;
//
//     return(
//         <div className={dark ? "dark" : "light"}>
//             'Ternary operator'
//         </div>
//     );
// };
//
// export default App;

import './App.css';

function App() {
    const number = true;

    return(
        <div className={number ? "Large" : "Small"}>
            Ternary operator
        </div>
    );
};

export default App;
