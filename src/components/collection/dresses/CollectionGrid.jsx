import React from 'react'
import { dresses } from '../db'
import { Link } from 'react-router-dom'

export const CollectionGrid = (props) => {
    return (
        <div className='collection-grid-container'>
            <div className='breadcrum'>
            <p>
                    <Link to='/collection'>COLLECTION</Link> / 
                    <span>
                        {props.match.params.id === 'fall' ? 
                            ' FALL'
                            : props.match.params.id === 'preFall' ? 
                            ' PRE FALL 2019'
                            : props.match.params.id === 'all' ? 
                            ' ALL'
                            : null
                        }
                    </span>
                </p>
            </div>
            <div className='collection-grid'>
                {props.match.params.id === 'all' ? 
                    dresses.filter(dress => dress.indexOf('1.jpg') !== -1).map(dress => 
                        <Link to={`/collection/${dress.split("/")[3]}/${dress.split("/")[4].trimRight()}`}><img key={dress} src={`${dress}`} alt="dress"/></Link>
                    )
                :
                    dresses.filter(dress => dress.indexOf(props.match.params.id) !== -1 && dress.indexOf('1.jpg') !== -1).map(dress => 
                        <Link to={`/collection/${props.match.params.id}/${dress.split("/")[4].trimRight()}`}><img key={dress} src={`${dress}`} alt="dress"/></Link>
                    )
                }
            </div>
        </div>
    )
}
