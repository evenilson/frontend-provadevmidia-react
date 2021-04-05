export function Card() {
    return (
        <div className={styles.cardContainer}>
            <section>
                <h3>{props.title}</h3>
                <p>
                    {props.info}
                </p>
            </section>
            <button >Acessar</button>
        </div>
    );
}