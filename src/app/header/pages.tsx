import styles from "./styles.module.css"




export function Header() {
    return (
        <div className={styles.header}>
            <section className={styles.section}>
                <a href="/" >Home</a>
                <a href="/contato" >Contato</a>
                <a href="/sobre" >Sobre</a>
            </section>

            <hr />
            <br />
        </div>
    );
}
