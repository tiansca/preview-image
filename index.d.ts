// index.d.ts
//这里需要注意 'your-package-name' 需要和你 packge.json 文件中的name名字的值保持一致
declare interface ImageItem {
    url: string;
    name?: string;
    type?: string;
}
declare module 'preview-image-js' {
    export default function previewImages(
        option: {
            images: string[] | ImageItem[];
            index?: number;
            thumbnail?: boolean;
            thumbnailDraggable?: boolean;
            delete?: boolean;
            download?: boolean;
            onDelete?: (index: number, url: string) => void;
            onDownload?: (index: number, url: string) => void;
            thumbnailTitleText?: string,
            maxZoomText?: string,
            minZoomText?: string,
            fitText?: string,
            actualSizeText?: string,
            zoomInText?: string,
            zoomOutText?: string,
            rotateLeftText?: string,
            rotateRightText?: string,
            downloadText?: string,
            deleteText?: string,
            nextText?: string,
            prevText?: string
        }
    ): void;
}