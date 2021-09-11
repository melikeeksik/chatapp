import error from "../../assets/icons/error.png"
interface IconProps{
    error:string;
}

export const ICONS: IconProps= {
    error : error
}

export interface ImageStyleProps {
    width?:string;
    height?:string;
}

export interface ImageProps extends ImageStyleProps {
   src:string;
}