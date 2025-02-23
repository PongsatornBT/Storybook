import React from 'react'
import { useTextbox } from '../hook/useTextbox';

const Textbox = () => {
    const { sTest } = useTextbox();
    return (
        <div>{sTest}</div>
    )
}

export default Textbox