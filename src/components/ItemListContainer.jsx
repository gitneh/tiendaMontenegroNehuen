import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import firefetch from '../utils/firefetch';


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        firefetch(idCategory)
        .then((result) => setDatos(result))
        .catch(err => console.log(err));
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;