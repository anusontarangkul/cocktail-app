import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav/Nav'
import SearchBar from '../components/SearchBar/SearchBar'
import SearchResults from '../components/SearchResults/SearchResults'
import TextResults from '../components/TextResults/TextResults'
import Alert from '../components/Alert/Alert'
export default function Home() {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState('');



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <SearchBar setCocktails={setCocktails} setSearch={setSearch} search={search} />
        <TextResults />
        <SearchResults cocktails={cocktails} />
        <Alert />
      </main>

    </div>
  )
}
