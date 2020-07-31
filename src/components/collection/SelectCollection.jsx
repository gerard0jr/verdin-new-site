import React from 'react'

export const SelectCollection = ({props}) => {
    const goTo = collection => {
        props.history.push(`/collection/${collection}`)
    } 
    return (
        <div className='select-collection-container'>
            <div onClick={() => goTo('preFall')} className='collection-top'>
                <img src="/img/collection/prefall.jpg" alt="collection1"/>
                <p>PRE FALL 2019</p>
            </div>
            <div onClick={() => goTo('fall')} className='collection-top'>
                <img src="/img/collection/fall.jpg" alt="collection1"/>
                <p>FALL 2019</p>
            </div>
            <div onClick={() => goTo('all')} className='collection-top'>
                <img src="/img/collection/all.jpg" alt="collection1"/>
                <p>All</p>
            </div>
        </div>
    )
}
