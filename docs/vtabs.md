## Vertical Tabs (`vtabs`)

### Description

Tabs oriented vertically to switch actions and access different pages.

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/vtabs"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-tabs" src="qaui/src/components/vtabs/index"></import>
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
      ontap="changeTabbar"
    >
      <div class="item-container">
        <div class="item-content">
          <q-tabs
            type="default"
            data="{{ data }}"
            active-color="#456fff"
            ontap="changeTap"
          >
            <block for="{{ data }}">
              <div class="item-container">
                <div class="item-content">
                  <text>Tab#{{ $idx + 1 }} Content</text>
                </div>
              </div>
            </block>
          </q-tabs>
        </div>
      </div>
      <div class="item-container">
        <div class="item-content">
          <q-tabs
            type="capsule"
            data="{{ data }}"
            active-color="#456FFF"
            ontap="changeTap"
          >
            <block for="{{ data }}">
              <div class="item-container">
                <div class="item-content">
                  <text>Tab#{{ $idx + 1 }} Content</text>
                </div>
              </div>
            </block>
          </q-tabs>
        </div>
      </div>
      <div class="item-container">
        <div class="item-content">
          <q-tabs
            type="icon-label"
            data="{{ data }}"
            active-color="#456fff"
            ontap="changeTap"
          >
            <block for="{{ data }}">
              <div class="item-container">
                <div class="item-content">
                  <text>Tab#{{ $idx + 1 }} Content</text>
                </div>
              </div>
            </block>
          </q-tabs>
        </div>
      </div>
    </q-tabbar>
  </div>
</template>
```

```js
<script>
export default {
  data() {
    return {
      data: [
        { label: 'Label Text', icon: 'qrcode-fill' },
        { label: 'Label Text', icon: 'send' },
        { label: 'Label Text', icon: 'call-forwarding' },
        { label: 'Label Text', icon: 'restore-call-records' },
        { label: 'Label Text', icon: 'restore-call-records' },
        { label: 'Label Text', icon: 'restore-call-records' },
        { label: 'Label Text', icon: 'restore-call-records' },
        { label: 'Label Text', icon: 'restore-call-records' },
        { label: 'Label Text', icon: 'restore-call-records' },
        { label: 'Label Text', icon: 'restore-call-records' },
        { label: 'Label Text', icon: 'restore-call-records' },
        { label: 'Label Text', icon: 'restore-call-records' },
      ],
      tabbarData: [
        {
          icon: 'homepage',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: 'Home',
        },
        {
          icon: 'qrcode',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: 'Products',
        },
        {
          icon: 'contact-fill',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: 'Contact',
        },
      ],
      iconSize: 22,
      background: '#fff',
      activeColor: '#456FFF',
      textColor: '#B2B2B2',
    }
  },
  changeTabbar(evt) {
    console.log('changeTabbar',evt.detail)
  },
  changeTap(evt) {
    console.log('changeTap',evt.detail)
  }
}
</script>
```

```less
<style lang="less">
.qaui-wrap {
  flex-direction: row;
}
</style>
```

### API

#### Component Properties

| Attribute     | Type   | Value by default | Description                                                                       |
| ------------- | ------ | ---------------- | --------------------------------------------------------------------------------- |
| `type`        | String | `'default'`      | Label type (mandatory). Options are: `'default'`\|`'capsule'`\|`'icon-label'`     |
| `activeColor` | String | `'#456fff'`      | Color of the active label tab                                                     |
| `data`        | Array  | `[ ]`            | data object array. The object data structure is described in the following table. |

##### data Object Attributes

| Attribute | Type   | Default | Description                                                                                |
| :-------- | :----- | :------ | :----------------------------------------------------------------------------------------- |
| `label`   | String | `''`    | Text of the label (mandatory)                                                              |
| `icon`    | String | `''`    | Specifies the icon name. This parameter is mandatory only when type is set to `icon-label` |

#### Component Events

| Event name | Event description                | Value returned                                 |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `tap`      | Triggered when a tag is switched | `{detail:{index: Index of the current click}}` |
