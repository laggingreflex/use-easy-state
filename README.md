# use-easy-state

[React State Hook][hooks-state] alternative that updates when state object is directly modified.

No need for an `update()` method, make changes to the state object directly.

Uses [on-change], and depends on [Proxy].

## Install

```
npm i use-easy-state
```

## Usage

```js
const useState = require(use-easy-state)

module.exports = () => {
  // Initial value must be a (proxy-able) object, natives won't work
  const state = useState({ counter: 0 })
  return (
    <button onClick={ () => state.counter++ }>
      `You have pressed this button ${state.counter} times`
    </button>
  )
}
```

[on-change]: https://github.com/sindresorhus/on-change
[Proxy]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
[hooks-state]: https://reactjs.org/docs/hooks-state.html
