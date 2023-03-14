import React, { useState } from 'react';
import styles from '../crudStyles/formAdd.module.css';

//Bootstrap Styles
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CrudFormAdd({data,setDb,initialState}){
    
    //state
    const [form, setForm] = useState({id:null, name: '',song:''});

    //functions
    const handleChangue = (e) =>{
        setForm({ 
            ...form,[e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!form.name || !form.song){
            alert('Name and Songs Artist cant be empty');
        }else{
            const updatedForm = { ...form, id: Date.now()};
            const updatedArtistDb = [...data, updatedForm];
            setDb(updatedArtistDb);
            setForm({ id: Date.now(), name: '', song: '' });
        }
    }
    
    const handleReset = (e) =>{
        e.preventDefault();
        setDb(initialState);
    }

    //html
    return(
    <div className={styles.divAdd}>
        <h4 className="text-center">Introduce a new artist</h4>
        <form onSubmit={handleSubmit} className=' justify-content-center'>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Artist's Name</Form.Label>
                <Form.Control type="text" name = 'name' placeholder="Write a name" value={form.name} onChange={handleChangue}/>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Artist's Song</Form.Label>
                <Form.Control type="text" name = 'song' placeholder="Write a song" value={form.song} onChange={handleChangue}/>
            </Form.Group>
    
            <br></br>
        
            <Button   variant="outline-success"  type='submit'>Add </Button>{' '}
            <Button   variant="outline-danger" type='reset' onClick={handleReset}>Reset</Button>{' '}
        </form>
    </div>);

}