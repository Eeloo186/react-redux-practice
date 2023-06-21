import TodoItem from "./TodoItem";

const Todos = ({ input, todolist, onChangeInput, onToggle, onInsert, onRemove }) => {
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">등록</button>
      </form>
      <div>
        <TodoItem onToggle={onToggle} onRemove={onRemove}></TodoItem>
        <TodoItem onToggle={onToggle} onRemove={onRemove}></TodoItem>
        <TodoItem onToggle={onToggle} onRemove={onRemove}></TodoItem>
      </div>
    </div>
  );
};

export default Todos;
