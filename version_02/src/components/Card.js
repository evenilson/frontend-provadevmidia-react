import Card from "../../../version_01/src/components/card/Card";


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