import React from 'react'
import './Card.css'

export default props => (
    <div className='card'>
        <section className="content-card">
            <h3 className='title'>{props.title}</h3>
            <p>
                {props.info}
            </p>
        </section>
        <button className="button">Acessar</button>
    </div>
)