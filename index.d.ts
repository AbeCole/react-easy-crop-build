import React from 'react';
import { Area, MediaSize, Point, Size, VideoSrc } from './types';
export declare type CropperProps = {
    image?: string;
    video?: string | VideoSrc[];
    transform?: string;
    crop: Point;
    zoom: number;
    rotation: number;
    aspect: number;
    minZoom: number;
    maxZoom: number;
    cropShape: 'rect' | 'round';
    cropSize?: Size;
    objectFit?: 'contain' | 'horizontal-cover' | 'vertical-cover';
    showGrid?: boolean;
    zoomSpeed: number;
    zoomWithScroll?: boolean;
    onCropChange: (location: Point) => void;
    onZoomChange?: (zoom: number) => void;
    onRotationChange?: (rotation: number) => void;
    onCropComplete?: (croppedArea: Area, croppedAreaPixels: Area) => void;
    onCropAreaChange?: (croppedArea: Area, croppedAreaPixels: Area) => void;
    onCropSizeChange?: (cropSize: Size) => void;
    onInteractionStart?: () => void;
    onInteractionEnd?: () => void;
    onMediaLoaded?: (mediaSize: MediaSize, mediaRef: HTMLImageElement | HTMLVideoElement | null) => void;
    style: {
        containerStyle?: React.CSSProperties;
        mediaStyle?: React.CSSProperties;
        cropAreaStyle?: React.CSSProperties;
    };
    classes: {
        containerClassName?: string;
        mediaClassName?: string;
        cropAreaClassName?: string;
    };
    restrictPosition: boolean;
    initialCroppedAreaPixels?: Area;
    mediaProps: React.ImgHTMLAttributes<HTMLElement> | React.VideoHTMLAttributes<HTMLElement>;
    disableAutomaticStylesInjection?: boolean;
};
declare type State = {
    cropSize: Size | null;
    hasWheelJustStarted: boolean;
};
declare class Cropper extends React.Component<CropperProps, State> {
    static defaultProps: {
        zoom: number;
        rotation: number;
        aspect: number;
        maxZoom: number;
        minZoom: number;
        cropShape: string;
        objectFit: string;
        showGrid: boolean;
        style: {};
        classes: {};
        mediaProps: {};
        zoomSpeed: number;
        restrictPosition: boolean;
        zoomWithScroll: boolean;
    };
    imageRef: HTMLImageElement | null;
    videoRef: HTMLVideoElement | null;
    containerRef: HTMLDivElement | null;
    styleRef: HTMLStyleElement | null;
    containerRect: DOMRect | null;
    mediaSize: MediaSize;
    dragStartPosition: Point;
    dragStartCrop: Point;
    lastPinchDistance: number;
    lastPinchRotation: number;
    rafDragTimeout: number | null;
    rafPinchTimeout: number | null;
    wheelTimer: number | null;
    state: State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: CropperProps): void;
    preventZoomSafari: (e: Event) => void;
    cleanEvents: () => void;
    clearScrollEvent: () => void;
    onMediaLoad: () => void;
    setInitialCrop: () => void;
    getAspect(): number;
    computeSizes: () => void;
    static getMousePoint: (e: MouseEvent | React.MouseEvent) => {
        x: number;
        y: number;
    };
    static getTouchPoint: (touch: Touch | React.Touch) => {
        x: number;
        y: number;
    };
    onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseMove: (e: MouseEvent) => void;
    onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
    onTouchMove: (e: TouchEvent) => void;
    onDragStart: ({ x, y }: Point) => void;
    onDrag: ({ x, y }: Point) => void;
    onDragStopped: () => void;
    onPinchStart(e: React.TouchEvent<HTMLDivElement>): void;
    onPinchMove(e: TouchEvent): void;
    onWheel: (e: WheelEvent) => void;
    getPointOnContainer: ({ x, y }: Point) => {
        x: number;
        y: number;
    };
    getPointOnMedia: ({ x, y }: Point) => {
        x: number;
        y: number;
    };
    setNewZoom: (zoom: number, point: Point) => void;
    getCropData: () => {
        croppedAreaPercentages: Area;
        croppedAreaPixels: Area;
    } | null;
    emitCropData: () => void;
    emitCropAreaChange: () => void;
    recomputeCropPosition: () => void;
    render(): JSX.Element;
}
export default Cropper;
//# sourceMappingURL=index.d.ts.map