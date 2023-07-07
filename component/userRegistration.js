import React, { useState } from 'react';
import { useRouter } from 'next/router';

const RegistrationForm = () => {
    const router=useRouter();
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [qualification, setQualification] = useState('');

  const goLogin=async()=>{
    router.push('/loginUser');
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

     const userData = {
        fname,
        lname,
        email,
        password,
        age,
        qualification
      };
    try {
        const response = await fetch('/api/check', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        //   is used to convert the userData object into a JSON string before sending it in the request body.
        });
    // console.log({response});
        if (response.ok) {
           console.log('successfully registered');
         } else {
           console.log('user is already registered please login');
        //    router.push('/loginUser');
         }
      } catch (error) {
        console.error('error in register', error);
       }
    // console.log(fname, lname, email, password,age,qualification);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="qualification">Qualification</label>
        <input
          type="text"
          id="qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
      </div>
      <button type="submit">Register</button>
      <button onClick={goLogin}>login</button>

    </form>
  );
};

export default RegistrationForm;
