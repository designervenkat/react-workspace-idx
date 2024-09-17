### React Props

#### In the frame of React Application, components are small pieces of a whole. Together they make up a user interface. There are times when components must be able to communicate with other components. And that is what makes React so special.

#### Props are basically immutable data that a component has. The props are passed down to a component from his parent.

> Immutable means something that is unchangeable, while mutable is something that can be changed.

### Components can interact with each other in 2 ways

-   By referencing/returning another component.

-   By passing information to another component.

### Components Reference Another Component

```js
import React from 'react'

function Picture() {
    return (
        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    )
}

function Profile() {
    return (
        <>
            <Picture />
            <h1>Name: Octavia</h1>
            <h2>Species: Octopus</h2>
            <h2>Class: Cephalopoda</h2>
        </>
    )
}

export default Profile
```

### Props

#### Information that gets passed from one component to another is known as props.

Props can be used to customize the output of each component depending on the information that is passed in. This helps make components reusable for repeatable patterns for example IMDB or Amazon websites that display movies and products respectively. You can change the props you pass to a component, and avoid recreating multiple components displaying similar things.

### Access a Component’s props

#### A component’s props is an object. It holds information about that component.

```js
<button type="submit" value="Submit">
    {' '}
    Submit{' '}
</button>
```

#### In this example, depending on what type attribute is given to the `<button>` element, it will treat the form differently. In the same way, information can be passed to components to specify how they behave. Props serve the same purpose for components as arguments do for functions.

// TO DO

### Destructuring Props

#### Objects can be destructured. In the above example, the props received by the Product component can be destructured like:

```js
//Product.js
function Product({ name, price, rating }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <h3>{rating}</h3>
        </div>
    )
}
```

#### This is a common way to use props in React.

### Props from Component to Component: Direction

Props in React travel in a one-way direction, from top to bottom, parent to child.

#### In the above example, App is the parent and Product is the child. App passes three props to Product (name, price, and rating), which can then be read inside the child component.

#### Props passed down are immutable, meaning they cannot be changed. If a component wants new values for its props, it needs to rely on the parent component to pass it new ones.

### Conditional Rendering with Props

#### Props can also be used to make decisions.

```js
function LoginMsg(props) {
    if (props.password === 'a-tough-password') {
        return <h2>Sign In Successful.</h2>
    } else {
        return <h2>Sign In Failed..</h2>
    }
}
```

#### If the password received is equal to 'a-tough-password', the resulting message in `<h2></h2>` will be different! The prop is used to decide what will be displayed.

### Event Handler in a Function Component

#### Event handlers are common functions that are passed as props. The Event handler is first defined before it is passed.

```js
function Talker() {
    function talk() {
        let speech = ''
        for (let i = 0; i < 10000; i++) {
            speech += 'blah '
        }
        alert(speech)
    }
    return <Button />
}
```

#### It is important to define the handler inside the function component. Now it is ready to be passed to another component.

#### Prop names can be anything as long as they follow JavaScript identifier rules.

#### The above return statement is updated to pass the handler prop:

```js
return <Button talk={talk} />
```

#### Remember to use curly braces, to pass the value as JavaScript.

### Receiving Event Handler as Prop

```js
function Button() {
    return <button>Click me!</button>
}
```

#### Once the event handler is attached to this button, then the talk() function will be called when a user clicks on the button. The event handler is attached the same way, by giving JSX element an attribute. The conventional way to name an attribute is to match the event behavior like onClick. The attribute value is the event handler to be called. The return statement above will change to :

```js
<button onClick={props.talk}>Click me!</button>
```

### props.children

#### Every component’s props object has a property named children.

#### props.children will return everything in between a component’s opening and closing JSX tags. props.children would return everything in between <MyFunctionComponent> and </MyFunctionComponent>.

#### If a component has more than one child between its JSX tags, then props.children will return those children in an array. However, if a component has only one child, then props.children will return the single child, not wrapped in an array.

```js
// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
<BigButton>
  <LilButton />
</BigButton>


// Example 3
<BigButton />

function BigButton(props) {
  console.log(props.children);
  return <button>I am a Big Button.</button>;
}
```

-   In Example 1, <BigButton>‘s props.children would equal the text, “I am a child of BigButton.”

-   In Example 2, <BigButton>‘s props.children would equal a <LilButton /> component.

-   In Example 3, <BigButton>‘s props.children would equal undefined.

### Default Values to props

#### props can have default values as the parameters of a function can. In case no value is passed, then the default value is used.

#### There are three ways to give a default value:

#### The first method is adding a defaultProps static property to the component:

```js
function Example(props) {
    return <h1>{props.text}</h1>
}

Example.defaultProps = {
    text: 'This is default text',
}
```

#### The second is to specify the default value directly in the function definition:

```js
function Example({ text = 'This is default text' }) {
    return <h1>{text}</h1>
}
```

#### Lastly, can also set the default value in the function body:

```js
function Example(props) {
    const { text = 'This is default text' } = props
    return <h1>{text}</h1>
}
```

#### If an <Example /> doesn’t get passed any text, then it will display “This is default text”.

#### If an <Example /> does get passed some text, then it will display that passed-in text.

#### This was a lot of information on Props. Below is a small challenge to do using all the information above.

#### Create a simple online grocery store with reusable React function components. Your store should provide users with at least four buttons for possible items they can purchase. Every time a user clicks on a button, it should alert that the thing they’ve clicked on has been added to the cart via an alert message.

### To summarize, props…

-   are used to pass data from one component to another..

-   are available inside a component as properties of the props object.

-   can take in JavaScript variables using curly braces.

-   are read-only — we cannot modify them directly inside of our components.

```js
<Card username="someone" btnText="Visit Me"/>
<Card username="sometwo" btnText="Learn with Me"/>

// handle props which are not passed
<Card username="somethree" />

// either here which is better readability
function Button(btnText="Visit Me"){

  // either here which not better
  <button>
    {btnText || "Visit me"}
  <button>

}
```
