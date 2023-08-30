// import React, { useState } from 'react';
// import axios from 'axios';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { useHistory } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

// const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//        try {
//       const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
//         email,
//         password,
//       });
//       if (res.data.success) {
//         toast.success("Login successfull!");
//         history.push('/');
         
//       } else {
//         toast.error("Login failed!");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="register">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail2"
//               placeholder="Email "
//               required
//             />
//         <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//               required
//             />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;








// components/Login.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { setIsLoggedIn, setUser } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
        email,
        password,
      });

      if (res.data.success) {
        toast.success("Login successful!");
        setIsLoggedIn(true);
        setUser(res.data.user); // Store the user information in the context
        history.push('/');
      } else {
        toast.error("Login failed!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="register">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail"
          placeholder="Email"
          required
          autoFocus
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
