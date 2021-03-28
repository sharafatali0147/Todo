import React from 'react'
import { useHistory } from 'react-router-dom';

const TodoCard = (props) => {
    const { onTodo: { id, title, completed } } = props;
    const history =useHistory();

    return (
        <div onClick={() => history.push(`/todo/${id}`)} style={{ background: 'gray', margin: "10px", padding: "1px", width: "150px"}}>
            <h4>{ id } {title}</h4>
            <h6>{`comleted:  ${completed}`}</h6>
        </div>
    )
}


export default TodoCard
