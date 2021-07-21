## Progress Bar (`progress`)

### Description

Displays a progress bar and informs users of the loading current status.

### Usage result

<preview url="https://editor.quickapp.cn/preview/2011/sL/2011sL1yEg08/build/pages/progress/"/>

### How to use it

Importing a component in a `.ux` file:

```html
<import name="q-progress" src="qaui/src/components/progress/index"></import>
```

### Example

```html
<template>
  <div class="wrap">
    <text class="title"></text>
    <div class="progress-group">
      <div class="progress-box">
        <q-progress></q-progress>
      </div>
      <div class="progress-box">
        <q-progress percentage="{{ percentage }}"></q-progress>
      </div>
      <div class="progress-box">
        <q-progress
          percentage="{{ percentage }}"
          is-content-show="{{ isContentShow }}"
        ></q-progress>
      </div>
    </div>
    <text class="title">Customizing the progress bar</text>
    <div class="progress-group">
      <div class="progress-box">
        <q-progress
          stroke-color="{{ strokeColor }}"
          trail-color="{{ trailColor }}"
        ></q-progress>
      </div>
      <div class="progress-box">
        <q-progress
          is-content-show="{{ isContentShow }}"
          format="{{ format }}"
        ></q-progress>
      </div>
      <div class="progress-box">
        <q-progress
          percentage="{{ 80 }}"
          progress-width="{{ progressWidth }}"
          is-content-show="{{ isContentShow }}"
          format="{{ format }}"
        ></q-progress>
      </div>
    </div>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      percentage: 25,
      isContentShow: true,
      progressWidth: '750px',
      strokeColor: '#1E90FF',
      trailColor: 'rgba(255,215,0,.5)',
      format: (percentage) => 'Downloaded ' + percentage + '%',
    }
  },
}
```

```less
.wrap {
  flex-direction: column;
  width: 100%;
  background-color: #f2f2f2;
  opacity: 0.8;

  .title {
    width: 100%;
    height: 90px;
    margin-left: 40px;
    line-height: 90px;
    font-size: 24px;
  }

  .progress-group {
    flex-direction: column;
    width: 100%;
    padding: 0 40px 80px 40px;
    background-color: #ffffff;

    .progress-box {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 56px;
    }
  }
}
```

### API

#### Component Properties

| Attribute       | Type     | Value by default                   | Description                                                                                       |
| --------------- | -------- | ---------------------------------- | ------------------------------------------------------------------------------------------------- |
| `percentage`    | Number   | `50`                               | Progress bar percentage. The value ranges from `0` to `100` and can be a decimal.                 |
| `progressWidth` | String   | `'100%'`                           | Width of the progress bar component (including the width of the text. `%` and `px` are supported) |
| `strokeHeight`  | Number   | `2`                                | Height of the progress bar                                                                        |
| `isContentShow` | Boolean  | `false`                            | Whether to display text on the right or not                                                       |
| `format`        | Function | `(percentage) => percentage + '%'` | Template function of the text description on the right                                            |
| `contentStyle`  | Object   | `{}`                               | Customize the style of text on the right                                                          |
| `strokeColor`   | String   | `'#456fff'`                        | Color of the progress bar                                                                         |
| `trailColor`    | String   | `'rgba(0, 0, 0, 0.12)'`            | Color of incomplete segments                                                                      |
