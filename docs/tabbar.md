## Navigation Bar (`tabbar`)

### Description

Tab switch at the bottom of the screen.

### Usage result

<preview url="https://wonderful-harsh-alvarezsaurus.glitch.me/preview/pages/tabbar"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-tabbar" src="qaui/src/components/tabbar/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-tabbar
      index="{{ index }}"
      background="{{ background }}"
      text-color="{{ textColor }}"
      active-color="{{ activeColor }}"
      data="{{ tabbarData }}"
      icon-size="{{ iconSize }}"
      ontap="changeTap"
    >
      <block for="{{ tabbarData }}">
        <div class="item-container">
          <div class="item-content">
            <text>Tab#{{ $idx + 1 }} content</text>
          </div>
        </div>
      </block>
    </q-tabbar>
  </div>
</template>
```

```less
<style lang="less">
.qaui-wrap {
  flex-direction: column;
}

.item-content {
  flex-direction: column;
  text {
    color: red;
    font-size: 13px;
  }
}
</style>
```

```js
<script>
export default {
  data() {
    return {
      tabbarData: [
        {
          icon: 'homepage',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: 'Home'
        },
        {
          icon: 'qrcode',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: 'Products'
        },
        {
          icon: 'contact-fill',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: 'Contact',

        },
      ],
      index:0,
      iconSize:22,
      background: '#FFF',
      activeColor: '#456FFF',
      textColor: '#B2B2B2'
    }
  },
  changeTap(evt){
    console.log(evt.detail)
  }
}
</script>
```

### API

#### Component Properties

| Attribute     | Type   | Value by default | Description                                             |
| ------------- | ------ | ---------------- | ------------------------------------------------------- |
| `index`       | Number | `0`              | Index of the current active item                        |
| `background`  | String | `'#fff'`         | Background color                                        |
| `textColor`   | String | `'#B2B2B2'`      | Text color for the inactive tabs                        |
| `activeColor` | String | `'#456FFF'`      | Text color for the active tab                           |
| `iconSize`    | Number | `22`             | If an `icon` is set, this attribute specifies its size. |
| `data`        | Array  | `[ ]`            | Tab data object array (see below)                       |

##### `data` Object Attributes

| Attribute          | Type   | Value by default | Description                                                                                           |
| :----------------- | :----- | :--------------- | :---------------------------------------------------------------------------------------------------- |
| `icon`             | String | -                | Icon type, which is mutually exclusive with `iconPath`. `icon` has a higher priority and is optional. |
| `iconPath`         | String | -                | Indicates the path of the icon in the inactive state. This parameter is optional.                     |
| `selectedIconPath` | String | -                | Path of the icon in the activated state (optional).                                                   |
| `text`             | String | -                | Label (mandatory).                                                                                    |

#### Component Events

| Event name | Event description  | Value returned                                  |
| ---------- | ------------------ | ----------------------------------------------- |
| `tap`      | Switching the page | `{detail：{index: Index of the current click}}` |
