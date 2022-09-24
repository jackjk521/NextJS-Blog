
import styles from '../styles/postStyles.module.css'

export default function Layout({children }) {
    return <div className={styles.container}> {children} </div>
}