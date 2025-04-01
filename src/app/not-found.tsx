import Link from "next/link"
import styles from "./notfound.module.css"


const NotFound = () => {
    return (
        <div className={styles.container}>
            <h2>Erro!</h2>
            <p>Ops Essa pagina não existe!</p>
            <Link href="/">Volta para Home</Link>
        </div>
    )
}
export default NotFound;