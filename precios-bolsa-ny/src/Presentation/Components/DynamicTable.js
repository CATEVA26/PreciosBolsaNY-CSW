import React from 'react';
import '../Theme/DynamicTable.css'

const DynamicTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className='table-title'>Nombre empresa</th>
                    <th className='table-title'>Nombre de la acción</th>
                    <th className='table-title'>Precio de compra por acción</th>
                    <th className='table-title'>Cantidad de acciones</th>
                    <th className='table-title'>Costo total de compra</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.ticker}>
                        <td>{item.ticker}</td>
                        <td>{item.date}</td>
                        <td>{item.c}</td>
                        <td>{item.cantidad}</td>
                        <td>{item.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default DynamicTable;