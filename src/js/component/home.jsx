import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [newTodo, setNewTodo] = useState("")
	const [todos, setTodos] = useState("")

	const handleClick = () => {
		return(
			setTodos([...todos, newTodo])
		)
	}

	const deleteTask = (index) => {
		const listaNueva = todos.filter((todo, i) => i !== index)
		setTodos(listaNueva)
	}

	const handleChange = (event) => {
		return(
			setNewTodo(event.target.value)
		)
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todo list!</h1>
			<div className="container">
				<input type="text" className="form-control" onChange={handleChange} />
				<button 
				type="button" 
				className="btn btn-success"
				onClick={handleClick}
				>
				Agregar tarea</button>
			
				<ul>
					{todos.map((todo) => {
						return(
							<li>
								{todo} <button 
								type="button" 
								className="btn btn-danger"
								onClick={deleteTask}
								>Borrar</button>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	);
};

export default Home;
