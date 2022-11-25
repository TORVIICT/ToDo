import React, { Fragment } from "react";

const CheckBox = props => {

    const {
        onChange,
        data: {id, descripcion, done}
    } = props;

    return(
        <Fragment>

            <label className="todo new-item">
                <input type="checkBox" className="todo_state" name={id} defaultChecked={done} onChange={onChange} />
                <div className="todo_text">{descripcion}</div>
            </label>

        </Fragment>

    );
};

export default CheckBox;