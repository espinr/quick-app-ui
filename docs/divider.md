## Separator (`divider`)

### Description

Component used to separate different components and dialogs.

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/divider"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-divider" src="qaui/src/components/divider/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-divider loading="{{true}}" content="Loading"></q-divider>
    <q-divider content="No data available"></q-divider>
    <q-divider content="No more data"></q-divider>
    <q-divider><text class="custom">Custom Style Content</text></q-divider>
  </div>
</template>
```

```less
.qaui-wrap {
  background-color: #ffffff;
  flex-direction: column;
  padding: 20px 0;
  .custom {
    font-size: 20px;
    color: #456fff;
  }
}
```

### API

#### Component Properties

| Attribute | Type    | Value by default | Description                      |
| --------- | ------- | ---------------- | -------------------------------- |
| `loading` | Boolean | `false`          | Display the loading status style |
| `content` | String  | `''`             | Separating text                  |

#### slot

| Name | Description    |
| ---- | -------------- |
| -    | Custom content |
