import React,{useState} from 'react';
import CrudFormAdd from './crudComponents/CrudFormAdd';
import CrudFromUpdate from './crudComponents/CrudFormUpdate';
import CrudTable from './crudComponents/CrudTable';
import styles from './crudStyles/formFather.module.css';

//database simulated
const artistDb = [
    {id:1875786568678 ,name : 'The weeknd', song : 'Save Your Tears'},
    {id:2565644456965 ,name : 'Drake',  song : 'On BS'},
    {id:3657567567743 ,name : 'Rema',  song : 'Calm down'},
    {id:7659857574643 ,name : 'Jack Harlow', song : 'First Class'}
];


export default function CrudApp(){

    //state
    const [db, setDb] = useState(artistDb);

    //html
    return(
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <CrudFormAdd data={db} setDb={setDb} initialState={artistDb}/>
                <CrudFromUpdate data={db} setDb={setDb}/>
            </div>
            <CrudTable data={db} setDb={setDb}/>
        </div>
    );
}

