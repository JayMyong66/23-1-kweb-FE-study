import create from 'zustand';

const useStore = create(set => ({
  todos: [
    {
      id: 1,
      title: 'first',
      prior: 'high',
    },
    {
      id: 2,
      title: 'second',
      prior: 'medium',
    },
    {
      id: 3,
      title: 'third',
      prior: 'low',
    },
  ],
  updateTodos: newTodo =>
    set(state => ({
      // todos: [...state.todos, newTodo],
      todos: [...newTodo], //이거 ... 없이 newTodo 만 했어서 에러...
    })),
}));

export default useStore;
