## Popover (`popover`)

### Description

Click the element to pop up a bubble menu.

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/popover/"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-popover" src="qaui/src/components/popover/index"></import>
```

### Example

```html
<template>
  <div class="wrap">
    <div class="header">
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[0] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">topLeft</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[1] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">top</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[2] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">topRight</text>
      </q-popover>
    </div>
    <div class="body">
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[3] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">leftTop</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[4] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">left</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[5] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">leftBottom</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[6] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">rightTop</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[7] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">right</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[8] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">rightBottom</text>
      </q-popover>
    </div>
    <div class="footer">
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[9] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">bottomLeft</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[10] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">bottom</text>
      </q-popover>
      <q-popover
        contents="{{ contents }}"
        placement="{{ placementArr[11] }}"
        popover-width="{{ popoverWidth }}"
        trigger-size="{{ triggerSize }}"
        offset="{{ offset }}"
        arrow-space="{{ arrowSpace }}"
        onmenu-item-tap="handleClick"
      >
        <text slot="trigger" class="rootText">bottomRight</text>
      </q-popover>
    </div>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      contents: [
        {
          content: 'Description',
          iconPath: '/common/images/default_black.png',
        },
        {
          content: 'Description',
          icon: {
            type: 'category-fill',
            color: '#456FFF',
          },
        },
        {
          content: 'Description',
        },
      ],
      placementArr: [
        'topLeft',
        'top',
        'topRight',
        'leftTop',
        'left',
        'leftBottom',
        'rightTop',
        'right',
        'rightBottom',
        'bottomLeft',
        'bottom',
        'bottomRight',
      ],
      popoverWidth: 198,
      triggerSize: [175, 69],
      offset: [0, 0],
      arrowSpace: 21,
    }
  },
  handleClick(data) {
    const { event, index } = data.detail
    console.log(event)
    console.log(index)
  },
}
```

```less
.wrap {
  background-color: #e1e1e1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 280px 0;

  .header {
    width: 100%;
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-around;
  }

  .body {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 1;
  }

  .footer {
    width: 100%;
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-around;
  }

  .rootText {
    width: 175px;
    height: 69px;
    border-radius: 12px;
    font-size: 27px;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    line-height: 69px;
    background-color: #ffffff;
  }
}
```

### API

#### Component Properties

| Attribute      | Type   | Value by default | Description                                                                                                                                                                                                                                |
| -------------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `popoverWidth` | Number | `0`              | Popover width (mandatory)                                                                                                                                                                                                                  |
| `contents`     | Array  | `[]`             | Array with the content of the popover. Each item in the array is an object described as shown below.                                                                                                                                       |
| `placement`    | String | `'bottom'`       | Position of the arrow. The options are as follows:: `'top'` \| `'topLeft'` \| `'topRight'` \| `'bottom'` \| `'bottomLeft'` \| `'bottomRight'` \| `'left'` \| `'leftTop'` \| `'leftBottom'` \| `'right'` \| `'rightTop'` \| `'rightBottom'` |
| `offset`       | Array  | `[0, 0]`         | Horizontal and vertical offsets of the menu                                                                                                                                                                                                |
| `arrowSpace`   | Number | `10`             | Distance between the arrow and the boundary. When the position of the arrow is different than `'top'` \| `'left'` \| `'right'` \| `'bottom'` the distance must be greater than `10`）                                                      |
| `triggerSize`  | Array  | `[]`             | Width and height of a component defined by a user through a `slot` (mandatory)                                                                                                                                                             |

#### Attributes of `contents` objects

| Attribute  | Type   | Description                                                                                                                         |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `content`  | String | Content of each line on the menu                                                                                                    |
| `iconPath` | String | Icon path of each line on the menu. You only need to set either `iconPath` or `icon`. If both are set, `icon` is selected.          |
| `icon`     | Object | Configuration item of the icon component in the component library. Currently, only the `type` and `color` attributes are supported. |

#### Component Events

| Event name    | Event description         | Value returned   |
| ------------- | ------------------------- | ---------------- |
| `menuItemTap` | Popover menu item clicked | `(event, index)` |

#### slot

| Name      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `trigger` | Component that triggers the bubble menu. This parameter is mandatory. |
