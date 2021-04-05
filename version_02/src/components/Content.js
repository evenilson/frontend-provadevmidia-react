import { Card } from "./Card";


export function Content() {
    let cardsInfo = [
        {
            title: "Titulo card 1",
            info: "Informação card 1"
        },
        {
            title: "Titulo card 2",
            info: "Informação card 2"
        },
        {
            title: "Titulo card 3",
            info: "Informação card 3"
        },
        {
            title: "Titulo card 4",
            info: "Informação card 4"
        },
        {
            title: "Titulo card 5",
            info: "Informação card 5"
        },
        {
            title: "Titulo card 6",
            info: "Informação card 6"
        },
        {
            title: "Titulo card 7",
            info: "Informação card 7"
        },
        {
            title: "Titulo card 8",
            info: "Informação card 8"
        },
        {
            title: "Titulo card 9",
            info: "Informação card 9"
        },
        {
            title: "Titulo card 10",
            info: "Informação card 10"
        }
        
    ]

    const cardsMake = cardsInfo.map((card) =>
        <Card key={card.title} title={card.title} info={card.info}/>
    );
    
    return (
        <div className={styles.containerContent}>
            {cardsMake}
        </div>  
    );
}