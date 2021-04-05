import styles from "../styles/components/Card.module.css"

export function Card({title, info}) {
    return (
        <div className={styles.cardContainer}>
            <section>
                <h3>{title}</h3>
                <p>
                    {info}
                </p>
            </section>
            <button >Acessar</button>
        </div>
    );
}