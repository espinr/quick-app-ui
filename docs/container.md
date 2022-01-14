## Container (`container`)

### Description

The basic layout component used to contain several components.

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/container"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-container" src="qaui/src/components/container/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-container>
      <text class="content">Content</text>
    </q-container>
    <q-container>
      <div class="two">
        <text>Content</text>
        <text>Content</text>
      </div>
    </q-container>
    <q-container flex-direction="column">
      <div class="three">
        <text>Content</text>
        <text>Content</text>
        <text>Content</text>
      </div>
      <text class="footer">Bottom display area</text>
    </q-container>
    <q-container>
      <swiper class="swiper" autoplay="true">
        <text>Content1</text>
        <text>Content2</text>
        <text>Content3</text>
      </swiper>
    </q-container>
  </div>
</template>
```

```less
.qaui-wrap {
  background-color: #e0e0e0;
  padding: 20px 0;
  flex-direction: column;
  text {
    font-size: 12px;
    color: #000000;
    font-weight: bold;
    text-align: center;
    background-color: #e7e7e7;
    border-radius: 3px;
  }
  .content {
    background-color: #e7e7e7;
    height: 100px;
    width: 100%;
  }
  .two {
    height: 100px;
    width: 100%;
    justify-content: space-between;
    text {
      width: 144px;
    }
  }
  .three {
    height: 100px;
    width: 100%;
    justify-content: space-between;
    text {
      width: 93px;
    }
  }
  .footer {
    margin-top: 12px;
    background-color: #ffffff;
    font-size: 14px;
    text-align: left;
  }
  .swiper {
    background-color: #e7e7e7;
    padding-bottom: 5px;
    height: 100px;
    indicator-size: 5px;
    border-radius: 3px;
    indicator-color: #b2b2b2;
    indicator-selected-color: #666666;
  }
}
```

### API

#### Component Properties

| Attribute       | Type   | Value by default | Description                                           |
| --------------- | ------ | ---------------- | ----------------------------------------------------- |
| `bgColor`       | String | `'#FFFFFF'`      | Component background color                            |
| `flexDirection` | String | `'row'`          | Optional component direction mode `'row'`，`'column'` |
