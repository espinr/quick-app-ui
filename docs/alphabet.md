## Alphabet Index (`alphabet`)

### Description

Alphabet index.

### Usage result

<preview url="https://editor.quickapp.cn/preview/2011/sL/2011sL1yEg08/build/pages/alphabet"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-alphabet" src="qaui/src/components/alphabet/index"></import>
```

### Example

```html
<template>
  <div class="qaui-wrap">
    <q-alphabet
      id="alphabet"
      data="{{ data }}"
      active-color="#fff"
      active-background="#456FFF"
      is-shake="{{ true }}"
      onitemtap="itemtap"
    >
    </q-alphabet>
  </div>
</template>
```

```less
<style lang="less">
.qaui-wrap{
  flex-direction: column;
}
</style>
```

```js
<script>
export default {
  data() {
    return {
      id: 'alphabetId',
      data: [
        {
          index: 'A',
          child: [
            { id: '111213', text: 'Acapulco' },
            { id: '111214', text: 'Accra' },
            { id: '111215', text: 'Adak' },
          ],
        },
        {
          index: 'B',
          child: [
            { id: '111216', text: 'Barcelona' },
            { id: '111217', text: 'Beirut' },
          ],
        },
        {
          index: 'C',
          child: [
            { id: '111218', text: 'Caversham' },
            { id: '111219', text: 'Charleston长沙' },
            { id: '111220', text: 'Chicago' },
          ],
        },
        { index: 'D', child: [{ id: '111218', text: 'Dublin' }] },
        {
          index: 'E',
          child: [
            { id: '111221', text: 'Edimburgh' },
            { id: '111222', text: 'Edmonton' },
          ],
        },
        {
          index: 'F',
          child: [
            { id: '111223', text: 'Fortaleza' },
            { id: '111224', text: 'Frankfurt' },
            { id: '111225', text: 'Freetown' },
          ],
        },
        {
          index: 'G',
          child: [
            { id: '111226', text: 'Geneva' },
            { id: '111227', text: 'Guatemala' },
            { id: '111228', text: 'Glasgow' },
          ],
        },
        {
          index: 'H',
          child: [
            { id: '111229', text: 'Hanoi' },
            { id: '111230', text: 'Havana' },
          ],
        },
        {
          index: 'J',
          child: [
            { id: '111231', text: 'Jakarta' },
            { id: '111232', text: 'Juba' },
            { id: '111233', text: 'Juneau' },
          ],
        },
        {
          index: 'K',
          child: [
            { id: '111234', text: 'Karachi' },
            { id: '111235', text: 'Kobe' },
          ],
        },
        {
          index: 'L',
          child: [
            { id: '111236', text: 'Lagos' },
            { id: '111237', text: 'Lahore' },
          ],
        },
        { index: 'M', child: [{ id: '111238', text: 'Maputo' }] },
        {
          index: 'N',
          child: [
            { id: '111239', text: 'Nassau' },
            { id: '111240', text: 'New York' },
            { id: '111241', text: 'Nuuk' },
          ],
        },
        {
          index: 'O',
          child: [
            { id: '111242', text: 'Osaka' },
            { id: '111243', text: 'Oslo' },
            { id: '111244', text: 'Ottawa' },
          ],
        },
        { index: 'P', child: [{ id: '111245', text: 'Perth' }] },
        {
          index: 'Q',
          child: [
            { id: '111246', text: 'Quebek' },
            { id: '111247', text: 'Quito' },
          ],
        },
        {
          index: 'S',
          child: [
            { id: '111248', text: 'Sacramento' },
            { id: '111249', text: 'Seville' },
            { id: '111250', text: 'Sofia' },
          ],
        },
        {
          index: 'T',
          child: [
            { id: '111251', text: 'Toronto' },
            { id: '111252', text: 'Tripoli' },
          ],
        },
        {
          index: 'W',
          child: [
            { id: '111253', text: 'Warsaw' },
            { id: '111254', text: 'Wellington' },
            { id: '111255', text: 'Whitehorse' },
          ],
        },
        {
          index: 'Y',
          child: [
            { id: '111256', text: 'Yangon' },
            { id: '111257', text: 'Yaren' },
            { id: '111258', text: 'Yokohama' },
          ],
        },
        {
          index: 'Z',
          child: [
            { id: '111261', text: 'Zagreb' },
            { id: '111262', text: 'Zurich' },
          ],
        },
      ],
    }
  },
  itemtap(evt) {
    console.log(evt.detail)
  },
}
</script>

```

### API

#### Component Properties

| Attribute          | Type    | Value by default | Description                                                                                                |
| ------------------ | ------- | ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`               | String  | `''`             | ID of the component (mandatory)                                                                            |
| `activeColor`      | String  | `'#fff'`         | Color of the letter that is in the active state                                                            |
| `activeBackground` | String  | `'#2878ff'`      | Background color of the letter in the active state                                                         |
| `isShake`          | Boolean | `true`           | Indicates whether to enable vibration. When a letter is clicked, the native vibration effect is activated. |
| `data`             | Array   | `[ ]`            | Data object array. The following table describes the structure of the object.                              |

Description of the `data` object attributes:

| Attribute | Type   | Value by default | Description                                                                                                           |
| :-------- | :----- | :--------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `index`   | String | `''`             | Letter (mandatory)                                                                                                    |
| `child`   | `[]`   | `''`             | Level-2 list corresponding to the alphabetic index, for example, `child: [{ id: '111218', text: 'Edmonton' }]`        |
| `text`    | String | `''`             | Content of the body in the level-2 list (mandatory). All fields except the text field in the child can be customized. |

#### Component Events

| Event name | Event description                                                                                | Value returned                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `itemtap`  | Event clicked. This event is triggered when the body associated with the index table is clicked. | `evt: callback object`. The returned object can be obtained through `evt.detail`. |
