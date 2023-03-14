import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/Header/Header'
import MainBase from '../components/MainBase/MainBase'
import Footer from '../components/Footer/Footer'
// import {AudioSlider} from '../components/AudioSlider/AudioSlider'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <div className={styles.App}>
        <Header/>
        <MainBase/>
        <Footer/>
      </div>
    </>
  )
}
