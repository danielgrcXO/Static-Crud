import React, { useState } from 'react';


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
    <div>
        <h3>Introduce a new artist</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name = 'name' placeholder="Write an artist" value={form.name} onChange={handleChangue}/>
            <input type="text" name = 'song' placeholder="Write a song" value={form.song} onChange={handleChangue}/>
            <br></br>
            <br></br>
            <input type='submit' value='Add'></input>
            <input type='reset' value='Reset' onClick={handleReset}></input>
        </form>
    </div>);

}