## In React, there are two primary ways to create components: function and class components.

## Each has its own syntax and use cases, although with the introduction of React Hooks, the gap between them has narrowed significantly.

## But the selection of appropriate component types is still very crucial for building efficient and maintainable React applications.

## What are react components ?

-   ### In React, components are the building blocks of a user interface. They are reusable, self-contained pieces of code that represent a part of the UI.

-   ### React allows you to break down your UI into smaller components, which makes it easier to manage and maintain your codebase.

-   ### You can think of components as custom HTML elements that encapsulate their own logic and UI structure.

-   ### They can accept inputs called props (short for properties) and return React elements describing what should appear on the screen.

## There are two main types of components in React:

-   ### **Function Components:**

    ### These are simple JavaScript functions that take props as input and return JSX elements. They are often used for presentational or stateless components.

-   ### **Class Components:**
    ### `React.Component` or `React.PureComponent`. They have a `render()` method where you define the structure of your component's UI using JSX. Class components are used for components that need to manage state or have lifecycle methods.

## Functional vs Class Components

### Function components are defined using the <mark>function</mark> keyword or arrow function syntax.

```javascript
import React from 'react'

// Function component using function keyword
function FunctionComponent(props) {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>This is a function component.</p>
        </div>
    )
}

// Function component using arrow function syntax
const FunctionComponent = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>This is a function component.</p>
        </div>
    )
}

export default FunctionComponent
```

> Both examples define a function component called FunctionComponent that takes props as input and returns JSX elements. The component simply renders a greeting message along with some text.

> The first example uses the function keyword to define the function component, while the second example uses arrow function syntax. Both syntaxes are valid and achieve the same result.

### State Management: Traditionally, function components were stateless and couldn't hold their own state. However, with the introduction of React Hooks (like useState), function components can now manage state using Hooks.

```javascript
import React, { useState } from 'react'

const FunctionComponent = () => {
    // Using useState Hook to manage state
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default FunctionComponent
```

> In this example, we use the useState Hook to initialize a state variable count with an initial value of 0. The useState Hook returns an array with two elements: the current state value (count) and a function (setCount) to update the state.

> When the button is clicked, setCount is called with the new value of count, triggering a re-render with the updated state value displayed. This demonstrates how function components can now hold and manage their own state using React Hooks, making them more powerful and versatile.

## LifeCycle Methods:

### Function components don't have lifecycle methods. However, with React Hooks, you can use the useEffect Hook to replicate lifecycle behavior like:

## componentDidMount

### This method is invoked immediately after a component is mounted (that is, inserted into the DOM tree). It is commonly used to perform initial setup, such as fetching data from an API or setting up event listeners.

## componentDidUpdate

### This method is invoked immediately after updating occurs. It is triggered whenever the component's props or state changes. It is commonly used to perform actions based on the updated state or props, such as making additional API calls.

## componentWillUnmount

### This method is invoked immediately before a component is unmounted and destroyed. It is commonly used to perform cleanup, such as removing event listeners or cancelling any ongoing tasks.

```js
import React, { useState, useEffect } from 'react'

const FunctionComponent = () => {
    const [count, setCount] = useState(0)

    // useEffect Hook to replicate componentDidMount and componentDidUpdate
    useEffect(() => {
        // This code block runs after every render
        console.log('Component did mount or update')

        // Clean-up function (replicating componentWillUnmount)
        return () => {
            console.log('Component will unmount')
        }
    }, []) // Dependency array which only run onces

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default FunctionComponent
```

> In this example, the useEffect Hook is used without a dependency array. This means the effect will run after every render, effectively replicating both componentDidMount and componentDidUpdate behavior. Inside the effect, you can perform any cleanup necessary, such as unsubscribing from subscriptions or removing event listeners, by returning a cleanup function. This cleanup function will be executed when the component unmounts, effectively replicating the componentWillUnmount behavior.

> By leveraging the useEffect Hook, function components can now achieve the same lifecycle behavior as class components, further blurring the distinction between the two component types.

> Readability: Function components are generally more concise and easier to read, especially for simpler components.

### Class components are ES6 classes that extend from `React.Component` or `React.PureComponent`. They have a `render()` method where you define the structure of your component's UI using JSX.

```js
import React, { Component } from 'react'

// Define a class component that extends React.Component or React.PureComponent
class ClassComponent extends Component {
    // Define constructor if necessary
    constructor(props) {
        super(props)
        // Initialize state if needed
        this.state = {
            count: 0,
        }
    }

    // Define lifecycle methods if necessary
    componentDidMount() {
        // Code to run after the component is mounted
    }

    // Define instance methods if necessary
    handleClick = () => {
        // Update state or perform other logic
        this.setState({ count: this.state.count + 1 })
    }

    // Define render() method to return JSX
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export default ClassComponent
```

