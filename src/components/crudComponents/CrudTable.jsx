import React, {useState} from 'react';
import CrudFromUpdate from './CrudFormUpdate';
import CrudTableRow from './CrudTableRow';
//import styles from '../crudCss/crudFormUpdate.module.css';

export default function CrudTable({data,setDb}){
    
    //a cambiar
    const handleEdit = (e,id) => {
        e.preventDefault();

        
       // const position = data.findIndex((data) => data.id === id);

        //if(position !== -1){
           // console.log('funciono');
           // const newData = [...data];
           // newData[position] = {...newData[position], name: 'funciono'}
           // setDb(newData);
        //}
    }
    
    const handleDelete = (e,id) => {
        e.preventDefault();
       
        const newData = data.filter((obj) => obj.id !== id);
        setDb(newData);
        console.log(newData);
    }
    
    return(
        <div>
            <CrudFromUpdate data={data} setDb={setDb}/>

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
                   {data.length === 0 ? <td>No hay datos</td>: data.map((el) => <CrudTableRow key={el.id} id={el.id} name={el.name} song={el.song} remove={handleDelete} edit={handleEdit}/>)}
                </tbody>
            </table>
        </div>
    );
}