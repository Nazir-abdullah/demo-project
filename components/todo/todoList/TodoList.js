import Image from "next/image";
import React, { useEffect, useState } from "react";
import TodoImage from "public/images/todo.png";

import { ButtonDark, ButtonLight } from "components/shared/buttons/Buttons";
import { ContentWrapper } from "components/shared/elements/Elements";

import Todo from "../todo/Todo";
import TodoForm from "../todoForm/TodoForm";

import { TodoSection, TodosTitle, TodosWrapper } from "./TodoList.styled";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [showTodo, setShowTodo] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("todos")) {
            const storedList = JSON.parse(localStorage.getItem("todos"));
            setTodos(storedList);
        }
    }, []);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);

        localStorage.setItem("todos", JSON.stringify([todo, ...todos]));
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev =>
            prev.map(item => (item.id === todoId ? newValue : item))
        );
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        localStorage.setItem("todos", JSON.stringify(removeArr));

        setTodos(removeArr);
    };

    const completeTodos = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const showList = () => {
        setShowTodo(true);
    };

    const hideList = () => {
        setShowTodo(false);
    };

    return (
        <TodoSection>
            <ContentWrapper>
                <TodosWrapper>
                    <TodosTitle>
                        <h1>Write Your tasks</h1>
                    </TodosTitle>
                    {!showTodo && (
                        <ButtonDark onClick={showList}>Create Tasks</ButtonDark>
                    )}
                    {showTodo && (
                        <ButtonLight onClick={hideList}>Hide List</ButtonLight>
                    )}
                    {!showTodo && (
                        <Image src={TodoImage} width={500} height={300} />
                    )}
                    {showTodo && (
                        <>
                            <h3>What do you want to plan for today:</h3>
                            <TodoForm onSubmit={addTodo} />
                            <Todo
                                todos={todos}
                                removeTodo={removeTodo}
                                updateTodo={updateTodo}
                                completeTodo={completeTodos}
                            />
                        </>
                    )}
                </TodosWrapper>
            </ContentWrapper>
        </TodoSection>
    );
}

export default TodoList;
