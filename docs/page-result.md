## Results Page (`page-result`)

### Description

Displays the results of specific running tasks.

### Usage result

<div style="text-align: center;margin: 40px;"><img src="./assets/page-result.png" alt="page with result" style="width:300px" /></div>

### How to use it

Importing a component in a `.ux` file:

```html
<import
  name="q-page-result"
  src="qaui/src/components/page-result/index"
></import>
```

### Example

```html
<template>
  <div class="wrap">
    <q-page-result
      type="{{ typeArr[0] }}"
      title="{{ title }}"
      left-btn-name="{{ leftBtnName }}"
      right-btn-name="{{ rightBtnName }}"
      footer-info="{{ footerInfo }}"
      onleft-btn-tap="leftBtn"
      onright-btn-tap="rightBtn"
    >
      <span
        >Content details can be wrapped in a maximum of two lines. You can also
        insert the content into a new line</span
      >
      <a class="text-link" href="/pages/button">Linked Text</a>
      <span>Tips to make it more functional.</span>
    </q-page-result>
  </div>
</template>
```

```js
import router from '@system.router'
export default {
  data() {
    return {
      typeArr: ['success', 'warning', 'error', 'waiting'],
      title: 'Main Title',
      description:
        'The content details can be wrapped in a maximum of two lines. You can also insert text links for more functional hints',
      leftBtnName: 'Secondary Button',
      rightBtnName: 'Home Button',
      footerInfo: 'Bottom Custom Info',
    }
  },
  leftBtn(data) {
    const event = data.detail.event
    console.log(event)
    router.back()
  },
  rightBtn(data) {
    const event = data.detail.event
    console.log(event)
    router.push({
      uri: '/pages/button',
    })
  },
}
```

```less
.wrap {
  width: 100%;
  height: 100%;

  .text-link {
    color: #456fff;
  }
}
```

### API

#### Component Properties

| Attribute      | Type   | Value by default | Description                                                                                                      |
| -------------- | ------ | ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`         | String | `'success'`      | Result status type. The options are: `'success'` \| `'warning'` \| `'error'` \| `'waiting'`                      |
| `title`        | String | `''`             | Main title                                                                                                       |
| `leftBtnName`  | String | `''`             | Label of the button on the left                                                                                  |
| `rightBtnName` | String | `''`             | Label of the button on the right                                                                                 |
| `description`  | String | `''`             | Descriptive text. If you want to add a link, you can use `slot` to transfer it. If both are set, `slot` is used. |
| `footerInfo`   | String | `''`             | Custom information at the bottom                                                                                 |

#### Component Events

| Event name    | Event description    | Value returned |
| ------------- | -------------------- | -------------- |
| `leftBtnTap`  | Left button clicked  | `event`        |
| `rightBtnTap` | Right button clicked | `event`        |

#### slot

| Name | Description                                              |
| ---- | -------------------------------------------------------- |
| -    | Customize the descriptive text. You can add a text link. |
