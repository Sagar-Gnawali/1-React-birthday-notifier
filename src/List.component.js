import React from 'react'

const ListComponent = ({ people }) => {
    return (
        <>
            {people.map((individual) => {
                const { id, name, age, image } = individual;
                return <article key={id} className="person">
                    <img src={image} alt={name}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                </article>
            })}
        </>
    )
}
export default ListComponent;