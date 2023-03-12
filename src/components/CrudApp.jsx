import React,{useState} from 'react';
import CrudFormAdd from './crudComponents/CrudFormAdd';
import CrudFromUpdate from './crudComponents/CrudFormUpdate';
import CrudTable from './crudComponents/CrudTable';

//database simulated
const artistDb = [
    {id:1875786568678 ,name : 'The weeknd', song : 'Save Your Tears'},
    {id:2565644456965 ,name : 'Drake',  song : 'On BS'},
    {id:3657567567743 ,name : 'Rema',  song : 'Calm down'},
    {id:7659857574643 ,name : 'Jack Harlow', song : 'First Class'}
];


export default function CrudApp({title}){

    //state
    const [db, setDb] = useState(artistDb);

    //html
    return(
        <div>
            <h1>{title}</h1>
            
            <CrudFormAdd data={db} setDb={setDb} initialState={artistDb}/>
            <CrudFromUpdate data={db} setDb={setDb}/>
          
            <CrudTable data={db} setDb={setDb}/>
        </div>
    );
}


CrudApp.defaultProps = {
    title : 'CRUD APP'
}