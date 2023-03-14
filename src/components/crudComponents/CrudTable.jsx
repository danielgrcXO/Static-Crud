import React from 'react';
import CrudTableRow from './CrudTableRow';
import styles from '../crudStyles/table.module.css';

//bootstrap styles
import Table from 'react-bootstrap/Table';


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
        <div className={styles.table}>
            <h3 className="text-center mt-5">Table Information</h3>

            <Table striped bordered hover className='text-center'>
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
            </Table>
        </div>
    );

}