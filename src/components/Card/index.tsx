import { CardStyle } from "./style"

interface CardProps {
    name: string;
    age: number;
    hobby: string;
}

const Card = ({ name, age, hobby }: CardProps) => {

    return (
        <CardStyle>
            <h3>{name}</h3>
            <p>Idade: {age} Anos</p>
            <p>Hobby: {hobby}</p>
        </CardStyle>
    )
}

export default Card
