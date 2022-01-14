## Search Bar (`searchbar`)

### Description

The component used for searching content.

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/searchbar"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-searchbar" src="qaui/src/components/searchbar/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-searchbar placeholder="Search and you'll see..."></q-searchbar>
    <q-searchbar value="Searching" focus="true"></q-searchbar>
    <q-searchbar left-btn="back"></q-searchbar>
    <q-searchbar left-btn="/common/logo.png"></q-searchbar>
    <q-searchbar right-btn="search"></q-searchbar>
    <q-searchbar right-btn="/common/logo.png"></q-searchbar>
    <q-searchbar left-btn="back" right-btn="search"></q-searchbar>
    <q-searchbar
      left-btn="/common/logo.png"
      right-btn="/common/logo.png"
    ></q-searchbar>
    <q-searchbar menubar="true"></q-searchbar>
  </div>
</template>
```

```less
.qaui-wrap {
  background-color: #f6f6f6;
  padding: 20px 0;
  flex-direction: column;
  justify-content: space-between;
}
```

### API

#### Component Properties

| Attribute     | Type    | Value by default | Description                                                                                                    |
| ------------- | ------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `leftBtn`     | String  | `''`             | Button on the left. Includes the path of the image. When the value is `back`, the back button is displayed.    |
| `rightBtn`    | String  | `''`             | Button on the right. Includes the path of the image. If the value is `search`, the search button is displayed. |
| `placeholder` | String  | `'Search'`       | The placeholder text                                                                                           |
| `maxlength`   | Number  | `50`             | Maximum input length                                                                                           |
| `focus`       | Boolean | `false`          | Indicates whether to automatically get the focus                                                               |
| `value`       | String  | `''`             | Default value                                                                                                  |
| `menubar`     | Boolean | `false`          | Indicates whether to adapt to the style of `menubar`                                                           |

#### Component Events

| Event name      | Event description        | Value returned     |
| --------------- | ------------------------ | ------------------ |
| `blur`          | Lost focus               | `{ event: evt }`   |
| `focus`         | Get focus                | `{ event: evt }`   |
| `clear`         | Clear input value        | `{ value: value }` |
| `change`        | Change value of input    | `{ event: evt }`   |
| `enterkeyclick` | Keyboard enter key click | `{ event: evt }`   |
| `left`          | Left button click event  | `{ value: value }` |
| `right`         | Right button click event | `{ value: value }` |
