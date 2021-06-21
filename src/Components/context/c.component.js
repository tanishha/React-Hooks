import React,{useContext} from 'react'
import {fname} from './a.component'

const CComponent = () => {
    const FullName = useContext(fname);
    return <p>Hello { FullName } !! </p>
}

export default CComponent