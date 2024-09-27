# preview image

图片预览插件，支持缩放、拖拽、旋转、实际尺寸、适应窗口、缩略图预览等功能

## 安装

1. npm安装：
```shell
npm install preview-image-js
import previewImage from 'preview-image-js'
```

2. script引入
```html
<script src="https://tiansc.top/js/preview-image-js/index.js"></script>
```


## 使用

```javascript
const { closeDialog } = previewImage({
    images: ['https://xxx.jpg', "https://xxx.jpg"], // 该属性是必填项，其他属性都是非必填。images表示图片地址数组, 也可以是一个object[], object格式为{url: '', name: '', type: '', id: ''}
    index: 1, // 初始状态显示图片的索引，默认为0
    fileType: 'image', // 文件类型，默认为image，可选项为image, auto。image表示将所有文件都显示为图片；auto表示自动判断文件类型，图片用img标签展示，其他类型文件只展示图标和名称，图标类型有audio、video、word、ppt、excel、pdf、other
    loop: true, // 是否循环，默认为true
    thumbnail: true, // 是否显示缩略图预览，默认为true
    thumbnailDraggable: true, // 是否允许拖拽缩以更改略图位置，默认为true
    toolbar: true, // 是否显示工具栏，包括放大缩小、旋转、适应窗口、实际尺寸、删除、下载，默认为true
    delete: true, // 是否显示删除按钮，默认为false，当toolbar为true时生效
    onDelete: function (url, index, id, item) { // 删除回调，默认为空函数，若不允许删除或者删除失败，返回Promise.reject即可（throw Error也可以）
        console.log('删除', index)
        // return Promise.reject('无权限')
    },
    download: true, // 是否显示下载按钮，默认为false, 当toolbar为true时生效
    onDownload: function (url, index, id, item) { // 下载回调，不传的话会用内置的下载方法来下载图片到本地
        console.log('下载', index)
    },
    onClose: function () { // 关闭回调，默认为空，可以在此处做一些清理工作，比如在移动端解除对返回键的拦截
        console.log('关闭')
    },
    onFileClick: function (url, index, id, item) { // 点击非图片格式文件的回调，可以在此处做跳转等操作
        window.open('preview url') // 可以打开预览链接
    },
    clickableFileTypes: ['pdf'], // 点击非图片格式文件时，只允许点击这些文件类型，会设置hover样式，当onFileClick不为空时生效，默认为all，即所有类型都可以点击
    buttonTooltip: true, // 是否显示按钮提示，默认为true，若设为false，则不会显示按钮提示
    // 以下是语言配置，可以自定义，默认为中文
    thumbnailTitleText: 'overview', // 缩略图标题，默认为’缩略图‘
    maxZoomText: 'It\'s already the maximum size', // 放大到最大时提示，默认为’已放到最大‘
    minZoomText: 'It\'s already the smallest', // 缩小到最小时提示，默认为’已缩到最小‘
    fitText: 'fit to screen', // 适应屏幕提示，默认为’适应屏幕‘
    actualSizeText: 'actual size', // 实际尺寸提示，默认为’实际尺寸‘
    zoomInText: 'zoom in', // 放大提示，默认为’放大‘
    zoomOutText: 'zoom out', // 缩小提示，默认为’缩小‘
    rotateLeftText: 'rotate left', // 逆时针旋转提示，默认为’左转‘
    rotateRightText: 'rotate right', // 顺时针旋转提示，默认为’右转‘
    downloadText: 'download', // 下载提示，默认为’下载‘
    deleteText: 'delete', // 删除提示，默认为’删除‘
    nextText: 'next', // 下一张提示，默认为’下一张‘
    prevText: 'prev', // 上一张提示，默认为’上一张‘
    firstText: "It's already the first one", // 第一张提示，默认为’已到第一个‘
    lastText: "It's already the last one", // 最后一张提示，默认为’已到最后一个‘
    closeText: "Close" // 关闭提示，默认为’关闭‘
})

closeDialog() // 该方法可以关闭预览窗口，比如在移动端监听返回键，在返回键拦截的情况下，点击返回键可以调用该方法关闭预览窗口
```

当fileType设置为auto时，需要引入图标样式文件：
```javascript
import 'preview-image-js/icon.js'
```

或者
```html
<script src="https://tiansc.top/js/preview-image-js/icon.js"></script>
```