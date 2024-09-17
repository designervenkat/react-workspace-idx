## useEffect in React

#### The useEffect hook is a powerful feature in React that allows you to perform side effects in your functional components. Side effects are operations that can affect other components or the outside world

> Such as data fetching, subscriptions, or manually changing the DOM. This guide will introduce you to the useEffect hook and provide four practical examples to help you get started.

> Before hooks were invented, class components dominated the landscape for React developers. React’s lifecycle methods were only accessible to class components thus making classes the only option to perform side effects.

#### The useEffect hook plays a central role in handling side effects and lifecycle events in functional components. Understanding how to use useEffect effectively is essential for writing clean, efficient, and bug-free React code.

#### It allows functional components to perform side effects, such as data fetching, subscriptions, or DOM manipulations, after rendering. With useEffect, developers can perform side effects without writing class components and managing lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`, but is unified into a single API.

### Why is useEffect important?

#### The `useEffect` is crucial for handling side effects and asynchronous operations in React.js applications. It helps keep components more declarative and composable, simplifying the overall codebase and making it easier to reason about side effects.

### Understanding the useEffect syntax

#### The `useEffect` hook takes two arguments/params:

-   A callback function - The callback function represents the side effect logic,
-   An optional dependency array - the dependency array controls when the side effect should run or update.

#### we are going to identify how we can use useEffect to interact with these events:

1. When the component mounts.
2. When a state variable changes.
3. When multiple state variable changes.
4. When the component unmounts.

### Basic useEffect syntax

```js
import React, { useEffect } from 'react'
function SomeComponent() {
    useEffect(
        // First Arugument
        () => {
            // Side effect logic goes here
            return () => {
                // Cleanup logic goes here (optional)
            }
        },
        // Second Arugument
        [
            /* Dependency array */
        ]
    )
    return <div>Some Component</div>
}

export default SomeComponent
```

### How to Use useEffect?

#### To perform a basic side effect, such as updating the document title, you can use useEffect without a dependency array. The side effect will run after every render.

```js
import React, { useEffect } from 'react'
function TitleUpdater() {
    useEffect(() => {
        document.title = 'Updated Title'
    })
    return <div>Component with Updated Title</div>
}
```

### Dependencies and reactivity

#### The dependency array in useEffect specifies which values the effect depends on. When the values in the dependency array change, the effect will re-run. Omitting the dependency array or passing an empty array will cause the effect to run only once (on mount) and not re-run for subsequent renders.

```js
import React, { useEffect, useState } from 'react'
function DependencyExample() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // This effect will re-run whenever `count` changes
        document.title = `Count: ${count}`
    }, [count])
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
```

### UseEffect On Mount -

#### Once you have everything running. In the developer console, you will notice “mount” has been logged. And every time you refresh you will see “mount” reappear in the console.

```js
import React, { useEffect } from 'react'
function SomeComponent() {
    useEffect(() => {
        console.log('mount')
    }, [])
    return <div>Some Component</div>
}

export default SomeComponent
```

> So far, this tells us that every time the component App is mounted onto the DOM, the useEffect is called.

### UseEffect On State Update -

```js
import React, { useEffect } from 'react'
function CountApp() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('mount')
    }, [])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default CountApp
```

#### With the developer console open, interact with the button, and watch how the useEffect responds to the state updates.

> In this case, useEffect is initially called after the component as mounted, and then called every time the count state is updated.

#### To confirm this, we are going to add another state variable and then see how useEffect reacts to each state change.

```js
import React, { useEffect } from 'react'
function CountApp() {
    const [count, setCount] = useState(0)
    const [decrement, setDecrement] = useState(100)

    useEffect(() => {
        console.log('mount')
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <button onClick={() => setCount(decrement - 1)}>{decrement}</button>
        </div>
    )
}

export default CountApp
```

#### Notice when you switch between clicking on both buttons, the useEffect will always be called.

> useEffect will always be called on any state update when we don’t pass a dependency array.

> Since we didn’t provide a dependency array, useEffect will always be called with any state update occurring inside the component.

### UseEffect With A Dependency When Multiple States Are Updated

#### Let’s say we only want useEffect to update when count updates. Well, we can do that by adding a dependency array as a second parameter.

```js
import React, { useEffect } from 'react'
function CountApp() {
    const [count, setCount] = useState(0)
    const [decrement, setDecrement] = useState(100)

    useEffect(() => {
        console.log('mount')
    }, [count]) // Add only one dependency - count

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <button onClick={() => setCount(decrement - 1)}>{decrement}</button>
        </div>
    )
}

export default CountApp
```

> useEffect is called after the component has mounted and then called again every time count updates and not decrement. This is accomplished through providing count as a dependency.

#### By only passing count as a dependency to the useEffect hook, we are essentially telling useEffect to only be called again when the count state variable changes.

### UseEffect With A Empty Dependency Array When Multiple States Are Updated

#### We are going to see what happens when we pass an empty dependency array.

