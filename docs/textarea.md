## Textbox (`textarea`)

### Description

Multi-line text box, which is used to enter multiple of text.

### Usage result

<preview url="https://wonderful-harsh-alvarezsaurus.glitch.me/preview/pages/textarea"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-textarea" src="qaui/src/components/textarea/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <text class="title">Usage by Default</text>
    <q-textarea></q-textarea>
    <text class="title">Custom Usage</text>
    <q-textarea
      placeholder="Please enter your comments!"
      maxlength="50"
      default-value="Quick App is quick"
      focus="true"
    ></q-textarea>
  </div>
</template>
```

```less
.qaui-wrap {
  flex-direction: column;
  background-color: #f2f2f2;
  .title {
    font-size: 14px;
    height: 30px;
    padding: 10px;
  }
}
```

### API

#### Component Properties

| Attribute      | Type    | Value by default | Description                 |
| -------------- | ------- | ---------------- | --------------------------- |
| `defaultValue` | String  | `''`             | Content value by default    |
| `placeholder`  | String  | `''`             | Content placeholder         |
| `focus`        | Boolean | `false`          | Automatically get the focus |
| `maxlength`    | Number  | `140`            | Maximum input length        |

#### Component Events

| Event name | Event description | Value returned |
| ---------- | ----------------- | -------------- |
| `change`   | Change of value   | `event`        |
| `focus`    | Get focus         | `event`        |
| `blur`     | Lost focus        | `event`        |
