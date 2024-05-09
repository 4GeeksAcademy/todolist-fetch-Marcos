import React, { useEffect, useState } from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [Todos, setTodos] = useState([]);

 

  const raw = JSON.stringify(Todos);

//   const PostFetch = () => {
//     const requestOptions = {
//       method: "POST",
//       redirect: "follow",
//       body: raw,
//     };

//     fetch("https://playground.4geeks.com/todo/todos/marcos", requestOptions)
//       .then((response) => response.json())
//       .then((result) => console.log(result))
//       .catch((error) => console.error(error));
//   };

  const getTodos = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };


    fetch("https://playground.4geeks.com/todo/users/marcos", requestOptions)
      .then((response) => response.json())
      .then((result) => {
		console.log(result)
		setTodos(result.todos);
	})
      .catch((error) => console.error(error));
  };

  	useEffect(() =>{
		getTodos();
	}, [])

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      if (inputValue.trim().length >= 3) {
        Todos.push(inputValue);
        console.log(Todos);
        setInputValue("");
        PostFetch();
      } else {
        alert("Por favor, escriba alguna tarea.");
      }
    }
  };

  return (
    <div className="container">
      <h1>Mis Tareas</h1>
      <ul className="paper">
        <input
          type="text"
          placeholder="¿Qué necesitas hacer?"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          onKeyDown={handlekeydown}
        />

        {Todos.map((item, index) => {
          return (
            <div className="contenedor">
              <li key={index}>
                {" "}
                {item}
                <i
                  className="fa-solid fa-trash"
                  onClick={() =>
                    setTodos((prevTodos) =>
                      prevTodos.filter((todo) => todo !== item)
                    )
                  }
                ></i>
              </li>
            </div>
          );
        })}
      </ul>
      <div className="counter">{Todos.length} tareas</div>
      <div className="one"></div>
      <div className="two"></div>
    </div>
  );
};

export default Home;
