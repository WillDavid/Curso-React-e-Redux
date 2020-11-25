export default function Condicional(props){
    if(props.test){
        return props.children
    }else {
        return false
    }
}