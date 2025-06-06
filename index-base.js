// 样式
const imageViewer = {}
imageViewer.backgroundImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYTg3MzFiOSwgMjAyMS8wOS8wOS0wMDozNzozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wOS0yN1QxMzoyMToxOCswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMDktMjdUMTM6MjI6MjIrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDktMjdUMTM6MjI6MjIrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmFjNGY2NjNlLWRjMmQtNmE0MC1hZGY5LTcwMTc4YTM5YTdkNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDphYzRmNjYzZS1kYzJkLTZhNDAtYWRmOS03MDE3OGEzOWE3ZDciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYzRmNjYzZS1kYzJkLTZhNDAtYWRmOS03MDE3OGEzOWE3ZDciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFjNGY2NjNlLWRjMmQtNmE0MC1hZGY5LTcwMTc4YTM5YTdkNyIgc3RFdnQ6d2hlbj0iMjAyNC0wOS0yN1QxMzoyMToxOCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsXxByUAAAB9SURBVGiB7dfBCcQgAEXBzZKO7L8EazINmPOLMHMULw9B+Nda67cz59yejzE+df+/PT2IgJqAmoDafcp//3b/+BcQUBNQE1C77IGYgJqAmoCaPVATUBNQE1CzB2oCagJqAmr2QE1ATUBNQM0eqAmoCagJqNkDNQE1ATUBtQfspmoVNCx+0wAAAABJRU5ErkJggg=='
imageViewer.backgroundSize = 64
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
        margin: 0
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
        transition: 'transform .2s ease, top 0.2s ease, left, 0.2s ease, background',
        position: 'relative',
        userSelect: 'none',
        margin: 0,
        // backgroundImage: `url(${imageViewer.backgroundImage})`,
        // backgroundColor: 'rgb(239, 239, 239)',
        backgroundRepeat: 'repeat',
        backgroundSize: `${imageViewer.backgroundSize}px`
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
        margin: 0,
        backgroundImage: `url(${imageViewer.backgroundImage})`,
        // backgroundColor: 'rgb(239, 239, 239)',
        backgroundRepeat: 'repeat',
        backgroundSize: '10px 10px'
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
    svg[class^="fonticon"]{
        pointer-events: none;
    }
    svg[name^="fonticon"] text, svg[name^="fonticon"] text tspan{
        text-anchor: start;
        dominant-baseline: initial;
        font-size: 20px;
    }
    .preview-hot-zone.active:hover>.preview-file-name{
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

imageViewer.ZLang = self.ZLang || function (key) {
    return key
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
    if (typeof option === 'string' && option[0] === '{') {
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
    imageViewer.fileType = option.fileType || 'image';
    const toolbar = option.toolbar !== undefined ? option.toolbar : true;
    const loop = option.loop !== undefined ? option.loop : true;
    const maxZoom = option.maxZoom || 4;
    const minZoom = option.minZoom || 0.25;
    let images = option.images ? [...option.images] : [];
    console.log(option, option.close)
    const showCloseButton = option.close !== undefined ? option.close : true;
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
        function downloadA(data) {
            // 默认下载事件
            let aEl = document.createElement('a')
            aEl.href = data ? URL.createObjectURL(data) : url
            aEl.target = '_blank'
            aEl.download = url && url.split ? url.split('/').pop() : ''
            aEl.click()
            aEl = null
        }
        // 判断url是否和当前地址同源
        const isSameOrigin = url.indexOf(location.origin) === 0
        console.log('isSameOrigin', isSameOrigin)
        // 非同源，或者ie,通过http请求下载
        if (!isSameOrigin || navigator?.msSaveBlob) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url); // 异步
            xhr.responseType = "blob"; // blob 类型
            xhr.send();
            xhr.onload = function () {
                if (xhr.status !== 200) {
                    downloadA()
                } else {
                    const blob = new Blob([xhr.response]);
                    if (navigator?.msSaveBlob) {
                        navigator?.msSaveBlob(blob, url.split('/').pop());
                    } else {
                        downloadA(blob)
                    }

                }
            }
            xhr.onerror = function () {
                downloadA() // 跨域下载失败，使用a标签下载
            }
            return
        }
        downloadA()
    };
    const deleteHandler = option.onDelete || function (index, url, id, item) {
    };
    const closeHandler = option.onClose || null
    const fileClickHandler = option.onFileClick || null
    imageViewer.clickableFileTypes = option.clickableFileTypes || 'all'
    // imageViewer.clickableFileTypes = option.clickableFileTypes || ['pdf']
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
    let closeBtn =imageViewer.createElement("div", "close-btn preview-operate-button box-shadow hover bottom-tooltip", imageViewer.preViewStyle.closeBtn, "#svg-icon#:close"); // 关闭按钮
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
    const thumbnailWidth = 120
    const thumbnailHeight = 100
    // const thumbnailWidth = 120
    // const thumbnailHeight = 100
    let thumbnailBoxRight = 10
    let thumbnailBoxBottom = 10
    let thumbnailBoxStartX = 0
    let thumbnailBoxStartY = 0
    const buttonTooltip = option.buttonTooltip !== undefined ? option.buttonTooltip : true;
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
    const nextText = option.nextText || '';
    const prevText = option.prevText || '';
    const thumbnailTitleText = option.thumbnailTitleText || '概览图';
    const firstOneText = option.firstText || '已到第一个';
    const lastOneText = option.lastText || '已到最后一个';
    const closeText = option.closeText || '';
    // const maxZoomText = option.maxZoomText || '';
    // const minZoomText = option.minZoomText || '';
    // const fitText = option.fitText || imageViewer.ZLang('适应屏幕');
    // const actualSizeText = option.actualSizeText || imageViewer.ZLang('原始尺寸');
    // const zoomInText = option.zoomInText || imageViewer.ZLang('放大');
    // const zoomOutText = option.zoomOutText || imageViewer.ZLang('缩小');
    // const rotateLeftText = option.rotateLeftText || imageViewer.ZLang('逆时针旋转90°');
    // const rotateRightText = option.rotateRightText || imageViewer.ZLang('顺时针旋转90°');
    // const downloadText = option.downloadText || imageViewer.ZLang('下载');
    // const deleteText = option.deleteText || imageViewer.ZLang('删除');
    // const nextText = option.nextText || '';
    // const prevText = option.prevText || '';
    // const thumbnailTitleText = option.thumbnailTitleText || imageViewer.ZLang('概览图');
    // const firstOneText = option.firstText || '';
    // const lastOneText = option.lastText || '';
    // const closeText = option.closeText || '';
    if (buttonTooltip) {
        prevBtn.setAttribute('data-content', prevText)
        nextBtn.setAttribute('data-content', nextText)
        closeBtn.setAttribute('data-content', closeText);
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
            window.removeEventListener('popstate', closeDialog)
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
        imageElement.style.backgroundSize = imageViewer.backgroundSize / zoom + 'px';
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
        }, 250)
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
    function limitDragRange (again = false) {
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
        imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left 0.2s ease, background'

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
            imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left 0.2s ease, background'
        })
    }
    // 图片加载完毕
    function imageLoaded (e) {
        const imgWrapElement = e.target?.parentNode
        const i = Array.prototype.indexOf.call(imgWrapElement.parentNode.children, imgWrapElement);
        imageLoadFlag[i] = true
        e.target.style.backgroundImage = `url(${imageViewer.backgroundImage})`
        console.log('imageLoaded', i, e.target)
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
    console.log(showCloseButton, 'showCloseButton')
    if (showCloseButton) {
        dialog.appendChild(closeBtn);
    }
    // 创建上一张、下一张按钮
    function prevFn() {
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
        hideLoading()
        if (!imageLoadFlag[index] && imageViewer.isImg(imageTypes[index])) {
            showLoading()
        }
    }
    prevBtn.onclick = prevFn
    function nextFn() {
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
        hideLoading()
        if (!imageLoadFlag[index] && imageViewer.isImg(imageTypes[index])) {
            showLoading()
        }
    }
    nextBtn.onclick = nextFn
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
            const hotZone = imageViewer.createElement("div", "preview-hot-zone", imageViewer.preViewStyle.hotZone);
            const icon = imageViewer.createElement("div", "preview-icon", imageViewer.preViewStyle.fileIcon, `#svg-file-icon#:${ext}`);
            const fileName = imageViewer.createElement("div", "preview-file-name", imageViewer.preViewStyle.fileName, imageNames[i])
            // 支持文件预览
            if (fileClickHandler && imageViewer.clickableFileTypes === 'all' || imageViewer.clickableFileTypes.indexOf(ext) !== -1) {
                hotZone.style.cursor = 'pointer'
                hotZone.classList.add('active')
                hotZone.addEventListener('click', () => {
                    fileClickHandler(index, images[index], imageIds[index], rawImages[index])
                })
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
        fitScreenBtn.setAttribute('data-content', actualSizeText)
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
        deleteBtn.onclick = function () {
            try {
                deleteHandler(index, images[index], imageIds[index], rawImages[index])
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
                // 删除后当只剩一张时，隐藏翻页按钮
                if (images.length === 1) {
                    prevBtn.style.display = 'none'
                    nextBtn.style.display = 'none'
                }
                // 重置按钮状态
                updateBtnStatus()
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
    // 滚轮停止
    let scrollTimer = null
    let againLimitTimer = null
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
            imageElement.style.transition = 'none'
            if (scrollTimer) {
                clearTimeout(scrollTimer)
            }
            scrollTimer = setTimeout(() => {
                // 恢复动画
                !isIe && (imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left 0.2s ease, background')
                scrollTimer = null
            }, 100)
        }
        if(flag) {
            // 再次更新图片位置
            if (againLimitTimer) {
                clearTimeout(againLimitTimer)
            }
            againLimitTimer = setTimeout(function () {
                limitDragRange()
                againLimitTimer = null
            }, 500)
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
            imageElement.style.transition = 'transform .2s ease, top 0.2s ease, left 0.2s ease, background'
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
    // 监听url变化
    window.addEventListener('popstate', closeDialog)
    return {
        closeDialog,
        next: nextFn,
        prev: prevFn,
        zoom: zoomFn,
        rotateLeft: rotateLeft,
        rotateRight: rotateRight
    }
};

// 插入svg图标
!function(e){const fonticonSvg = document.querySelector(`svg[name="fonticonpreview_img_icon"]`); if (fonticonSvg) { fonticonSvg.remove();}var t,n,o,i,a,d='<svg name=fonticonpreview_img_icon xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0" style="display:none;"><symbol viewBox="0 0 24 24" id="preview_img_icon-actual"><path d="M3.813 4.874 C 3.442 5.002,3.196 5.251,3.062 5.635 C 3.007 5.790,3.000 6.531,3.000 12.004 L 3.000 18.197 3.086 18.426 C 3.200 18.731,3.469 19.000,3.774 19.114 L 4.003 19.200 12.000 19.200 L 19.997 19.200 20.226 19.114 C 20.531 19.000,20.800 18.731,20.914 18.426 L 21.000 18.197 21.000 12.000 C 21.000 5.893,20.999 5.800,20.920 5.588 C 20.811 5.297,20.604 5.067,20.329 4.932 L 20.100 4.820 12.060 4.811 C 4.423 4.803,4.010 4.806,3.813 4.874 M19.560 12.000 L 19.560 17.760 12.000 17.760 L 4.440 17.760 4.440 12.000 L 4.440 6.240 12.000 6.240 L 19.560 6.240 19.560 12.000 M7.940 8.981 C 7.786 9.055,7.493 9.156,7.288 9.206 L 6.917 9.296 6.928 9.598 L 6.940 9.900 7.490 9.911 L 8.040 9.922 8.040 12.061 L 8.040 14.200 7.360 14.200 L 6.680 14.200 6.680 14.600 L 6.680 15.000 8.440 15.000 L 10.200 15.000 10.200 14.600 L 10.200 14.200 9.600 14.200 L 9.000 14.200 9.000 11.520 L 9.000 8.840 8.610 8.843 C 8.253 8.847,8.196 8.858,7.940 8.981 M15.265 8.967 C 15.136 9.031,14.848 9.133,14.625 9.193 L 14.220 9.302 14.220 9.601 L 14.220 9.900 14.770 9.911 L 15.320 9.922 15.320 12.061 L 15.320 14.200 14.640 14.200 L 13.960 14.200 13.960 14.600 L 13.960 15.000 15.740 15.000 L 17.520 15.000 17.520 14.600 L 17.520 14.200 16.900 14.200 L 16.280 14.200 16.280 11.520 L 16.280 8.840 15.890 8.845 C 15.546 8.850,15.472 8.865,15.265 8.967 M11.787 10.497 C 11.581 10.572,11.495 10.657,11.416 10.864 C 11.335 11.078,11.358 11.364,11.469 11.515 C 11.845 12.022,12.582 11.817,12.629 11.192 C 12.667 10.692,12.233 10.334,11.787 10.497 M11.680 13.850 C 11.442 14.012,11.380 14.134,11.380 14.440 C 11.380 14.653,11.398 14.739,11.462 14.827 C 11.559 14.960,11.853 15.120,12.000 15.120 C 12.147 15.120,12.441 14.960,12.538 14.827 C 12.656 14.665,12.655 14.213,12.536 14.053 C 12.394 13.861,12.209 13.760,12.000 13.760 C 11.871 13.760,11.770 13.788,11.680 13.850 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-close"><path d="M11.700 11.125 C 11.383 11.271,11.241 11.420,11.103 11.750 C 10.973 12.061,10.972 12.338,11.102 12.652 C 11.173 12.824,12.298 13.994,14.752 16.450 L 18.300 20.000 14.752 23.550 C 12.298 26.006,11.173 27.176,11.102 27.348 C 10.972 27.662,10.973 27.939,11.103 28.250 C 11.241 28.580,11.383 28.729,11.700 28.875 C 12.027 29.025,12.326 29.032,12.652 28.898 C 12.824 28.827,13.994 27.702,16.450 25.248 L 20.000 21.700 23.550 25.248 C 26.006 27.702,27.176 28.827,27.348 28.898 C 27.674 29.032,27.973 29.025,28.300 28.875 C 28.617 28.729,28.759 28.580,28.897 28.250 C 29.027 27.939,29.028 27.662,28.898 27.348 C 28.827 27.176,27.702 26.006,25.248 23.550 L 21.700 20.000 25.248 16.450 C 27.702 13.994,28.827 12.824,28.898 12.652 C 29.028 12.338,29.027 12.061,28.897 11.750 C 28.759 11.420,28.617 11.271,28.300 11.125 C 27.973 10.975,27.674 10.968,27.348 11.102 C 27.176 11.173,26.006 12.298,23.550 14.752 L 20.000 18.300 16.450 14.752 C 13.994 12.298,12.824 11.173,12.652 11.102 C 12.326 10.968,12.027 10.975,11.700 11.125 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-delete"><path d="M10.404 2.923 C 9.915 3.019,9.363 3.431,9.126 3.875 C 8.909 4.283,8.880 4.475,8.880 5.528 L 8.880 6.480 6.768 6.480 C 4.658 6.480,4.657 6.480,4.479 6.570 C 3.954 6.835,3.954 7.565,4.479 7.830 C 4.621 7.902,4.724 7.920,4.988 7.920 L 5.320 7.920 5.321 8.090 C 5.321 8.184,5.437 10.789,5.578 13.880 C 5.813 19.020,5.842 19.523,5.918 19.766 C 6.123 20.424,6.682 20.934,7.352 21.075 C 7.501 21.107,8.899 21.120,12.032 21.120 C 15.777 21.119,16.535 21.110,16.715 21.062 C 17.382 20.884,17.882 20.409,18.084 19.760 C 18.157 19.524,18.189 18.971,18.422 13.880 C 18.563 10.789,18.679 8.184,18.679 8.090 L 18.680 7.920 19.012 7.920 C 19.276 7.920,19.379 7.902,19.521 7.830 C 20.046 7.565,20.046 6.835,19.521 6.570 C 19.343 6.480,19.342 6.480,17.232 6.480 L 15.120 6.480 15.120 5.528 C 15.120 4.475,15.091 4.283,14.874 3.875 C 14.629 3.415,14.086 3.020,13.564 2.921 C 13.305 2.872,10.657 2.874,10.404 2.923 M13.529 4.471 L 13.660 4.601 13.672 5.541 L 13.684 6.480 12.000 6.480 L 10.316 6.480 10.328 5.543 C 10.340 4.607,10.340 4.606,10.440 4.499 C 10.495 4.440,10.576 4.376,10.620 4.357 C 10.664 4.339,11.307 4.327,12.049 4.332 L 13.399 4.340 13.529 4.471 M17.240 7.950 C 17.240 7.966,17.124 10.531,16.981 13.649 C 16.768 18.334,16.712 19.339,16.661 19.438 C 16.529 19.694,16.798 19.680,12.000 19.680 C 7.203 19.680,7.471 19.694,7.339 19.439 C 7.288 19.339,7.232 18.334,7.019 13.689 C 6.877 10.593,6.761 8.029,6.760 7.990 C 6.760 7.924,7.036 7.920,12.000 7.920 C 14.882 7.920,17.240 7.934,17.240 7.950 M9.090 10.112 C 8.951 10.155,8.728 10.349,8.653 10.492 C 8.566 10.657,8.566 10.674,8.741 14.136 C 8.875 16.804,8.886 16.949,8.971 17.120 C 9.235 17.653,9.968 17.646,10.235 17.107 L 10.331 16.915 10.185 13.928 C 10.105 12.284,10.029 10.857,10.016 10.756 C 9.973 10.396,9.699 10.117,9.368 10.096 C 9.265 10.089,9.139 10.096,9.090 10.112 M11.700 10.155 C 11.510 10.243,11.424 10.332,11.342 10.530 C 11.288 10.658,11.280 11.081,11.280 13.810 L 11.280 16.943 11.370 17.121 C 11.635 17.646,12.365 17.646,12.630 17.121 L 12.720 16.943 12.719 13.802 C 12.718 10.839,12.714 10.651,12.645 10.500 C 12.557 10.310,12.468 10.224,12.270 10.142 C 12.076 10.061,11.896 10.065,11.700 10.155 M14.420 10.140 C 14.151 10.286,14.022 10.469,13.984 10.761 C 13.971 10.859,13.895 12.284,13.815 13.927 L 13.668 16.913 13.764 17.107 C 14.032 17.646,14.765 17.654,15.029 17.120 C 15.114 16.949,15.125 16.804,15.259 14.136 C 15.439 10.568,15.437 10.651,15.339 10.483 C 15.143 10.150,14.705 9.986,14.420 10.140 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-download"><path d="M11.681 4.890 C 11.473 4.996,11.368 5.127,11.318 5.343 C 11.271 5.545,11.272 13.212,11.318 14.540 C 11.338 15.090,11.349 15.545,11.342 15.551 C 11.336 15.557,10.785 14.955,10.118 14.211 C 8.891 12.843,6.675 10.564,6.466 10.454 C 6.305 10.369,5.947 10.377,5.789 10.469 C 5.616 10.570,5.490 10.767,5.457 10.986 C 5.405 11.335,5.415 11.347,8.633 14.637 C 10.268 16.309,11.645 17.691,11.693 17.708 C 11.741 17.726,10.447 17.749,8.817 17.760 L 5.854 17.780 5.706 17.880 C 5.280 18.169,5.309 18.870,5.758 19.108 L 5.933 19.200 12.000 19.200 L 18.067 19.200 18.242 19.108 C 18.691 18.870,18.720 18.169,18.294 17.880 L 18.146 17.780 15.183 17.760 C 13.553 17.749,12.259 17.726,12.307 17.708 C 12.440 17.660,18.365 11.589,18.470 11.394 C 18.652 11.057,18.522 10.627,18.187 10.453 C 18.039 10.377,17.679 10.378,17.529 10.455 C 17.341 10.552,15.264 12.694,13.908 14.189 C 13.224 14.942,12.661 15.554,12.656 15.549 C 12.651 15.544,12.662 15.090,12.682 14.540 C 12.728 13.212,12.729 5.545,12.682 5.343 C 12.662 5.257,12.612 5.140,12.570 5.083 C 12.470 4.945,12.177 4.800,12.000 4.800 C 11.921 4.800,11.778 4.841,11.681 4.890 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-fit"><path d="M3.813 4.874 C 3.442 5.002,3.196 5.251,3.062 5.635 C 3.007 5.790,3.000 6.531,3.000 12.004 L 3.000 18.197 3.086 18.426 C 3.200 18.731,3.469 19.000,3.774 19.114 L 4.003 19.200 12.000 19.200 L 19.997 19.200 20.226 19.114 C 20.531 19.000,20.800 18.731,20.914 18.426 L 21.000 18.197 21.000 12.000 C 21.000 5.893,20.999 5.800,20.920 5.588 C 20.811 5.297,20.604 5.067,20.329 4.932 L 20.100 4.820 12.060 4.811 C 4.423 4.803,4.010 4.806,3.813 4.874 M19.560 12.000 L 19.560 17.760 12.000 17.760 L 4.440 17.760 4.440 12.000 L 4.440 6.240 12.000 6.240 L 19.560 6.240 19.560 12.000 M8.013 8.474 C 7.642 8.603,7.396 8.852,7.262 9.235 C 7.209 9.386,7.200 9.772,7.200 12.004 C 7.200 14.557,7.201 14.601,7.286 14.826 C 7.400 15.131,7.669 15.400,7.974 15.514 C 8.202 15.600,8.216 15.600,12.000 15.600 C 15.784 15.600,15.798 15.600,16.026 15.514 C 16.331 15.400,16.600 15.131,16.714 14.826 C 16.799 14.601,16.800 14.557,16.800 12.000 C 16.800 9.497,16.797 9.395,16.720 9.188 C 16.611 8.897,16.404 8.667,16.129 8.532 L 15.900 8.420 12.060 8.411 C 8.455 8.402,8.207 8.406,8.013 8.474 M15.600 12.000 L 15.600 14.400 12.000 14.400 L 8.400 14.400 8.400 12.000 L 8.400 9.600 12.000 9.600 L 15.600 9.600 15.600 12.000 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-left-arrow"><path d="M23.300 10.122 C 22.933 10.296,14.297 19.123,14.125 19.500 C 13.970 19.839,13.970 20.162,14.125 20.500 C 14.207 20.679,15.692 22.243,18.664 25.281 C 23.431 30.152,23.331 30.063,23.938 29.981 C 24.737 29.874,25.222 28.986,24.882 28.253 C 24.811 28.101,23.252 26.459,20.867 24.024 C 18.722 21.834,16.967 20.023,16.967 20.000 C 16.967 19.977,18.707 18.182,20.833 16.011 C 23.007 13.793,24.766 11.943,24.850 11.788 C 25.389 10.797,24.314 9.642,23.300 10.122 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-left-rotate"><path d="M11.000 3.679 C 10.244 4.283,9.884 4.596,9.850 4.679 C 9.756 4.907,9.825 4.981,11.000 5.921 C 11.982 6.706,12.116 6.800,12.246 6.800 C 12.361 6.800,12.415 6.773,12.496 6.677 C 12.596 6.559,12.600 6.533,12.600 6.057 L 12.600 5.560 12.710 5.560 C 12.902 5.560,13.566 5.679,13.980 5.787 C 16.049 6.327,17.871 7.796,18.827 9.695 C 19.344 10.722,19.604 11.702,19.666 12.865 C 19.687 13.259,19.711 13.405,19.776 13.534 C 20.036 14.047,20.768 14.039,21.030 13.521 C 21.141 13.302,21.149 12.943,21.060 12.182 C 20.575 8.044,17.407 4.770,13.315 4.181 C 13.081 4.148,12.825 4.120,12.745 4.120 L 12.600 4.120 12.600 3.583 C 12.600 3.064,12.597 3.042,12.496 2.923 C 12.415 2.827,12.361 2.800,12.246 2.800 C 12.116 2.800,11.982 2.894,11.000 3.679 M4.413 9.674 C 4.042 9.802,3.796 10.051,3.662 10.435 C 3.608 10.588,3.600 11.151,3.600 15.004 C 3.600 19.397,3.600 19.397,3.686 19.626 C 3.800 19.931,4.069 20.200,4.374 20.314 L 4.603 20.400 10.200 20.400 L 15.797 20.400 16.026 20.314 C 16.331 20.200,16.600 19.931,16.714 19.626 L 16.800 19.397 16.800 15.000 C 16.800 10.695,16.798 10.599,16.720 10.388 C 16.611 10.097,16.404 9.867,16.129 9.732 L 15.900 9.620 10.260 9.611 C 4.927 9.603,4.609 9.606,4.413 9.674 M15.360 15.000 L 15.360 18.960 10.200 18.960 L 5.040 18.960 5.040 15.000 L 5.040 11.040 10.200 11.040 L 15.360 11.040 15.360 15.000 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 1412 1024" id="preview_img_icon-load-error"><path d="M1393.516743 51.782272a71.326417 71.326417 0 0 0-49.610701-22.527848L803.837949 8.24491l-40.906759 89.140366 56.231346 167.72301-101.675454 190.815821 41.436411 153.634277 102.540552 131.794976 148.690862-135.767363c6.956091-6.355819 16.189684-9.622004 25.599828-9.268903 9.392489 0.353101 18.449531 4.466729 24.717075 11.352199l191.168921 204.392557a35.310107 35.310107 0 0 1 6.267544 38.699878 35.857414 35.857414 0 0 1-33.774117 20.479862l-523.878409-20.303312-26.129479 74.151226 28.389326 66.912653 602.213882 23.075155a71.785448 71.785448 0 0 0 51.199656-18.767322 69.790427 69.790427 0 0 0 22.810329-49.028084l33.597567-844.917905a69.084225 69.084225 0 0 0-18.802632-50.581729zM1006.517966 439.257736c-59.020845-2.242192-104.976949-51.446826-102.717103-109.779124 2.259847-58.314642 52.047098-103.741096 111.067943-101.516559 59.020845 2.259847 104.994604 51.464482 102.717103 109.779124-2.259847 58.332297-52.047098 103.741096-111.067943 101.516559z m-388.234631 487.049966l18.09643-77.752856-425.345554 28.901323A35.769139 35.769139 0 0 1 176.553891 858.0003a35.115902 35.115902 0 0 1 5.049346-38.894084l315.125053-357.691388a35.804449 35.804449 0 0 1 25.952929-12.023091 36.08693 36.08693 0 0 1 26.623821 10.822548l105.506601 108.755131-45.444108-115.976048 80.083323-200.084724-73.798124-160.184302L646.443146 0 66.351046 39.564975C26.980277 42.319164-2.591938 75.863766 0.179905 114.757849l58.844294 843.717361a69.419671 69.419671 0 0 0 24.205079 48.162987 72.562271 72.562271 0 0 0 51.711652 17.213677l517.963965-35.274797-34.65687-62.28703z" fill="currentColor" p-id="9377"></path></symbol><symbol viewBox="0 0 1024 1024" id="preview_img_icon-loading"><path d="M144.205 202.496a136.678 136.678 0 1 0 273.357 0 136.678 136.678 0 1 0-273.357 0zM41.728 492.902a119.578 119.578 0 1 0 239.155 0 119.578 119.578 0 1 0-239.155 0zM144.23 749.158a102.502 102.502 0 1 0 205.005 0 102.502 102.502 0 1 0-205.005 0zM435.2 861.926a89.6 89.6 0 1 0 179.2 0 89.6 89.6 0 1 0-179.2 0z m289.843-95.666a85.427 85.427 0 1 0 170.855 0 85.427 85.427 0 1 0-170.855 0z m136.704-290.433a68.326 68.326 0 1 0 136.653 0 68.326 68.326 0 1 0-136.653 0zM759.22 219.571a51.251 51.251 0 1 0 102.502 0 51.251 51.251 0 1 0-102.503 0zM512 85.376a34.176 34.176 0 1 0 68.352 0 34.176 34.176 0 1 0-68.352 0z" p-id="10369" fill="currentColor"></path></symbol><symbol viewBox="0 0 40 40" id="preview_img_icon-right-arrow"><path d="M15.678 10.143 C 15.080 10.439,14.830 11.210,15.145 11.782 C 15.233 11.942,16.979 13.777,19.167 16.011 C 21.293 18.182,23.033 19.977,23.033 20.000 C 23.033 20.023,21.278 21.834,19.133 24.024 C 16.748 26.459,15.189 28.101,15.118 28.253 C 14.778 28.986,15.263 29.874,16.062 29.981 C 16.669 30.063,16.569 30.152,21.336 25.281 C 24.308 22.243,25.793 20.679,25.875 20.500 C 25.942 20.353,25.997 20.128,25.997 20.000 C 25.997 19.872,25.942 19.647,25.875 19.500 C 25.689 19.093,17.011 10.246,16.661 10.105 C 16.303 9.962,16.021 9.973,15.678 10.143 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-right-rotate"><path d="M12.104 2.923 C 12.004 3.041,12.000 3.066,12.000 3.557 L 12.000 4.069 11.550 4.096 C 9.203 4.240,7.181 5.139,5.560 6.760 C 3.935 8.384,3.009 10.468,2.894 12.762 C 2.867 13.300,2.896 13.467,3.049 13.663 C 3.155 13.797,3.415 13.918,3.602 13.919 C 3.795 13.920,4.081 13.768,4.189 13.606 C 4.293 13.449,4.300 13.410,4.357 12.629 C 4.432 11.597,4.656 10.761,5.099 9.856 C 5.874 8.271,7.071 7.074,8.656 6.299 C 9.264 6.001,9.726 5.840,10.364 5.704 C 10.803 5.610,11.527 5.520,11.847 5.520 L 12.000 5.520 12.000 6.037 C 12.000 6.535,12.004 6.558,12.104 6.677 C 12.185 6.773,12.239 6.800,12.354 6.800 C 12.484 6.800,12.618 6.706,13.600 5.921 C 14.339 5.330,14.716 5.003,14.749 4.924 C 14.845 4.693,14.784 4.626,13.672 3.736 C 13.098 3.276,12.590 2.878,12.544 2.851 C 12.388 2.761,12.216 2.789,12.104 2.923 M8.013 9.674 C 7.642 9.802,7.396 10.051,7.262 10.435 C 7.208 10.588,7.200 11.151,7.200 15.004 C 7.200 19.397,7.200 19.397,7.286 19.626 C 7.400 19.931,7.669 20.200,7.974 20.314 L 8.203 20.400 13.800 20.400 L 19.397 20.400 19.626 20.314 C 19.931 20.200,20.200 19.931,20.314 19.626 L 20.400 19.397 20.400 15.000 C 20.400 10.695,20.398 10.599,20.320 10.388 C 20.211 10.097,20.004 9.867,19.729 9.732 L 19.500 9.620 13.860 9.611 C 8.527 9.603,8.209 9.606,8.013 9.674 M18.960 15.000 L 18.960 18.960 13.800 18.960 L 8.640 18.960 8.640 15.000 L 8.640 11.040 13.800 11.040 L 18.960 11.040 18.960 15.000 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-zoom-in"><path d="M10.600 3.645 C 9.476 3.761,8.263 4.171,7.328 4.752 C 3.069 7.399,2.331 13.215,5.796 16.815 C 8.470 19.593,12.804 19.989,15.937 17.741 L 16.253 17.514 17.796 19.053 C 19.041 20.293,19.371 20.601,19.500 20.642 C 20.224 20.875,20.873 20.226,20.642 19.499 C 20.601 19.371,20.294 19.042,19.053 17.796 L 17.514 16.253 17.741 15.937 C 19.408 13.613,19.663 10.553,18.403 7.980 C 16.966 5.045,13.848 3.313,10.600 3.645 M12.072 5.082 C 13.118 5.196,14.082 5.552,15.002 6.164 C 15.509 6.501,16.299 7.291,16.636 7.798 C 17.481 9.069,17.858 10.494,17.728 11.930 C 17.587 13.486,16.984 14.778,15.882 15.883 C 14.945 16.822,13.893 17.386,12.589 17.648 C 11.945 17.777,10.855 17.777,10.211 17.648 C 8.908 17.387,7.858 16.824,6.917 15.883 C 5.819 14.784,5.213 13.486,5.072 11.930 C 4.942 10.494,5.318 9.073,6.164 7.798 C 6.501 7.291,7.291 6.501,7.798 6.164 C 9.114 5.290,10.577 4.920,12.072 5.082 M11.100 7.755 C 10.910 7.843,10.824 7.932,10.742 8.130 C 10.691 8.252,10.680 8.488,10.680 9.479 L 10.680 10.680 9.468 10.680 C 8.292 10.680,8.252 10.683,8.079 10.770 C 7.554 11.035,7.554 11.765,8.079 12.030 C 8.252 12.117,8.292 12.120,9.468 12.120 L 10.680 12.120 10.680 13.332 C 10.680 14.508,10.683 14.548,10.770 14.721 C 11.035 15.246,11.765 15.246,12.030 14.721 C 12.117 14.548,12.120 14.508,12.120 13.332 L 12.120 12.120 13.332 12.120 C 14.508 12.120,14.548 12.117,14.721 12.030 C 15.246 11.765,15.246 11.035,14.721 10.770 C 14.548 10.683,14.508 10.680,13.332 10.680 L 12.120 10.680 12.119 9.470 C 12.118 8.382,12.111 8.244,12.045 8.100 C 11.957 7.910,11.868 7.824,11.670 7.742 C 11.476 7.661,11.296 7.665,11.100 7.755 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol><symbol viewBox="0 0 24 24" id="preview_img_icon-zoom-out"><path d="M10.600 3.645 C 9.476 3.761,8.263 4.171,7.328 4.752 C 3.069 7.399,2.331 13.215,5.796 16.815 C 8.470 19.593,12.804 19.989,15.937 17.741 L 16.253 17.514 17.796 19.053 C 19.041 20.293,19.371 20.601,19.500 20.642 C 20.224 20.875,20.873 20.226,20.642 19.499 C 20.601 19.371,20.294 19.042,19.053 17.796 L 17.514 16.253 17.741 15.937 C 19.408 13.613,19.663 10.553,18.403 7.980 C 16.966 5.045,13.848 3.313,10.600 3.645 M12.072 5.082 C 13.118 5.196,14.082 5.552,15.002 6.164 C 15.509 6.501,16.299 7.291,16.636 7.798 C 17.481 9.069,17.858 10.494,17.728 11.930 C 17.587 13.486,16.984 14.778,15.882 15.883 C 14.945 16.822,13.893 17.386,12.589 17.648 C 11.945 17.777,10.855 17.777,10.211 17.648 C 8.908 17.387,7.858 16.824,6.917 15.883 C 5.819 14.784,5.213 13.486,5.072 11.930 C 4.942 10.494,5.318 9.073,6.164 7.798 C 6.501 7.291,7.291 6.501,7.798 6.164 C 9.114 5.290,10.577 4.920,12.072 5.082 M8.079 10.770 C 7.554 11.035,7.554 11.765,8.079 12.030 L 8.257 12.120 11.400 12.120 L 14.543 12.120 14.721 12.030 C 15.246 11.765,15.246 11.035,14.721 10.770 L 14.543 10.680 11.400 10.680 L 8.257 10.680 8.079 10.770 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></symbol></svg>',c=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss"),l=function(e,t){t.parentNode.insertBefore(e,t)};function s(){a||(a=!0,o())}function r(){try{i.documentElement.doScroll("left")}catch(e){return void setTimeout(r,50)}s()}t=function(){var e,t=document.createElement("div");t.innerHTML=d,d=null,(t=t.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",t=t,(e=document.body).firstChild?l(t,e.firstChild):e.appendChild(t))},document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(t,0):(n=function(){document.removeEventListener("DOMContentLoaded",n,!1),t()},document.addEventListener("DOMContentLoaded",n,!1)):document.attachEvent&&(o=t,i=e.document,a=!1,r(),i.onreadystatechange=function(){"complete"==i.readyState&&(i.onreadystatechange=null,s())})}(window);

export default previewImage