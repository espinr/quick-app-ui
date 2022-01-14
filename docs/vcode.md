## CAPTCHA (`vcode`)

### Description

Component used to process verification codes (CAPTCHA).

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/vcode"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-vcode" src="qaui/src/components/vcode/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-vcode time="5" onsend="sendHandler" onchange="changeHandler"></q-vcode>
    <div class="line"></div>
    <q-vcode image="{{image}}" onimage="imageHandler"></q-vcode>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      image:
        'https://s3.ifanr.com/wp-content/uploads/2019/07/yanzhengma01-1024x312.png',
    }
  },
  sendHandler() {
    console.log('request for sending verify code!')
  },
  imageHandler() {
    this.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnx_z6MfMIVA0etrLHrpzAo-kU-Rm2VJMTbQ&usqp=CAU'
  },
  changeHandler({ detail }) {
    console.log('input value', detail.value)
  },
}
```

```less
.qaui-wrap {
  flex-direction: column;
  background-color: #f2f2f2;
  .line {
    height: 1px;
    background-color: #ffffff;
    width: 20px;
  }
}
```

### API

#### Component Properties

| Attribute | Type   | Value by default | Description                                                                                                  |
| --------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------------------ |
| `time`    | Number | `120`            | Waiting time after the verification code is sent, in seconds.                                                |
| `image`   | String | `''`             | Image verification code address. If this parameter is transferred, the image verification code is displayed. |

#### Component Events

| Event name | Event description                                                                | Value returned  |
| ---------- | -------------------------------------------------------------------------------- | --------------- |
| `send`     | Event of clicking the button for obtaining a verification code                   | -               |
| `change`   | Verification code text box value change event                                    | `{value:value}` |
| `image`    | Verification image click event, which is used to replace the verification image. | -               |
