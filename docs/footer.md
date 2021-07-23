## Footer (`footer`)

### Description

Displays footer information.

### Usage result

<preview url="https://wonderful-harsh-alvarezsaurus.glitch.me/preview/pages/footer"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-footer" src="qaui/src/components/footer/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-footer
      content="This is a line with versioning information. The content is customized."
      logo="/common/logo.png"
    ></q-footer>
    <q-footer
      links="{{links}}"
      content="This is a line with versioning information. The content is customized."
    ></q-footer>
    <q-footer
      links="{{links.slice(0,1)}}"
      content="This is a line with versioning information. The content is customized."
    ></q-footer>
    <q-footer content="Custom Bottom Text"></q-footer>
  </div>
</template>
```

```js
export default {
  props: {},
  data() {
    return {
      links: [
        {
          name: 'Bottom Link',
          url: 'https://doc.quickapp.cn',
        },
        {
          name: 'Bottom Link',
          url: 'https://doc.quickapp.cn',
        },
      ],
    }
  },
}
```

```less
.qaui-wrap {
  background-color: #ffffff;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 0;
  .custom {
    font-size: 20px;
    color: #456fff;
  }
}
```

### API

#### Component Properties

| Attribute   | Type   | Value by default | Description                        |
| ----------- | ------ | ---------------- | ---------------------------------- |
| `logo`      | String | `''`             | Icon image URL or relative path    |
| `content`   | String | `''`             | Descriptive text about the content |
| `links`     | Array  | `[]`             | Linked data                        |
| `link.name` | String | `''`             | Name of the link                   |
| `link.url`  | String | `''`             | URL of the link                    |

#### slot

| Name      | Description          |
| --------- | -------------------- |
| `logo`    | Custom icon content  |
| `content` | Custom style content |
