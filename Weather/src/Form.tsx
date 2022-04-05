import React,{useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Form({setCards}) {

    const [formTitle, setFormTitle] = useState(''); 


    const handleTitleChange = e => {
        setFormTitle(e.target.value);
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        
        setCards(
            [{title: formTitle}]
        );
        setFormTitle("");
    }

    return (
    <form className="my-5 mx-auto" style={{maxWidth: '600px'}} onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" onChange={handleTitleChange} value={formTitle}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    )

}