```js
import React, { useEffect } from 'react'
function CountApp() {
    const [count, setCount] = useState(0)
    const [decrement, setDecrement] = useState(100)

    useEffect(() => {
        console.log('mount')
    }, []) // Removed count from dependency

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <button onClick={() => setCount(decrement - 1)}>{decrement}</button>
        </div>
    )
}

export default CountApp
```

> As you interact with both buttons, you will notice that the developer console doesn’t relog “mount.” It only logged “mount” after the component has been mounted.

> useEffect with an empty dependency array will only be called once after the component has mounted.

### Multiple UseEffects On Multiple State Updates

#### But let’s say that we want to separate the logic between how we handle when count updates and when decrement updates.

#### We can have multiple useEffect hooks inside a component. It took me a while to figure out that this was feasible.

```js
import React, { useEffect } from 'react'
function CountApp() {
    const [count, setCount] = useState(0)
    const [decrement, setDecrement] = useState(100)

    useEffect(() => {
        console.log('mount')
    }, [count])

    useEffect(() => {
        console.log('mount')
    }, [decrement])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <button onClick={() => setCount(decrement - 1)}>{decrement}</button>
        </div>
    )
}

export default CountApp
```

> Both useEffects are called after the component has been mounted and are called again depending on when their dependencies update.

### Perform Actions When The Component Will Unmount

### Cleanup with useEffect

#### `useEffect` can also return a cleanup function to handle the cleanup of resources when the component is unmounted or before the effect runs again. This is particularly useful for subscriptions, event listeners, or timers that need to be cleared when the component is no longer in the DOM.

#### We are going to see how we can add logic before the component will unmount. Similarly to how we would use the lifecycle method componentWillUnmount for class components.

```js
// Subscription use case example
import React, { useEffect, useState } from 'react'

function Subscription() {
    const [subscription, setSubscription] = useState(null)
    useEffect(() => {
        const subscription = subscribeToExternalService()
        setSubscription(subscription)
        return () => {
            // Cleanup function will unsubscribe when the component is unmounted
            subscription.unsubscribe()
        }
    }, [])
    return <div>Component with Subscription</div>
}

export default Subscription
```

```js
// Timer use case example
import { useState, useEffect } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return <div>Seconds: {seconds}</div>
}

export default Timer
```

```js
// Event use case example
import React, { useEffect, useState } from 'react'
function EventHandle() {
    const onClick = (e) => console.log('Clicked')

    useEffect(() => {
        window.addEventListener('click', onClick)

        return () => {
            // Cleanup function will unsubscribe when the component is unmounted
            window.removeEventListener('click', onClick)
        }
    }, [])
    return <div>Component with EventListener</div>
}

export default EventHandle
```

```js
// Window Resize Listener event use case example
import { useState, useEffect } from 'react'

function WindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div>
            Width: {windowSize.width}, Height: {windowSize.height}
        </div>
    )
}

export default WindowSize
```

> `return` a function at the end of the useEffect function to perform actions before a component will unmount. Similarly to the lifecycle method componentWillUnmount.

### What elements should you use in the dependency array?

#### Key rule to add elements in the dependency array is : Add all the `variables |functions | states | props` in your effect function which could change when your component or some parent component is re-rendered”

### What you should not add as dependency —

-   No need to add state updating functions such as setValue. setValue function is never going to change even if the component re-renders.

-   No need to add built in functions like fetch as these will also never change.

-   Avoid Inline Functions: If your effect uses a function that is defined inside the component, consider moving it outside the component or using useCallback to memoize the function. This prevents the function from being recreated on every render, which could cause the effect to run unnecessarily.

-   <mark>_Very Important_</mark> Never add the states as dependencies which are being changed in the effect function. Otherwise it will cause an infinite loop.

```js
const [value, setValue] = useState(false);

useEffect(() => {
  console.log(“effect”);
  setValue((prevState) => !prevState);
},[value]); // Bad example

```

> The above code is going to create an infinite loop — for the very first time the component will render and then useEffect will run which will change the state of value so the component will re-render again. Again the useEffect will run as value is a dependency and the state of value will be changed so the component will re-render again resulting in an infinite loop.

```js
const [value, setValue] = useState(false);

useEffect(() => {
  console.log(“effect”);
  setValue((prevState) => !prevState);
},[]); // Better example

```

> The above code will run only once after the first time the component renders. Thereafter the component will re-render because the state of value will be changed but useEffect won’t run again as the dependency does not change with respect to the previous execution of the cycle.

### Summary - Here’s what we learned:

1. `useEffect` is always called once after the component is mounted.
2. `useEffect` without the dependency array will always be called again when any state is updated inside the component.
3. `useEffect` with an empty dependency array will only be called once after the component is mounted.
4. `useEffect` with one or few dependencies will only be called again depending on when their dependencies update.
5. Multiple useEffects can be declared inside a component.
6. To handle actions before the component will unmount, return a function at the end of the `useEffect` function.

### Common Use Cases Example

```js

```
