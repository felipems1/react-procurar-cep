import * as C from './style';
import icon from '../../assets/icon.png';

export const Header = () => {
    return (
        <C.Container>
            <img src={icon} />
            <h1>Procurar<i>CEP</i></h1>
        </C.Container>
    )
}