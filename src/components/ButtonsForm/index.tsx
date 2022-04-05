import * as C from './style'

interface Props {
    name: string
} 

export const Buttons = (props: Props) => {
    return(
        <C.Button name={props.name}>{props.name}</C.Button>
    )
}