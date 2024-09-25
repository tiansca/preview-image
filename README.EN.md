# preview image
Image preview plug-in, support for zoom, drag and drop, rotation, the actual size, adaptation window, thumbnail preview and other functions
## install
1. npm install:
```shell
npm install preview-image-js
import previewImage from 'preview-image-js'
```

2. script引入
```html
<script src="https://tiansc.top/js/preview-image-js.js"></script>
```

## use

```javascript
const { closeDialog } = previewImage({
    images: [ ' < url > ' , 'https://xxx.jpg ' ] , // this property is required, all others are optional. images representing an array of image addresses, or an object [] in the form of { url:”, name:”, type:”, id:”}
    index: 1, //The initial state shows the image's index, which defaults to 0
    fileType: 'image' , //file type, defaults to image, optionally image, auto. Image shows all files as images; auto automatically determines file types, images are displayed with IMG tags, and other types of files only display icons and names, icon types are audio, video, word, ppt, Excel, PDF, other
    loop: true, // whether to loop, default is true
    thumbnail: true, //whether thumbnail preview is displayed, defaults to true
    thumbnaildraggable: true, //whether drag-and-drop is allowed to change the thumbnail location, defaults to true
    toolbar: true, //whether to display the toolbar, including zoom in, zoom out, rotate, fit the window, actual size, delete, download, default is true
    delete: true, //whether the delete button is displayed, false by default, takes effect when the toolbar is true
    onDelete: function (URL, index, ID, item){//delete callback, empty by default, returns Promise.reject if deletion is not allowed or if it fails (throw Error is fine, too)
        console. Log ('delete' , index)
        //return promise. Reject ('without permission')
    },
    download: true, //whether the download button is displayed, false by default, takes effect when the toolbar is true
    onDownload: function (url, index, id, item){ //download callback. If not, the built-in download method is used to download the image locally
        console. Log ('download' , index)
    },
    onClose: function (){ //close callback, empty by default, where you can do some cleanup work, such as unblocking the return key on the mobile side
        console. Log ('off')
    },
    onFileClick: function (url, index, id, item) { //click on the callback of the non-image format file, where you can jump and so on
        window.open (' preview url')//to open the preview link
    },
    buttonTooltip: true, // Whether to display the button tooltip, default is true
    // the following is the language configuration, you can customize, the default is Chinese
    thumbnailTitleText: 'Overview' ,//thumbnail title, defaults to '缩略图'
    maxZoomText: 'It\'s already the maximum size' , // the maximum size prompt, defaults to '已放到最大'
    minZoomText: 'It\'s already the smallest', // the minimum prompt defaults to '已缩到最小'
    fitText: 'Fit to screen' , //fit to screen prompt, defaults to '适应屏幕'
    actualSizeText: 'Actual size' , //actual size prompt, defaults to '实际尺寸'
    zoomInText: ' Zoom in' , //zoom prompt, defaults to '放大'
    ZoomOutText: 'Zoom Out' , //zoom prompt, defaults to '缩小'
    rotateLeftText: 'Rotate left' , //rotate the prompt counterclockwise, default is '左转'
    rotateRightText: 'Rotate Right' , //rotate the prompt clockwise, default is '右转'
    downloadText: 'Download' , //download prompt, defaults to '下载'
    deleteText: 'Delete' , //delete prompt, defaults to '删除'
    nextText: 'next' , //next prompt, defaults to '上一张'
    prevText: 'Prev', //previous prompt, defaults to '下一张'
    firstText: "It's already the first one" , //first prompt, defaults to '已到第一个'
    lastText: "It's already the last one" //last prompt, defaults to '已到最后一个'
})
closedialog ()//This method can close the preview window, such as listening to the return key on the mobile side, in the case of the return key intercept, the return key can be called to close the preview window

```
