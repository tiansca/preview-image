// 样式
const imageViewer = {}
imageViewer.preViewStyle = {
    dialog: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,.8)',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'auto',
        zIndex: '99999999'
    },
    closeBtn: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        color: '#fff',
        fontSize: '40px',
        cursor: 'pointer',
        userSelect: 'none',
        zIndex: 2,
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    preBtn: {
        position: 'fixed',
        top: '50%',
        color: '#fff',
        fontSize: '40px',
        cursor: 'pointer',
        userSelect: 'none',
        zIndex: 2,
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '0vh',
        left: '0vw',
        overflow: 'hidden',
        display: 'flex',
        padding: 0,
        margin: 0,
        minWidth: '988px',
        minHeight: '400px'
    },
    contentWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 0,
        margin: 0
        // transition: 'transform .2s ease'
    },
    imageWrap: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
        position: 'relative',
        padding: 0,
        margin: 0
    },
    image: {
        // maxWidth: '100%',
        width: 'auto',
        transition: 'transform .2s ease, top 0.2s ease, left, 0.2s ease',
        position: 'relative',
        userSelect: 'none',
        margin: 0
    },
    buttonWrap: {
        position: 'fixed',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 26px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '20px',
        zIndex: 2
    },
    icon: {
        fontSize: '24px',
        margin: '0 4px',
        color: '#fff',
        cursor: 'pointer',
        userSelect: 'none',
        zIndex: 2,
        padding: 0,
        height: '28px',
        width: '28px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px'
    },
    index: {
        position: 'fixed',
        bottom: '70px',
        left: '50%',
        color: '#fff',
        fontSize: '14px',
        transform: 'translateX(-50%)',
        textShadow: '0 0px 3px rgba(0, 0, 0, .8)',
        lineHeight: '20px',
        pointerEvents: 'none'
    },
    toast: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#fff',
        zIndex: '99999999'
    },
    imageList: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    thumbnailBox: {
        position: 'fixed',
        display: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 0,
        zIndex: 3
    },
    thumbnailTitle: {
        color: '#fff',
        fontSize: '12px',
        lineHeight: '20px',
        padding: '0px 15px 0 4px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        margin: 0,
        userSelect: 'none',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textWrap: 'nowrap',
        boxSizing: 'border-box'
    },
    thumbnailContainer: {
        // width: '150px',
        // height: '120px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 0
    },
    thumbnailImageWrap: {
        position: 'relative',
        // border: '1px solid red',
        overflow: 'hidden',
        userSelect: 'none',
        padding: 0,
        margin: 0
    },
    thumbnailCurrView: {
        position: 'absolute',
        backgroundColor: 'rgba(22, 119, 255, 0.4)',
        border: '1px solid #1677FF',
        // borderRadius: '5%',
        // maxWidth: '100%',
        // maxHeight: '100%',
        boxSizing: 'border-box',
        userSelect: 'none',
        padding: 0,
        margin: 0
    },
    thumbnailImage: {
        userSelect: 'none',
        margin: 0
    },
    thumbnailCloseButton: {
        position: 'absolute',
        top: '0',
        right: '0',
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer',
        userSelect: 'none',
        zIndex: 2,
        lineHeight: '20px'
    },
    hotZone: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    fileIcon: {
        fontSize: '120px',
        marginBottom: '20px',
        display: 'flex'
    },
    fileName: {
        color: '#fff',
        fontSize: '16px',
        lineHeight: '22px',
        textAlign: 'center',
        fontWeight: 600,
        maxWidth: 'min(80vw, 800px)',
        // maxHeight: '110px',
        overflow: 'hidden',
        '-webkitBoxOrient': 'vertical',
        '-webkitLineClamp': 5,
        textOverflow: 'ellipsis',
        display: '-webkit-box'
    },
    loading: {
        width: '40px',
        height: '40px',
        fontSize: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 'calc(50% - 20px)',
        left: 'calc(50% - 20px)',
        zIndex: '4',
        position: 'fixed',
        color: '#fff',
        animation: 'previewRotating 2s linear infinite'
    }
}
// 图标名称
imageViewer.previewIconName = {
    close: 'close',
    prev: 'left-arrow',
    next: 'right-arrow',
    download: 'download',
    zoomIn: 'zoom-in',
    zoomOut: 'zoom-out',
    rotateLeft: 'left-rotate',
    rotateRight: 'right-rotate',
    fitScreen: 'fit',
    actual: 'actual',
    delete: 'delete',
    loading: 'loading'
}
// 获取图标名称
imageViewer.getIconName = function (name) {
    // 定义图标前缀
    const prefix = '#preview_img_icon';
    return imageViewer.previewIconName[name] ? `${prefix}-${imageViewer.previewIconName[name]}` : '';
}
// 截流函数
imageViewer.throttle = function(fn, wait) {
    let lastTime = 0;
    return function() {
        const now = new Date().getTime();
        if (now - lastTime > wait) {
            fn.apply(this, arguments);
            lastTime = now;
        }
    };
}
// 将驼峰字符串转换为短横线分隔的字符串
imageViewer.toLine = function (name) {
    return name.replace(/([A-Z])/g, "-$1").toLowerCase();
}
imageViewer.createElement = function (tagName, className, style, content) {
    const element = document.createElement(tagName);
    if (className) {
        element.setAttribute('class', className)
    }
    if (style) {
        for (let key in style) {
            element.style[imageViewer.toLine(key)] = style[key];
        }
    }
    if (content) {
        if (content.indexOf('#svg-icon#') !== -1) {
            // 插入svg图标
            const name = content.split(':')[1];
            const ns = 'http://www.w3.org/2000/svg';
            const svgElement = document.createElementNS(ns, 'svg')
            svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svgElement.setAttribute('width', '1em')
            svgElement.setAttribute('height', '1em')
            svgElement.setAttribute('fill', 'currentColor')
            svgElement.style.fontSize = '1em'
            svgElement.setAttribute('class', 'fonticon')
            const useElement = document.createElementNS(ns, 'use')
            useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${imageViewer.getIconName(name)}`)
            // useElement.setAttribute('width', '1em')
            // useElement.setAttribute('height', '1em')
            useElement.style.fontSize = '1em'
            svgElement.appendChild(useElement)
            element.appendChild(svgElement)
        }else if (content.indexOf('#svg-file-icon#') !== -1) {
            // 插入svg图标
            const name = content.split(':')[1];
            const ns = 'http://www.w3.org/2000/svg';
            const svgElement = document.createElementNS(ns, 'svg')
            svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svgElement.setAttribute('width', '1em')
            svgElement.setAttribute('height', '1em')
            svgElement.setAttribute('fill', 'currentColor')
            svgElement.style.fontSize = '1em'
            svgElement.setAttribute('class', 'fonticon')
            const useElement = document.createElementNS(ns, 'use')
            useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${imageViewer.getFileIcon(name)}`)
            // useElement.setAttribute('width', '1em')
            // useElement.setAttribute('height', '1em')
            useElement.style.fontSize = '1em'
            svgElement.appendChild(useElement)
            element.appendChild(svgElement)
        } else {
            element.innerHTML = content;
        }
    }
    return element;
}

imageViewer.createAnimation = function(element, type) {
    // 创建一个关键帧动画
    function createKeyframeAnimation(target, keyframes, options) {
        // 使用Web Animations API的element.animate方法
        return (target?.animate) ? target.animate(keyframes, options) : null;
    }

    // 定义关键帧
    let keyframes = [
        { opacity: 0, offset: 0 },
        { opacity: 1, offset: 1 }
    ];
    if (type === 'out') {
        keyframes = [
            { opacity: 1, offset: 0 },
            { opacity: 0, offset: 1 }
        ]
    }

    // 定义动画选项
    const options = {
        duration: 200, // 动画时长为1000毫秒
        iterations: 1, // 动画无限次数播放
        easing: 'ease-in-out' // 动画使用'缓进缓出'缓动函数
    };

    // 创建并播放动画
    const animation = createKeyframeAnimation(element, keyframes, options);
    animation?.play();
}

// toast方法
imageViewer.toast = function (fromText, time = 2000, toText, unit = '') {
    // 隐藏所有toast
    // document.querySelectorAll('.preview-image-toast').forEach(item => {
    //     document.body.removeChild(item)
    // })
    if (!fromText) {
        return
    }
    if (imageViewer.toast?.timer) {
        for (let i = 0; i < imageViewer.toast.timer.length; i++) {
            clearTimeout(imageViewer.toast.timer[i])
        }
    }
    imageViewer.toast.timer = []
    let toastElement = document.querySelector('.preview-image-toast')
    if (!toastElement) {
        toastElement =imageViewer.createElement('div', 'preview-image-toast', imageViewer.preViewStyle.toast);
    }
    document.body.appendChild(toastElement);
    if (toText) {
        // console.log(toText)
        if (typeof fromText === 'number' && typeof toText === 'number') {
            // 数字增长或减小
            // 计算差值
            let step = 1;
            let diff = Math.abs(toText - fromText);
            if (diff > 100) {
                step = 10;
                diff = Math.ceil(diff / step);
            }
            let selfTime = 300
            if (diff < 5) {
                selfTime = 100
            } else if (diff < 3) {
                selfTime = 50
            }
            for (let i = 0; i <= diff + 1; i++) {
                const timer = setTimeout(() => {
                    if (i <= diff) {
                        toastElement.innerText = `${Math.round(fromText) + i * step * (fromText > toText ? -1 : 1) }${unit}`
                    } else {
                        toastElement.innerText = `${Math.round(toText)}${unit}`
                        const timer = setTimeout(() => {
                            document.body.removeChild(toastElement);
                        }, time)
                        imageViewer.toast.timer.push(timer)
                    }
                }, selfTime / diff * i)
                imageViewer.toast.timer.push(timer)
            }
        } else {
            toastElement.innerText = `${fromText}${unit}`
            const timer = setTimeout(() => {
                toastElement.innerText = `${toText}${unit}`
                const timer = setTimeout(() => {
                    document.body.removeChild(toastElement);
                }, time)
                imageViewer.toast.timer.push(timer)
            }, time)
            imageViewer.toast.timer.push(timer)
        }
    } else {
        toastElement.innerText = `${fromText}${unit}`
        const timer = setTimeout(() => {
            document.body.removeChild(toastElement);
        }, time)
        imageViewer.toast.timer.push(timer)
    }
}

// 计算小数点位数
imageViewer.getDecimalLength = function (num) {
    if (!num.toString) {
        return 0
    }
    const decimalPart = num.toString().match(/\.(\d+)/);
    if (decimalPart !== null) {
        return decimalPart[1].length;
    }
    return 0
}
// 乘法，解决精度丢失问题
imageViewer.mul = function (num1, num2) {
    const decimalLength1 = imageViewer.getDecimalLength(num1);
    const decimalLength2 = imageViewer.getDecimalLength(num2);
    const multiple1 = Math.pow(10, decimalLength1);
    const multiple2 = Math.pow(10, decimalLength2);
    return (num1 * multiple1 * multiple2 * num2) / (multiple1 * multiple2);
}

// 除法，解决精度丢失问题
imageViewer.divide = function (num1, num2) {
    const decimalLength1 = imageViewer.getDecimalLength(num1);
    const decimalLength2 = imageViewer.getDecimalLength(num2);
    const multiple = Math.pow(10, Math.max(decimalLength1, decimalLength2));
    return (num1 * multiple) / (num2 * multiple);
}

// 监听target是否在container中完全可见
imageViewer.isVisible = function isVisible (container, target) {
    if (!container || !target) {
        return true;
    }
    const targetRect = target.getBoundingClientRect();
    const parentRect = container.getBoundingClientRect();
    return (
        targetRect.top - parentRect.top >= -0.1 &&
        parentRect.bottom - targetRect.bottom >= -0.1 &&
        targetRect.left - parentRect.left >= -0.1 &&
        parentRect.right - targetRect.right >= -0.1
    );
}
imageViewer.insertStyle = function(css) {
    const style = document.createElement('style');

    // 兼容不同浏览器的代码
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    // 将style元素插入到head中
    document.getElementsByTagName('head')[0].appendChild(style);
}

// 使用函数插入CSS样式，小图标tooltip样式
imageViewer.toolTipBackground = '#303133';
imageViewer.insertStyle(`
    .preview-operate-button {
        position: relative;
        white-space: nowrap;
    }
    .preview-operate-button.box-shadow:hover {
        box-shadow: 0 0 8px 0px rgba(255, 255, 255, .12)
    }
    .preview-operate-button.hover:hover{
        background: rgba(0, 0, 0, 0.4) !important;
    }
    .preview-operate-button.disabled{
        color: rgba(255, 255, 255, 0.4) !important;
        cursor: not-allowed !important;
    }
    .preview-operate-button.hover.disabled:hover{
        box-shadow: none !important;
        background: none !important
    }
    .preview-operate-button:before {
        content: attr(data-content);
        background: ${imageViewer.toolTipBackground};
        padding: 0 6px;
        display: none;
        position: absolute;
        bottom: calc(100% + 8px);
        white-space: nowrap;
        left: 50%;
        transform: translateX(-50%);
        line-height: 24px;
        font-size: 12px;
        color: #fff;
        border-radius: 4px;
        z-index: 3;
        box-shadow: 0 0 4px 0px rgba(255, 255, 255, 0.1);
        user-select: none;
    }
    .preview-operate-button.bottom-tooltip:before {
        top: calc(100% + 8px);
        bottom: auto
    }
    
    .preview-operate-button.preview-tooltip:hover:before{
        display: block;
    }
    .preview-operate-button:after {
        content: '';
        position: absolute;
        border-bottom-color: transparent !important;
        border-right-color: transparent !important;
        border-radius: 2px;
        display: none;
        width: 10px;
        height: 10px;
        border: 1px solid ${imageViewer.toolTipBackground};
        background: ${imageViewer.toolTipBackground};
        left: 50%;
        transform: rotate(45deg) translateX(-50%);
        bottom: 100%;
        z-index: 2;
        box-shadow: 0 0 4px 0px rgba(255, 255, 255, 0.15);
    }
    .preview-operate-button.bottom-tooltip:after{
        top: 100%;
        bottom: auto;
        transform: rotate(-45deg) translateX(-50%);
    }
    .preview-operate-button.preview-tooltip:hover:after{
        display: block;
    }
    @keyframes previewRotating{
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    svg[name^="fonticon"] text, svg[name^="fonticon"] text tspan{
        text-anchor: start;
        dominant-baseline: initial;
        font-size: 20px;
    }
    .preview-hot-zone:hover>.preview-file-name{
        text-decoration: underline;
    }
`);
imageViewer.isImg = function (extName) {
    if (extName === '_error_') {
        return false
    }
    if (!extName) {
        return true
    }
    if (imageViewer.fileType === 'auto') {
        const types = ['png', 'jpeg', 'jpg', 'gif', 'bmp']
        return types.indexOf(extName) > -1;
    } else {
        return true
    }


}
imageViewer.getFileIcon = function (extName) {
    const baseIconName = '#preview_img_color-'
    // pdf
    if (extName.toLowerCase() === 'pdf') {
        return `${baseIconName}pdf`
    }
    // word文档
    if(extName.toLowerCase() === 'doc' || extName.toLowerCase() === 'docx') {
        return `${baseIconName}word`
    }
    // excel文档
    if(extName.toLowerCase() === 'xls' || extName.toLowerCase() === 'xlsx') {
        return `${baseIconName}excel`
    }
    // powerpoint文档
    if(extName.toLowerCase() === 'ppt' || extName.toLowerCase() === 'pptx') {
        return `${baseIconName}ppt`
    }
    // 音频
    if(extName.toLowerCase() === 'mp3' || extName.toLowerCase() === 'wav') {
        return `${baseIconName}audio`
    }
    // 视频
    if(extName.toLowerCase() === 'mp4' || extName.toLowerCase() === 'avi' || extName.toLowerCase() === 'mov' || extName.toLowerCase() === 'mkv' || extName.toLowerCase() === 'flv' || extName.toLowerCase() === 'rmvb') {
        return `${baseIconName}video`
    }
    // 加载失败图标
    if (extName.toLowerCase() === '_error_') {
        return `#preview_img_icon-load-error`
    }
    return `${baseIconName}other` //preview_img_color-other
}

