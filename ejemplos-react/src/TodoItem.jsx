export default function TodoItem({ todo }) {
  return (
    <li
      className={
        "py-1.5 px-2.5 border-t border-l border-r" +
        " last-of-type:border-b border-gray-300"
      }
    >
      <label className="flex flex-row gap-3 select-none">
        <input type="checkbox" checked={todo.done} />
        {todo.what}
      </label>
    </li>
  );
}
