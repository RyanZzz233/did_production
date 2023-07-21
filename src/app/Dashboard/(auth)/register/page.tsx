"use client"

import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import { useEffect } from 'react'

const Register = () => {

  useEffect(() => {document.title = 'EL Plan | Register'}, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <form className={styles.form} >
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={"border hover:border-my-yellow border-tyre-yellow text-tyre-yellow hover:text-my-yellow font-normal py-2 px-3 rounded-md shadow-md hover:shadow-lg bg-transparent text-lg"}>Register</button>
      </form>
      <span className={"text-white font-normal py-2 px-3 shadow-md bg-transparent text-lg items-center"}>- OR -</span>
      <Link className={"text-white font-normal py-2 px-3 shadow-md bg-transparent text-lg"} href="/Dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
}

export default Register