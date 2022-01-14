## Text Input (`input`)

### Description

This component is used for text input.

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/input"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-input" src="qaui/src/components/input/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-input
      onchange="changeHandler"
      onblur="blurHandler"
      onclear="clearHandler"
    ></q-input>
    <q-input title="Full Name" value="Quick App" focus="true"></q-input>
    <q-input title="Email"></q-input>
    <q-input title="Postal Address"></q-input>
    <q-input
      title="Header"
      icon-right-a="/common/logo.png"
      ontap="tapHandler"
    ></q-input>
    <q-input
      title="Long Header"
      icon-left="/common/logo.png"
      icon-right-a="/common/logo.png"
    ></q-input>
    <q-input type="border"></q-input>
    <q-input type="border" value="Add Content" button="Submit"></q-input>
    <q-input
      icon-left="/common/logo.png"
      type="border"
      button="Submit"
    ></q-input>
    <q-input
      icon-left="/common/logo.png"
      type="border"
      icon-right-a="/common/logo.png"
      icon-right-b="/common/logo.png"
    ></q-input>
    <q-input
      icon-left="/common/logo.png"
      type="border"
      icon-right-a="/common/logo.png"
      button="Submit"
    ></q-input>
  </div>
</template>
```

```js
export default {
  changeHandler({ detail }) {
    console.log(detail)
  },
  blurHandler({ detail }) {
    console.log('Focus lost!', detail)
  },
  clearHandler({ detail }) {
    console.log('Clear the input!', detail)
  },
  tapHandler({ detail }) {
    console.log(detail)
  },
}
```

```less
.qaui-wrap {
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
}
```

### API

#### Component Properties

| Attribute     | Type    | Value by default  | Description                                                                                        |
| ------------- | ------- | ----------------- | -------------------------------------------------------------------------------------------------- |
| `type`        | String  | `'default'`       | Type of the text box style. The options are: `'default'` and `'border'`                            |
| `title`       | String  | `''`              | Name of the text box                                                                               |
| `value`       | String  | `''`              | Default value of the text box                                                                      |
| `focus`       | Boolean | `false`           | Indicates whether the text box gets the focus                                                      |
| `maxlength`   | Number  | `20`              | Maximum number of characters in the text box                                                       |
| `placeholder` | String  | `'Enter content'` | Text box placeholder content                                                                       |
| `button`      | String  | `''`              | Button with text on the right of the input box. The value can contain a maximum of two characters. |
| `iconLeft`    | String  | `''`              | Path of the icon to be shown in a button on the left of the text box                               |
| `iconRightA`  | String  | `''`              | Path of the A icon button on the right of the text box                                             |
| `iconRightB`  | String  | `''`              | Path of the B icon button on the right of the text box                                             |

#### Component Events

| Event name | Event description            | Value returned                                                                                  |
| ---------- | ---------------------------- | ----------------------------------------------------------------------------------------------- |
| `tap`      | Click on the component       | `{position:position,event:event}` (The value of `position` is the corresponding `button` value) |
| `change`   | Change of value in the input | `{value:value}`                                                                                 |
| `focus`    | Get focus                    | `{value:value}`                                                                                 |
| `blur`     | Lost focus                   | `{value:value}`                                                                                 |
| `clear`    | Input text cleared           | -                                                                                               |
