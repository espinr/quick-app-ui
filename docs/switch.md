## Radio Switch (`switch`)

### Description

On/off button used to switch between two states.

### Usage result

<preview url="https://wonderful-harsh-alvarezsaurus.glitch.me/preview/pages/switch"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-switch" src="qaui/src/components/switch/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <div class="row">
      <q-switch value="true"></q-switch>
      <text>Normal - On</text>
    </div>
    <div class="row">
      <q-switch></q-switch>
      <text>Normal - Off</text>
    </div>
    <div class="row">
      <q-switch value="true" disabled="true"></q-switch>
      <text>Not Clickable - On</text>
    </div>
    <div class="row">
      <q-switch disabled="true"></q-switch>
      <text>Not Clickable - Off</text>
    </div>
  </div>
</template>
```

```less
.qaui-wrap {
  flex-direction: column;
  padding: 20px;
  .row {
    margin-bottom: 10px;
  }
  text {
    font-size: 14px;
    color: #000000;
    margin-left: 10px;
  }
}
```

### API

#### Component Properties

| Attribute  | Type    | Value by default | Description                         |
| ---------- | ------- | ---------------- | ----------------------------------- |
| `value`    | Boolean | `false`          | Default value of the current switch |
| `disabled` | Boolean | `false`          | Disabled                            |

#### Component Events

| Event name | Event description | Value returned        |
| ---------- | ----------------- | --------------------- |
| `change`   | Change of value   | Current switch status |
