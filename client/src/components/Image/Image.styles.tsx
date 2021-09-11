import styled from "styled-components"
import { ImageStyleProps } from "./Image.constants"

export const StyledImage = styled.img<ImageStyleProps>`
width : ${({width = '100%'}) =>width};
height : ${({height = '100%'}) =>height}
`