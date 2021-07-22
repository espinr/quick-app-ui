## Radio Group (`radio-group`)

### Description

It is used to group radio buttons in the form, and provides multiple operation methods for related radio buttons. Used with `radio`.

### Usage result

<div style="text-align: center;margin: 40px;"><img src="./assets/radio.png" alt="Radio buttons" style="width:300px" /></div>

### How to use it

Importing a component in a `.ux` file:

```html
<import
  name="q-radio-group"
  src="qaui/src/components/radio-group/index"
></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <text class="title">Default style</text>
    <q-radio-group id="myGroup1" current="{{current}}" onchange="handleChange">
      <q-radio
        group="myGroup1"
        for="{{list}}"
        value="{{$item.value}}"
        checked="{{$item.checked}}"
      ></q-radio>
    </q-radio-group>
    <text class="title">list style</text>
    <q-radio-group id="myGroup2" current="{{current}}" onchange="handleChange">
      <q-radio
        group="myGroup2"
        type="list"
        for="{{list}}"
        value="{{$item.value}}"
        checked="{{$item.checked}}"
      ></q-radio>
    </q-radio-group>
    <text class="title">dot style</text>
    <q-radio-group id="myGroup3" current="{{current}}" onchange="handleChange">
      <q-radio
        group="myGroup3"
        type="dot"
        for="{{list}}"
        value="{{$item.value}}"
        checked="{{$item.checked}}"
      ></q-radio>
    </q-radio-group>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          value: 'Single option #1',
        },
        {
          id: 2,
          value: 'Single option #2',
          checked: true,
        },
        {
          id: 3,
          value: 'Single option #3',
        },
      ],
      current: 'Single option #2',
    }
  },
  handleChange({ detail }) {
    this.current = detail.value
  },
}
```

```less
.qaui-wrap {
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px 0;
  .title {
    height: 40px;
    font-size: 14px;
    align-self: flex-start;
    padding-left: 20px;
  }
}
```

### API

#### Component Properties

| Attribute | Type   | Value by default | Description                                                               |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------- |
| `current` | String | -                | Value of the selected `radio`                                             |
| `id`      | String | -                | The `id` of the group, which is used to differentiate groups (mandatory). |

#### Component Events

| Event name | Event description | Value returned                   |
| ---------- | ----------------- | -------------------------------- |
| `change`   | Change of value   | `{current:current, value:value}` |