> In this example:

-   We imported React and Component from the 'react' package.
-   We defined a class component named ClassComponent that extends Component.
-   Inside the class component, we can define a constructor to initialize state or bind event handlers if necessary.
-   We can define lifecycle methods such as componentDidMount, componentDidUpdate, and so on, to hook into different stages of the component's lifecycle.
-   We defined the render() method, which returns JSX to describe the structure of the component's UI.
-   Any instance methods, event handlers, or other logic can be defined within the class.

> State Management: Class components can hold and manage local state using the this.state property. They can also update state using this.setState()

### Lifecycle Methods: Class components have access to various lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`, which allow you to hook into different stages of a component's lifecycle.

```js
import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        // Fetch initial data when the component mounts
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState) {
        // Check if the data has changed
        if (prevState.data !== this.state.data) {
            // Data has changed, perform additional actions
            console.log('Data has been updated:', this.state.data)
        }
    }

    componentWillUnmount() {
        // Cleanup tasks before the component is unmounted
        console.log('Component will unmount')
        // For example, remove event listeners, cancel ongoing tasks, etc.
    }

    fetchData() {
        // Simulate fetching data from an API
        setTimeout(() => {
            this.setState({ data: 'Some data fetched from API' })
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>Data: {this.state.data}</p>
            </div>
        )
    }
}

export default ClassComponent
```

> In this example:

> -   componentDidMount is used to fetch initial data when the component mounts.

> -   componentDidUpdate is used to log a message whenever the data state changes.

> -   componentWillUnmount is used to log a message before the component is unmounted.

> These lifecycle methods provide hooks into different stages of a component's lifecycle, allowing you to perform setup, update, and cleanup tasks as needed.

### It is important to note that, with the introduction of React Hooks, many tasks traditionally handled by class components can now be accomplished using function components.

### Hooks such as useState, useEffect, useContext, and others provide a simpler and more concise way to manage state, handle side effects, and share logic across components. This shift towards Hooks empowers developers to write more function and modular code, reducing the reliance on class components.

### While class components still have their place, especially in legacy codebases, the versatility and flexibility of Hooks make function components the preferred choice for building modern React applications.

## Advantages of Function Component

### Simpler Syntax: Function components have a simpler syntax compared to class components. They are essentially just JavaScript functions that take props as input and return React elements. This simplicity makes them easier to read and understand, especially for beginners.

### Pure Functions: Function components are essentially pure functions, meaning they only depend on their input (props) to produce output (UI). They don't have internal state or side effects, which makes them easier to reason about and test. This purity also helps improve performance, as React can optimize the rendering process more effectively.

### Reusability: Function components promote reusability by encapsulating UI logic within small, composable functions. Since they are just JavaScript functions, they can be easily reused in multiple parts of your application, leading to more modular and maintainable code.

### Using Props in Function Components: Function components make extensive use of props to pass data from parent to child components. This props-based approach promotes a clear and predictable data flow within your application, making it easier to understand how data is passed and used throughout your component hierarchy.

## Advantages of Class Components

### Explicit State Management: Class components provide a clear and explicit way to manage component state using the this.state property. This allows developers to have fine-grained control over state management and updates within the component.

### Lifecycle Methods: Class components have access to a range of lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount. These methods allow developers to hook into different stages of the component's lifecycle, enabling tasks like data fetching, event subscriptions, and cleanup operations.

### Instance Methods: Class components allow you to define custom instance methods directly within the class. These methods encapsulate component logic and can be reused throughout the component. This helps in organizing and structuring the component's codebase.

### Legacy Support: Class components have been a core part of React since its early days and are still widely used in many codebases. They provide backward compatibility and support for legacy projects that may not have been updated to use function components with Hooks.

### Robustness: Class components enforce a more strict structure and separation of concerns, which can lead to more robust and maintainable codebases, especially in larger applications with complex UI logic.

### Performance Optimization: Class components offer optimization opportunities through the use of PureComponent or manual implementation of shouldComponentUpdate (a lifecycle method in React). These optimizations can help prevent unnecessary re-renders and improve performance in certain scenarios.

## Class Component Code

```js
import React, {Component} from "react"

export default class CountClass extends Component {

  constructor(props){
    super(props);

    this.state = {
      count = 0
    }
  }
  // no const keyword in class component
  const increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  const decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  increment = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1
    }))
  }
  decrement = () => {
    this.setState((previousState) => ({
      count: this.state.count - 1
    }))
  }

  render(){
    return (
      <div>
          <h2> Welcome to counter app </h2>
          <p>The count is : {count} </p>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          // <p>The count is : {count} </p>
          // <button onClick={decrement}>-</button>
          // <button onClick={increment}>+</button>
      </div>
    )
  }
}
```
