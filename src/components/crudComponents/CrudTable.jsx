import React from 'react';
import CrudTableRow from './CrudTableRow';


export default function CrudTable({data,setDb}){
    
    //functions
    const handleDelete = (e,id) => {
        e.preventDefault();
       
        const newData = data.filter((obj) => obj.id !== id);
        setDb(newData);
        console.log(newData);
    }

    //html
    return(
        <div>
            <h3>Table Information</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Song</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {data.length === 0 ? <td>No hay datos</td>: data.map((el) => <CrudTableRow key={el.id} id={el.id} name={el.name} song={el.song} remove={handleDelete}/>)}
                </tbody>
            </table>
        </div>
    );

}