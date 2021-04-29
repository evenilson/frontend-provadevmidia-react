import styles from "../styles/components/Content.module.css"


import { Card } from "./Card";



export function Content() {
    let cardsInfo = [
        {
            id: 1,
            title: "Titulo card 1",
            info: "Informação card 1"
        },
        {
            id: 2,
            title: "Titulo card 2",
            info: "Informação card 2"
        },
        {
            id: 3,
            title: "Titulo card 3",
            info: "Informação card 3"
        },
        {
            id: 4,
            title: "Titulo card 4",
            info: "Informação card 4"
        },
        {
            id: 5,
            title: "Titulo card 5",
            info: "Informação card 5"
        },
        {
            id: 6,
            title: "Titulo card 1",
            info: "Informação card 1"
        },
        {
            id: 7,
            title: "Titulo card 2",
            info: "Informação card 2"
        },
        {
            id: 8,
            title: "Titulo card 3",
            info: "Informação card 3"
        },
        {
            id: 9,
            title: "Titulo card 4",
            info: "Informação card 4"
        },
        {
            id: 10,
            title: "Titulo card 5",
            info: "Informação card 5"
        },
        
    ]

    const cardsMake = cardsInfo.map((card) =>
        <Card key={card.id} title={card.title} info={card.info}/>
    );
    
    return (
        <div className={styles.containerContent}>
            {cardsMake}
        </div>  
    );
}