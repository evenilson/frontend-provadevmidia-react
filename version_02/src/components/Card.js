import styles from "../styles/components/Card.module.css"

function RandomColor() {
    const hex = (Math.random()*0XFFFFFF<<0).toString(16);
    return `#${hex}`
}

export function Card({title, info}) {
    return (
        <div className={styles.cardContainer} style={{borderColor:`${RandomColor()}`}}>
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