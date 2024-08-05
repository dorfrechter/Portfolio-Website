import './index.scss';
import { useEffect, useState } from 'react';

const AnimatedLetters = ({ letterClass, letterArray, idx }) => {

    return(
        <span>
            {
                letterArray.map((letter, i) => (
                    <span  key={letter + i} className={`${letterClass} _${i+idx}`} >
                        {letter}
                    </span>
                ))
            }
        </span>

    )
}

export default AnimatedLetters;