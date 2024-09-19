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
        minHeight: '400px',
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
        backgroundColor: 'rgba(22, 119, 255, 0.2)',
        border: '1px solid #1677FF',
        borderRadius: '5%',
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
        maxWidth: 'min(80%, 800px)',
        // maxHeight: '110px',
        overflow: 'hidden',
        '-webkitBoxOrient': 'vertical',
        '-webkitLineClamp': 5,
        textOverflow: 'ellipsis',
        display: '-webkit-box'
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
    delete: 'delete'
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
            const useElement = document.createElementNS(ns, 'use')
            useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${imageViewer.getIconName(name)}`)
            useElement.setAttribute('width', '1em')
            useElement.setAttribute('height', '1em')
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
            const useElement = document.createElementNS(ns, 'use')
            useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `${imageViewer.getFileIcon(name)}`)
            useElement.setAttribute('width', '1em')
            useElement.setAttribute('height', '1em')
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
    .preview-operate-button.disabled:hover{
        box-shadow: none
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
`);
imageViewer.isImg = function (extName) {
    return true
    // if (!extName) {
    //     return true
    // }
    // const types = ['png', 'jpeg', 'jpg', 'gif', 'bmp']
    // return types.indexOf(extName) > -1;

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
    const loop = option.loop !== undefined ? option.loop : true;
    const maxZoom = option.maxZoom || 4;
    const minZoom = option.minZoom || 0.25;
    let images = option.images ? [...option.images] : [];
    const imageNames = {}
    const imageTypes = {}
    // 判断images是string[] 还是 object[]
    if (images.length > 0 && images[0].url) {
        // 将string[] 转为object[]
        images = images.map((item, index) => {
            imageNames[index] = item.name
            imageTypes[index] = item.type
            return item.url
        })
    }
    const thumbnail = option.thumbnail !== undefined ? option.thumbnail : true;
    const thumbnailDraggable = option.thumbnailDraggable !== undefined ? option.thumbnailDraggable : true;
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
                    return;
                }
                const blob = new Blob([xhr.response]);
                navigator?.msSaveBlob(blob, url.split('/').pop());
            }
            return
        }
        // 默认下载事件
        const aEl = document.createElement('a')
        aEl.href = url
        aEl.download = url && url.split ? url.split('/').pop() : ''
        aEl.click()
        aEl.remove()
    };
    const deleteHandler = option.onDelete || function (index, url) {
        console.log('delete', index, url)
    };
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
    // const thumbnailWidth = 100
    // const thumbnailHeight = 80
    const thumbnailWidth = 120
    const thumbnailHeight = 100
    let thumbnailBoxRight = 10
    let thumbnailBoxBottom = 10
    let thumbnailBoxStartX = 0
    let thumbnailBoxStartY = 0
    const typesArr = []
    /* 获取按钮和提示文本 */
    const maxZoomText = option.maxZoomText || '已放到最大';
    const minZoomText = option.minZoomText || '已缩到最小';
    const fitText = option.fitText || '适应屏幕';
    const actualSizeText = option.actualSizeText || '原始尺寸';
    const zoomInText = option.zoomInText || '放大';
    const zoomOutText = option.zoomOutText || '缩小';
    const rotateLeftText = option.rotateLeftText || '左旋转';
    const rotateRightText = option.rotateRightText || '右旋转';
    const downloadText = option.downloadText || '下载';
    const deleteText = option.deleteText || '删除';
    const nextText = option.nextText || '下一张';
    const prevText = option.prevText || '上一张';
    const thumbnailTitleText = option.thumbnailTitleText || '概览图';
    // const maxZoomText = option.maxZoomText || '';
    // const minZoomText = option.minZoomText || '';
    // const fitText = option.fitText || '';
    // const actualSizeText = option.actualSizeText || '';
    // const zoomInText = option.zoomInText || '';
    // const zoomOutText = option.zoomOutText || '';
    // const rotateLeftText = option.rotateLeftText || '';
    // const rotateRightText = option.rotateRightText || '';
    // const downloadText = option.downloadText || '';
    // const deleteText = option.deleteText || '';
    // const nextText = option.nextText || '';
    // const prevText = option.prevText || '';
    // const thumbnailTitleText = option.thumbnailTitleText || '概览图';

    prevBtn.setAttribute('data-content', prevText)
    nextBtn.setAttribute('data-content', nextText)
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
            dialog = null
            imageViewer.createAnimation(dialog, 'out')
            document.documentElement.style.overflow = bodyOverflow
            document.documentElement.style.height = bodyHeight;
            if (bodyTop) {
                window.scrollTo(0, bodyTop * -1)
            }
        }, 150)
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
    function setImageTransform (i) {
        const targetImageIndex = i !== undefined ? i : index;
        if (!imageViewer.isImg(typesArr[targetImageIndex])) {
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
        if (!imageViewer.isImg(typesArr[index])) {
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
        oldZoom = zoom;
        zoom = temZoom;
        setImageTransform()
        imageViewer.toast(oldZoom * 100, 500, zoom * 100, '%')
        fitScreenBtnReset()
    }
    // 缩小
    function zoomOut () {
        if (!imageViewer.isImg(typesArr[index])) {
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
        oldZoom = zoom;
        zoom = temZoom;
        setImageTransform()
        imageViewer.toast(oldZoom * 100, 500, zoom * 100, '%')
        fitScreenBtnReset()
    }
    // 左旋转
    function rotateLeft () {
        if (!imageViewer.isImg(typesArr[index])) {
            return;
        }
        rotate -= 90;
        setImageTransform()
    }
    // 右旋转
    function rotateRight () {
        if (!imageViewer.isImg(typesArr[index])) {
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
    function moveImageStart (e, _scale = 1) {
        if (fullyVisible) {
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
    function moveImage (e, _scale = 1) {
        if (!startX || !startY || fullyVisible) {
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
        e.preventDefault()
        e.stopPropagation()
    }
    function moveImageEnd (e, _scale = 1) {
        if (!imageViewer.isImg(typesArr[index])) {
            return;
        }
        if (_scale < 0) {
            moveImage(e, _scale)
        }
        startX = 0;
        startY = 0;
        const imageElement = contentWrapper.children[index].querySelector('img');
        if (navigator.userAgent.toLowerCase().indexOf('webkit') > -1) {
            imageElement.style.cursor = '-webkit-grab';
        } else {
            imageElement.style.cursor = 'move';
        }
        // 开启top、left动画
        imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left, 0.2s ease'

    }
    // 重置图片位置
    function resetImagePosition (i) {
        const targetImageIndex = i !== undefined ? i : index;
        if (!imageViewer.isImg(typesArr[targetImageIndex])) {
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
        if (!imageViewer.isImg(typesArr[index])) {
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
        fitScreenBtn.setAttribute('data-content', fitText)
    }
    // 将按钮设置为原始大小
    function originalSizeBtnReset () {
        fitScreenBtn.querySelector('svg use').setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageViewer.getIconName('actual'))
        fitScreenBtn.setAttribute('type', 'natural')
        fitScreenBtn.setAttribute('data-content', actualSizeText)
    }
    // 切换适应屏幕、原始大小
    function fitScreenOrOriginal (type) {
        if (!imageViewer.isImg(typesArr[index])) {
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
        if (!imageViewer.isImg(typesArr[index])) {
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
            imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left, 0.2s ease'
        })
    }
    // 图片加载完毕
    function imageLoaded (i) {
        if (i === Number(index)){
            imageSizeCheck()
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
        thumbnailImage.src = images[index]
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
    function thumbnailMoveStart (e) {
        thumbnailMoveStartX = e.clientX !== undefined ? e.clientX : e.pageX
        thumbnailMoveStartY = e.clientY !== undefined ? e.clientY : e.pageY
        if (e.target === thumbnailCurrView) {
            moveImageStart(e, -thumbnailZoom)
        } else {
            // 获取小图可视框的位置信息, 将视图中心移动到点击位置
            const currViewRect = thumbnailCurrView.getBoundingClientRect();
            moveImageStart({...e, clientX: currViewRect.left + currViewRect.width / 2, clientY: currViewRect.top + currViewRect.height / 2}, -thumbnailZoom)
            moveImage(e, -thumbnailZoom)
        }
        e.preventDefault()
        e.stopPropagation()
    }
    // 小图移动中
    const thumbnailMove = imageViewer.throttle(function (e) {
        moveImage(e, -thumbnailZoom)
    }, 40)
    // 小图移动结束
    function thumbnailMoveEnd (e) {
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
        if (imageViewer.isImg(typesArr[index])) {
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
                imageViewer.toast('已到最前')
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
    }
    nextBtn.onclick = function () {
        if (index === images.length - 1) {
            if (loop) {
                oldIndex = index;
                index = 0
            } else {
                imageViewer.toast('已到最后')
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
    }
    if (images.length > 1) {
        dialog.appendChild(prevBtn);
        dialog.appendChild(nextBtn);
    }
    /* 创建内容区域  */
    const content =imageViewer.createElement("div", "preview-content", imageViewer.preViewStyle.content );
    // 创建preview-content-wrapper
    const contentWrapper =imageViewer.createElement("div", "preview-content-wrapper", imageViewer.preViewStyle.contentWrapper);
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
            ext = imageUrl.split('.').pop();
            if (imageUrl.split('.').length <= 1) {
                ext = ''
            }
            typesArr[i] = ext;
        }
        if (imageViewer.isImg(ext)) {
            // 插入图片
            const wrap =imageViewer.createElement("div", "preview-img-wrapper", imageViewer.preViewStyle.imageWrap);
            const img =imageViewer.createElement("img", "preview-img", imageViewer.preViewStyle.image);
            img.setAttribute('loading', 'lazy')
            img.src = images[i];
            img.onmousedown = moveImageStart;
            content.onmousemove = imageViewer.throttle(moveImage, 40);
            img.onmouseup = moveImageEnd;
            content.onmouseleave = moveImageEnd;
            wrap.appendChild(img)
            contentWrapper.appendChild(wrap);
            // 加载成功后执行fit方法
            img.onload = () => {
                imageLoaded(i)
            }
        } else {
            // 展示图标和名称
            const wrap = imageViewer.createElement("div", "preview-img-wrapper", {...imageViewer.preViewStyle.imageWrap, flexDirection: 'column' });
            const icon = imageViewer.createElement("div", "preview-icon", imageViewer.preViewStyle.fileIcon, `#svg-file-icon#:${ext}`);
            const fileName = imageViewer.createElement("div", "preview-file-name", imageViewer.preViewStyle.fileName, imageNames[i])
            wrap.appendChild(icon)
            wrap.appendChild(fileName)
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
    zoomInBtn.setAttribute('data-content', zoomInText)
    zoomOutBtn.setAttribute('data-content', zoomOutText)
    rotateLeftBtn.setAttribute('data-content', rotateLeftText)
    rotateRightBtn.setAttribute('data-content', rotateRightText)
    downloadBtn.setAttribute('data-content', downloadText)
    deleteBtn.setAttribute('data-content', deleteText)

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
            downloadHandler(index, images[index])
        }
    }
    if (showDelete) {
        buttonWrap.appendChild(deleteBtn);
        deleteBtn.onclick = async function () {
            try {
                await deleteHandler(index, images[index])
                // 删除当前图片
                const currImageElement = contentWrapper.children[index]
                if (currImageElement) {
                    currImageElement.parentNode.removeChild(currImageElement)
                }
                if (images.length === 1) {
                    closeDialog()
                } else {
                    images.splice(index, 1)
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
                imageViewer.toast('删除失败')
                console.error('删除失败=>', e || '未知错误')
            }

        }
    }
    dialog.appendChild(buttonWrap);

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
    imageSizeCheck()
    // 按钮状态
    updateBtnStatus()
    // 监听resize事件
    const resizeHandler = imageViewer.throttle(function () {
        if (!dialog) {
            return
        }
        console.log('resize')
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
        const ctrlKey = e.ctrlKey || e.metaKey;
        const deltaY = e.wheelDeltaY || -e.deltaY;
        // ie关闭动画，ie下短时间内重复触发动画会忽大忽小地跳跃
        const isIe = !!window.ActiveXObject || "ActiveXObject" in window
        const imageElement = contentWrapper.children[index].querySelector('img');
        if (isIe) {
            imageElement.style.transition = 'transform 0s ease, top 0s ease, left, 0s ease'
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
                imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left, 0.2s ease'
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
        thumbnailContainer.onmousemove = thumbnailMove;
        thumbnailContainer.onmouseup = thumbnailMoveEnd;
        thumbnailContainer.onmouseleave = moveImageEnd;
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
};

// 插入svg图标
!function(e){const fonticonSvg = document.querySelector(`svg[name="fonticonpreview_img_icon"]`); if (fonticonSvg) { fonticonSvg.remove();}var t,n,o,i,a,d='<svg name=fonticonpreview_img_icon xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="display:none;"><symbol viewBox="0 0 24 24" id="preview_img_icon-actual">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-537.000000, -75.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/download-Copy-9" transform="translate(537.000000, 75.000000)">                <path d="M19.8,4.8 C20.4627417,4.8 21,5.3372583 21,6 L21,18 C21,18.6627417 20.4627417,19.2 19.8,19.2 L4.2,19.2 C3.5372583,19.2 3,18.6627417 3,18 L3,6 C3,5.3372583 3.5372583,4.8 4.2,4.8 L19.8,4.8 Z M19.56,6.24 L4.44,6.24 L4.44,17.76 L19.56,17.76 L19.56,6.24 Z M12,13.7484 C12.3612,13.7484 12.6468,14.0424 12.6468,14.4372 C12.6468,14.832 12.3612,15.1092 12,15.1092 C11.6388,15.1092 11.3532,14.832 11.3532,14.4372 C11.3532,14.0424 11.6388,13.7484 12,13.7484 Z M9.0012,8.8176 L9.0012,14.202 L10.2108,14.202 L10.2108,15 L6.6828,15 L6.6828,14.202 L8.0352,14.202 L8.0352,9.9012 L6.9264,9.9012 L6.9264,9.288 C7.506,9.1788 7.9176,9.036 8.2704,8.8176 L9.0012,8.8176 Z M16.2924,8.8176 L16.2924,14.202 L17.502,14.202 L17.502,15 L13.974,15 L13.974,14.202 L15.3264,14.202 L15.3264,9.9012 L14.2176,9.9012 L14.2176,9.288 C14.7972,9.1788 15.2088,9.036 15.5616,8.8176 L16.2924,8.8176 Z M12,10.4472 C12.3612,10.4472 12.6468,10.7412 12.6468,11.136 C12.6468,11.5224 12.3612,11.808 12,11.808 C11.6388,11.808 11.3532,11.5224 11.3532,11.136 C11.3532,10.7412 11.6388,10.4472 12,10.4472 Z" id="Combined-Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-close">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-124.000000, -67.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/Shut" transform="translate(124.000000, 67.000000)">                <path d="M13.053508,11.3523263 L20,18.299 L26.946492,11.3523263 C27.4162604,10.8825579 28.1779054,10.8825579 28.6476737,11.3523263 C29.1174421,11.8220946 29.1174421,12.5837396 28.6476737,13.053508 L21.701,20 L28.6476737,26.946492 C29.1174421,27.4162604 29.1174421,28.1779054 28.6476737,28.6476737 C28.1779054,29.1174421 27.4162604,29.1174421 26.946492,28.6476737 L20,21.701 L13.053508,28.6476737 C12.5837396,29.1174421 11.8220946,29.1174421 11.3523263,28.6476737 C10.8825579,28.1779054 10.8825579,27.4162604 11.3523263,26.946492 L18.299,20 L11.3523263,13.053508 C10.8825579,12.5837396 10.8825579,11.8220946 11.3523263,11.3523263 C11.8220946,10.8825579 12.5837396,10.8825579 13.053508,11.3523263 Z" id="Combined-Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-delete">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-601.000000, -75.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/download-Copy-8" transform="translate(601.000000, 75.000000)">                <path d="M13.2,2.88 C14.2603867,2.88 15.12,3.73961328 15.12,4.8 L15.12,6.48 L19.2,6.48 C19.597645,6.48 19.92,6.80235498 19.92,7.2 C19.92,7.59764502 19.597645,7.92 19.2,7.92 L18.688,7.92 L18.171326,19.2871827 C18.1270462,20.2613386 17.362289,21.0387159 16.4058405,21.1140182 L16.2533064,21.12 L7.74669358,21.12 C6.72020753,21.12 5.87528431,20.31261 5.82867398,19.2871827 L5.311,7.92 L4.8,7.92 C4.40235498,7.92 4.08,7.59764502 4.08,7.2 C4.08,6.80235498 4.40235498,6.48 4.8,6.48 L8.88,6.48 L8.88,4.8 C8.88,3.79010789 9.65969459,2.9623232 10.6499531,2.88577657 L10.8,2.88 Z M17.2464,7.92 L6.7524,7.92 L7.26718868,19.2217957 C7.27738469,19.4461079 7.44038277,19.6286864 7.65288935,19.6708262 L7.74669358,19.68 L16.2533064,19.68 C16.5099279,19.68 16.7211587,19.4781525 16.7328113,19.2217957 L17.2464,7.92 Z M12,10.08 C12.397645,10.08 12.72,10.402355 12.72,10.8 L12.72,16.8 C12.72,17.197645 12.397645,17.52 12,17.52 C11.602355,17.52 11.28,17.197645 11.28,16.8 L11.28,10.8 C11.28,10.402355 11.602355,10.08 12,10.08 Z M14.7359551,10.0808983 C15.133104,10.1007558 15.4389591,10.4388062 15.4191017,10.8359551 L15.1191017,16.8359551 C15.0992442,17.233104 14.7611938,17.5389591 14.3640449,17.5191017 C13.966896,17.4992442 13.6610409,17.1611938 13.6808983,16.7640449 L13.9808983,10.7640449 C14.0007558,10.366896 14.3388062,10.0610409 14.7359551,10.0808983 Z M9.26404492,10.0808983 C9.66119381,10.0610409 9.99924424,10.366896 10.0191017,10.7640449 L10.3191017,16.7640449 C10.3389591,17.1611938 10.033104,17.4992442 9.63595508,17.5191017 C9.23880619,17.5389591 8.90075576,17.233104 8.88089832,16.8359551 L8.58089832,10.8359551 C8.56104087,10.4388062 8.86689602,10.1007558 9.26404492,10.0808983 Z M13.2,4.32 L10.8,4.32 C10.5349033,4.32 10.32,4.53490332 10.32,4.8 L10.32,6.48 L13.68,6.48 L13.68,4.8 C13.68,4.56804041 13.5154646,4.3745101 13.2967367,4.32975189 L13.2,4.32 Z" id="Combined-Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-download">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-569.000000, -75.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/download-Copy-3" transform="translate(569.000000, 75.000000)">                <path d="M12.0040274,4.8 C11.799015,4.8 11.6300811,4.86644632 11.4972257,4.99933896 C11.3643704,5.13223161 11.2979427,5.30336639 11.2979427,5.5127433 L11.2979427,13.676827 L11.3567711,15.5911862 L8.8416772,12.8001469 L6.65049906,10.5824458 C6.58299263,10.5135023 6.50431504,10.4615742 6.41446629,10.4266618 C6.32461753,10.3917493 6.23208386,10.3742931 6.13686527,10.3742931 C5.93655145,10.3742931 5.77246001,10.4421349 5.64459094,10.5778186 C5.51672188,10.7135023 5.45278734,10.8808912 5.45278734,11.0799853 C5.45278734,11.1795813 5.47330776,11.2740605 5.5143486,11.3634227 C5.55538944,11.4527849 5.61584797,11.5406047 5.69572419,11.6268821 L11.4719827,17.5390378 C11.5494617,17.6174807 11.6325502,17.6780757 11.7212483,17.7208226 C11.8099464,17.7635696 11.9042061,17.7849431 12.0040274,17.7849431 C12.0984788,17.7849431 12.1913961,17.7635696 12.2827791,17.7208226 C12.3741621,17.6780757 12.4559081,17.6174807 12.5280173,17.5390378 L18.3146319,11.6268821 C18.3945081,11.5406047 18.4547749,11.4527849 18.4954322,11.3634227 C18.5360894,11.2740605 18.5564181,11.1795813 18.5564181,11.0799853 C18.5564181,10.8808912 18.4925075,10.7135023 18.3646864,10.5778186 C18.2368653,10.4421349 18.0731334,10.3742931 17.8734908,10.3742931 C17.7775051,10.3742931 17.6845879,10.3917493 17.5947391,10.4266618 C17.5048904,10.4615742 17.4262128,10.5135023 17.3587064,10.5824458 L15.1663775,12.8001469 L12.6432289,15.58296 L12.7020573,13.676827 L12.7020573,5.5127433 C12.7020573,5.30336639 12.6369721,5.13223161 12.5068016,4.99933896 C12.3766312,4.86644632 12.2090398,4.8 12.0040274,4.8 Z M6.08292725,17.7661403 C5.88261343,17.7661403 5.71871377,17.8325866 5.59122826,17.9654793 C5.46374275,18.0983719 5.4,18.2695067 5.4,18.4788836 C5.4,18.6890439 5.46374275,18.8617701 5.59122826,18.9970621 C5.71871377,19.132354 5.88261343,19.2 6.08292725,19.2 L17.9101687,19.2 C18.1151811,19.2 18.2814061,19.132354 18.4088437,18.9970621 C18.5362812,18.8617701 18.6,18.6890439 18.6,18.4788836 C18.6,18.2695067 18.5362812,18.0983719 18.4088437,17.9654793 C18.2814061,17.8325866 18.1151811,17.7661403 17.9101687,17.7661403 L6.08292725,17.7661403 Z" id="Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-fit">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-537.000000, -150.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/download-Copy-12" transform="translate(537.000000, 150.000000)">                <path d="M19.8,4.8 C20.4627417,4.8 21,5.3372583 21,6 L21,18 C21,18.6627417 20.4627417,19.2 19.8,19.2 L4.2,19.2 C3.5372583,19.2 3,18.6627417 3,18 L3,6 C3,5.3372583 3.5372583,4.8 4.2,4.8 L19.8,4.8 Z M19.56,6.24 L4.44,6.24 L4.44,17.76 L19.56,17.76 L19.56,6.24 Z M15.6,8.4 C16.2627417,8.4 16.8,8.9372583 16.8,9.6 L16.8,14.4 C16.8,15.0627417 16.2627417,15.6 15.6,15.6 L8.4,15.6 C7.7372583,15.6 7.2,15.0627417 7.2,14.4 L7.2,9.6 C7.2,8.9372583 7.7372583,8.4 8.4,8.4 Z M15.6,9.6 L8.4,9.6 L8.4,14.4 L15.6,14.4 L15.6,9.6 Z" id="Combined-Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-left-arrow">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-202.000000, -67.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/Shut-Copy-2" transform="translate(202.000000, 67.000000)">                <path d="M29.1371072,14.855176 C29.6209643,15.328744 29.6209643,16.0965493 29.1371072,16.5701173 L20.3761007,25.144824 C19.8922436,25.618392 19.1077564,25.618392 18.6238993,25.144824 L9.86289277,16.5701173 C9.37903574,16.0965493 9.37903574,15.328744 9.86289277,14.855176 C10.3467498,14.381608 11.1312371,14.381608 11.6150941,14.855176 L19.5,22.572412 L27.3849059,14.855176 C27.8203772,14.4289648 28.499359,14.3863437 28.9835325,14.7273126 L29.1371072,14.855176 Z" id="Path" transform="translate(19.500000, 20.000000) rotate(90.000000) translate(-19.500000, -20.000000) " fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-left-rotate">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-441.000000, -75.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/download-Copy-6" transform="translate(441.000000, 75.000000)">                <path d="M15.6,9.6 C16.2627417,9.6 16.8,10.1372583 16.8,10.8 L16.8,19.2 C16.8,19.8627417 16.2627417,20.4 15.6,20.4 L4.8,20.4 C4.1372583,20.4 3.6,19.8627417 3.6,19.2 L3.6,10.8 C3.6,10.1372583 4.1372583,9.6 4.8,9.6 L15.6,9.6 Z M15.36,11.04 L5.04,11.04 L5.04,18.96 L15.36,18.96 L15.36,11.04 Z M12.5211128,2.92413473 C12.5721789,2.98796743 12.6,3.06727921 12.6,3.14902495 L12.6008463,4.09947711 C17.3575917,4.40884635 21.12,8.3650444 21.12,13.2 C21.12,13.597645 20.797645,13.92 20.4,13.92 C20.002355,13.92 19.68,13.597645 19.68,13.2 C19.68,9.16067431 16.5615965,5.84969078 12.6009016,5.54316151 L12.6,6.45097505 C12.6,6.64979756 12.4388225,6.81097505 12.24,6.81097505 C12.1582543,6.81097505 12.0789425,6.78315398 12.0151098,6.73208783 L9.95139096,5.08111277 C9.79613667,4.95690933 9.77096497,4.73036408 9.89516841,4.57510978 C9.91177584,4.55435049 9.93063167,4.53549466 9.95139096,4.51888723 L12.0151098,2.86791217 C12.1703641,2.74370874 12.3969093,2.76888043 12.5211128,2.92413473 Z" id="Combined-Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 120 120" id="preview_img_icon-pdf"><path d="M24.400 0.312 C 23.685 0.466,22.425 0.923,21.600 1.328 C 19.730 2.245,17.395 4.511,16.438 6.337 C 15.754 7.643,15.000 10.239,15.000 11.288 L 15.000 11.911 13.269 12.147 C 12.243 12.287,11.117 12.589,10.505 12.889 C 9.301 13.478,7.797 14.893,7.087 16.104 C 6.077 17.827,6.007 18.778,6.003 30.801 L 6.000 41.902 10.500 47.147 L 15.000 52.392 15.000 80.864 C 15.000 108.563,15.011 109.378,15.395 110.881 C 15.973 113.140,16.861 114.674,18.593 116.407 C 20.326 118.139,21.860 119.027,24.119 119.605 C 25.630 119.991,26.473 120.000,63.000 120.000 C 99.527 120.000,100.370 119.991,101.881 119.605 C 104.140 119.027,105.674 118.139,107.407 116.407 C 109.139 114.674,110.027 113.140,110.605 110.881 C 110.992 109.368,111.000 108.517,111.000 69.618 L 111.000 29.899 96.050 14.949 L 81.099 0.000 53.400 0.016 C 30.444 0.029,25.477 0.080,24.400 0.312 M105.800 76.500 L 105.800 113.800 65.600 113.800 L 25.400 113.800 25.400 77.900 L 25.400 42.000 39.850 41.999 C 48.274 41.998,54.796 41.916,55.490 41.803 C 56.926 41.568,58.447 40.852,59.512 39.912 L 60.300 39.217 83.050 39.208 L 105.800 39.200 105.800 76.500 M46.700 58.004 C 43.140 58.580,40.838 60.530,39.798 63.848 C 39.422 65.047,39.405 65.764,39.403 80.819 C 39.400 95.676,39.421 96.597,39.775 97.628 C 40.674 100.240,41.889 101.714,44.024 102.780 L 45.264 103.400 62.931 103.400 L 80.599 103.400 81.849 102.804 C 83.912 101.822,85.205 100.319,85.981 98.000 C 86.415 96.702,86.415 96.681,86.358 80.400 L 86.300 64.100 85.743 62.910 C 85.437 62.256,84.959 61.422,84.681 61.057 C 83.890 60.020,82.145 58.812,80.763 58.343 C 79.519 57.922,79.266 57.915,63.600 57.879 C 54.855 57.859,47.250 57.915,46.700 58.004 M62.586 66.693 C 64.199 67.527,64.765 69.454,64.405 72.883 C 64.290 73.974,64.003 75.570,63.767 76.431 L 63.338 77.996 64.238 79.348 C 64.733 80.092,65.600 81.206,66.165 81.824 L 67.192 82.948 70.363 82.847 C 73.258 82.754,73.649 82.784,74.861 83.187 C 76.970 83.889,77.808 84.929,77.517 86.482 C 77.430 86.943,77.152 87.341,76.651 87.724 C 75.971 88.243,75.779 88.286,74.197 88.276 C 72.833 88.268,72.191 88.155,71.072 87.727 C 69.756 87.225,69.258 86.941,67.272 85.565 L 66.500 85.029 64.900 85.402 C 63.142 85.811,61.800 86.195,60.354 86.703 C 59.539 86.989,59.304 87.207,58.663 88.267 C 57.015 90.993,54.503 93.702,52.761 94.631 C 52.366 94.841,51.652 94.987,50.986 94.992 C 49.986 94.999,49.784 94.925,49.014 94.266 C 48.159 93.534,48.157 93.529,48.241 92.366 C 48.310 91.415,48.434 91.085,48.913 90.581 C 50.272 89.148,53.025 87.367,54.600 86.901 C 55.835 86.536,57.042 84.891,58.122 82.100 C 59.992 77.266,60.222 76.342,59.746 75.572 C 58.718 73.909,58.300 68.891,59.091 67.722 C 59.912 66.510,61.391 66.075,62.586 66.693 M60.932 68.296 C 60.467 68.762,60.347 70.047,60.611 71.741 C 61.024 74.390,61.469 74.248,61.932 71.318 C 62.101 70.253,62.184 69.163,62.117 68.897 C 61.949 68.228,61.320 67.909,60.932 68.296 M62.279 80.833 C 62.004 81.277,60.997 84.264,61.091 84.358 C 61.254 84.521,64.167 83.781,64.382 83.522 C 64.542 83.329,64.367 82.968,63.682 82.082 C 62.484 80.532,62.472 80.521,62.279 80.833 M69.550 84.517 C 69.069 84.998,70.030 85.790,71.892 86.449 C 73.222 86.919,73.845 86.891,74.365 86.337 C 74.911 85.756,74.915 85.366,74.380 84.881 C 74.033 84.567,73.583 84.488,71.829 84.434 C 70.658 84.397,69.632 84.435,69.550 84.517 M53.528 89.299 C 51.146 90.491,49.820 91.677,49.807 92.629 C 49.787 94.123,51.864 93.092,53.687 90.703 C 54.338 89.850,55.101 88.589,54.955 88.606 C 54.925 88.610,54.283 88.922,53.528 89.299 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 120 120" id="preview_img_icon-ppt"><path d="M21.900 0.278 C 20.345 0.657,18.479 1.758,17.411 2.926 C 15.675 4.825,15.006 6.770,15.002 9.924 L 15.000 11.949 12.850 12.042 C 11.219 12.112,10.454 12.242,9.680 12.579 C 8.418 13.129,7.165 14.382,6.560 15.700 L 6.100 16.700 6.045 29.300 L 5.991 41.900 10.495 47.146 L 15.000 52.392 15.002 82.246 C 15.005 114.344,14.962 112.944,16.020 115.149 C 16.606 116.371,18.629 118.394,19.851 118.980 C 22.077 120.048,19.824 119.995,63.000 119.995 C 106.176 119.995,103.923 120.048,106.149 118.980 C 107.371 118.394,109.394 116.371,109.980 115.149 C 111.049 112.922,110.995 115.256,110.998 70.999 L 111.000 29.899 96.050 14.949 L 81.099 0.000 52.000 0.017 C 29.846 0.030,22.661 0.092,21.900 0.278 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-right-arrow">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-280.000000, -67.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/Shut-Copy-4" transform="translate(280.000000, 67.000000)">                <path d="M30.1371072,14.855176 C30.6209643,15.328744 30.6209643,16.0965493 30.1371072,16.5701173 L21.3761007,25.144824 C20.8922436,25.618392 20.1077564,25.618392 19.6238993,25.144824 L10.8628928,16.5701173 C10.3790357,16.0965493 10.3790357,15.328744 10.8628928,14.855176 C11.3467498,14.381608 12.1312371,14.381608 12.6150941,14.855176 L20.5,22.572412 L28.3849059,14.855176 C28.8203772,14.4289648 29.499359,14.3863437 29.9835325,14.7273126 L30.1371072,14.855176 Z" id="Path" transform="translate(20.500000, 20.000000) scale(-1, 1) rotate(90.000000) translate(-20.500000, -20.000000) " fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-right-rotate">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-409.000000, -75.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/download-Copy-7" transform="translate(409.000000, 75.000000)">                <path d="M19.2,9.6 C19.8627417,9.6 20.4,10.1372583 20.4,10.8 L20.4,19.2 C20.4,19.8627417 19.8627417,20.4 19.2,20.4 L8.4,20.4 C7.7372583,20.4 7.2,19.8627417 7.2,19.2 L7.2,10.8 C7.2,10.1372583 7.7372583,9.6 8.4,9.6 L19.2,9.6 Z M18.96,11.04 L8.64,11.04 L8.64,18.96 L18.96,18.96 L18.96,11.04 Z M12.0788872,2.92413473 C12.2030907,2.76888043 12.4296359,2.74370874 12.5848902,2.86791217 L14.648609,4.51888723 C14.6693683,4.53549466 14.6882242,4.55435049 14.7048316,4.57510978 C14.829035,4.73036408 14.8038633,4.95690933 14.648609,5.08111277 L12.5848902,6.73208783 C12.5210575,6.78315398 12.4417457,6.81097505 12.36,6.81097505 C12.1611775,6.81097505 12,6.64979756 12,6.45097505 L12,5.52 C7.75845312,5.52 4.32,8.95845312 4.32,13.2 C4.32,13.597645 3.99764502,13.92 3.6,13.92 C3.20235498,13.92 2.88,13.597645 2.88,13.2 C2.88,8.16316308 6.96316308,4.08 12,4.08 L12,3.14902495 C12,3.06727921 12.0278211,2.98796743 12.0788872,2.92413473 Z" id="Combined-Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 120 120" id="preview_img_icon-video"><path d="M21.900 0.278 C 20.345 0.657,18.479 1.758,17.411 2.926 C 15.675 4.825,15.006 6.770,15.002 9.924 L 15.000 11.949 12.850 12.042 C 11.219 12.112,10.454 12.242,9.680 12.579 C 8.418 13.129,7.165 14.382,6.560 15.700 L 6.100 16.700 6.045 29.300 L 5.991 41.900 10.495 47.146 L 15.000 52.392 15.002 82.246 C 15.005 114.344,14.962 112.944,16.020 115.149 C 16.606 116.371,18.629 118.394,19.851 118.980 C 22.077 120.048,19.824 119.995,63.000 119.995 C 106.176 119.995,103.923 120.048,106.149 118.980 C 107.371 118.394,109.394 116.371,109.980 115.149 C 111.049 112.922,110.995 115.256,110.998 70.999 L 111.000 29.899 96.050 14.949 L 81.099 0.000 52.000 0.017 C 29.846 0.030,22.661 0.092,21.900 0.278 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 120 120" id="preview_img_icon-word"><path d="M21.900 0.278 C 20.345 0.657,18.479 1.758,17.411 2.926 C 15.675 4.825,15.006 6.770,15.002 9.924 L 15.000 11.949 12.850 12.042 C 11.219 12.112,10.454 12.242,9.680 12.579 C 8.418 13.129,7.165 14.382,6.560 15.700 L 6.100 16.700 6.045 29.300 L 5.991 41.900 10.495 47.146 L 15.000 52.392 15.002 82.246 C 15.005 114.344,14.962 112.944,16.020 115.149 C 16.606 116.371,18.629 118.394,19.851 118.980 C 22.077 120.048,19.824 119.995,63.000 119.995 C 106.176 119.995,103.923 120.048,106.149 118.980 C 107.371 118.394,109.394 116.371,109.980 115.149 C 111.049 112.922,110.995 115.256,110.998 70.999 L 111.000 29.899 96.050 14.949 L 81.099 0.000 52.000 0.017 C 29.846 0.030,22.661 0.092,21.900 0.278 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-zoom-in">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-473.000000, -75.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/download-Copy-5" transform="translate(473.000000, 75.000000)">                <path d="M11.4,3.6 C15.707821,3.6 19.2,7.09217895 19.2,11.4 C19.2,13.2294818 18.5701497,14.9118542 17.5154635,16.2421026 L20.4363961,19.1636039 C20.787868,19.5150758 20.787868,20.0849242 20.4363961,20.4363961 C20.0849242,20.787868 19.5150758,20.787868 19.1636039,20.4363961 L16.2421026,17.5154635 C14.9118542,18.5701497 13.2294818,19.2 11.4,19.2 C7.09217895,19.2 3.6,15.707821 3.6,11.4 C3.6,7.09217895 7.09217895,3.6 11.4,3.6 Z M11.4,5.04 C7.88746899,5.04 5.04,7.88746899 5.04,11.4 C5.04,14.912531 7.88746899,17.76 11.4,17.76 C14.912531,17.76 17.76,14.912531 17.76,11.4 C17.76,7.88746899 14.912531,5.04 11.4,5.04 Z M11.4,7.68 C11.797645,7.68 12.12,8.00235498 12.12,8.4 L12.119,10.68 L14.4,10.68 C14.797645,10.68 15.12,11.002355 15.12,11.4 C15.12,11.797645 14.797645,12.12 14.4,12.12 L12.119,12.12 L12.12,14.4 C12.12,14.797645 11.797645,15.12 11.4,15.12 C11.002355,15.12 10.68,14.797645 10.68,14.4 L10.679,12.12 L8.4,12.12 C8.00235498,12.12 7.68,11.797645 7.68,11.4 C7.68,11.002355 8.00235498,10.68 8.4,10.68 L10.679,10.68 L10.68,8.4 C10.68,8.00235498 11.002355,7.68 11.4,7.68 Z" id="Combined-Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-zoom-out">    <title>Slice</title>    <g id="批量图片" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g id="图标" transform="translate(-505.000000, -75.000000)" fill="#FFFFFF" fill-rule="nonzero">            <g id="General/Icon/download-Copy-4" transform="translate(505.000000, 75.000000)">                <path d="M11.4,3.6 C15.707821,3.6 19.2,7.09217895 19.2,11.4 C19.2,13.2294818 18.5701497,14.9118542 17.5154635,16.2421026 L20.4363961,19.1636039 C20.787868,19.5150758 20.787868,20.0849242 20.4363961,20.4363961 C20.0849242,20.787868 19.5150758,20.787868 19.1636039,20.4363961 L16.2421026,17.5154635 C14.9118542,18.5701497 13.2294818,19.2 11.4,19.2 C7.09217895,19.2 3.6,15.707821 3.6,11.4 C3.6,7.09217895 7.09217895,3.6 11.4,3.6 Z M11.4,5.04 C7.88746899,5.04 5.04,7.88746899 5.04,11.4 C5.04,14.912531 7.88746899,17.76 11.4,17.76 C14.912531,17.76 17.76,14.912531 17.76,11.4 C17.76,7.88746899 14.912531,5.04 11.4,5.04 Z M14.4,10.68 C14.797645,10.68 15.12,11.002355 15.12,11.4 C15.12,11.797645 14.797645,12.12 14.4,12.12 L8.4,12.12 C8.00235498,12.12 7.68,11.797645 7.68,11.4 C7.68,11.002355 8.00235498,10.68 8.4,10.68 L14.4,10.68 Z" id="Combined-Shape" fill="currentColor"></path>            </g>        </g>    </g></symbol></svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss"),l=function(e,t){t.parentNode.insertBefore(e,t)};function s(){a||(a=!0,o())}function r(){try{i.documentElement.doScroll("left")}catch(e){return void setTimeout(r,50)}s()}t=function(){var e,t=document.createElement("div");t.innerHTML=d,d=null,(t=t.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",t=t,(e=document.body).firstChild?l(t,e.firstChild):e.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),t()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(o=t,i=e.document,a=!1,r(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,s())})}(window);


export default previewImage