export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label className="title-appear">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button className="btn-danger" onClick={() => deleteTodo(id)}>
        Delete<span></span>
      </button>
    </li>
  );
}
