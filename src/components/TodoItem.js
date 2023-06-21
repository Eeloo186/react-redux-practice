import React from "react";

const TodoItem = ({ onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" onClick={onToggle} />
      <span>예제 텍스트</span>
      <button onClick={onRemove}>삭제</button>
    </div>
  );
};

export default TodoItem;
