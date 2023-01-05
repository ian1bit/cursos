import React from "react"
import styles from './FeedPhotosItem.module.css'
import Image from '../Helper/Image'

const FeedPhostosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
        <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
};

export default FeedPhostosItem
