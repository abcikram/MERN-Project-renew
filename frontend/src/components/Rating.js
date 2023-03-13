import React from 'react'

export const Rating = (props) => {
    return (
        <span>
            <i
                className={props.value >= 1
                    ? 'fas fa-star' : props.value >= 0.5 ?
                        'fas fa-star-half-alt' : 'fas fa-star'}
            ></i>
            <i
                className={props.value >= 1
                    ? 'fas fa-star' : props.value >= 0.5 ?
                        'fas fa-star-half-alt' : 'fas fa-star'}
            ></i>
            <i
                className={props.value >= 1
                    ? 'fas fa-star' : props.value >= 0.5 ?
                        'fas fa-star-half-alt' : 'fas fa-star'}
            ></i>
            <i
                className={props.value >= 1
                    ? 'fas fa-star' : props.value >= 0.5 ?
                        'fas fa-star-half-alt' : 'fas fa-star'}
            ></i>
            <i
                className={props.value >= 1
                    ? 'fas fa-star' : props.value >= 0.5 ?
                        'fas fa-star-half-alt' : 'fas fa-star'}
            ></i>
        </span>

    )
}

export default Rating