
// function App() {
//   return (
//     <div className="App">
//       <h1>helo </h1>
//     </div>
//   );
// }

// export default App;
// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componts/Login'; // Assuming you have a Login component
import Register from './componts/Register'; // Assuming you have a Register component
import Navbar from './componts/nav';

const App = () => {
    return (
      <Router>

            <Routes>
              <Route path='/' element={<Navbar/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>    
        </Router>
    );
};

export default App;
