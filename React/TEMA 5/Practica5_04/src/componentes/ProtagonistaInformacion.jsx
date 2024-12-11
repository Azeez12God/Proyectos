import React from 'react'

const ProtagonistaInformacion = ({prota}) => {
    return (
        <>
            <p><strong>Género:</strong> {prota.value.gender}</p>
            <p><strong>Altura:</strong> {prota.value.height} cm</p>
            <p><strong>Peso:</strong> {prota.value.mass} kg</p>
            <p><strong>Color de pelo:</strong> {prota.value.hair_color}</p>
            <p><strong>Color de sus ojos:</strong> {prota.value.eye_color}</p>
        </>
    )
}

export default ProtagonistaInformacion