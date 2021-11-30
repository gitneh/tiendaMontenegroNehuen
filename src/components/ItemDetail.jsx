import { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import {CartContext} from './CartContext';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState (0);
    const test = useContext(CartContext);
    const onAdd = (nn) => {
        alert("You have selected " + nn + " items.");
        setItemCount(nn);
        test.addToCart (item, nn);
    }

    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;