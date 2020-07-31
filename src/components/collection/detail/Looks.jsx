import React, { useEffect } from 'react'
import { dresses } from '../db'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Looks = (props) => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <div className='collection-grid-container'>
            <div className='breadcrum'>
                <p>
                    <Link to='/collection'>COLLECTION</Link> / 
                    <Link to={`/collection/${props.match.params.collection}`}>
                        {props.match.params.collection === 'fall' ? 
                            ' FALL'
                            : props.match.params.collection === 'preFall' ? 
                            ' PRE FALL 2019'
                            : props.match.params.collection === 'all' ? 
                            ' ALL'
                            : null
                        }
                    </Link> / 
                    <span> {props.match.params.look.toUpperCase()}</span>
                </p>
            </div>
            <div className='look-detail'>
                <div className='look-description'>
                    <h2 style={{fontWeight: 'bolder'}}>{props.match.params.collection.toUpperCase()}</h2>
                    <h3 style={{fontWeight: 'lighter'}}>{props.match.params.look.toUpperCase()}</h3>
                </div>
                <div className='look-photos'>
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        autoPlay
                        width='350px'
                        emulateTouch
                        infiniteLoop
                    >
                        {dresses.filter(dress => dress.indexOf(props.match.params.collection) !== -1 && dress.indexOf(`${props.match.params.look}/`) !== -1).map(dress => 
                            <img key={dress} src={`${dress}`} alt="dress"/>
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
