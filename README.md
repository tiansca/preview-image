# preview image

图片预览插件，支持缩放、拖拽、旋转、实际尺寸、适应窗口、缩略图预览等功能

## 安装

1. npm安装：

npm install preview-image-js
import previewImage from 'preview-image-js'

2. script引入
<script src="https://unpkg.com/preview-image-js@1.0.0/dist/preview-image.min.js"></script>

```javascript
previewImage({
    index: 1, // 默认显示图片索引，默认为0
    images: ['https://xxx.jpg', "https://xxx.jpg"], // 图片地址数组，默认为空
    thumbnail: true, // 是否显示缩略图预览，默认为true
    thumbnailDraggable: true, // 是否允许拖拽缩略图，默认为true
    onDelete: function (index, url) { // 删除回调，默认为空函数，若不允许删除或者删除失败，返回Promise.reject即可（throw Error也可以）
        console.log('删除', index)
        // return Promise.reject('无权限')
    },
    delete: true, // 是否显示删除按钮，默认为false
    download: true, // 是否显示下载按钮，默认为false
    onDownload: function (index, url) { // 下载回调，不传的话会用内置的下载方法来下载图片到本地
        console.log('下载', index)
    },
    // thumbnailTitleText: 'overview', // 缩略图标题，默认为’缩略图‘
    // maxZoomText: 'It\'s already the maximum size', // 放大到最大时提示，默认为’已放到最大‘
    // minZoomText: 'It\'s already the smallest', // 缩小到最小时提示，默认为’已缩到最小‘
    // fitText: 'fit to screen', // 适应屏幕提示，默认为’适应屏幕‘
    // actualSizeText: 'actual size', // 实际尺寸提示，默认为’实际尺寸‘
    // zoomInText: 'zoom in', // 放大提示，默认为’放大‘
    // zoomOutText: 'zoom out', // 缩小提示，默认为’缩小‘
    // rotateLeftText: 'rotate left', // 逆时针旋转提示，默认为’左转‘
    // rotateRightText: 'rotate right', // 顺时针旋转提示，默认为’右转‘
    // downloadText: 'download', // 下载提示，默认为’下载‘
    // deleteText: 'delete', // 删除提示，默认为’删除‘
    // nextText: 'next', // 下一张提示，默认为’下一张‘
    // prevText: 'prev' // 上一张提示，默认为’上一张‘
})
```