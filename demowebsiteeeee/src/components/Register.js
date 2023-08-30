// import React, { useState } from 'react';
// import axios from 'axios';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { useHistory } from 'react-router-dom';

// const Register = () => {
//    const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

// const history = useHistory();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//        try {
//       const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
//         name,
//         email,
//         password,
//         phone,
//         address,
//       });
//       if (res.data.success) {
//         toast.success("Registration successfull!");
//         history.push('/');
         
//       } else {
//         toast.error("Registration failed!");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="register">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//          <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Full Name"
//               required
//               autoFocus
//             />
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
//         <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail3"
//               placeholder="Phone"
//               required
//         />
//         <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail4"
//               placeholder="Address"
//               required
//             />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;






// components/Register.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const { setIsLoggedIn, setUser } = useAuth();
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
      });

      if (res.data.success) {
        toast.success("Registration successful!");
        setIsLoggedIn(true);
        setUser(res.data.user); // Store the user information in the context
        history.push('/');
      } else {
        toast.error("Registration failed!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Full Name"
          required
          autoFocus
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="exampleInputEmail2"
          placeholder="Email "
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        />
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          id="exampleInputEmail3"
          placeholder="Phone"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="form-control"
          id="exampleInputEmail4"
          placeholder="Address"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