function previewImage (option) {
    /*option = {
        images: [],
        index: 0,
        loop: true
    }*/
    // 判断有无option
    if (!option) {
        console.error('参数option为空')
        return
    }
    // 判断option是否为字符串
    if (typeof option === 'string') {
        try {
            // 尝试解析为JSON字符串
            option = JSON.parse(option);
        } catch (e) {
            // 将option作为url
            option = {
                images: [option]
            }
        }
    }
    let index = option.index !== undefined ? Number(option.index) : 0;
    imageViewer.fileType = option.fileType || 'auto';
    const toolbar = option.toolbar !== undefined ? option.toolbar : true;
    const loop = option.loop !== undefined ? option.loop : true;
    const maxZoom = option.maxZoom || 4;
    const minZoom = option.minZoom || 0.25;
    let images = option.images ? [...option.images] : [];
    const imageNames = []
    const imageTypes = []
    const imageLoadFlag = []
    const imageIds = []
    let rawImages = []
    // 判断images是string[] 还是 object[]
    if (images.length > 0 && images[0].url) {
        rawImages = [...images]
        // 将string[] 转为object[]
        images = images.map((item, index) => {
            imageNames[index] = item.name
            imageTypes[index] = item.type
            imageIds[index] = item.id
            return item.url
        })
    }
    const thumbnail = option.thumbnail !== undefined ? option.thumbnail : true;
    const thumbnailDraggable = option.thumbnailDraggable !== undefined ? option.thumbnailDraggable : false;
    const showDownload = option.download !== undefined ? option.download : false;
    const showDelete = option.delete !== undefined ? option.delete : false;
    const downloadHandler = option.onDownload || function (index, url) {
        // 判断IE浏览器
        if (navigator?.msSaveBlob) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url); // 异步
            xhr.responseType = "blob"; // blob 类型
            xhr.send();
            xhr.onload = function () {
                if (xhr.status !== 200) {
                    downloadA()
                } else {
                    const blob = new Blob([xhr.response]);
                    navigator?.msSaveBlob(blob, url.split('/').pop());
                }
            }
            xhr.onerror = function () {
                downloadA()
            }
            return
        }
        function downloadA() {
            // 默认下载事件
            let aEl = document.createElement('a')
            aEl.href = url
            aEl.target = '_blank'
            aEl.download = url && url.split ? url.split('/').pop() : ''
            aEl.click()
            try {
                aEl.remove()
            } catch (e) {
                aEl = null
            }
        }
        downloadA()
    };
    const deleteHandler = option.onDelete || function (index, url, id, item) {
    };
    const closeHandler = option.onClose || null
    const fileClickHandler = option.onFileClick || null
    let oldIndex = index;
    let zoom = 1
    let oldZoom = 1
    let rotate = 0;
    let offsetX = 0;
    let offsetY = 0;
    let startX = 0;
    let startY = 0;
    let fullyVisible = false;
    let thumbnailClosed = false // 是否关闭小图
    let dialog =imageViewer.createElement("div", "preview-dialog", imageViewer.preViewStyle.dialog); // 创建弹窗元素
    let closeBtn =imageViewer.createElement("div", "close-btn preview-operate-button box-shadow hover", imageViewer.preViewStyle.closeBtn, "#svg-icon#:close"); // 关闭按钮
    let prevBtn =imageViewer.createElement("div", "prev-btn preview-operate-button box-shadow hover", {...imageViewer.preViewStyle.preBtn, transform: 'translateY(-50%)', left: '20px'}, "#svg-icon#:prev"); // 上一张按钮
    let nextBtn =imageViewer.createElement("div", "next-btn preview-operate-button box-shadow hover", {...imageViewer.preViewStyle.preBtn, right: '20px', transform: 'translateY(-50%)'}, "#svg-icon#:next"); // 下一张按钮
    const indexText =imageViewer.createElement("div", "preview-index", imageViewer.preViewStyle.index, `${index + 1}/${images.length}`); // 图片索引
    const thumbnailBox =imageViewer.createElement("div", "thumbnail-box", imageViewer.preViewStyle.thumbnailBox);
    const thumbnailTitle =imageViewer.createElement("div", "thumbnail-title", imageViewer.preViewStyle.thumbnailTitle);
    const thumbnailContainer =imageViewer.createElement("div", "thumbnail-container", imageViewer.preViewStyle.thumbnailContainer);
    const thumbnailImageWrap =imageViewer.createElement("div", "thumbnail-image-wrap", imageViewer.preViewStyle.thumbnailImageWrap);
    const thumbnailCurrView =imageViewer.createElement("div", "thumbnail-curr-view", imageViewer.preViewStyle.thumbnailCurrView);
    const thumbnailImage =imageViewer.createElement("img", "thumbnail-image", imageViewer.preViewStyle.thumbnailImage);
    const thumbnailCloseButton =imageViewer.createElement("div", "thumbnail-close-button", imageViewer.preViewStyle.thumbnailCloseButton, "#svg-icon#:close");
    let thumbnailZoom = 1
    const thumbnailWidth = 100
    const thumbnailHeight = 80
    // const thumbnailWidth = 120
    // const thumbnailHeight = 100
    let thumbnailBoxRight = 10
    let thumbnailBoxBottom = 10
    let thumbnailBoxStartX = 0
    let thumbnailBoxStartY = 0
    const buttonTooltip = option.buttonTooltip !== undefined ? option.buttonTooltip : true;
    /* 获取按钮和提示文本 */
    // const maxZoomText = option.maxZoomText || '已放到最大';
    // const minZoomText = option.minZoomText || '已缩到最小';
    // const fitText = option.fitText || '适应屏幕';
    // const actualSizeText = option.actualSizeText || '原始尺寸';
    // const zoomInText = option.zoomInText || '放大';
    // const zoomOutText = option.zoomOutText || '缩小';
    // const rotateLeftText = option.rotateLeftText || '左旋转';
    // const rotateRightText = option.rotateRightText || '右旋转';
    // const downloadText = option.downloadText || '下载';
    // const deleteText = option.deleteText || '删除';
    // const nextText = option.nextText || '下一张';
    // const prevText = option.prevText || '上一张';
    // const thumbnailTitleText = option.thumbnailTitleText || '概览图';
    // const firstOneText = option.firstText || '已到第一个';
    // const lastOneText = option.lastText || '已到最后一个';
    const maxZoomText = option.maxZoomText || '';
    const minZoomText = option.minZoomText || '';
    const fitText = option.fitText || '';
    const actualSizeText = option.actualSizeText || '';
    const zoomInText = option.zoomInText || '';
    const zoomOutText = option.zoomOutText || '';
    const rotateLeftText = option.rotateLeftText || '';
    const rotateRightText = option.rotateRightText || '';
    const downloadText = option.downloadText || '';
    const deleteText = option.deleteText || '';
    const nextText = option.nextText || '';
    const prevText = option.prevText || '';
    const thumbnailTitleText = option.thumbnailTitleText || '概览图';
    const firstOneText = option.firstText || '';
    const lastOneText = option.lastText || '';
    if (buttonTooltip) {
        prevBtn.setAttribute('data-content', prevText)
        nextBtn.setAttribute('data-content', nextText)
    }
    thumbnailTitle.innerText = thumbnailTitleText
    thumbnailTitle.setAttribute('title', thumbnailTitleText)

    if (!images.length) {
        console.error('图片列表不能为空')
        return
    }
    /* 交互相关的方法 */
    // 关闭弹窗
    const bodyHeight = document.documentElement.style.height || ''
    const bodyOverflow = document.documentElement.style.overflow || ''
    const bodyTop = document.documentElement.getBoundingClientRect().top
    function closeDialog () {
        setTimeout(function (){
            document.body.removeChild(dialog)
            window.removeEventListener('resize', resizeHandler)
            window.removeEventListener('keydown', keydownHandler)
            window.removeEventListener('wheel', scrollHandler)
            window.removeEventListener('mousewheel', scrollHandler)
            window.removeEventListener('mousemove', thumbnailMove);
            window.removeEventListener('mouseup', thumbnailMoveEnd);
            window.removeEventListener('mousemove', moveImageThrottle)
            window.removeEventListener('mouseup', moveImageEnd)
            dialog = null
            imageViewer.createAnimation(dialog, 'out')
            document.documentElement.style.overflow = bodyOverflow
            document.documentElement.style.height = bodyHeight;
            if (bodyTop) {
                window.scrollTo(0, bodyTop * -1)
            }
        }, 150)
        // 执行环比回调
        if (closeHandler && typeof closeHandler === 'function') {
            closeHandler()
        }
    }
    // 禁用滚动条
    function disableScroll () {
        document.documentElement.style.overflow = 'hidden'
        document.documentElement.style.height = '100vh'
        if (bodyTop) {
            document.documentElement.scrollTop = bodyTop * -1
        }
    }
    disableScroll()
    // 设置图片偏移量
    function setImageOffset () {
        const containerWidth = content.offsetWidth;
        contentWrapper.style.transform = `translateX(${-index * containerWidth}px)`;
        // 判断按钮状态
        if (index === 0 && !loop) {
            prevBtn.style.opacity = '0.6'
        } else {
            prevBtn.style.opacity = '1'
        }
        if (index === images.length - 1 && !loop) {
            nextBtn.style.opacity = '0.6'
        } else {
            nextBtn.style.opacity = '1'
        }
        zoom = 1;
        oldZoom = 1
        rotate = 0;
        setTimeout(() => {
            if (oldIndex !== index) {
                // 重置上一张图片缩放和旋转
                setImageTransform(oldIndex)
                // 重置上一张图片位置
                resetImagePosition(oldIndex)
            }
        }, 100)
        // 更新索引
        updateIndex()
        // 设置适应窗口按钮
        // originalSizeBtnReset()
    }
    // 设置图片缩放、旋转，放大缩小会触发
    function setImageTransform (i, reset = true) {
        const targetImageIndex = i !== undefined ? i : index;
        if (!imageViewer.isImg(imageTypes[targetImageIndex])) {
            return;
        }
        // 获取当前的图片元素
        const imageElement = contentWrapper.children[targetImageIndex].querySelector('img');
        imageElement.style.transform = `scale3d(${zoom}, ${zoom}, ${zoom}) rotate(${rotate}deg)`;
        if ((offsetY || offsetX) && zoom !== oldZoom) {
            offsetY = offsetY / oldZoom * zoom
            offsetX = offsetX / oldZoom * zoom
            imageElement.style.top = offsetY + 'px';
            imageElement.style.left = offsetX + 'px';
        }
        // 监听图片是否全部可见
        setTimeout(function () {
            const visible = imageViewer.isVisible(content, contentWrapper.children[index].querySelector('img'))
            if (visible) {
                fullyVisible = true
                hideSmallImg()
            } else {
                fullyVisible = false
                showSmallImg()
            }
            if (!reset) {
                if (thumbnail) {
                    updateThumbnailImg()
                }
                return;
            }
            const beyondLimit = limitDragRange()
            if (beyondLimit && thumbnail) {
                setTimeout(function () {
                    updateThumbnailImg()
                    // 再次检查是否全部可见
                    const visible = imageViewer.isVisible(content, contentWrapper.children[index].querySelector('img'))
                    if (visible) {
                        fullyVisible = true
                        hideSmallImg()
                    }
                }, 210)
            } else {
                updateThumbnailImg()
            }
        }, 210)
    }
    // 放大
    function zoomIn () {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        if (!imageLoadFlag[index]) {
            return;
        }
        if (zoom >= maxZoom) {
            imageViewer.toast(maxZoomText)
            return
        }
        let temZoom = zoom;
        // if (zoom <= 0.03) {
        //     temZoom += 0.01
        // } else if (zoom < 0.05) {
        //     temZoom = 0.05
        // } else if (zoom <= 0.3) {
        //     temZoom += 0.05
        // } else if (zoom <= 0.45) {
        //     temZoom = imageViewer.mul(zoom, 1.2)
        // } else {
        //     temZoom = imageViewer.mul(zoom, 1.15);
        // }
        temZoom = imageViewer.mul(zoom, 1.25);
        if (temZoom > maxZoom) {
            temZoom = maxZoom
        }
        if (temZoom === zoom) {
            return;
        }
        zoomFn(temZoom)
    }
    // 缩小
    function zoomOut () {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        if (!imageLoadFlag[index]) {
            return;
        }
        if (zoom <= minZoom + 0.001) {
            imageViewer.toast(minZoomText)
            return
        }
        let temZoom = zoom;
        // if (zoom <= 0.03) {
        //     temZoom -= 0.01
        // } else if (zoom <= 0.05) {
        //     temZoom = 0.03
        // } else if (zoom <= 0.3) {
        //     temZoom = zoom.toFixed(2) - 0.05
        // } else if (zoom <= 0.45) {
        //     temZoom = imageViewer.divide(zoom, 1.2)
        // } else {
        //     temZoom = imageViewer.divide(zoom, 1.15);
        // }
        temZoom = imageViewer.divide(zoom, 1.25);
        oldZoom = zoom;
        if (temZoom < minZoom) {
            temZoom = minZoom;
        }
        if (temZoom === zoom) {
            return;
        }
        zoomFn(temZoom)
    }
    const zoomFn = function (n, reset = true) {
        oldZoom = zoom;
        zoom = n;
        setImageTransform(index, reset)
        imageViewer.toast(oldZoom * 100, 500, zoom * 100, '%')
        fitScreenBtnReset()
    }
    // 左旋转
    function rotateLeft () {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        if (!imageLoadFlag[index]) {
            return;
        }
        rotate -= 90;
        setImageTransform()
    }
    // 右旋转
    function rotateRight () {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        if (!imageLoadFlag[index]) {
            return;
        }
        rotate += 90;
        setImageTransform()
    }
    // 限制拖动范围
    function limitDragRange (e) {
        let flag = false
        const imageElement = contentWrapper.children[index].querySelector('img');
        if (!imageElement) {
            return
        }
        // 获取上下左右边距
        const imageSize = imageElement.getBoundingClientRect()
        const contentSize = content.getBoundingClientRect()
        // 左右边距大于0
        if (contentSize.left < imageSize.left || contentSize.right > imageSize.right) {
            const distance = contentSize.left < imageSize.left ? imageSize.left - contentSize.left : imageSize.right - contentSize.right
            if (contentSize.width < imageSize.width) {
                offsetX -= distance
            } else {
                offsetX = 0
            }
            flag = true
            imageElement.style.left = `${offsetX}px`
        }
        // 上下边距大于0
        if (contentSize.top < imageSize.top || contentSize.bottom > imageSize.bottom) {
            const distance = contentSize.top < imageSize.top ? imageSize.top - contentSize.top : imageSize.bottom - contentSize.bottom
            if (contentSize.height < imageSize.height) {
                offsetY -= distance
            } else {
                offsetY = 0
            }
            flag = true
            imageElement.style.top = `${offsetY}px`
        }
        return flag
    }
    // 移动图片
    function moveImageStart (e, _scale = 1, source = '') {
        if (fullyVisible || (thumbnailDragging && source !== 'thumbnail')) {
            return
        }
        const imageElement = contentWrapper.children[index].querySelector('img');
        if (navigator.userAgent.toLowerCase().indexOf('webkit') > -1) {
            imageElement.style.cursor = '-webkit-grabbing';
        } else {
            imageElement.style.cursor = 'move';
        }
        imageElement.setAttribute('dragging', 'true')
        startX = (e.clientX !== undefined ? e.clientX : e.pageX) / _scale - offsetX;
        startY = (e.clientY !== undefined ? e.clientY : e.pageY) / _scale - offsetY;
        // 关闭top、left动画
        imageElement.style.transition = 'transform .2s ease'
        // 阻止冒泡，阻止默认行为
        if (e.preventDefault && e.stopPropagation) {
            e.preventDefault()
            e.stopPropagation()
        }
    }
    function moveImage (e, _scale = 1, source = '') {
        if (!startX || !startY || fullyVisible || (thumbnailDragging && source !== 'thumbnail')) {
            return
        }
        const imageElement = contentWrapper.children[index].querySelector('img');
        offsetX = (e.clientX !== undefined ? e.clientX : e.pageX) / _scale - startX;
        offsetY = (e.clientY !== undefined ? e.clientY : e.pageY) / _scale - startY;
        imageElement.style.left = `${offsetX}px`
        imageElement.style.top = `${offsetY}px`
        limitDragRange()
        // 更新缩略图位置
        if (thumbnail) {
            updateThumbnailImg()
        }
        // 阻止冒泡，阻止默认行为
        if (e.preventDefault && e.stopPropagation) {
            e.preventDefault()
            e.stopPropagation()
        }
    }
    function moveImageEnd (e, _scale = 1) {
        // if (!imageViewer.isImg(imageTypes[index])) {
        //     return;
        // }
        // if (_scale < 0) {
        //     moveImage(e, _scale)
        // }
        startX = 0;
        startY = 0;
        const imageElement = contentWrapper.children[index].querySelector('img');
        if (!imageElement) {
            return
        }
        if (navigator.userAgent.toLowerCase().indexOf('webkit') > -1 && !fullyVisible) {
            imageElement.style.cursor = '-webkit-grab';
        } else if(!fullyVisible) {
            imageElement.style.cursor = 'move';
        }
        // 开启top、left动画
        imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left 0.2s ease'

    }
    // 重置图片位置
    function resetImagePosition (i) {
        const targetImageIndex = i !== undefined ? i : index;
        if (!imageViewer.isImg(imageTypes[targetImageIndex])) {
            return;
        }
        const imageElement = contentWrapper.children[targetImageIndex].querySelector('img');
        offsetY = 0
        offsetX = 0
        imageElement.style.left = offsetX
        imageElement.style.top = offsetY
    }
    // 更新索引
    function updateIndex () {
        indexText.innerText = `${index + 1}/${images.length}`
    }
    // 设置content宽度
    function setContentWidth () {
        const containerWidth = content.offsetWidth;
        for (let i = 0; i < contentWrapper.children.length; i++) {
            contentWrapper.children[i].style.width = `${containerWidth}px`
        }
    }
    // 适应屏幕
    function fitScreen () {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        const imageElement = contentWrapper.children[index].querySelector('img');
        // 获取图片的宽度和高度，若旋转90度，则宽高对调
        const imageWidth = imageElement.naturalWidth;
        const imageHeight = imageElement.naturalHeight;
        if (!imageWidth || !imageHeight) {
            return
        }
        // 获取容器的宽度和高度
        const containerWidth = content.offsetWidth;
        const containerHeight = content.offsetHeight;
        // 计算图片的缩放比例
        const scaleX = containerWidth / ((rotate % 180) ? imageHeight : imageWidth);
        const scaleY = containerHeight / ((rotate % 180) ? imageWidth : imageHeight);
        // 根据缩放计算图片宽高
        const minScale = Math.min(scaleX, scaleY);
        const width = imageWidth * minScale;
        imageElement.style.width = `${width}px`;
        resetImagePosition()
    }
    // 将图片显示为实际大小
    function naturalSize () {
        const imageElement = contentWrapper.children[index].querySelector('img');
        // 获取图片的宽度和高度
        const imageWidth = imageElement.naturalWidth;
        imageElement.style.width = `${imageWidth}px`;
    }
    // 将按钮置为适应屏幕
    function fitScreenBtnReset () {
        fitScreenBtn.querySelector('svg use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageViewer.getIconName('fitScreen'))
        fitScreenBtn.setAttribute('type', 'fit')
        if (buttonTooltip) {
            fitScreenBtn.setAttribute('data-content', fitText)
            if (fitText) {
                fitScreenBtn.classList.add('preview-tooltip')
            }
        }
    }
    // 将按钮设置为原始大小
    function originalSizeBtnReset () {
        fitScreenBtn.querySelector('svg use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageViewer.getIconName('actual'))
        fitScreenBtn.setAttribute('type', 'natural')
        if (buttonTooltip) {
            fitScreenBtn.setAttribute('data-content', actualSizeText)
            if (actualSizeText) {
                fitScreenBtn.classList.add('preview-tooltip')
            }
        }
    }
    // 切换适应屏幕、原始大小
    function fitScreenOrOriginal (type) {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        let typeAttr = ''
        // 获取当前type
        if (typeof type === 'string') {
            typeAttr = type
        } else {
            typeAttr = fitScreenBtn.getAttribute('type')
        }
        if (typeAttr === 'fit') {
            originalSizeBtnReset()
            // 适应窗口
            fitScreen()
        } else {
            fitScreenBtnReset()
            // 原始大小
            naturalSize()
        }
        zoom = 1
        setImageTransform()
    }
    // 判断图片大小，选择默认展示方式，如果图片大小小于容器，则按照实际尺寸展示，否则适应屏幕
    function imageSizeCheck () {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        const imageElement = contentWrapper.children[index].querySelector('img');
        // 获取图片的宽度和高度，若旋转90度，则宽高对调
        const imageWidth = imageElement.naturalWidth;
        const imageHeight = imageElement.naturalHeight;
        if (!imageWidth || !imageHeight) {
            return
        }
        // 关闭动画
        imageElement.style.transition = 'none'
        // 获取容器的宽度和高度
        const containerWidth = content.offsetWidth;
        const containerHeight = content.offsetHeight;
        // 计算图片的缩放比例
        const scaleX = containerWidth / ((rotate % 180) ? imageHeight : imageWidth);
        const scaleY = containerHeight / ((rotate % 180) ? imageWidth : imageHeight);
        // 根据缩放计算图片宽高
        const minScale = Math.min(scaleX, scaleY);
        if (minScale < 1) {
            fitScreenOrOriginal('fit')
        } else {
            fitScreenOrOriginal('natural')
        }
        setTimeout(function (){
            imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left 0.2s ease'
        })
    }
    // 图片加载完毕
    function imageLoaded (e) {
        const imgWrapElement = e.target?.parentNode
        const i = Array.prototype.indexOf.call(imgWrapElement.parentNode.children, imgWrapElement);
        imageLoadFlag[i] = true
        if (i === Number(index)){
            imageSizeCheck()
            hideLoading()
        }
    }
    // 图片加载失败
    function imgErrorHandler (e) {
        const imgWrapElement = e.target?.parentNode
        const i = Array.prototype.indexOf.call(imgWrapElement.parentNode.children, imgWrapElement);
        if (i === -1) {
            return
        }
        imageLoadFlag[i] = false
        imageTypes[i] = '_error_'
        imageNames[i] = images[i]
        const errorWrap = contentWrapper.children[i]
        errorWrap.innerHTML = ''
        const wrap = imageViewer.createElement("div", "preview-img-wrapper", {...imageViewer.preViewStyle.imageWrap, flexDirection: 'column' });
        const icon = imageViewer.createElement("div", "preview-icon", {...imageViewer.preViewStyle.fileIcon, color: 'rgba(255, 255, 255, 0.8)', fontSize: '100px'}, `#svg-file-icon#:${imageTypes[i]}`);
        const fileName = imageViewer.createElement("div", "preview-file-name", imageViewer.preViewStyle.fileName, imageNames[i])
        wrap.appendChild(icon)
        wrap.appendChild(fileName)
        errorWrap.appendChild(wrap);
        // 禁用按钮
        updateBtnStatus()
        if (i === index) {
            hideLoading()
        }
    }
    /* 小图预览相关 */
    // 小图显隐
    function showSmallImg () {
        if (thumbnailClosed) {
            return
        }
        thumbnailBox.style.display = 'block'
        const imageElement = contentWrapper.children[index].querySelector('img');
        // 鼠标样式
        if (navigator.userAgent.toLowerCase().indexOf('webkit') > -1) {
            imageElement.style.cursor = '-webkit-grab'
        } else {
            imageElement.style.cursor = 'move'
        }
    }
    function hideSmallImg () {
        thumbnailBox.style.display = 'none'
        const imageElement = contentWrapper.children[index].querySelector('img');
        imageElement && (imageElement.style.cursor = 'default')
    }
    // 更新预览图
    function updateThumbnailImg() {
        const thumbnailImageSrc = thumbnailImage.getAttribute('src')
        if (thumbnailImageSrc !== images[index]) {
            thumbnailImage.src = images[index]
        }
        const currImg = contentWrapper.children[index].querySelector('img');
        if (!currImg) {
            return
        }
        const currImgSize = currImg.getBoundingClientRect();
        // 计算小图的尺寸
        // const widthScale =  thumbnailContainer.offsetWidth / (rotate % 180 ? currImgSize.height :currImgSize.width);
        // const heightScale =  thumbnailContainer.offsetHeight / (rotate % 180 ? currImgSize.width :currImgSize.height);
        const widthScale =  thumbnailContainer.offsetWidth / currImgSize.width;
        const heightScale =  thumbnailContainer.offsetHeight / currImgSize.height;
        // 取小图尺寸最小值
        const scale = thumbnailZoom = Math.min(widthScale, heightScale);
        // 旋转角度
        thumbnailImage.style.transform = `rotate(${rotate}deg)`
        if (rotate % 180) {
            thumbnailImage.style.height = currImgSize.width * scale + 'px';
            thumbnailImage.style.width = currImgSize.height * scale + 'px';
            thumbnailImage.style.transformOrigin = `left top`
            if ((rotate > 0 && (rotate + 90) / 180 % 2) || (rotate < 0 && !((rotate - 90) / 180 % 2))) {
                // 奇数
                thumbnailImage.style.transform = `rotate(${rotate}deg) translateY(-100%)`
            } else {
                // 偶数
                thumbnailImage.style.transform = `rotate(${rotate}deg) translateX(-100%)`
            }
        } else {
            thumbnailImage.style.width = currImgSize.width * scale + 'px';
            thumbnailImage.style.height = currImgSize.height * scale + 'px';
            thumbnailImage.style.transformOrigin = `center`
        }
        // 设置小图容器的宽高
        thumbnailImageWrap.style.width = currImgSize.width * scale + 'px';
        thumbnailImageWrap.style.height = currImgSize.height * scale + 'px';
        updateThumbnailCurrentView(scale)
    }
    // 更新可视区域框
    function updateThumbnailCurrentView (scale) {
        // scale是小图的缩放比例
        const contentSize = content.getBoundingClientRect(); // content的位置信息
        const imageSize = contentWrapper.children[index]?.querySelector('img')?.getBoundingClientRect();
        // content相对于图片的偏移量
        let offsetLeft = (contentSize.left - imageSize.left) * scale;
        let offsetTop = (contentSize.top - imageSize.top) * scale;
        let width = contentSize.width * scale;
        let height = contentSize.height * scale;
        // content宽度大于图片宽度，则设置可视区域宽度为图片宽度
        if (contentSize.width > imageSize.width) {
            width = imageSize.width * scale;
            offsetLeft = 0
        }
        if (contentSize.height > imageSize.height) {
            height = imageSize.height * scale;
            offsetTop = 0
        }
        thumbnailCurrView.style.width = width + 'px';
        thumbnailCurrView.style.height = height + 'px';
        thumbnailCurrView.style.left = offsetLeft + 'px';
        thumbnailCurrView.style.top = offsetTop + 'px';
    }
    // 小图移动开始
    let thumbnailMoveStartX = 0;
    let thumbnailMoveStartY = 0;
    let thumbnailDragging = false;
    function thumbnailMoveStart (e) {
        thumbnailMoveStartX = e.clientX !== undefined ? e.clientX : e.pageX
        thumbnailMoveStartY = e.clientY !== undefined ? e.clientY : e.pageY
        thumbnailDragging = true
        if (e.target === thumbnailCurrView) {
            moveImageStart(e, -thumbnailZoom, 'thumbnail')
        } else {
            // 获取小图可视框的位置信息, 将视图中心移动到点击位置
            const currViewRect = thumbnailCurrView.getBoundingClientRect();
            moveImageStart({...e, clientX: currViewRect.left + currViewRect.width / 2, clientY: currViewRect.top + currViewRect.height / 2,}, -thumbnailZoom, 'thumbnail')
            moveImage(e, -thumbnailZoom, 'thumbnail')
        }
        e.preventDefault()
        e.stopPropagation()
    }
    // 小图移动中
    const thumbnailMove = imageViewer.throttle(function (e) {
        if (!thumbnailMoveStartX || !thumbnailMoveStartY || !thumbnailDragging) {
            return
        }
        moveImage(e, -thumbnailZoom, 'thumbnail')
    }, 40)
    // 小图移动结束
    function thumbnailMoveEnd (e) {
        thumbnailDragging = false
        thumbnailMoveStartX = 0
        thumbnailMoveStartY = 0
        moveImageEnd(e)
    }

    // 设置缩略图组件相对窗口位置
    function setThumbnailBoxPosition () {
        thumbnailBox.style.right = thumbnailBoxRight + 'px'
        thumbnailBox.style.bottom = thumbnailBoxBottom + 'px'
    }
    // 缩略图整体移动开始
    function thumbnailBoxMoveStart (e) {
        // 鼠标按下时，记录鼠标位置
        thumbnailBoxStartX = (e.clientX !== undefined ? e.clientX : e.pageX) + thumbnailBoxRight;
        thumbnailBoxStartY = (e.clientY !== undefined ? e.clientY : e.pageY) + thumbnailBoxBottom;
        // 阻止默认事件、阻止冒泡
        e.preventDefault()
        e.stopPropagation()
    }
    function thumbnailBoxMove (e) {
        if (!thumbnailBoxStartX || !thumbnailBoxStartY) {
            return
        }
        // 鼠标移动时，计算鼠标位置与按下位置的差值
        thumbnailBoxRight =    thumbnailBoxStartX - (e.clientX !== undefined ? e.clientX : e.pageX);
        thumbnailBoxBottom =   thumbnailBoxStartY - (e.clientY !== undefined ? e.clientY : e.pageY);
        // todo位置限制
        setThumbnailBoxPosition()
    }
    function thumbnailBoxMoveEnd (e) {
        thumbnailBoxStartX = 0;
        thumbnailBoxStartY = 0;
    }

    // 切换按钮可用状态
    function updateBtnStatus () {
        const buttonArr = [rotateLeftBtn, rotateRightBtn, zoomInBtn, zoomOutBtn, fitScreenBtn]
        if (imageViewer.isImg(imageTypes[index])) {
            // 图片
            buttonArr.forEach(item => {
                item.classList.remove('disabled')
            })
        } else {
            // 不是图片
            buttonArr.forEach(item => {
                item.classList.add('disabled')
            })
        }
    }

    // loading动画
    const showLoading = function (show = true) {
        hideLoading()
        const loadingElement = imageViewer.createElement('div', 'preview-image-loading', imageViewer.preViewStyle.loading, '#svg-icon#:loading');
        content.appendChild(loadingElement)
    }

    // 关闭动画
    const hideLoading = function () {
        const loadingElement = content.querySelector('.preview-image-loading')
        if (loadingElement) {
            content.removeChild(loadingElement)
        }
    }

    /* 创建dom结构  */
    // 插入预览图片的容器，并生成预览图片的元素
    // 创建关闭按钮
    closeBtn.onclick = closeDialog
    dialog.appendChild(closeBtn);
    // 创建上一张、下一张按钮
    prevBtn.onclick = function () {
        if (index === 0) {
            if (loop) {
                oldIndex = index;
                index = images.length - 1
            } else {
                imageViewer.toast(firstOneText)
                return
            }
        } else {
            oldIndex = index--;
        }
        // 获取imageWrapper的宽度
        setImageOffset()
        // 图片自适应
        imageSizeCheck()
        // 开放小图
        thumbnailClosed = false
        // 按钮状态
        updateBtnStatus()
        if (!imageLoadFlag[index] && imageViewer.isImg(imageTypes[index])) {
            showLoading()
        }
    }
    nextBtn.onclick = function () {
        if (index === images.length - 1) {
            if (loop) {
                oldIndex = index;
                index = 0
            } else {
                imageViewer.toast(lastOneText)
                return
            }
        } else {
            oldIndex = index++;
        }
        // 获取imageWrapper的宽度
        setImageOffset(index, contentWrapper, content)
        // 图片自适应
        imageSizeCheck()
        // 开放小图
        thumbnailClosed = false
        // 按钮状态
        updateBtnStatus()
        if (!imageLoadFlag[index] && imageViewer.isImg(imageTypes[index])) {
            showLoading()
        }
    }
    if (images.length > 1) {
        dialog.appendChild(prevBtn);
        dialog.appendChild(nextBtn);
    }
    /* 创建内容区域  */
    const content =imageViewer.createElement("div", "preview-content", imageViewer.preViewStyle.content );
    // 创建preview-content-wrapper
    const contentWrapper =imageViewer.createElement("div", "preview-content-wrapper", imageViewer.preViewStyle.contentWrapper);
    // 绑定鼠标事件
    const moveImageThrottle = imageViewer.throttle(moveImage, 40);
    window.addEventListener('mousemove', moveImageThrottle)
    window.addEventListener('mouseup', moveImageEnd)
    for (let i = 0; i < images.length; i++) {
        // 获取图片扩展名
        let imageUrl = images[i];
        // const isIe = !!window.ActiveXObject || "ActiveXObject" in window
        let ext = imageTypes[i]
        if (!ext) {
            // 舍弃?后面的值
            imageUrl = imageUrl.split('?')[0];
            // 舍弃#后面的值
            imageUrl = imageUrl.split('#')[0];
            if (!imageNames[i]) {
                imageNames[i] = imageUrl.split('/').pop()
            }
            ext = imageUrl.split('.').pop();
            if (imageUrl.split('.').length <= 1) {
                ext = ''
            }
            imageTypes[i] = ext;
        }
        if (imageViewer.isImg(ext)) {
            // 插入图片
            const wrap =imageViewer.createElement("div", "preview-img-wrapper", imageViewer.preViewStyle.imageWrap);
            const img =imageViewer.createElement("img", "preview-img", imageViewer.preViewStyle.image);
            img.setAttribute('loading', 'lazy')
            img.src = images[i];
            img.onmousedown = moveImageStart;
            // content.onmouseleave = moveImageEnd;
            wrap.appendChild(img)
            contentWrapper.appendChild(wrap);
            // 加载成功后执行fit方法
            img.onload = (e) => {
                imageLoaded(e)
            }
            img.onerror = (e) => {
                imgErrorHandler(e)
            }
        } else {
            // 展示图标和名称
            const wrap = imageViewer.createElement("div", "preview-img-wrapper", {...imageViewer.preViewStyle.imageWrap, flexDirection: 'column' });
            const hotZone = imageViewer.createElement("div", "preview-hot-zone active", imageViewer.preViewStyle.hotZone);
            const icon = imageViewer.createElement("div", "preview-icon", imageViewer.preViewStyle.fileIcon, `#svg-file-icon#:${ext}`);
            const fileName = imageViewer.createElement("div", "preview-file-name", imageViewer.preViewStyle.fileName, imageNames[i])
            if (fileClickHandler) {
                hotZone.addEventListener('click', () => {
                    fileClickHandler(index, images[index], imageIds[index], rawImages[index])
                })
            }
            // 支持文件预览
            const types = ["txt", "tif", "tiff", "xls", "xlsx", "ppt", "pptx", "pdf", "doc", "docx"]
            if (types.indexOf(ext) !== -1) {
                hotZone.style.cursor = 'pointer'
                hotZone.classList.add('active')
            }
            hotZone.appendChild(icon)
            hotZone.appendChild(fileName)
            wrap.appendChild(hotZone)
            contentWrapper.appendChild(wrap);
        }

    }
    content.appendChild(contentWrapper);
    dialog.appendChild(content);
    // 创建操作按钮：放大、缩小、左旋转、右旋转、下载、删除
    const buttonWrap =imageViewer.createElement("div", "preview-button-wrap", imageViewer.preViewStyle.buttonWrap);
    const rotateRightBtn =imageViewer.createElement("div", "rotate-right-btn preview-operate-button hover box-shadow", imageViewer.preViewStyle.icon, "#svg-icon#:rotateRight");
    const rotateLeftBtn =imageViewer.createElement("div", "rotate-left-btn preview-operate-button hover box-shadow", imageViewer.preViewStyle.icon, "#svg-icon#:rotateLeft");
    const zoomInBtn =imageViewer.createElement("div", "zoom-in-btn preview-operate-button hover box-shadow", imageViewer.preViewStyle.icon, "#svg-icon#:zoomIn");
    const zoomOutBtn =imageViewer.createElement("div", "zoom-out-btn preview-operate-button hover box-shadow", imageViewer.preViewStyle.icon, '#svg-icon#:zoomOut');
    const fitScreenBtn =imageViewer.createElement("div", "fit-screen-btn preview-operate-button hover box-shadow", imageViewer.preViewStyle.icon, '#svg-icon#:actual');
    const downloadBtn =imageViewer.createElement("div", "download-btn preview-operate-button hover box-shadow", imageViewer.preViewStyle.icon, "#svg-icon#:download");
    const deleteBtn =imageViewer.createElement("div", "delete-btn preview-operate-button hover box-shadow", imageViewer.preViewStyle.icon, "#svg-icon#:delete");
    if (buttonTooltip) {
        zoomInBtn.setAttribute('data-content', zoomInText)
        zoomOutBtn.setAttribute('data-content', zoomOutText)
        rotateLeftBtn.setAttribute('data-content', rotateLeftText)
        rotateRightBtn.setAttribute('data-content', rotateRightText)
        downloadBtn.setAttribute('data-content', downloadText)
        deleteBtn.setAttribute('data-content', deleteText)
    }

    // 绑定事件
    zoomInBtn.onclick = zoomIn;
    zoomOutBtn.onclick = zoomOut;
    rotateLeftBtn.onclick = rotateLeft;
    rotateRightBtn.onclick = rotateRight;
    fitScreenBtn.onclick = fitScreenOrOriginal
    // 添加到dom中
    buttonWrap.appendChild(rotateLeftBtn);
    buttonWrap.appendChild(rotateRightBtn);
    buttonWrap.appendChild(zoomInBtn);
    buttonWrap.appendChild(zoomOutBtn);
    buttonWrap.appendChild(fitScreenBtn)

    if (showDownload) {
        buttonWrap.appendChild(downloadBtn);
        downloadBtn.onclick = function () {
            downloadHandler(index, images[index], imageIds[index], rawImages[index])
        }
    }
    if (showDelete) {
        buttonWrap.appendChild(deleteBtn);
        deleteBtn.onclick = async function () {
            try {
                await deleteHandler(index, images[index], imageIds[index], rawImages[index])
                // 删除当前图片
                const currImageElement = contentWrapper.children[index]
                if (currImageElement) {
                    currImageElement.parentNode.removeChild(currImageElement)
                }
                if (images.length === 1) {
                    closeDialog()
                } else {
                    images.splice(index, 1)
                    imageTypes.splice(index, 1)
                    imageNames.splice(index, 1)
                    imageIds.splice(index, 1)
                    rawImages.splice(index, 1)
                    imageLoadFlag.splice(index, 1)
                    if (index === images.length) {
                        // 最后一张
                        index--
                    }
                    oldIndex = index
                    setImageOffset()
                    setImageTransform()
                    imageSizeCheck()
                }
            } catch (e) {
                const msg = e.message || e.error || e.msg || e
                if (msg && typeof msg === 'string') {
                    imageViewer.toast(msg)
                }
                console.error('删除失败=>', e || '未知错误')
            }

        }
    }
    if (toolbar) {
        dialog.appendChild(buttonWrap);
    }

    // 插入索引
    dialog.appendChild(indexText)
    imageViewer.createAnimation(dialog)
    document.body.appendChild(dialog)
    setImageOffset()
    // 设置contentWrap宽度
    setContentWidth()
    // 图片自适应
    // fitScreen()
    // fitScreenOrOriginal('fit', 'init')
    // imageSizeCheck()
    if (!imageLoadFlag[index] && imageViewer.isImg(imageTypes[index])) {
        showLoading()
    }
    // 按钮状态
    updateBtnStatus()
    // 监听resize事件
    const resizeHandler = imageViewer.throttle(function () {
        if (!dialog) {
            return
        }
        const fitType = fitScreenBtn.getAttribute('type')
        setTimeout(() => {
            setContentWidth() // 改变窗口大小
            const containerWidth = content.offsetWidth;
            contentWrapper.style.transform = `translateX(${-index * containerWidth}px)`;
            if (fitType === 'natural' && zoom === 1) {
                setTimeout(function () {
                    fitScreen() // 图片自适应
                })
            }
        }, 100)
    }, 50)
    window.addEventListener('resize', resizeHandler)
    // 监听滚动
    let scrollTimer = null
    const scrollHandler = imageViewer.throttle((e) => {
        if (!dialog) {
            return
        }
        e = e || window.event;
        const ctrlKey = e.ctrlKey || e.metaKey || e.shiftKey;
        const deltaY = e.wheelDeltaY || -e.deltaY;
        // ie关闭动画，ie下短时间内重复触发动画会忽大忽小地跳跃
        const isIe = !!window.ActiveXObject || "ActiveXObject" in window
        const imageElement = contentWrapper.children[index].querySelector('img');
        if (isIe) {
            imageElement.style.transition = 'transform 0s ease, top 0s ease, left 0s ease'
        }
        let flag = false
        if (deltaY < 0 && !ctrlKey) {
            // 向下
            flag = true
            zoomOut()
        } else if (deltaY > 0 && !ctrlKey) {
            // 向上
            flag = true
            zoomIn()
        }
        if (flag && isIe) {
            if (scrollTimer) {
                clearTimeout(scrollTimer)
            }
            scrollTimer = setTimeout(() => {
                imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left 0.2s ease'
            }, 100)
        }
    }, 50)
    window.addEventListener('mousewheel', scrollHandler, false)
    window.addEventListener('wheel', scrollHandler, false) // 兼容火狐

    // 上一张、下一张快捷键
    function keydownHandler (e) {
        if (!dialog) {
            return
        }
        if (e.keyCode === 37 || e.keyCode === 38) {
            // 向左
            prevBtn.click()
        } else if (e.keyCode === 39 || e.keyCode === 40) {
            // 向右
            nextBtn.click()
        }
    }
    window.addEventListener('keydown', keydownHandler)

    /* 移动端事件 */
    let touchPoints = 0 // 触点数量
    let touchStartScale = 0
    let touchStartDistance = 0
    let lastDistance = 0
    const touchStartHandler = function (e) {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        touchPoints = e.targetTouches
        if (touchPoints.length === 1) {
            moveImageStart(touchPoints[0])
        } else if (touchPoints.length === 2) {
            touchStartScale = zoom
            const touch1 = e.targetTouches[0];
            const touch2 = e.targetTouches[1];
            if (!touch1 || !touch2) {
                return
            }
            touchStartDistance = Math.sqrt(
                Math.pow(touch2.pageX - touch1.pageX, 2) +
                Math.pow(touch2.pageY - touch1.pageY, 2)
            );
            // 关闭top和left动画
            const imageElement = contentWrapper.children[index].querySelector('img');
            imageElement.style.transition = 'none'
        }
        // 阻止默认事件
        e.preventDefault()
        // 阻止冒泡
        e.stopPropagation()
    }
    const touchMoveHandler = imageViewer.throttle(function (e) {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        if (touchPoints.length === 1) {
            moveImage(e.targetTouches[0])
        } else if (touchPoints.length === 2) {
            if (!touchStartDistance) {
                return;
            }
            // 缩放
            const touch1 = e.targetTouches[0];
            const touch2 = e.targetTouches[1];
            if (!touch1 || !touch2) {
                return
            }
            var distance = Math.sqrt(
                Math.pow(touch2.pageX - touch1.pageX, 2) +
                Math.pow(touch2.pageY - touch1.pageY, 2)
            );
            // if (Math.abs(distance - lastDistance) < 5) {
            //     return;
            // }
            lastDistance = distance
            var newScale = distance / touchStartDistance * touchStartScale;
            if (newScale > maxZoom) {
                newScale = maxZoom
            }
            if (newScale < minZoom) {
                newScale = minZoom
            }
            zoomFn(newScale, false)
        }
        // 阻止默认事件
        e.preventDefault()
        // 阻止冒泡
        e.stopPropagation()
    }, 50)
    const touchEndHandler = function (e) {
        if (!imageViewer.isImg(imageTypes[index])) {
            return;
        }
        if (touchPoints.length === 1) {
            moveImageEnd(e)
        } else if (touchPoints.length === 2) {
            // 缩放结束
            touchStartScale = 0
            touchStartDistance = 0
            // 开启top和left动画
            const imageElement = contentWrapper.children[index].querySelector('img');
            imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left 0.2s ease'
            setTimeout(setImageTransform, 210)
        }
    }

    content.addEventListener('touchstart', touchStartHandler)
    content.addEventListener('touchmove', touchMoveHandler)
    content.addEventListener('touchend', touchEndHandler)

    // 插入预览
    if (thumbnail) {
        thumbnailContainer.style.width = `${thumbnailWidth}px`
        thumbnailContainer.style.height = `${thumbnailHeight}px`
        thumbnailTitle.style.width = `${thumbnailWidth}px`
        thumbnailContainer.appendChild(thumbnailImageWrap)
        thumbnailImageWrap.appendChild(thumbnailImage)
        thumbnailImageWrap.appendChild(thumbnailCurrView)
        thumbnailBox.appendChild(thumbnailTitle)
        thumbnailBox.appendChild(thumbnailContainer)
        thumbnailBox.appendChild(thumbnailCloseButton)
        dialog.appendChild(thumbnailBox)
        setThumbnailBoxPosition()
        // 绑定事件
        thumbnailImageWrap.onmousedown = thumbnailMoveStart;
        window.addEventListener('mousemove', thumbnailMove);
        window.addEventListener('mouseup', thumbnailMoveEnd);
        // thumbnailContainer.onmouseleave = moveImageEnd;
        thumbnailCloseButton.onclick = function () {
            thumbnailClosed = true
            hideSmallImg()
        }
        // 绑定拖动事件
        if (thumbnailDraggable) {
            thumbnailBox.onmousedown = thumbnailBoxMoveStart
            dialog.onmousemove = imageViewer.throttle(thumbnailBoxMove, 40)
            thumbnailBox.onmouseup = thumbnailBoxMoveEnd
            dialog.onmouseleave = thumbnailBoxMoveEnd
        }
    }
    // 判断有无tooltip
    const operateButton = dialog.querySelectorAll('.preview-operate-button')
    for (let i = 0; i < operateButton.length; i++) {
        // 判断data-content是否为空
        if (operateButton[i].getAttribute('data-content')) {
            // 添加class tooltip
            operateButton[i].classList.add('preview-tooltip')
        }
    }
    return {
        closeDialog
    }
};

// 插入svg图标
!function(e){const fonticonSvg = document.querySelector(`svg[name="fonticonpreview_img_icon"]`); if (fonticonSvg) { fonticonSvg.remove();}var t,n,o,i,a,d='<svg name=fonticonpreview_img_icon xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="display:none;"><symbol viewBox="0 0 24 24" id="preview_img_icon-actual"><path d="M3.813 4.874 C 3.442 5.002,3.196 5.251,3.062 5.635 C 3.007 5.790,3.000 6.531,3.000 12.004 L 3.000 18.197 3.086 18.426 C 3.200 18.731,3.469 19.000,3.774 19.114 L 4.003 19.200 12.000 19.200 L 19.997 19.200 20.226 19.114 C 20.531 19.000,20.800 18.731,20.914 18.426 L 21.000 18.197 21.000 12.000 C 21.000 5.893,20.999 5.800,20.920 5.588 C 20.811 5.297,20.604 5.067,20.329 4.932 L 20.100 4.820 12.060 4.811 C 4.423 4.803,4.010 4.806,3.813 4.874 M19.560 12.000 L 19.560 17.760 12.000 17.760 L 4.440 17.760 4.440 12.000 L 4.440 6.240 12.000 6.240 L 19.560 6.240 19.560 12.000 M7.940 8.981 C 7.786 9.055,7.493 9.156,7.288 9.206 L 6.917 9.296 6.928 9.598 L 6.940 9.900 7.490 9.911 L 8.040 9.922 8.040 12.061 L 8.040 14.200 7.360 14.200 L 6.680 14.200 6.680 14.600 L 6.680 15.000 8.440 15.000 L 10.200 15.000 10.200 14.600 L 10.200 14.200 9.600 14.200 L 9.000 14.200 9.000 11.520 L 9.000 8.840 8.610 8.843 C 8.253 8.847,8.196 8.858,7.940 8.981 M15.265 8.967 C 15.136 9.031,14.848 9.133,14.625 9.193 L 14.220 9.302 14.220 9.601 L 14.220 9.900 14.770 9.911 L 15.320 9.922 15.320 12.061 L 15.320 14.200 14.640 14.200 L 13.960 14.200 13.960 14.600 L 13.960 15.000 15.740 15.000 L 17.520 15.000 17.520 14.600 L 17.520 14.200 16.900 14.200 L 16.280 14.200 16.280 11.520 L 16.280 8.840 15.890 8.845 C 15.546 8.850,15.472 8.865,15.265 8.967 M11.787 10.497 C 11.581 10.572,11.495 10.657,11.416 10.864 C 11.335 11.078,11.358 11.364,11.469 11.515 C 11.845 12.022,12.582 11.817,12.629 11.192 C 12.667 10.692,12.233 10.334,11.787 10.497 M11.680 13.850 C 11.442 14.012,11.380 14.134,11.380 14.440 C 11.380 14.653,11.398 14.739,11.462 14.827 C 11.559 14.960,11.853 15.120,12.000 15.120 C 12.147 15.120,12.441 14.960,12.538 14.827 C 12.656 14.665,12.655 14.213,12.536 14.053 C 12.394 13.861,12.209 13.760,12.000 13.760 C 11.871 13.760,11.770 13.788,11.680 13.850 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-close"><path d="M11.700 11.125 C 11.383 11.271,11.241 11.420,11.103 11.750 C 10.973 12.061,10.972 12.338,11.102 12.652 C 11.173 12.824,12.298 13.994,14.752 16.450 L 18.300 20.000 14.752 23.550 C 12.298 26.006,11.173 27.176,11.102 27.348 C 10.972 27.662,10.973 27.939,11.103 28.250 C 11.241 28.580,11.383 28.729,11.700 28.875 C 12.027 29.025,12.326 29.032,12.652 28.898 C 12.824 28.827,13.994 27.702,16.450 25.248 L 20.000 21.700 23.550 25.248 C 26.006 27.702,27.176 28.827,27.348 28.898 C 27.674 29.032,27.973 29.025,28.300 28.875 C 28.617 28.729,28.759 28.580,28.897 28.250 C 29.027 27.939,29.028 27.662,28.898 27.348 C 28.827 27.176,27.702 26.006,25.248 23.550 L 21.700 20.000 25.248 16.450 C 27.702 13.994,28.827 12.824,28.898 12.652 C 29.028 12.338,29.027 12.061,28.897 11.750 C 28.759 11.420,28.617 11.271,28.300 11.125 C 27.973 10.975,27.674 10.968,27.348 11.102 C 27.176 11.173,26.006 12.298,23.550 14.752 L 20.000 18.300 16.450 14.752 C 13.994 12.298,12.824 11.173,12.652 11.102 C 12.326 10.968,12.027 10.975,11.700 11.125 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-delete"><path d="M10.404 2.923 C 9.915 3.019,9.363 3.431,9.126 3.875 C 8.909 4.283,8.880 4.475,8.880 5.528 L 8.880 6.480 6.768 6.480 C 4.658 6.480,4.657 6.480,4.479 6.570 C 3.954 6.835,3.954 7.565,4.479 7.830 C 4.621 7.902,4.724 7.920,4.988 7.920 L 5.320 7.920 5.321 8.090 C 5.321 8.184,5.437 10.789,5.578 13.880 C 5.813 19.020,5.842 19.523,5.918 19.766 C 6.123 20.424,6.682 20.934,7.352 21.075 C 7.501 21.107,8.899 21.120,12.032 21.120 C 15.777 21.119,16.535 21.110,16.715 21.062 C 17.382 20.884,17.882 20.409,18.084 19.760 C 18.157 19.524,18.189 18.971,18.422 13.880 C 18.563 10.789,18.679 8.184,18.679 8.090 L 18.680 7.920 19.012 7.920 C 19.276 7.920,19.379 7.902,19.521 7.830 C 20.046 7.565,20.046 6.835,19.521 6.570 C 19.343 6.480,19.342 6.480,17.232 6.480 L 15.120 6.480 15.120 5.528 C 15.120 4.475,15.091 4.283,14.874 3.875 C 14.629 3.415,14.086 3.020,13.564 2.921 C 13.305 2.872,10.657 2.874,10.404 2.923 M13.529 4.471 L 13.660 4.601 13.672 5.541 L 13.684 6.480 12.000 6.480 L 10.316 6.480 10.328 5.543 C 10.340 4.607,10.340 4.606,10.440 4.499 C 10.495 4.440,10.576 4.376,10.620 4.357 C 10.664 4.339,11.307 4.327,12.049 4.332 L 13.399 4.340 13.529 4.471 M17.240 7.950 C 17.240 7.966,17.124 10.531,16.981 13.649 C 16.768 18.334,16.712 19.339,16.661 19.438 C 16.529 19.694,16.798 19.680,12.000 19.680 C 7.203 19.680,7.471 19.694,7.339 19.439 C 7.288 19.339,7.232 18.334,7.019 13.689 C 6.877 10.593,6.761 8.029,6.760 7.990 C 6.760 7.924,7.036 7.920,12.000 7.920 C 14.882 7.920,17.240 7.934,17.240 7.950 M9.090 10.112 C 8.951 10.155,8.728 10.349,8.653 10.492 C 8.566 10.657,8.566 10.674,8.741 14.136 C 8.875 16.804,8.886 16.949,8.971 17.120 C 9.235 17.653,9.968 17.646,10.235 17.107 L 10.331 16.915 10.185 13.928 C 10.105 12.284,10.029 10.857,10.016 10.756 C 9.973 10.396,9.699 10.117,9.368 10.096 C 9.265 10.089,9.139 10.096,9.090 10.112 M11.700 10.155 C 11.510 10.243,11.424 10.332,11.342 10.530 C 11.288 10.658,11.280 11.081,11.280 13.810 L 11.280 16.943 11.370 17.121 C 11.635 17.646,12.365 17.646,12.630 17.121 L 12.720 16.943 12.719 13.802 C 12.718 10.839,12.714 10.651,12.645 10.500 C 12.557 10.310,12.468 10.224,12.270 10.142 C 12.076 10.061,11.896 10.065,11.700 10.155 M14.420 10.140 C 14.151 10.286,14.022 10.469,13.984 10.761 C 13.971 10.859,13.895 12.284,13.815 13.927 L 13.668 16.913 13.764 17.107 C 14.032 17.646,14.765 17.654,15.029 17.120 C 15.114 16.949,15.125 16.804,15.259 14.136 C 15.439 10.568,15.437 10.651,15.339 10.483 C 15.143 10.150,14.705 9.986,14.420 10.140 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-download"><path d="M11.681 4.890 C 11.473 4.996,11.368 5.127,11.318 5.343 C 11.271 5.545,11.272 13.212,11.318 14.540 C 11.338 15.090,11.349 15.545,11.342 15.551 C 11.336 15.557,10.785 14.955,10.118 14.211 C 8.891 12.843,6.675 10.564,6.466 10.454 C 6.305 10.369,5.947 10.377,5.789 10.469 C 5.616 10.570,5.490 10.767,5.457 10.986 C 5.405 11.335,5.415 11.347,8.633 14.637 C 10.268 16.309,11.645 17.691,11.693 17.708 C 11.741 17.726,10.447 17.749,8.817 17.760 L 5.854 17.780 5.706 17.880 C 5.280 18.169,5.309 18.870,5.758 19.108 L 5.933 19.200 12.000 19.200 L 18.067 19.200 18.242 19.108 C 18.691 18.870,18.720 18.169,18.294 17.880 L 18.146 17.780 15.183 17.760 C 13.553 17.749,12.259 17.726,12.307 17.708 C 12.440 17.660,18.365 11.589,18.470 11.394 C 18.652 11.057,18.522 10.627,18.187 10.453 C 18.039 10.377,17.679 10.378,17.529 10.455 C 17.341 10.552,15.264 12.694,13.908 14.189 C 13.224 14.942,12.661 15.554,12.656 15.549 C 12.651 15.544,12.662 15.090,12.682 14.540 C 12.728 13.212,12.729 5.545,12.682 5.343 C 12.662 5.257,12.612 5.140,12.570 5.083 C 12.470 4.945,12.177 4.800,12.000 4.800 C 11.921 4.800,11.778 4.841,11.681 4.890 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-fit"><path d="M3.813 4.874 C 3.442 5.002,3.196 5.251,3.062 5.635 C 3.007 5.790,3.000 6.531,3.000 12.004 L 3.000 18.197 3.086 18.426 C 3.200 18.731,3.469 19.000,3.774 19.114 L 4.003 19.200 12.000 19.200 L 19.997 19.200 20.226 19.114 C 20.531 19.000,20.800 18.731,20.914 18.426 L 21.000 18.197 21.000 12.000 C 21.000 5.893,20.999 5.800,20.920 5.588 C 20.811 5.297,20.604 5.067,20.329 4.932 L 20.100 4.820 12.060 4.811 C 4.423 4.803,4.010 4.806,3.813 4.874 M19.560 12.000 L 19.560 17.760 12.000 17.760 L 4.440 17.760 4.440 12.000 L 4.440 6.240 12.000 6.240 L 19.560 6.240 19.560 12.000 M8.013 8.474 C 7.642 8.603,7.396 8.852,7.262 9.235 C 7.209 9.386,7.200 9.772,7.200 12.004 C 7.200 14.557,7.201 14.601,7.286 14.826 C 7.400 15.131,7.669 15.400,7.974 15.514 C 8.202 15.600,8.216 15.600,12.000 15.600 C 15.784 15.600,15.798 15.600,16.026 15.514 C 16.331 15.400,16.600 15.131,16.714 14.826 C 16.799 14.601,16.800 14.557,16.800 12.000 C 16.800 9.497,16.797 9.395,16.720 9.188 C 16.611 8.897,16.404 8.667,16.129 8.532 L 15.900 8.420 12.060 8.411 C 8.455 8.402,8.207 8.406,8.013 8.474 M15.600 12.000 L 15.600 14.400 12.000 14.400 L 8.400 14.400 8.400 12.000 L 8.400 9.600 12.000 9.600 L 15.600 9.600 15.600 12.000 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-left-arrow"><path d="M23.300 10.122 C 22.933 10.296,14.297 19.123,14.125 19.500 C 13.970 19.839,13.970 20.162,14.125 20.500 C 14.207 20.679,15.692 22.243,18.664 25.281 C 23.431 30.152,23.331 30.063,23.938 29.981 C 24.737 29.874,25.222 28.986,24.882 28.253 C 24.811 28.101,23.252 26.459,20.867 24.024 C 18.722 21.834,16.967 20.023,16.967 20.000 C 16.967 19.977,18.707 18.182,20.833 16.011 C 23.007 13.793,24.766 11.943,24.850 11.788 C 25.389 10.797,24.314 9.642,23.300 10.122 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-left-rotate"><path d="M11.000 3.679 C 10.244 4.283,9.884 4.596,9.850 4.679 C 9.756 4.907,9.825 4.981,11.000 5.921 C 11.982 6.706,12.116 6.800,12.246 6.800 C 12.361 6.800,12.415 6.773,12.496 6.677 C 12.596 6.559,12.600 6.533,12.600 6.057 L 12.600 5.560 12.710 5.560 C 12.902 5.560,13.566 5.679,13.980 5.787 C 16.049 6.327,17.871 7.796,18.827 9.695 C 19.344 10.722,19.604 11.702,19.666 12.865 C 19.687 13.259,19.711 13.405,19.776 13.534 C 20.036 14.047,20.768 14.039,21.030 13.521 C 21.141 13.302,21.149 12.943,21.060 12.182 C 20.575 8.044,17.407 4.770,13.315 4.181 C 13.081 4.148,12.825 4.120,12.745 4.120 L 12.600 4.120 12.600 3.583 C 12.600 3.064,12.597 3.042,12.496 2.923 C 12.415 2.827,12.361 2.800,12.246 2.800 C 12.116 2.800,11.982 2.894,11.000 3.679 M4.413 9.674 C 4.042 9.802,3.796 10.051,3.662 10.435 C 3.608 10.588,3.600 11.151,3.600 15.004 C 3.600 19.397,3.600 19.397,3.686 19.626 C 3.800 19.931,4.069 20.200,4.374 20.314 L 4.603 20.400 10.200 20.400 L 15.797 20.400 16.026 20.314 C 16.331 20.200,16.600 19.931,16.714 19.626 L 16.800 19.397 16.800 15.000 C 16.800 10.695,16.798 10.599,16.720 10.388 C 16.611 10.097,16.404 9.867,16.129 9.732 L 15.900 9.620 10.260 9.611 C 4.927 9.603,4.609 9.606,4.413 9.674 M15.360 15.000 L 15.360 18.960 10.200 18.960 L 5.040 18.960 5.040 15.000 L 5.040 11.040 10.200 11.040 L 15.360 11.040 15.360 15.000 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 1412 1024" id="preview_img_icon-load-error"><path d="M1393.516743 51.782272a71.326417 71.326417 0 0 0-49.610701-22.527848L803.837949 8.24491l-40.906759 89.140366 56.231346 167.72301-101.675454 190.815821 41.436411 153.634277 102.540552 131.794976 148.690862-135.767363c6.956091-6.355819 16.189684-9.622004 25.599828-9.268903 9.392489 0.353101 18.449531 4.466729 24.717075 11.352199l191.168921 204.392557a35.310107 35.310107 0 0 1 6.267544 38.699878 35.857414 35.857414 0 0 1-33.774117 20.479862l-523.878409-20.303312-26.129479 74.151226 28.389326 66.912653 602.213882 23.075155a71.785448 71.785448 0 0 0 51.199656-18.767322 69.790427 69.790427 0 0 0 22.810329-49.028084l33.597567-844.917905a69.084225 69.084225 0 0 0-18.802632-50.581729zM1006.517966 439.257736c-59.020845-2.242192-104.976949-51.446826-102.717103-109.779124 2.259847-58.314642 52.047098-103.741096 111.067943-101.516559 59.020845 2.259847 104.994604 51.464482 102.717103 109.779124-2.259847 58.332297-52.047098 103.741096-111.067943 101.516559z m-388.234631 487.049966l18.09643-77.752856-425.345554 28.901323A35.769139 35.769139 0 0 1 176.553891 858.0003a35.115902 35.115902 0 0 1 5.049346-38.894084l315.125053-357.691388a35.804449 35.804449 0 0 1 25.952929-12.023091 36.08693 36.08693 0 0 1 26.623821 10.822548l105.506601 108.755131-45.444108-115.976048 80.083323-200.084724-73.798124-160.184302L646.443146 0 66.351046 39.564975C26.980277 42.319164-2.591938 75.863766 0.179905 114.757849l58.844294 843.717361a69.419671 69.419671 0 0 0 24.205079 48.162987 72.562271 72.562271 0 0 0 51.711652 17.213677l517.963965-35.274797-34.65687-62.28703z" fill="currentColor" p-id="9377"></path></symbol><symbol viewBox="0 0 1024 1024" id="preview_img_icon-loading"><path d="M144.205 202.496a136.678 136.678 0 1 0 273.357 0 136.678 136.678 0 1 0-273.357 0zM41.728 492.902a119.578 119.578 0 1 0 239.155 0 119.578 119.578 0 1 0-239.155 0zM144.23 749.158a102.502 102.502 0 1 0 205.005 0 102.502 102.502 0 1 0-205.005 0zM435.2 861.926a89.6 89.6 0 1 0 179.2 0 89.6 89.6 0 1 0-179.2 0z m289.843-95.666a85.427 85.427 0 1 0 170.855 0 85.427 85.427 0 1 0-170.855 0z m136.704-290.433a68.326 68.326 0 1 0 136.653 0 68.326 68.326 0 1 0-136.653 0zM759.22 219.571a51.251 51.251 0 1 0 102.502 0 51.251 51.251 0 1 0-102.503 0zM512 85.376a34.176 34.176 0 1 0 68.352 0 34.176 34.176 0 1 0-68.352 0z" p-id="10369" fill="currentColor"></path></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-right-arrow"><path d="M15.678 10.143 C 15.080 10.439,14.830 11.210,15.145 11.782 C 15.233 11.942,16.979 13.777,19.167 16.011 C 21.293 18.182,23.033 19.977,23.033 20.000 C 23.033 20.023,21.278 21.834,19.133 24.024 C 16.748 26.459,15.189 28.101,15.118 28.253 C 14.778 28.986,15.263 29.874,16.062 29.981 C 16.669 30.063,16.569 30.152,21.336 25.281 C 24.308 22.243,25.793 20.679,25.875 20.500 C 25.942 20.353,25.997 20.128,25.997 20.000 C 25.997 19.872,25.942 19.647,25.875 19.500 C 25.689 19.093,17.011 10.246,16.661 10.105 C 16.303 9.962,16.021 9.973,15.678 10.143 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-right-rotate"><path d="M12.104 2.923 C 12.004 3.041,12.000 3.066,12.000 3.557 L 12.000 4.069 11.550 4.096 C 9.203 4.240,7.181 5.139,5.560 6.760 C 3.935 8.384,3.009 10.468,2.894 12.762 C 2.867 13.300,2.896 13.467,3.049 13.663 C 3.155 13.797,3.415 13.918,3.602 13.919 C 3.795 13.920,4.081 13.768,4.189 13.606 C 4.293 13.449,4.300 13.410,4.357 12.629 C 4.432 11.597,4.656 10.761,5.099 9.856 C 5.874 8.271,7.071 7.074,8.656 6.299 C 9.264 6.001,9.726 5.840,10.364 5.704 C 10.803 5.610,11.527 5.520,11.847 5.520 L 12.000 5.520 12.000 6.037 C 12.000 6.535,12.004 6.558,12.104 6.677 C 12.185 6.773,12.239 6.800,12.354 6.800 C 12.484 6.800,12.618 6.706,13.600 5.921 C 14.339 5.330,14.716 5.003,14.749 4.924 C 14.845 4.693,14.784 4.626,13.672 3.736 C 13.098 3.276,12.590 2.878,12.544 2.851 C 12.388 2.761,12.216 2.789,12.104 2.923 M8.013 9.674 C 7.642 9.802,7.396 10.051,7.262 10.435 C 7.208 10.588,7.200 11.151,7.200 15.004 C 7.200 19.397,7.200 19.397,7.286 19.626 C 7.400 19.931,7.669 20.200,7.974 20.314 L 8.203 20.400 13.800 20.400 L 19.397 20.400 19.626 20.314 C 19.931 20.200,20.200 19.931,20.314 19.626 L 20.400 19.397 20.400 15.000 C 20.400 10.695,20.398 10.599,20.320 10.388 C 20.211 10.097,20.004 9.867,19.729 9.732 L 19.500 9.620 13.860 9.611 C 8.527 9.603,8.209 9.606,8.013 9.674 M18.960 15.000 L 18.960 18.960 13.800 18.960 L 8.640 18.960 8.640 15.000 L 8.640 11.040 13.800 11.040 L 18.960 11.040 18.960 15.000 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-zoom-in"><path d="M10.600 3.645 C 9.476 3.761,8.263 4.171,7.328 4.752 C 3.069 7.399,2.331 13.215,5.796 16.815 C 8.470 19.593,12.804 19.989,15.937 17.741 L 16.253 17.514 17.796 19.053 C 19.041 20.293,19.371 20.601,19.500 20.642 C 20.224 20.875,20.873 20.226,20.642 19.499 C 20.601 19.371,20.294 19.042,19.053 17.796 L 17.514 16.253 17.741 15.937 C 19.408 13.613,19.663 10.553,18.403 7.980 C 16.966 5.045,13.848 3.313,10.600 3.645 M12.072 5.082 C 13.118 5.196,14.082 5.552,15.002 6.164 C 15.509 6.501,16.299 7.291,16.636 7.798 C 17.481 9.069,17.858 10.494,17.728 11.930 C 17.587 13.486,16.984 14.778,15.882 15.883 C 14.945 16.822,13.893 17.386,12.589 17.648 C 11.945 17.777,10.855 17.777,10.211 17.648 C 8.908 17.387,7.858 16.824,6.917 15.883 C 5.819 14.784,5.213 13.486,5.072 11.930 C 4.942 10.494,5.318 9.073,6.164 7.798 C 6.501 7.291,7.291 6.501,7.798 6.164 C 9.114 5.290,10.577 4.920,12.072 5.082 M11.100 7.755 C 10.910 7.843,10.824 7.932,10.742 8.130 C 10.691 8.252,10.680 8.488,10.680 9.479 L 10.680 10.680 9.468 10.680 C 8.292 10.680,8.252 10.683,8.079 10.770 C 7.554 11.035,7.554 11.765,8.079 12.030 C 8.252 12.117,8.292 12.120,9.468 12.120 L 10.680 12.120 10.680 13.332 C 10.680 14.508,10.683 14.548,10.770 14.721 C 11.035 15.246,11.765 15.246,12.030 14.721 C 12.117 14.548,12.120 14.508,12.120 13.332 L 12.120 12.120 13.332 12.120 C 14.508 12.120,14.548 12.117,14.721 12.030 C 15.246 11.765,15.246 11.035,14.721 10.770 C 14.548 10.683,14.508 10.680,13.332 10.680 L 12.120 10.680 12.119 9.470 C 12.118 8.382,12.111 8.244,12.045 8.100 C 11.957 7.910,11.868 7.824,11.670 7.742 C 11.476 7.661,11.296 7.665,11.100 7.755 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-zoom-out"><path d="M10.600 3.645 C 9.476 3.761,8.263 4.171,7.328 4.752 C 3.069 7.399,2.331 13.215,5.796 16.815 C 8.470 19.593,12.804 19.989,15.937 17.741 L 16.253 17.514 17.796 19.053 C 19.041 20.293,19.371 20.601,19.500 20.642 C 20.224 20.875,20.873 20.226,20.642 19.499 C 20.601 19.371,20.294 19.042,19.053 17.796 L 17.514 16.253 17.741 15.937 C 19.408 13.613,19.663 10.553,18.403 7.980 C 16.966 5.045,13.848 3.313,10.600 3.645 M12.072 5.082 C 13.118 5.196,14.082 5.552,15.002 6.164 C 15.509 6.501,16.299 7.291,16.636 7.798 C 17.481 9.069,17.858 10.494,17.728 11.930 C 17.587 13.486,16.984 14.778,15.882 15.883 C 14.945 16.822,13.893 17.386,12.589 17.648 C 11.945 17.777,10.855 17.777,10.211 17.648 C 8.908 17.387,7.858 16.824,6.917 15.883 C 5.819 14.784,5.213 13.486,5.072 11.930 C 4.942 10.494,5.318 9.073,6.164 7.798 C 6.501 7.291,7.291 6.501,7.798 6.164 C 9.114 5.290,10.577 4.920,12.072 5.082 M8.079 10.770 C 7.554 11.035,7.554 11.765,8.079 12.030 L 8.257 12.120 11.400 12.120 L 14.543 12.120 14.721 12.030 C 15.246 11.765,15.246 11.035,14.721 10.770 L 14.543 10.680 11.400 10.680 L 8.257 10.680 8.079 10.770 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol></svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss"),l=function(e,t){t.parentNode.insertBefore(e,t)};function s(){a||(a=!0,o())}function r(){try{i.documentElement.doScroll("left")}catch(e){return void setTimeout(r,50)}s()}t=function(){var e,t=document.createElement("div");t.innerHTML=d,d=null,(t=t.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",t=t,(e=document.body).firstChild?l(t,e.firstChild):e.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),t()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(o=t,i=e.document,a=!1,r(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,s())})}(window);
!function(e){const fonticonSvg = document.querySelector(`svg[name="fonticonpreview_img_color"]`); if (fonticonSvg) { fonticonSvg.remove();}var t,n,o,i,a,d='<svg name=fonticonpreview_img_color xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="display:none;"><symbol viewBox="0 0 120 120" id="preview_img_color-audio">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <path d="M24,0 L81,0 L81,0 L111,30 L111,111 C111,115.970563 106.970563,120 102,120 L24,120 C19.0294373,120 15,115.970563 15,111 L15,9 C15,4.02943725 19.0294373,2.6894344e-15 24,0 Z" id="Rectangle" fill="#FFFFFF"></path>        <path d="M12,12 L56.25,12 C59.5637085,12 62.25,14.6862915 62.25,18 L62.25,36 C62.25,39.3137085 59.5637085,42 56.25,42 L6,42 L6,42 L6,18 C6,14.6862915 8.6862915,12 12,12 Z" id="Rectangle" fill="#C40000"></path>        <path d="M80.9810772,59.3943997 C80.9936767,59.4832347 81,59.5728472 81,59.6625713 L81,95.1958753 C81,95.5638665 80.8950237,95.9073391 80.7133838,96.1979804 C79.9151443,98.8598506 77.1815932,101.130496 73.6301662,101.762087 C68.9958422,102.586238 64.7237542,100.307297 64.0881829,96.6719193 C63.4526227,93.0365396 66.694255,89.4213671 71.3285748,88.5971928 C73.4768574,88.2151502 75.5473002,88.4999216 77.2137431,89.2775178 L77.2129957,67.5476218 L54.4909957,70.7706218 L54.4913748,99.0152925 C54.4913748,99.3838752 54.3860607,99.7278605 54.2038821,100.018799 C53.4051543,102.680401 50.6720815,104.950071 47.1215409,105.581504 C42.487217,106.405655 38.215129,104.126714 37.5795577,100.491337 C36.9439975,96.8559568 40.1856298,93.2407843 44.8199496,92.41661 C46.9682322,92.0345674 49.038675,92.3193388 50.7051179,93.096935 L50.7044283,70.3371927 L50.7044283,63.4177047 C50.7044283,62.4666079 51.4042926,61.6604771 52.3459653,61.5269189 L78.8221198,57.7717855 C79.8663719,57.6236784 80.8329701,58.3501475 80.9810772,59.3943997 Z" id="Combined-Shape" fill="#C40000"></path>        <text id="音频" font-family="Microsoft YaHei,SourceHanSansCN-Bold, Source Han Sans CN" font-size="20" font-weight="bold" line-spacing="20" letter-spacing="1" fill="#FFFFFF">            <tspan x="13" y="32">音频</tspan>        </text>        <polygon id="Path-5" fill="#920000" points="6 42 15 42 15 52.5"></polygon>        <path fill="#F9F9F9" d="M81,0 L111,30 L90,30 C85.0294373,30 81,25.9705627 81,21 L81,0 L81,0 Z" id="path-1"></path>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C3.204375 2.62734375 3.59625 3.4265625 4 4.25 C4.37125 5.03890625 4.7425 5.8278125 5.125 6.640625 C8.25959324 10.58498816 12.47371048 12.59219669 17.44085693 13.39401245 C20.15128283 13.57117732 22.83853273 13.63187278 25.5546875 13.64453125 C27.02882614 13.67289314 27.02882614 13.67289314 28.53274536 13.701828 C30.59493442 13.7381361 32.6573015 13.76536532 34.71972656 13.78393555 C37.88665585 13.81260552 41.05227335 13.86772612 44.21875 13.92773438 C46.22653876 13.95985347 48.23435165 13.99050492 50.2421875 14.01953125 C51.66553909 14.04126152 51.66553909 14.04126152 53.11764526 14.06343079 C53.99260651 14.0706163 54.86756775 14.07780182 55.76904297 14.08520508 C56.53989227 14.09312576 57.31074158 14.10104645 58.10494995 14.10920715 C60.08909464 14.12004208 60.08909464 14.12004208 62 13 C62.495 14.485 62.495 14.485 63 16 C59.02337818 17.32554061 55.20113587 17.16255998 51.0546875 17.16796875 C50.17023956 17.17129715 49.28579163 17.17462555 48.37454224 17.17805481 C46.50002563 17.1831194 44.6255 17.18546328 42.75097656 17.18530273 C39.90674577 17.18747575 37.06291147 17.20559892 34.21875 17.22460938 C32.39323048 17.22754623 30.56770914 17.22952907 28.7421875 17.23046875 C27.90122528 17.23765427 27.06026306 17.24483978 26.19381714 17.25224304 C19.42859582 17.22656212 12.13563497 17.01806777 6.625 12.6875 C2.75735706 8.72777033 0.78565808 5.49960659 0 0 Z " fill="#D6D6D6" transform="scale(0.5) translate(160,46)"></path>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C5.90002775 8.12505659 8.46916667 10.45408192 15 13 C15 13.66 15 14.32 15 15 C11.23615223 15.55350702 10.06282286 15.043976 6.875 12.8125 C2.82516361 9.11663388 0.77958316 5.45708209 0 0 Z " fill="#E4E4E4" transform="scale(0.5) translate(160,46)"></path>        <path fill="#F9F9F9" d="M164,0 L222,60 L180,60 C170.06,60 162,51.9411 162,42 L162,0 L162,0 Z" transform="scale(0.5)"></path>    </g></symbol><symbol viewBox="0 0 120 120" id="preview_img_color-excel">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <path d="M24,0 L81,0 L81,0 L111,30 L111,111 C111,115.970563 106.970563,120 102,120 L24,120 C19.0294373,120 15,115.970563 15,111 L15,9 C15,4.02943725 19.0294373,2.6894344e-15 24,0 Z" id="Rectangle" fill="#FFFFFF"></path>        <rect id="Rectangle" stroke="#00713C" stroke-width="1.875" x="65.25" y="64.125" width="22.5" height="36.75" rx="1.125"></rect>        <polygon id="Rectangle" fill="#00713C" points="39 63.606383 67.5 58.5 67.5 106.5 39 101.393617"></polygon>        <g id="Group" transform="translate(66.750000, 69.750000)" stroke="#00713C" stroke-width="4.125">            <line x1="-5.86640161e-18" y1="0.375" x2="7.5" y2="0.375" id="Path-3"></line>            <line x1="1.04326159e-18" y1="12.75" x2="7.5" y2="12.75" id="Path-3-Copy-2"></line>            <line x1="-5.86640161e-18" y1="25.125" x2="7.5" y2="25.125" id="Path-3-Copy-4"></line>            <line x1="1.04326159e-18" y1="6.5625" x2="7.5" y2="6.5625" id="Path-3-Copy"></line>            <line x1="-5.86640161e-18" y1="18.9375" x2="7.5" y2="18.9375" id="Path-3-Copy-3"></line>        </g>        <g id="Group-Copy" transform="translate(76.125000, 69.750000)" stroke="#00713C" stroke-width="4.125">            <line x1="-5.86640161e-18" y1="0.375" x2="7.5" y2="0.375" id="Path-3"></line>            <line x1="1.04326159e-18" y1="12.75" x2="7.5" y2="12.75" id="Path-3-Copy-2"></line>            <line x1="-5.86640161e-18" y1="25.125" x2="7.5" y2="25.125" id="Path-3-Copy-4"></line>            <line x1="1.04326159e-18" y1="6.5625" x2="7.5" y2="6.5625" id="Path-3-Copy"></line>            <line x1="-5.86640161e-18" y1="18.9375" x2="7.5" y2="18.9375" id="Path-3-Copy-3"></line>        </g>        <polygon id="Path" fill="#FFFFFF" fill-rule="nonzero" points="47.2977551 90.287234 50.7742347 90.287234 53.2559694 84.5425532 53.3380102 84.5425532 55.7735969 90.5425532 59.6192602 90.7978723 55.3890306 82.3723404 59.4910714 73.8191489 55.9069133 73.9468085 53.466199 79.9468085 53.3380102 79.9468085 51.2869898 74.3297872 47.6669388 74.3297872 51.2869898 82.3723404"></polygon>        <path d="M12,12 L56.25,12 C59.5637085,12 62.25,14.6862915 62.25,18 L62.25,36 C62.25,39.3137085 59.5637085,42 56.25,42 L6,42 L6,42 L6,18 C6,14.6862915 8.6862915,12 12,12 Z" id="Rectangle" fill="#00713C"></path>        <text id="XLS" font-family="Microsoft YaHei,SourceHanSansCN-Bold, Source Han Sans CN" font-size="20" font-weight="bold" letter-spacing="0.833333333" fill="#FFFFFF">            <tspan x="15.27" y="35">XLS</tspan>        </text>        <polygon id="Path-5" fill="#004F2A" points="6 42 15 42 15 52.5"></polygon>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C3.204375 2.62734375 3.59625 3.4265625 4 4.25 C4.37125 5.03890625 4.7425 5.8278125 5.125 6.640625 C8.25959324 10.58498816 12.47371048 12.59219669 17.44085693 13.39401245 C20.15128283 13.57117732 22.83853273 13.63187278 25.5546875 13.64453125 C27.02882614 13.67289314 27.02882614 13.67289314 28.53274536 13.701828 C30.59493442 13.7381361 32.6573015 13.76536532 34.71972656 13.78393555 C37.88665585 13.81260552 41.05227335 13.86772612 44.21875 13.92773438 C46.22653876 13.95985347 48.23435165 13.99050492 50.2421875 14.01953125 C51.66553909 14.04126152 51.66553909 14.04126152 53.11764526 14.06343079 C53.99260651 14.0706163 54.86756775 14.07780182 55.76904297 14.08520508 C56.53989227 14.09312576 57.31074158 14.10104645 58.10494995 14.10920715 C60.08909464 14.12004208 60.08909464 14.12004208 62 13 C62.495 14.485 62.495 14.485 63 16 C59.02337818 17.32554061 55.20113587 17.16255998 51.0546875 17.16796875 C50.17023956 17.17129715 49.28579163 17.17462555 48.37454224 17.17805481 C46.50002563 17.1831194 44.6255 17.18546328 42.75097656 17.18530273 C39.90674577 17.18747575 37.06291147 17.20559892 34.21875 17.22460938 C32.39323048 17.22754623 30.56770914 17.22952907 28.7421875 17.23046875 C27.90122528 17.23765427 27.06026306 17.24483978 26.19381714 17.25224304 C19.42859582 17.22656212 12.13563497 17.01806777 6.625 12.6875 C2.75735706 8.72777033 0.78565808 5.49960659 0 0 Z " fill="#D6D6D6" transform="scale(0.5) translate(160,46)"></path>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C5.90002775 8.12505659 8.46916667 10.45408192 15 13 C15 13.66 15 14.32 15 15 C11.23615223 15.55350702 10.06282286 15.043976 6.875 12.8125 C2.82516361 9.11663388 0.77958316 5.45708209 0 0 Z " fill="#E4E4E4" transform="scale(0.5) translate(160,46)"></path>        <path fill="#F9F9F9" d="M164,0 L222,60 L180,60 C170.06,60 162,51.9411 162,42 L162,0 L162,0 Z" transform="scale(0.5)"></path>    </g></symbol><symbol viewBox="0 0 120 120" id="preview_img_color-other">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-690.000000, -355.000000)">            <g id="图标/格式/Excel-Copy-4" transform="translate(690.000000, 355.000000)">                <path d="M24,0 L81,0 L81,0 L111,30 L111,111 C111,115.970563 106.970563,120 102,120 L24,120 C19.0294373,120 15,115.970563 15,111 L15,9 C15,4.02943725 19.0294373,2.6894344e-15 24,0 Z" id="Rectangle" fill="#FFFFFF"></path>                <path d="M12,12 L56.25,12 C59.5637085,12 62.25,14.6862915 62.25,18 L62.25,36 C62.25,39.3137085 59.5637085,42 56.25,42 L6,42 L6,42 L6,18 C6,14.6862915 8.6862915,12 12,12 Z" id="Rectangle" fill="#999999"></path>                <text id="其他" font-family="Microsoft YaHei,SourceHanSansCN-Bold, Source Han Sans CN" font-size="20" font-weight="bold" line-spacing="20" letter-spacing="1" fill="#FFFFFF">                    <tspan x="13" y="33">其他</tspan>                </text>                <polygon id="Path-5" fill="#666666" points="6 42 15 42 15 52.5"></polygon>                <path d="M79.539,88.1236667 L87.0387725,91.1874208 C87.9870758,91.5748309 87.9870758,92.2029469 87.0387725,92.590357 L64.7170552,101.709442 C63.7687518,102.096853 62.2312482,102.096853 61.2829448,101.709442 L38.9612275,92.590357 C38.0129242,92.2029469 38.0129242,91.5748309 38.9612275,91.1874208 L46.46,88.1236667 L60.1185283,93.702894 C61.8134788,94.3953316 64.1865212,94.3953316 65.8814717,93.702894 L79.539,88.1236667 Z M79.539,77.2347778 L87.0387725,80.2985319 C87.9870758,80.685942 87.9870758,81.314058 87.0387725,81.7014681 L64.7170552,90.8205535 C63.7687518,91.2079636 62.2312482,91.2079636 61.2829448,90.8205535 L38.9612275,81.7014681 C38.0129242,81.314058 38.0129242,80.685942 38.9612275,80.2985319 L46.46,77.2347778 L60.1185283,82.8140051 C61.8134788,83.5064428 64.1865212,83.5064428 65.8814717,82.8140051 L79.539,77.2347778 Z M64.7170552,60.2905576 L87.0387725,69.409643 C87.9870758,69.7970531 87.9870758,70.4251691 87.0387725,70.8125792 L64.7170552,79.9316646 C63.7687518,80.3190748 62.2312482,80.3190748 61.2829448,79.9316646 L38.9612275,70.8125792 C38.0129242,70.4251691 38.0129242,69.7970531 38.9612275,69.409643 L61.2829448,60.2905576 C62.2312482,59.9031475 63.7687518,59.9031475 64.7170552,60.2905576 Z" id="Combined-Shape" fill="#999999"></path>                <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C3.204375 2.62734375 3.59625 3.4265625 4 4.25 C4.37125 5.03890625 4.7425 5.8278125 5.125 6.640625 C8.25959324 10.58498816 12.47371048 12.59219669 17.44085693 13.39401245 C20.15128283 13.57117732 22.83853273 13.63187278 25.5546875 13.64453125 C27.02882614 13.67289314 27.02882614 13.67289314 28.53274536 13.701828 C30.59493442 13.7381361 32.6573015 13.76536532 34.71972656 13.78393555 C37.88665585 13.81260552 41.05227335 13.86772612 44.21875 13.92773438 C46.22653876 13.95985347 48.23435165 13.99050492 50.2421875 14.01953125 C51.66553909 14.04126152 51.66553909 14.04126152 53.11764526 14.06343079 C53.99260651 14.0706163 54.86756775 14.07780182 55.76904297 14.08520508 C56.53989227 14.09312576 57.31074158 14.10104645 58.10494995 14.10920715 C60.08909464 14.12004208 60.08909464 14.12004208 62 13 C62.495 14.485 62.495 14.485 63 16 C59.02337818 17.32554061 55.20113587 17.16255998 51.0546875 17.16796875 C50.17023956 17.17129715 49.28579163 17.17462555 48.37454224 17.17805481 C46.50002563 17.1831194 44.6255 17.18546328 42.75097656 17.18530273 C39.90674577 17.18747575 37.06291147 17.20559892 34.21875 17.22460938 C32.39323048 17.22754623 30.56770914 17.22952907 28.7421875 17.23046875 C27.90122528 17.23765427 27.06026306 17.24483978 26.19381714 17.25224304 C19.42859582 17.22656212 12.13563497 17.01806777 6.625 12.6875 C2.75735706 8.72777033 0.78565808 5.49960659 0 0 Z " fill="#D6D6D6" transform="scale(0.5) translate(160,46)"></path>                <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C5.90002775 8.12505659 8.46916667 10.45408192 15 13 C15 13.66 15 14.32 15 15 C11.23615223 15.55350702 10.06282286 15.043976 6.875 12.8125 C2.82516361 9.11663388 0.77958316 5.45708209 0 0 Z " fill="#E4E4E4" transform="scale(0.5) translate(160,46)"></path>                <path fill="#F9F9F9" d="M164,0 L222,60 L180,60 C170.06,60 162,51.9411 162,42 L162,0 L162,0 Z" transform="scale(0.5)"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 240 240" id="preview_img_color-pdf"><!--<g><path style="opacity:0.998" fill="#fefefe" d="M 46.5,-0.5 C 85.1667,-0.5 123.833,-0.5 162.5,-0.5C 162.5,-0.166667 162.5,0.166667 162.5,0.5C 161.883,0.610709 161.383,0.944043 161,1.5C 160.333,15.5 160.333,29.5 161,43.5C 161.232,44.7375 161.732,45.7375 162.5,46.5C 165.374,51.9459 169.374,56.2793 174.5,59.5C 175.842,60.793 177.509,61.6264 179.5,62C 193.575,62.8145 207.575,62.6478 221.5,61.5C 221.5,61.8333 221.5,62.1667 221.5,62.5C 221.667,115.834 221.5,169.168 221,222.5C 217.981,230.684 212.481,236.351 204.5,239.5C 151.833,239.5 99.1667,239.5 46.5,239.5C 38.5191,236.351 33.0191,230.684 30,222.5C 29.5,183.168 29.3333,143.835 29.5,104.5C 29.5,97.5 29.5,90.5 29.5,83.5C 56.8354,83.6666 84.1687,83.5 111.5,83C 115.837,81.661 119.337,79.161 122,75.5C 123.115,68.0744 123.615,60.5744 123.5,53C 123.333,46.5 123.167,40 123,33.5C 120.632,28.5651 116.799,25.3985 111.5,24C 84.1687,23.5 56.8354,23.3334 29.5,23.5C 29.7347,11.6059 35.4013,3.60594 46.5,-0.5 Z"/></g>-->    <path d="M24,0 L81,0 L81,0 L111,30 L111,111 C111,115.970563 106.970563,120 102,120 L24,120 C19.0294373,120 15,115.970563 15,111 L15,9 C15,4.02943725 19.0294373,2.6894344e-15 24,0 Z" id="Rectangle" fill="#FFFFFF" transform="scale(2)"></path>    <g><path style="opacity:0.992" fill="#F9F9F9" d="M 162.5,0.5 C 182.783,19.1154 202.449,38.4487 221.5,58.5C 221.5,59.5 221.5,60.5 221.5,61.5C 207.575,62.6478 193.575,62.8145 179.5,62C 177.509,61.6264 175.842,60.793 174.5,59.5C 189.425,61.687 204.425,62.0204 219.5,60.5C 206.513,59.6673 193.513,59.1673 180.5,59C 172.159,56.6593 166.326,51.4926 163,43.5C 162.517,44.448 162.351,45.448 162.5,46.5C 161.732,45.7375 161.232,44.7375 161,43.5C 160.333,29.5 160.333,15.5 161,1.5C 161.383,0.944043 161.883,0.610709 162.5,0.5 Z"></path></g><g><path style="opacity:0.999" fill="#c40100" d="M 29.5,23.5 C 56.8354,23.3334 84.1687,23.5 111.5,24C 116.799,25.3985 120.632,28.5651 123,33.5C 123.167,40 123.333,46.5 123.5,53C 123.615,60.5744 123.115,68.0744 122,75.5C 119.337,79.161 115.837,81.661 111.5,83C 84.1687,83.5 56.8354,83.6666 29.5,83.5C 23.5,83.5 17.5,83.5 11.5,83.5C 11.3334,66.83 11.5001,50.1633 12,33.5C 15.3594,25.9021 21.1927,22.5687 29.5,23.5 Z"></path></g>    <text id="PDF" font-family="Microsoft YaHei,SourceHanSansCN-Bold, Source Han Sans CN" font-size="20" font-weight="bold" letter-spacing="0.833333333" fill="#FFFFFF" transform="scale(2)">        <tspan x="15.27" y="34">PDF</tspan>    </text><g><path style="opacity:0.95" fill="#920000" d="M 11.5,83.5 C 17.5,83.5 23.5,83.5 29.5,83.5C 29.5,90.5 29.5,97.5 29.5,104.5C 22.7578,98.0945 16.7578,91.0945 11.5,83.5 Z"></path></g><g><path style="opacity:1" fill="#e57a82" d="M 159.5,115.5 C 136.831,115.333 114.164,115.5 91.5,116C 88.9361,117.396 86.2695,118.563 83.5,119.5C 85.1407,117.742 87.1407,116.242 89.5,115C 113.004,114.17 136.337,114.337 159.5,115.5 Z"></path></g><g><path style="opacity:1" fill="#c40603" d="M 159.5,115.5 C 165.7,116.698 169.7,120.365 171.5,126.5C 172.666,149.159 172.833,171.826 172,194.5C 170.619,196.635 169.619,198.968 169,201.5C 166.927,203.165 164.76,204.665 162.5,206C 137.5,206.667 112.5,206.667 87.5,206C 83.1832,203.685 80.3498,200.185 79,195.5C 78.3333,172.5 78.3333,149.5 79,126.5C 79.3236,123.294 80.8236,120.961 83.5,119.5C 86.2695,118.563 88.9361,117.396 91.5,116C 114.164,115.5 136.831,115.333 159.5,115.5 Z"></path></g><g><path style="opacity:1" fill="#fae3e3" d="M 125.5,170.5 C 122.728,170.759 120.395,171.759 118.5,173.5C 116.105,176.607 113.938,179.941 112,183.5C 109.056,184.723 106.556,186.556 104.5,189C 98,190.5 95.5,188 97,181.5C 100.857,177.595 105.357,174.595 110.5,172.5C 118.907,163.032 121.24,152.199 117.5,140C 116.757,133.742 119.424,131.409 125.5,133C 126.333,133.833 127.167,134.667 128,135.5C 128.875,141.788 128.375,147.954 126.5,154C 128.028,158.191 130.361,161.858 133.5,165C 139.581,165.138 145.581,165.804 151.5,167C 154.931,169.463 155.265,172.296 152.5,175.5C 145.052,177.558 138.719,175.725 133.5,170C 130.843,169.825 128.176,169.992 125.5,170.5 Z"></path></g><g><path style="opacity:1" fill="#d3504a" d="M 119.5,135.5 C 120.833,135.5 122.167,135.5 123.5,135.5C 123.854,139.637 123.354,143.637 122,147.5C 119.757,143.869 118.923,139.869 119.5,135.5 Z"></path></g><g><path style="opacity:1" fill="#c9322b" d="M 123.5,160.5 C 126.237,162.234 128.237,164.568 129.5,167.5C 127.167,167.5 124.833,167.5 122.5,167.5C 122.674,165.139 123.007,162.806 123.5,160.5 Z"></path></g><g><path style="opacity:1" fill="#d95b5f" d="M 148.5,169.5 C 145.287,169.19 142.287,169.523 139.5,170.5C 137.952,170.179 137.285,169.179 137.5,167.5C 140.85,167.335 144.183,167.502 147.5,168C 148.056,168.383 148.389,168.883 148.5,169.5 Z"></path></g><g><path style="opacity:1" fill="#c41f1b" d="M 139.5,170.5 C 142.287,169.523 145.287,169.19 148.5,169.5C 148.5,170.833 148.5,172.167 148.5,173.5C 144.997,173.871 141.997,172.871 139.5,170.5 Z"></path></g><g><path style="opacity:1" fill="#e79091" d="M 125.5,170.5 C 123.605,172.241 121.272,173.241 118.5,173.5C 120.395,171.759 122.728,170.759 125.5,170.5 Z"></path></g><g><path style="opacity:1" fill="#d8605e" d="M 104.5,184.5 C 104.703,182.956 105.37,181.622 106.5,180.5C 105.3,179.708 103.967,179.708 102.5,180.5C 104.619,178.072 107.286,176.905 110.5,177C 108.841,179.844 106.841,182.344 104.5,184.5 Z"></path></g><g><path style="opacity:1" fill="#c21615" d="M 104.5,184.5 C 102.883,185.038 101.216,185.371 99.5,185.5C 99.2729,183.067 100.273,181.401 102.5,180.5C 103.967,179.708 105.3,179.708 106.5,180.5C 105.37,181.622 104.703,182.956 104.5,184.5 Z"></path></g>    <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C3.204375 2.62734375 3.59625 3.4265625 4 4.25 C4.37125 5.03890625 4.7425 5.8278125 5.125 6.640625 C8.25959324 10.58498816 12.47371048 12.59219669 17.44085693 13.39401245 C20.15128283 13.57117732 22.83853273 13.63187278 25.5546875 13.64453125 C27.02882614 13.67289314 27.02882614 13.67289314 28.53274536 13.701828 C30.59493442 13.7381361 32.6573015 13.76536532 34.71972656 13.78393555 C37.88665585 13.81260552 41.05227335 13.86772612 44.21875 13.92773438 C46.22653876 13.95985347 48.23435165 13.99050492 50.2421875 14.01953125 C51.66553909 14.04126152 51.66553909 14.04126152 53.11764526 14.06343079 C53.99260651 14.0706163 54.86756775 14.07780182 55.76904297 14.08520508 C56.53989227 14.09312576 57.31074158 14.10104645 58.10494995 14.10920715 C60.08909464 14.12004208 60.08909464 14.12004208 62 13 C62.495 14.485 62.495 14.485 63 16 C59.02337818 17.32554061 55.20113587 17.16255998 51.0546875 17.16796875 C50.17023956 17.17129715 49.28579163 17.17462555 48.37454224 17.17805481 C46.50002563 17.1831194 44.6255 17.18546328 42.75097656 17.18530273 C39.90674577 17.18747575 37.06291147 17.20559892 34.21875 17.22460938 C32.39323048 17.22754623 30.56770914 17.22952907 28.7421875 17.23046875 C27.90122528 17.23765427 27.06026306 17.24483978 26.19381714 17.25224304 C19.42859582 17.22656212 12.13563497 17.01806777 6.625 12.6875 C2.75735706 8.72777033 0.78565808 5.49960659 0 0 Z " fill="#D6D6D6" transform="translate(160,46)"></path>    <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C5.90002775 8.12505659 8.46916667 10.45408192 15 13 C15 13.66 15 14.32 15 15 C11.23615223 15.55350702 10.06282286 15.043976 6.875 12.8125 C2.82516361 9.11663388 0.77958316 5.45708209 0 0 Z " fill="#E4E4E4" transform="translate(160, 46)"></path>    <path fill="#F9F9F9" d="M164,0 L222,60 L180,60 C170.06,60 162,51.9411 162,42 L162,0 L162,0 Z"></path></symbol><symbol viewBox="0 0 120 120" id="preview_img_color-ppt">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <path d="M24,0 L81,0 L81,0 L111,30 L111,111 C111,115.970563 106.970563,120 102,120 L24,120 C19.0294373,120 15,115.970563 15,111 L15,9 C15,4.02943725 19.0294373,2.6894344e-15 24,0 Z" id="Rectangle" fill="#FFFFFF"></path>        <path d="M12,12 L56.25,12 C59.5637085,12 62.25,14.6862915 62.25,18 L62.25,36 C62.25,39.3137085 59.5637085,42 56.25,42 L6,42 L6,42 L6,18 C6,14.6862915 8.6862915,12 12,12 Z" id="Rectangle" fill="#DD3410"></path>        <text id="PPT" font-family="Microsoft YaHei,SourceHanSansCN-Bold, Source Han Sans CN" font-size="20" font-weight="bold" letter-spacing="0.833333333" fill="#FFFFFF">            <tspan x="13.35" y="35">PPT</tspan>        </text>        <polygon id="Path-5" fill="#A91E00" points="6 42 15 42 15 52.5"></polygon>        <rect id="Rectangle" stroke="#DD3410" stroke-width="1.875" x="65.25" y="64.125" width="22.5" height="36.75" rx="1.125"></rect>        <polygon id="Rectangle" fill="#DD3410" points="39 63.606383 67.5 58.5 67.5 106.5 39 101.393617"></polygon>        <line x1="66.75" y1="93.6223404" x2="82.5" y2="93.6223404" id="Path-3-Copy-4" stroke="#DD3410" stroke-width="1.875"></line>        <line x1="66.75" y1="88.3723404" x2="82.5" y2="88.3723404" id="Path-3-Copy-3" stroke="#DD3410" stroke-width="1.875"></line>        <path d="M72.3482143,70.5 C72.4338446,70.5 72.5191247,70.5014931 72.6040298,70.5044547 L72.6045918,77.9042553 L79.5222752,77.904757 C79.3870175,81.7345184 76.2268412,84.7978723 72.3482143,84.7978723 C68.3835988,84.7978723 65.1696429,81.5971846 65.1696429,77.6489362 C65.1696429,73.7006877 68.3835988,70.5 72.3482143,70.5 Z" id="Combined-Shape" fill="#DD3410"></path>        <path d="M73.3732212,69.738499 C77.2193286,69.8726841 80.2959184,73.0200265 80.2959184,76.8829785 C80.2959184,76.968275 80.2944184,77.0532225 80.2914432,77.1377965 L73.3737245,77.1382977 Z" id="Combined-Shape" fill="#DD3410"></path>        <path d="M48.3903705,90.375 L51.3261298,90.375 L51.3261298,84.875 L53.2576852,84.875 C56.5162244,84.875 58.125,82.5 58.125,79.5 C58.125,75.75 56.1063452,74.625 52.7453363,74.625 L48.375,74.7 L48.3903705,90.375 Z M51.3261298,82.15 L51.3261298,77.4 L52.3610746,77.375 C54.4514582,77.375 54.794732,78.375 54.794732,79.625 C54.794732,80.875 54.5795455,82.125 52.4891618,82.125 L51.3261298,82.15 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C3.204375 2.62734375 3.59625 3.4265625 4 4.25 C4.37125 5.03890625 4.7425 5.8278125 5.125 6.640625 C8.25959324 10.58498816 12.47371048 12.59219669 17.44085693 13.39401245 C20.15128283 13.57117732 22.83853273 13.63187278 25.5546875 13.64453125 C27.02882614 13.67289314 27.02882614 13.67289314 28.53274536 13.701828 C30.59493442 13.7381361 32.6573015 13.76536532 34.71972656 13.78393555 C37.88665585 13.81260552 41.05227335 13.86772612 44.21875 13.92773438 C46.22653876 13.95985347 48.23435165 13.99050492 50.2421875 14.01953125 C51.66553909 14.04126152 51.66553909 14.04126152 53.11764526 14.06343079 C53.99260651 14.0706163 54.86756775 14.07780182 55.76904297 14.08520508 C56.53989227 14.09312576 57.31074158 14.10104645 58.10494995 14.10920715 C60.08909464 14.12004208 60.08909464 14.12004208 62 13 C62.495 14.485 62.495 14.485 63 16 C59.02337818 17.32554061 55.20113587 17.16255998 51.0546875 17.16796875 C50.17023956 17.17129715 49.28579163 17.17462555 48.37454224 17.17805481 C46.50002563 17.1831194 44.6255 17.18546328 42.75097656 17.18530273 C39.90674577 17.18747575 37.06291147 17.20559892 34.21875 17.22460938 C32.39323048 17.22754623 30.56770914 17.22952907 28.7421875 17.23046875 C27.90122528 17.23765427 27.06026306 17.24483978 26.19381714 17.25224304 C19.42859582 17.22656212 12.13563497 17.01806777 6.625 12.6875 C2.75735706 8.72777033 0.78565808 5.49960659 0 0 Z " fill="#D6D6D6" transform="scale(0.5) translate(160,46)"></path>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C5.90002775 8.12505659 8.46916667 10.45408192 15 13 C15 13.66 15 14.32 15 15 C11.23615223 15.55350702 10.06282286 15.043976 6.875 12.8125 C2.82516361 9.11663388 0.77958316 5.45708209 0 0 Z " fill="#E4E4E4" transform="scale(0.5) translate(160,46)"></path>        <path fill="#F9F9F9" d="M164,0 L222,60 L180,60 C170.06,60 162,51.9411 162,42 L162,0 L162,0 Z" transform="scale(0.5)"></path>    </g></symbol><symbol viewBox="0 0 120 120" id="preview_img_color-video">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <path d="M24,0 L81,0 L81,0 L111,30 L111,111 C111,115.970563 106.970563,120 102,120 L24,120 C19.0294373,120 15,115.970563 15,111 L15,9 C15,4.02943725 19.0294373,2.6894344e-15 24,0 Z" id="Rectangle" fill="#FFFFFF"></path>        <path d="M12,12 L56.25,12 C59.5637085,12 62.25,14.6862915 62.25,18 L62.25,36 C62.25,39.3137085 59.5637085,42 56.25,42 L6,42 L6,42 L6,18 C6,14.6862915 8.6862915,12 12,12 Z" id="Rectangle" fill="#1C5499"></path>        <polygon id="Path-5" fill="#08346A" points="6 42 15 42 15 52.5"></polygon>        <rect id="Rectangle" stroke="#1C5499" stroke-width="3" fill-opacity="0.2" fill="#1A58AA" x="39" y="57.75" width="48" height="48" rx="24"></rect>        <text id="视频" font-family="Microsoft YaHei,SourceHanSansCN-Bold, Source Han Sans CN" font-size="20" font-weight="bold" line-spacing="20" letter-spacing="1" fill="#FFFFFF">            <tspan x="13" y="32">视频</tspan>        </text>        <path d="M66.4980754,74.6221132 L75.6952998,88.4179497 C76.1548285,89.1072427 75.9685677,90.0385468 75.2792747,90.4980754 C75.0328734,90.662343 74.7433618,90.75 74.4472244,90.75 L56.0527756,90.75 C55.2243485,90.75 54.5527756,90.0784271 54.5527756,89.25 C54.5527756,88.9538625 54.6404327,88.664351 54.8047002,88.4179497 L64.0019246,74.6221132 C64.4614532,73.9328201 65.3927573,73.7465593 66.0820503,74.206088 C66.2468287,74.3159403 66.3882232,74.4573347 66.4980754,74.6221132 Z" id="Triangle" fill="#1C5499" transform="translate(65.250000, 81.750000) rotate(90.000000) translate(-65.250000, -81.750000) "></path>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C3.204375 2.62734375 3.59625 3.4265625 4 4.25 C4.37125 5.03890625 4.7425 5.8278125 5.125 6.640625 C8.25959324 10.58498816 12.47371048 12.59219669 17.44085693 13.39401245 C20.15128283 13.57117732 22.83853273 13.63187278 25.5546875 13.64453125 C27.02882614 13.67289314 27.02882614 13.67289314 28.53274536 13.701828 C30.59493442 13.7381361 32.6573015 13.76536532 34.71972656 13.78393555 C37.88665585 13.81260552 41.05227335 13.86772612 44.21875 13.92773438 C46.22653876 13.95985347 48.23435165 13.99050492 50.2421875 14.01953125 C51.66553909 14.04126152 51.66553909 14.04126152 53.11764526 14.06343079 C53.99260651 14.0706163 54.86756775 14.07780182 55.76904297 14.08520508 C56.53989227 14.09312576 57.31074158 14.10104645 58.10494995 14.10920715 C60.08909464 14.12004208 60.08909464 14.12004208 62 13 C62.495 14.485 62.495 14.485 63 16 C59.02337818 17.32554061 55.20113587 17.16255998 51.0546875 17.16796875 C50.17023956 17.17129715 49.28579163 17.17462555 48.37454224 17.17805481 C46.50002563 17.1831194 44.6255 17.18546328 42.75097656 17.18530273 C39.90674577 17.18747575 37.06291147 17.20559892 34.21875 17.22460938 C32.39323048 17.22754623 30.56770914 17.22952907 28.7421875 17.23046875 C27.90122528 17.23765427 27.06026306 17.24483978 26.19381714 17.25224304 C19.42859582 17.22656212 12.13563497 17.01806777 6.625 12.6875 C2.75735706 8.72777033 0.78565808 5.49960659 0 0 Z " fill="#D6D6D6" transform="scale(0.5) translate(160,46)"></path>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C5.90002775 8.12505659 8.46916667 10.45408192 15 13 C15 13.66 15 14.32 15 15 C11.23615223 15.55350702 10.06282286 15.043976 6.875 12.8125 C2.82516361 9.11663388 0.77958316 5.45708209 0 0 Z " fill="#E4E4E4" transform="scale(0.5) translate(160,46)"></path>        <path fill="#F9F9F9" d="M164,0 L222,60 L180,60 C170.06,60 162,51.9411 162,42 L162,0 L162,0 Z" transform="scale(0.5)"></path>    </g></symbol><symbol viewBox="0 0 120 120" id="preview_img_color-word">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <path d="M24,0 L81,0 L81,0 L111,30 L111,111 C111,115.970563 106.970563,120 102,120 L24,120 C19.0294373,120 15,115.970563 15,111 L15,9 C15,4.02943725 19.0294373,2.6894344e-15 24,0 Z" id="Rectangle" fill="#FFFFFF"></path>        <path d="M12,12 L56.25,12 C59.5637085,12 62.25,14.6862915 62.25,18 L62.25,36 C62.25,39.3137085 59.5637085,42 56.25,42 L6,42 L6,42 L6,18 C6,14.6862915 8.6862915,12 12,12 Z" id="Rectangle" fill="#1C5499"></path>        <text id="DOC" font-family="Microsoft YaHei,SourceHanSansCN-Bold, Source Han Sans CN" font-size="20" font-weight="bold" letter-spacing="0.833333333" fill="#FFFFFF">            <tspan x="11.34" y="35">DOC</tspan>        </text>        <polygon id="Path-5" fill="#08346A" points="6 42 15 42 15 52.5"></polygon>        <rect id="Rectangle" stroke="#1C5499" stroke-width="1.875" x="65.25" y="64.125" width="22.5" height="36.75" rx="1.125"></rect>        <polygon id="Rectangle" fill="#1C5499" points="39 63.606383 67.5 58.5 67.5 106.5 39 101.393617"></polygon>        <polygon id="Path" fill="#FFFFFF" fill-rule="nonzero" points="47.7033582 89.6341463 50.5242537 89.6341463 52.2873134 80.3658537 52.6399254 80.3658537 54.3257905 89.9562803 57.3414179 90 60.75 75 57.8115672 75.1219512 56.1660448 85.6097561 55.9309701 85.6097561 54.0503731 75.3658537 51.3470149 75.4878049 49.2313433 85.4878049 49.113806 85.4878049 47.7033582 75.7317073 45 75.8536585"></polygon>        <line x1="67.5" y1="69.375" x2="83.625" y2="69.375" id="Path-3" stroke="#1C5499" stroke-width="1.875"></line>        <line x1="67.5" y1="79.875" x2="83.625" y2="79.875" id="Path-3-Copy-2" stroke="#1C5499" stroke-width="1.875"></line>        <line x1="67.5" y1="90.375" x2="83.625" y2="90.375" id="Path-3-Copy-4" stroke="#1C5499" stroke-width="1.875"></line>        <line x1="67.5" y1="74.625" x2="83.625" y2="74.625" id="Path-3-Copy" stroke="#1C5499" stroke-width="1.875"></line>        <line x1="67.5" y1="85.125" x2="83.625" y2="85.125" id="Path-3-Copy-3" stroke="#1C5499" stroke-width="1.875"></line>        <line x1="67.5" y1="95.625" x2="83.625" y2="95.625" id="Path-3-Copy-5" stroke="#1C5499" stroke-width="1.875"></line>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C3.204375 2.62734375 3.59625 3.4265625 4 4.25 C4.37125 5.03890625 4.7425 5.8278125 5.125 6.640625 C8.25959324 10.58498816 12.47371048 12.59219669 17.44085693 13.39401245 C20.15128283 13.57117732 22.83853273 13.63187278 25.5546875 13.64453125 C27.02882614 13.67289314 27.02882614 13.67289314 28.53274536 13.701828 C30.59493442 13.7381361 32.6573015 13.76536532 34.71972656 13.78393555 C37.88665585 13.81260552 41.05227335 13.86772612 44.21875 13.92773438 C46.22653876 13.95985347 48.23435165 13.99050492 50.2421875 14.01953125 C51.66553909 14.04126152 51.66553909 14.04126152 53.11764526 14.06343079 C53.99260651 14.0706163 54.86756775 14.07780182 55.76904297 14.08520508 C56.53989227 14.09312576 57.31074158 14.10104645 58.10494995 14.10920715 C60.08909464 14.12004208 60.08909464 14.12004208 62 13 C62.495 14.485 62.495 14.485 63 16 C59.02337818 17.32554061 55.20113587 17.16255998 51.0546875 17.16796875 C50.17023956 17.17129715 49.28579163 17.17462555 48.37454224 17.17805481 C46.50002563 17.1831194 44.6255 17.18546328 42.75097656 17.18530273 C39.90674577 17.18747575 37.06291147 17.20559892 34.21875 17.22460938 C32.39323048 17.22754623 30.56770914 17.22952907 28.7421875 17.23046875 C27.90122528 17.23765427 27.06026306 17.24483978 26.19381714 17.25224304 C19.42859582 17.22656212 12.13563497 17.01806777 6.625 12.6875 C2.75735706 8.72777033 0.78565808 5.49960659 0 0 Z " fill="#D6D6D6" transform="scale(0.5) translate(160,46)"></path>        <path d="M0 0 C0.66 0 1.32 0 2 0 C2.268125 0.60328125 2.53625 1.2065625 2.8125 1.828125 C5.90002775 8.12505659 8.46916667 10.45408192 15 13 C15 13.66 15 14.32 15 15 C11.23615223 15.55350702 10.06282286 15.043976 6.875 12.8125 C2.82516361 9.11663388 0.77958316 5.45708209 0 0 Z " fill="#E4E4E4" transform="scale(0.5) translate(160,46)"></path>        <path fill="#F9F9F9" d="M164,0 L222,60 L180,60 C170.06,60 162,51.9411 162,42 L162,0 L162,0 Z" transform="scale(0.5)"></path>    </g></symbol></svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss"),l=function(e,t){t.parentNode.insertBefore(e,t)};function s(){a||(a=!0,o())}function r(){try{i.documentElement.doScroll("left")}catch(e){return void setTimeout(r,50)}s()}t=function(){var e,t=document.createElement("div");t.innerHTML=d,d=null,(t=t.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",t=t,(e=document.body).firstChild?l(t,e.firstChild):e.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),t()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(o=t,i=e.document,a=!1,r(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,s())})}(window);


export default previewImage