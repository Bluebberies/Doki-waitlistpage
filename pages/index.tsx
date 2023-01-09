import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import axios from "axios"
import { useState } from 'react'
import Nav from './components/nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [email, setEmail] = useState("")

  const show = () => {
    console.log("i am working on client");

    axios.post('api/waiting', { mail: email })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }



  return (
    <>
      <body>
        <div className="wrapper">
          <Nav />
        </div>

      </body >
    </>
  )
}
