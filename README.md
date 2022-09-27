# date picker library
A date picker react component made with create react app and babel

## Installation
- Connect to npm
```npm login```
- import library on your project
```npm install @wilgo001/date-picker-library```

## How to use
- import DatePicker
```js
import { DatePicker } from "@wilgo001/date-picker-library";
```
 - call in the return of your components
 ```js
 <DatePicker id={id} onChange={(newValue) => onChangeCallback(newValue)}/>
 ```

 ### Props
- id : the id of the node
- onChange : callback that return the value of input in parameter