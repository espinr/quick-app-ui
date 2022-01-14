## Filter Bar (`filter`)

### Description

Component used to filter data.

### Usage result

<preview url="https://quick-app-ui.glitch.me/preview/pages/filter"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-filter" src="../../components/filter"></import>
```

### Example

```html
<template>
  <div class="wrap">
    <q-filter
      bar-option="{{barOption}}"
      popup-option="{{popupOption}}"
      show-filter-icon="{{showFilterIcon}}"
      onselect-bar="handleSelectBar"
      onselect-popup="handleSelectPopup"
    ></q-filter>
    <div style="flex-direction: column">
      <text>Some text</text>
      <text>Some text</text>
      <text>Some text</text>
      <text>Some text</text>
      <text>Some text</text>
      <text>Some text</text>
      <text>Some text</text>
      <text>Some text</text>
      <text>Some text</text>
      <text>Some text</text>
    </div>
  </div>
</template>
```

```js
export default {
  data: {
    barOption: [
      {
        type: 'drawer',
        label: 'Title text',
        value: 'barValue1',
        select: 'radio',
        direction: 'column',
        children: [
          {
            label: 'Description Text',
            value: 'value1',
          },
          {
            label: 'Description Text',
            value: 'value2',
          },
          {
            label: 'Description Text',
            value: 'value3',
          },
          {
            label: 'Description Text',
            value: 'value4',
            size: 'large',
          },
          {
            label: 'Description Text',
            value: 'value5',
          },
        ],
      },
      {
        type: 'singleState',
        label: 'Title text',
        value: 'barValue2',
      },
      {
        type: 'sort',
        label: 'Title text',
        value: 'barValue3',
      },
    ],
    popupOption: [
      {
        type: 'radio',
        label: 'Title text',
        value: 'popupValue1',
        children: [
          {
            label: 'Description Text',
            value: 'value1',
          },
          {
            label: 'Description Text',
            value: 'value2',
          },
          {
            label: 'Description Text',
            value: 'value3',
          },
          {
            label: 'Description Text',
            value: 'value4',
          },
          {
            label: 'Description Text',
            value: 'value5',
          },
        ],
      },
      {
        type: 'checkbox',
        label: 'Title text',
        value: 'popupValue2',
        children: [
          {
            label: 'Description Text',
            value: 'value1',
          },
          {
            label: 'Description Text',
            value: 'value2',
          },
          {
            label: 'Description Text',
            value: 'value3',
          },
          {
            label: 'Description Text',
            value: 'value4',
          },
          {
            label: 'Description Text',
            value: 'value5',
          },
        ],
      },
      {
        type: 'checkbox',
        label: 'Title text',
        value: 'popupValue3',
        children: [
          {
            hasSecond: true,
            firstLabel: 'Subtitle',
            secondLabel: 'Secondary text',
            value: 'value1',
          },
          {
            hasSecond: true,
            firstLabel: 'Subtitle',
            secondLabel: 'Secondary text',
            value: 'value2',
          },
          {
            hasSecond: true,
            firstLabel: 'Subtitle',
            secondLabel: 'Secondary text',
            value: 'value3',
          },
        ],
      },
      {
        type: 'range',
        label: 'Title text',
        value: 'popupValue3',
        leftRange: {
          default: '100',
          placeholder: 'Enter some text',
        },
        rightRange: {
          default: '',
          placeholder: 'Enter some text',
        },
      },
      {
        type: 'checkbox',
        label: 'Title text',
        value: 'popupValue3',
        canFold: true,
        isFolded: false,
        children: [
          {
            label: 'Description Text',
            value: 'value1',
          },
          {
            label: 'Description Text',
            value: 'value2',
          },
          {
            label: 'Description Text',
            value: 'value3',
          },
          {
            label: 'Description Text',
            value: 'value4',
          },
          {
            label: 'Description Text',
            value: 'value5',
          },
        ],
      },
      {
        type: 'checkbox',
        label: 'Title text',
        value: 'popupValue3',
        canFold: true,
        isFolded: true,
        children: [
          {
            label: 'Description Text',
            value: 'value1',
          },
          {
            label: 'Description Text',
            value: 'value2',
          },
          {
            label: 'Description Text',
            value: 'value3',
          },
          {
            label: 'Description Text',
            value: 'value4',
          },
          {
            label: 'Description Text',
            value: 'value5',
          },
        ],
      },
      {
        type: 'checkbox',
        label: 'Title text',
        value: 'popupValue3',
        canFold: true,
        isFolded: true,
        children: [
          {
            label: 'Description Text',
            value: 'value1',
          },
          {
            label: 'Description Text',
            value: 'value2',
          },
          {
            label: 'Description Text',
            value: 'value3',
          },
          {
            label: 'Description Text',
            value: 'value4',
          },
          {
            label: 'Description Text',
            value: 'value5',
          },
        ],
      },
    ],
    showFilterIcon: true,
    drawerTop: '40px',
  },

  handleSelectBar(e) {
    console.log('The selected items are:', e.detail.barResult)
  },

  handleSelectPopup(e) {
    console.log('The selected items are:', e.detail.popupResult)
  },
}
```

```less
.wrap {
  flex-direction: column;
}
```

### API

#### Component Properties

| Attribute        | Type    | Value by default | Description                   |
| ---------------- | ------- | ---------------- | ----------------------------- |
| `barOption`      | Array   | `[]`             | Top filter bar setup items    |
| `popupOption`    | Array   | `[]`             | Filter dialog box setup items |
| `showFilterIcon` | Boolean | `true`           | Display the filter button     |

#### bar-option Attributes

| Attribute        | Type   | Value by default | Description                                                                                                                                 |
| ---------------- | ------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`           | String | `''`             | Filter item type. Values can be: `drawer`, `singleState`, `sort`                                                                            |
| `label`          | String | `''`             | Description of the filter item                                                                                                              |
| `value`          | String | `''`             | Value of the filter item                                                                                                                    |
| `select`         | String | `''`             | Indicates whether to select one or multiple items in a drawer. This parameter is valid only when `type` is set to `drawer`.                 |
| `direction`      | String | `''`             | Arrangement mode of subitems in a drawer. The options are: `column` and `row`. This parameter is valid only when `type` is set to `drawer`. |
| `children`       | Array  | `[]`             | Children. This parameter is valid only when type is set to `drawer`.                                                                        |
| `children.label` | String | `''`             | Description of the child element                                                                                                            |
| `children.value` | String | `''`             | Value of the child element                                                                                                                  |
| `children.size`  | String | `'small'`        | Size of a child element. The options are `small`, `middle`, and `large`.                                                                    |

