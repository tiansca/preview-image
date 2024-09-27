declare interface ImageItem {
    url: string;
    name?: string;
    type?: string;
    id?: string | number;
}
declare module 'preview-image-js' {
    export default function previewImages(
        option: {
            images: string[] | ImageItem[];
            index?: number;
            fileType?: 'image' | 'auto';
            loop?: boolean;
            thumbnail?: boolean;
            thumbnailDraggable?: boolean;
            toolbar?: boolean;
            delete?: boolean;
            download?: boolean;
            onDelete?: (index: number, url: string, id: string | number) => void;
            onDownload?: (index: number, url: string, id: string | number) => void;
            onClose?: () => void;
            onFileClick?: (index: number, url: string, id: string | number) => void;
            clickableFileTypes?: string[] | 'all';
            buttonTooltip?: boolean,
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
            prevText?: string,
            firstText?: string,
            lastText?: string,
            closeText?: string
        }
    ): { closeDialog: () => void };
}