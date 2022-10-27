import React, { useEffect, useRef, useState } from "react";

import { ButtonDark } from "../../shared/buttons/Buttons";

import { ButtonUpdate, Form, InputButtonWrapper } from "./TodoForm.styled";

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handelChange = e => {
        setInput(e.target.value);
    };

    const handelSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput("");
    };

    return (
        <>
            <Form onSubmit={handelSubmit}>
                {props.edit ? (
                    <InputButtonWrapper>
                        <input
                            type="text"
                            placeholder="Update your item"
                            value={input}
                            name="text"
                            onChange={handelChange}
                            ref={inputRef}
                        />
                        <ButtonUpdate>Update</ButtonUpdate>
                    </InputButtonWrapper>
                ) : (
                    <InputButtonWrapper>
                        <input
                            type="text"
                            placeholder="Add a todo"
                            value={input}
                            name="text"
                            onChange={handelChange}
                            ref={inputRef}
                        />
                        <ButtonDark>Add todo</ButtonDark>
                    </InputButtonWrapper>
                )}
            </Form>
        </>
    );
}

export default TodoForm;
