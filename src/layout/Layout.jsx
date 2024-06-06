import React from 'react'
import styles from "../components/css/Layout.module.css"

function Layout({children}) {

  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p><a href="">Hesam</a> | React.js App Test </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Develope by Hesam Pirzadeh</p>
      </footer >
    </>
  )
}

export default Layout