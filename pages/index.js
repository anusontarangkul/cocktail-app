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
        <title>Cocktail App</title>
        <meta name="description" content="Search and save your favorite cocktails" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍹</text></svg>" />
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
