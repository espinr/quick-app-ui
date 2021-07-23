## Gallery (`gallery`)

### Description

Displays pictures as a gallery, enabling the preview of the images.

### Usage result

<!-- div style="text-align: center;margin: 40px;"><img src="./assets/gallery.gif" alt="barcode" style="width:300px" /></div -->

<preview url="https://wonderful-harsh-alvarezsaurus.glitch.me/preview/pages/gallery/"/>

### How to use it

Importing the components in `.ux` files:

```html
<import name="q-gallery" src="qaui/src/components/gallery/index"></import>
```

### Example

```html
<template>
  <div style="flex-direction: column">
    <q-gallery title="Title Text" srcs="{{ data1 }}"></q-gallery>
    <q-gallery title="Title Text" srcs="{{ data2 }}"></q-gallery>
    <q-gallery
      title="Title Text"
      srcs="{{ data3 }}"
      onimage-preview-success="onImagePreviewSuccess"
    ></q-gallery>
    <q-gallery
      title="视频文件"
      video-orientation="landscape"
      video-url="https://swsdl.vivo.com.cn/appstore/developer/uploadfile/20180323/20180323183010837.mp4"
      onvideo-click="clickItem"
      onvideo-appear="videoAppear"
      poster-url="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png"
    ></q-gallery>
  </div>
</template>
```

```js
import prompt from '@system.prompt'

export default {
  data() {
    return {
      data1: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
      ],
      data2: [
        'https://developer.huawei.com/images/quickApp-ide/banner_320-484.png',
      ],
      data3: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=134518335,1751359104&fm=26&gp=0.jpg',
      ],
      data4: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
      ],
      data5: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://imagestbook.cn/c9162600-17a7-11e9-8302-0d1daa9ceb5b',
      ],
    }
  },

  clickItem() {
    prompt.showToast({
      message: 'click video',
    })
  },
  onImagePreviewSuccess() {
    console.log('Picture previewed successfully')
  },
  videoAppear() {
    prompt.showToast({
      message: 'Video shown',
    })
  },
}
```

### API

#### Component Properties

| Attribute          | Type   | Value by default | Description                                                                                                                                |
| ------------------ | ------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `srcs`             | Array  | `[]`             | Image link address. The value can be a URL, local resource, or a base64 image. Note that base64 images do not support large image preview. |
| `title`            | String | `''`             | Gallery description text                                                                                                                   |
| `videoUrl`         | String | `''`             | Video link address (URL or local path)                                                                                                     |
| `posterUrl`        | String | `''`             | Video preview poster                                                                                                                       |
| `videoOrientation` | String | `landscape`      | Direction of video and full-screen display: `landscape` and `portrait`                                                                     |

#### Component Events

| Event name            | Event description                            | Value returned |
| --------------------- | -------------------------------------------- | -------------- |
| `imagePreviewSuccess` | Triggered when an image is clicked.          | `event`        |
| `imagePreviewFail`    | Triggered when an image fails to be clicked. | `event`        |
| `videoTap`            | Triggered when a video is clicked.           | `event`        |
| `videoAppear`         | Triggered when a video is shown.             | `event`        |
