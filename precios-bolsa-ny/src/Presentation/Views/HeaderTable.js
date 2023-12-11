import React from 'react';
import obtenerPreciosActuales from '../../Data/data'
import '../Theme/HeaderTable.css'
const data = await obtenerPreciosActuales();
const HeaderTable = ({ }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className='header-table-title'>Nombre de la Acción</th>
                    <th className='header-table-title'>Símbolo</th>
                    <th className='header-table-title'>Precio de compra por acción</th>
                    <th className='header-table-title'>Último Precio al cierre</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.ticker}>
                        <td>{item.name}</td>
                        <td>{item.ticker}</td>
                        <td>{"$"+item.datos.c}</td>
                        <td>{"$"+item.datos.pc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default HeaderTable;