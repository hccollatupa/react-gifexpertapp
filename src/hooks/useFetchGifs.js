import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    //Evalua este efecto únicamente cuando la categoria cambia
    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [ category ] );

    return state;// retorna { data: [], loading: true }
}
