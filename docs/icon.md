## Icon (`icon`)

### Description

Basic icon component.

### List of icons

<icon/>

### Usage

Importing a component in a `.ux` file:

```html
<import name="q-icon" src="qaui/src/components/icon/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <div class="icon">
      <q-icon type="love" size="48"></q-icon>
    </div>
  </div>
</template>
```

```less
.qaui-wrap {
  flex-direction: row;
  flex-wrap: wrap;
  .icon {
    flex-direction: column;
    justify-content: center;
    width: 120px;
    height: 120px;
    .name {
      font-size: 10px;
      text-align: center;
      margin-top: 20px;
    }
  }
}
```

### API

#### Component Properties

| Attribute | Type   | Value by default | Description |
| --------- | ------ | ---------------- | ----------- |
| `type`    | String | `''`             | Icon type   |
| `size`    | String | `'14'`           | Icon size   |
| `color`   | String | `''`             | Color       |