#### popup-option Attributes

| Attribute                | Type    | Value by default | Description                                                                               |
| ------------------------ | ------- | ---------------- | ----------------------------------------------------------------------------------------- |
| `type`                   | String  | `''`             | Filter item type. The options are: `radio`, `checkbox`, and `range`.                      |
| `label`                  | String  | `''`             | Description of the filter item                                                            |
| `value`                  | String  | `''`             | Value of the filter item                                                                  |
| `canFold`                | Boolean | `false`          | Whether the filter item is collapsible or not                                             |
| `isFolded`               | Boolean | `false`          | Check whether the filter item is collapsed                                                |
| `children`               | Array   | `[]`             | Children elements                                                                         |
| `children.label`         | String  | `''`             | Description of the child element                                                          |
| `children.value`         | String  | `''`             | Value of the child element                                                                |
| `leftRange`              | Object  | `{}`             | Left text box configuration. This parameter is valid only when `type` is set to `range`.  |
| `leftRange.default`      | String  | `''`             | Default value of the left text box                                                        |
| `leftRange.placeholder`  | String  | `''`             | Placeholder of the left text box                                                          |
| `rightRange`             | Object  | `{}`             | Right text box configuration. This parameter is valid only when `type` is set to `range`. |
| `rightRange.default`     | String  | `''`             | Default value of the right text box                                                       |
| `rightRange.placeholder` | String  | `''`             | Placeholder text of the right text box                                                    |

#### Component Events

| Event name    | Event description                        | Value returned      |
| ------------- | ---------------------------------------- | ------------------- |
| `selectBar`   | Selection in the filter bar              | `{value:value}`     |
| `selectPopup` | Clicked the OK button in the search box. | `[ {value:value} ]` |
