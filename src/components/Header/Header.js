import React from 'react'
// import { images } from '../../constants'
// import './Header.scss'
import styles from './Header.module.scss'
import DarkMode from '../DarkMode/DarkMode.tsx'
// import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from 'react-icons/bs'
const Header = () => {
  return (
    <div className={styles.Home}>
        <div className={styles.header}>
            <div className={styles.title}>
                <h1><a href = "https://github.com/lucasichen/ridehome" target="_blank" rel="noreferrer"> ride home </a></h1>
            </div>
            <DarkMode />
            {/* <BsFillVolumeUpFill id='souwnd-icon'/> */}
        </div>
        <img id='home-img' src='/resources/train_night.gif' alt='home-img' />
    </div>
  )
}

export default Header;