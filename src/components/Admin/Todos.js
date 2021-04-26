import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  border-bottom: 1px solid black;
  padding: 10px 3px;
  &:nth-child(even) {
    background-color: lightcyan;
  }
`;

const Remove = styled.button`
  color: white;
  background: crimson;
  border: 0;
  border-radius: 5px;
  padding: 1px 5px;
`;

// 할 일에 들어가는 1개의 할 일 요소
const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <ItemBox>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
        style={{ margin: '0 10px', height: '17px' }}
      />
      <span
        style={{
          display: 'inline-block',
          width: '10%',
          textDecoration: todo.done ? 'line-through' : 'none',
        }}
      >
        {todo.date}
      </span>
      <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          display: 'inline-block',
          width: '70%',
        }}
      >
        {todo.text}
      </span>
      <Remove onClick={() => onRemove(todo.id)}>삭제</Remove>
    </ItemBox>
  );
};

// 할 일 요소들을 모아 박스로 만든 것 map으로 다시 뿌려준다
const Todos = ({ todos, onToggle, onRemove }) => {
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
