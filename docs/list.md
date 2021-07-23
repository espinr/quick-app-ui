## List of Items (`list`)

### Description

Displays text, images, and paragraphs in a list.

### Usage result

<preview url="https://wonderful-harsh-alvarezsaurus.glitch.me/preview/pages/list/"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-list" src="qaui/src/components/list/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-list
      title="List Title"
      data="{{ listData }}"
      onitem-tap="itemTap"
      onsamll-btn-tap="smallBtnTap"
      onswitch-tap="switchTap"
    ></q-list>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      listData: [
        {
          title: 'Title text',
        },
        {
          title: 'Title text',
          extra: 'rightArrow',
        },
        {
          title: 'Title text',
          rightText: 'Result Text',
        },
        {
          title: 'Title text',
          rightText: 'Result Text',
          extra: 'rightArrow',
        },
        {
          title: 'Title text',
          extra: 'switch',
          switchValue: true,
        },
        {
          title: 'Title text',
          extra: 'button',
          rightBtnText: 'Button',
        },
        {
          title: 'Title Text #1',
          iconType: 'bill-fill',
          extra: 'rightArrow',
        },
        {
          title: 'Title Text #1',
          iconType: 'bill-fill',
          rightText: 'Result Text',
          extra: 'rightArrow',
        },
        {
          title: 'Title Text #1',
          iconType: 'bill-fill',
          extra: 'switch',
          switchValue: true,
        },
        {
          title: 'Title Text #4',
          thumb: '../../common/logo.png',
        },
        {
          title: 'Title text',
          description: 'This is a section of Description Text',
        },
        {
          title: 'Title text',
          description: 'This is a section of Description Text',
          extra: 'rightArrow',
        },
        {
          title: 'Title text',
          description: 'This is a section of Description Text',
          rightText: 'Result Text',
        },
        {
          title: 'Title text',
          description: 'This is a section of Description Text',
          extra: 'rightArrow',
          rightText: 'Result Text',
        },
        {
          title: 'Title text',
          description: 'This is a section of Description Text',
          extra: 'switch',
          switchValue: true,
        },
        {
          title: 'Title text',
          description: 'This is a section of Description Text',
          extra: 'button',
          rightBtnText: 'Button',
        },
        {
          title: 'Title Text #1',
          iconType: 'bill-fill',
          description: 'This is a section of Description Text',
          extra: 'rightArrow',
        },
        {
          title: 'Title Text #2',
          description: 'This is a section of Description Text2',
          iconType: 'bill-fill',
          rightText: 'Result Text',
          extra: 'rightArrow',
        },
        {
          title: 'Title Text #2',
          description: 'This is a section of Description Text2',
          iconType: 'bill-fill',
          extra: 'switch',
          switchValue: true,
        },
        {
          title: 'Title Text #2',
          description: 'This is a section of Description Text2',
          iconType: 'bill-fill',
          extra: 'button',
          rightBtnText: 'Button',
        },
        {
          title: 'Title Text #3',
          description: 'This is a section of Description Text2',
          thumb: '../../common/logo.png',
        },
      ],
    }
  },

  itemTap(data) {
    const index = data.detail.index
    this.listData[index].title = `Selected ${index}行`
  },

  smallBtnTap(data) {
    const index = data.detail.index
    this.listData[index].title = `Select the small button ${index}`
  },

  switchTap(data) {
    const index = data.detail.index
    this.listData[index].title = `Select the switch button ${index}`
  },
}
```

### API

#### Component Properties

| Attribute | Type  | Value by default | Description                 |
| --------- | ----- | ---------------- | --------------------------- |
| `data`    | Array | `[]`             | Source of data for the list |

##### `data` Object Attributes

| Attribute      | Type    | Description                                                                                                             |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| `title`        | String  | Title of the list                                                                                                       |
| `description`  | String  | Descriptive text of the list                                                                                            |
| `iconType`     | String  | Icon type on the left of the list. For details, see the `icon` component.                                               |
| `thumb`        | String  | Thumbnail path to be included on the left of the list                                                                   |
| `extra`        | String  | Extra content, which is displayed on the right of the list. The options are: `'rightArrow'` \| `'switch'` \| `'button'` |
| `rightBtnText` | String  | Text of the button placed on the right of the list                                                                      |
| `rightText`    | String  | Text placed on the right of the list                                                                                    |
| `switchValue`  | Boolean | Initial value of the `switch` on the right of the list                                                                  |

#### Component Events

| Event name    | Event description                                                                   | Value returned                                                                       |
| ------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `itemTap`     | A list item is clicked                                                              | `{detail：{index: Index of the current click}}`                                      |
| `smallBtnTap` | Triggered when extra is `'button'` and the button is clicked                        | `{detail：{index: Index of the current click}}`                                      |
| `switchTap`   | Triggered when the value of extra is `'switch'` and the switch component is clicked | `{detail：{index: Index of the current click, active: Current value of the switch}}` |
