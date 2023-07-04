import Head from 'next/head'
import Image from 'next/image'
 import connection from '@/lib/database/connection'
 import RegistrationForm from '../component/userRegistration';
 
export default function Home() {
   return (
    <>
      <h1>Registration form</h1>
      <RegistrationForm/>
    </>
  )
}
