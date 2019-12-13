import React,{useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'
export default function Alert() {
    const alertContext=useContext(AlertContext);
    const {alert}=alertContext;
    return (
       alert!==null&&(<div style={{backgroundColor:'red' }}><h3>{alert}</h3></div>)

    )
}
