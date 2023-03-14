import React, {useState} from 'react';
import styles from '../crudStyles/formUpdate.module.css';

//bootstrap styles
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Option({value}){
    return(
        <option value={value}>{value}</option>
    );
}

export default function CrudFromUpdate({title,data,setDb}){
    //state
    const [newId, setNewId] = useState({id: 1875786568678})
    const [newForm, setNewForm] = useState({id: 1875786568678, name: '',song:''}); 

    //functions
    function handleFormUpdate(e) {
        const selectedId = e.target.value;
        setNewId({ id: selectedId, });
        setNewForm({ id: selectedId, name: '', song: '', });
    }

    const handleChange  = (e) => {
        setNewForm({ 
            ...newForm,[e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!newForm.name || !newForm.song){
            alert('Name and Songs Artist cant be empty');
        }else{
            let findId = data.filter(el => el.id == newForm.id);
            findId[0].name = newForm.name; 
            findId[0].song = newForm.song;

            let updatedData = [...data,newForm]
            updatedData.pop();
            setDb(updatedData);
        }
    }
       
    //html
    return(
        <div className={styles.divUpdate}>
            <h4 className="text-center mt-4">{title}</h4>
            <form onSubmit={handleSubmit}>

                <label htmlFor="id">ID : </label>
                <Form.Select id="id" name="id" onChange={handleFormUpdate}>
                    {data.map((el) => <Option key={el.id} value={el.id}>{el.id} </Option>)} 
                </Form.Select>

                <Form.Group className="mb-3">
                    <Form.Label>Artist's Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="New name" value={newForm.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Artist's Song</Form.Label>
                    <Form.Control type="text" name='song' placeholder="Write a new song" value={newForm.song} onChange={handleChange} />
                </Form.Group>

                <Button variant="outline-success"  type='submit'>Update</Button>{' '}
    
               
            </form>
        </div>
    );
}


CrudFromUpdate.defaultProps = {
    title : 'Update the register'
} 

