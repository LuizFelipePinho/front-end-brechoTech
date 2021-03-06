import { Link } from "react-router-dom";
import { FaRegHeart, FaRegEye , FaShoppingCart} from "react-icons/fa";
import { 
  Container,
  Card,
  CardCover,
  CardContent,
  ItemText, 
  Img, 
  NameProduct,
  Price,
  ContainerBtn, Btn } from './Style';


export default function Product(props) {
  return (
    <Container>
      <Card key={props.id}>
        <CardCover>
          <Img src={props.image}/>
        </CardCover>
        <CardContent>
            <NameProduct>
                {props.title}
            </NameProduct>
            <ItemText>
            Hardware type: {props.type}
            </ItemText>
            <ItemText>
            Sold by: {props.seller}
            </ItemText>
            <Price>Prince: $ {props.preco}
            </Price>
            <ContainerBtn>
            <Btn >
              <FaRegHeart />
            </Btn>{" "}
            <Link to={`/detail/${props.id}`}>
            <Btn>
              <FaRegEye />                    
            </Btn>{" "}
            </Link>
            <Link to="/cart">
              <Btn >
                <FaShoppingCart/>
              </Btn>{" "}
            </Link>
            </ContainerBtn>
        </CardContent>
      </Card>
    </Container>
  )
}