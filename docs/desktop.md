## Bookmark Dialog (`desktop`)

### Description

Dialog to add a bookmark on the home screen (desktop).

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/desktop"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-desktop" src="qaui/src/components/desktop/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-desktop
      description="{{ description }}"
      btn-text="Add"
      icon="qrcode-fill"
      icon-src="{{ iconSrc }}"
      onclose="handClose"
      onsuccess="handSuccess"
      onfail="handFail"
      oncreated="handCreated"
    ></q-desktop>
  </div>
</template>
```

```javascript
<script>
/* eslint-disable no-console */
import prompt from '@system.prompt'
export default {
  props: {},
  data() {
    return {
      description: 'Add to Homescreen，Description Text',
      background: '#fff',
      activeColor: '#456FFF',
      textColor: '#B2B2B2',
      iconSrc:'../../common/images/default_blue.png'
    }
  },
  handClose() {
    console.log('Turn off overlayed message')
  },
  handSuccess() {
    prompt.showToast({
      message: 'Homescreen icon successfully created',
    })
  },
  handFail(evt) {
    console.log(evt.detail)
  },
  handCreated() {
    prompt.showToast({
      message: 'Homescreen icon created',
    })
  },
}
</script>
```

```less
<style lang="less">
.qaui-wrap {
  flex-direction: column;
}
</style>
```

### API

#### Component Properties

| Attribute     | Type   | Value by default | Description                                                                               |
| :------------ | :----- | :--------------- | :---------------------------------------------------------------------------------------- |
| `icon`        | String | `'qrcode'`       | Icon name                                                                                 |
| `iconSrc`     | String | `''`             | Icon image source, which is mutually exclusive with the `icon` and has a higher priority. |
| `description` | String | `''`             | Text description (mandatory).                                                             |
| `btnText`     | String | `'Add'`          | Button text (mandatory).                                                                  |

#### Component Events

| Event name | Event description                                       | Value returned                                              |
| ---------- | ------------------------------------------------------- | ----------------------------------------------------------- |
| `created`  | Callback for desktop bookmark created                   | -                                                           |
| `success`  | Callback after a desktop bookmark is successfully added | -                                                           |
| `fail`     | Callback after a desktop bookmark fails to be added     | `evt Object (returned status code and failure description)` |
| `close`    | Callback after the dialog is closed.                    | -                                                           |
