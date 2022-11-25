import React, { useState } from "react";

const FormTodo = props => {

    const [descripcion, setDescripcion] = useState("");

    const {addItem} = props;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(descripcion)
        setDescripcion("");

        addItem({

            done: false,
            id: (new Date()).toString(),
            descripcion
        
        });

        setDescripcion("");
    }




    return(
        

        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="file_input">
                    <input type="text" className="text" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    <button className="button" disabled={descripcion ? "" : "disabled"}> Agregar Tarea</button>
                </div>
            </div>
        </form>

    );
};

export default FormTodo;