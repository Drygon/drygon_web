export default function foo(state = [], action = {}) {
  return [...state,
    action]
}
