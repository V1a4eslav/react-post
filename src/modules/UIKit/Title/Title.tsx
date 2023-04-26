import React from "react";
import {IStyledTitle, Typography} from "./StyleComponent";


export const Title = (props: IStyledTitle) => {
    return <Typography as={props.variant} {...props}/>
}
