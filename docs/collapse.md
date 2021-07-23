## Accordion (`collapse`)

### Description

Expands and collapse panels. The accordion is a special folding panel that allows only a single container to be expanded.

### Usage result

<preview url="https://wonderful-harsh-alvarezsaurus.glitch.me/preview/pages/collapse-group/"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import
  name="q-collapse-group"
  src="qaui/src/components/collapse-group/index"
></import>
<import name="q-collapse" src="qaui/src/components/collapse/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-collapse-group
      title="Basic Usage"
      id="1"
      default-open="{{['key1','key2']}}"
      onchange="change"
    >
      <q-collapse
        title="Title Text1"
        content="Content 1"
        group-id="1"
        key="key1"
      ></q-collapse>
      <q-collapse
        title="Title Text2"
        content="Content 2"
        group-id="1"
        key="key2"
        icon="theme-sms"
      ></q-collapse>
      <q-collapse
        title="Title Text3"
        content="Content 3"
        group-id="1"
        key="key3"
        thumb="../../common/logo.png"
      ></q-collapse>
    </q-collapse-group>
    <div style="margin-top: 20px">
      <q-collapse-group title="Accordion Usage" id="2" accordion="{{true}}">
        <q-collapse
          title="Title Text1"
          content="Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1"
          group-id="2"
          key="key4"
        ></q-collapse>
        <q-collapse
          title="Title Text2"
          content="Content 2"
          group-id="2"
          key="key5"
          icon="theme-sms"
        ></q-collapse>
        <q-collapse
          title="Title Text3"
          content="Content 3"
          group-id="2"
          key="key6"
        ></q-collapse>
      </q-collapse-group>
    </div>
    <div style="margin-top: 20px">
      <q-collapse-group title="禁用示例" id="3" accordion="{{true}}">
        <q-collapse
          title="Title Text1"
          content="Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1 Content 1"
          group-id="3"
          key="key7"
          disabled="true"
        ></q-collapse>
        <q-collapse
          title="Title Text2"
          content="Content 2"
          group-id="3"
          key="key8"
          icon="theme-sms"
          disabled="true"
        ></q-collapse>
      </q-collapse-group>
    </div>
  </div>
</template>
```

```js
export default {
  change(data) {
    console.log(data)
  },
}
```

```less
.qaui-wrap {
  background-color: #ffffff;
  flex-direction: column;
}
```

### API

#### collapse-group Component Properties

| Attribute     | Type    | Value by default | Description                                                             |
| ------------- | ------- | ---------------- | ----------------------------------------------------------------------- |
| `defaultOpen` | Array   | `[]`             | Array consisting of `key`s of subcomponents that are enabled by default |
| `accordion`   | Boolean | `false`          | Accordion mode, only one subcomponent can be shown.                     |
| `title`       | String  | `''`             | Custom title                                                            |
| `id`          | String  | `''`             | ID (mandatory)                                                          |

#### collapse Component Properties

| Attribute  | Type    | Value by default | Description                                                                                             |
| ---------- | ------- | ---------------- | ------------------------------------------------------------------------------------------------------- |
| `key`      | String  | `''`             | Index key                                                                                               |
| `thumb`    | String  | `''`             | URL or local path of the thumbnail on the left. The supported image formats include (png, jpg and gif). |
| `icon`     | String  | `''`             | Type of the icon. For more details see the `icon` component.                                            |
| `title`    | String  | `''`             | Custom title                                                                                            |
| `content`  | String  | `''`             | Custom content                                                                                          |
| `disabled` | Boolean | `false`          | Disable the component                                                                                   |
| `groupId`  | String  | `''`             | The ID of the parent component (mandatory)                                                              |

### collapse-group Component Events

| Event name | Event description | Value returned       |
| ---------- | ----------------- | -------------------- |
| `change`   | Toggle the panel  | `{ key:currentkey }` |
