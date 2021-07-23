## Slider Bar (`slider`)

### Description

Component to select a specific value within a range of values.

### Usage result

<preview url="https://wonderful-harsh-alvarezsaurus.glitch.me/preview/pages/slider"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-slider" src="qaui/src/components/slider/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <text class="title">Set Step</text>
    <q-slider step="2" value="50"></q-slider>
    <text class="title">Set Min/Max</text>
    <q-slider min="10" max="20" value="12" show-value="true"></q-slider>
    <text class="title">Show Current Values</text>
    <q-slider show-value="true" value="66"></q-slider>
    <text class="title">Custom Styles</text>
    <q-slider color="#FFCC57" value="55"></q-slider>
    <text class="title">With Dot</text>
    <q-slider dot="true" step="20" value="40"></q-slider>
    <q-slider
      dot="true"
      step="25"
      value="50"
      left-icon="../../common/logo.png"
      right-icon="../../common/logo.png"
    ></q-slider>
  </div>
</template>
```

```less
.qaui-wrap {
  flex-direction: column;
  padding: 20px 0;
  .title {
    font-size: 12px;
    color: #000000;
    padding-left: 20px;
  }
}
```

### API

#### Component Properties

| Attribute       | Type    | Value by default | Description                                              |
| --------------- | ------- | ---------------- | -------------------------------------------------------- |
| `min`           | Number  | `0`              | Minimum value                                            |
| `max`           | Number  | `100`            | Maximum value                                            |
| `step`          | Number  | `1`              | Step, which must be greater than `0`                     |
| `value`         | Number  | `0`              | Current value of the slider                              |
| `showValue`     | Boolean | `false`          | Indicates whether to display the slider bar value or not |
| `color`         | String  | `'#F2F2F2'`      | Color of the slide bar                                   |
| `selectedColor` | String  | `'#456FFF'`      | Color of the slide bar                                   |
| `dot`           | Boolean | `false`          | Indicates whether to display dots                        |
| `leftIcon`      | String  | `''`             | URL or path of the icon on the left                      |
| `rightIcon`     | String  | `''`             | URL or path of the icon on the right                     |

#### Component Events

| Event name | Event description   | Value returned        |
| ---------- | ------------------- | --------------------- |
| `change`   | Slider value change | `{progress:progress}` |
