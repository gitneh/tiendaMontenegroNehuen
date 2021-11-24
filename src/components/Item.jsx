import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@material-ui/icons';
import { ProductContainer, Image, Info, Icon } from './styledComponents';

const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <InfoOutlined />Details
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;