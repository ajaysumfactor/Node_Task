import React, { useEffect, useState } from 'react';
import styles from './getAlluser.module.css';
const GetAllUser=()=>{
    const deleteUser=async(email)=>{
        const userData = {
            
            email,
            
          };
        try {
            const response = await fetch('/api/delete', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
             });
             if (response.ok) {
               console.log('successfully removed');
             } else {
               console.log('error');
             }
          } catch (error) {
            console.error('error in removing user', error);
           }
    }

    const [data1, setData] = useState([]);
    useEffect(() => {
        async function getuserlist(){
        const response=await fetch('http://localhost:3000/api/getall', {method: 'GET',headers: {'Content-Type': 'application/json'}});
        const data =await response.json();
         setData(data.resultset);
        console.log(data.resultset);

        }
        getuserlist();
    },[]);
      
    return (
        <>
          <table className={styles.table_header}>
  <thead>
    <tr className={styles.table_row1}>
      <th className={styles.table_head}>fname</th>
      <th className={styles.table_head}>lname</th>
      <th className={styles.table_head}>email</th>
      <th className={styles.table_head}>password</th>
      <th className={styles.table_head}>age</th>
      <th className={styles.table_head}>qualification</th>
      <th className={styles.table_head}>Delete user</th>

    </tr>
  </thead>
  <tbody>
    {data1.map((user) => (
      <tr key={user.id} className={styles.table_row}>
        <td className={styles.table_data}>{user.fname}</td>
        <td className={styles.table_data}>{user.lname}</td>
        <td className={styles.table_data}>{user.email}</td>
        <td className={styles.table_data}>{user.password}</td>
        <td className={styles.table_data}>{user.age}</td>
        <td className={styles.table_data}>{user.qualification}</td>
        <td className={styles.table_data}><button onClick={() => deleteUser(user.email)}>Delete</button></td>

      </tr>
    ))}
  </tbody>
</table>

        </>
    );
}
export default GetAllUser;