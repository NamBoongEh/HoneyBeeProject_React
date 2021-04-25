import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
  border-top: 1px solid black;
  padding: 10px 3px;
`;

const Remove = styled.button`
  color: white;
  background: saddlebrown;
  border: 0;
  border-radius: 5px;
  padding: 1px 5px;
`;

const TodoInsertBox = styled.input`
  width: 85%;
  background: black;
  outline: none;
  border: none;
  padding: 0.5rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: white;
  }
`;

const TodoInsertBtn = styled.button`
  width: 15%;
  background: red;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  align-items: center;
  text-align: center;
  margin-bottom: 15px;
`;

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <ItemBox>
      <input
        className={'col-1'}
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
        style={{ height: '17px' }}
      />
      <span
        className={'col-10'}
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          display: 'inline-block',
        }}
      >
        {todo.text}
      </span>
      <Remove className={'col-1'} onClick={() => onRemove(todo.id)}>
        삭제
      </Remove>
    </ItemBox>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e) => onChangeInput(e.target.value);

  return (
    <div>
      {
        <form onSubmit={onSubmit}>
          <TodoInsertBox value={input} onChange={onChange} />
          <TodoInsertBtn type="submit">등록</TodoInsertBtn>
        </form>
      }
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
