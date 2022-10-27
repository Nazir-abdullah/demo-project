import { AiOutlineEdit } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import React, { useState } from "react";

import { ButtonDark, ButtonLight } from "../../shared/buttons/Buttons";
import { PopUpModal, PopupInfo, TitlePopup } from "../../shared/modal/PopUp";
import TodoForm from "../todoForm/TodoForm";

import { ButtonsWrapper, Icons, TodoWrapper } from "./Todo.styled";

function Todo({ todos, removeTodo, updateTodo, completeTodo }) {
    const [warning, setWarning] = useState(false);
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ""
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    const showModal = () => {
        setWarning(true);
    };

    const closeModal = () => setWarning(false);

    return todos.map((todo, index) => (
        <TodoWrapper key={index}>
            <div key={todo.id}>{todo.text}</div>
            <Icons>
                <GiCheckMark onClick={() => completeTodo(todo.id)} />
                <FaRegWindowClose onClick={showModal} />
                {warning && (
                    <>
                        <PopUpModal>
                            <PopupInfo>
                                <TitlePopup>Warning</TitlePopup>
                                <p>are you sure you want to delet your task?</p>
                                <ButtonsWrapper>
                                    <ButtonDark
                                        onClick={() => {
                                            removeTodo(todo.id);
                                            setWarning(false);
                                        }}
                                    >
                                        Delete
                                    </ButtonDark>
                                    <ButtonLight onClick={closeModal}>
                                        Cancle
                                    </ButtonLight>
                                </ButtonsWrapper>
                            </PopupInfo>
                        </PopUpModal>
                    </>
                )}
                <AiOutlineEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                />
            </Icons>
        </TodoWrapper>
    ));
}

export default Todo;
