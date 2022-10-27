import Head from "next/head";

import TodoList from "./todoList/TodoList";

function TodoPage() {
    return (
        <>
            <Head>
                <title>Todo</title>
            </Head>
            <TodoList />
        </>
    );
}

export default TodoPage;
