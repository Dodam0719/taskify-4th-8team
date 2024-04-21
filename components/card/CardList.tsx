import Card from './Card';
import CardHeader from './CardHeader';
import * as S from './CardList.style';
import { CardListStyle } from './type';
import Button from '../button/Button';
import PlusChip from '../chips/plus-chip/PlusChip';

const CardList = ({ children }: CardListStyle) => {
  return (
    <S.CardList>
      <CardHeader>{children}</CardHeader>
      <S.CardContainer>
        <Button variant='addTodo' $width='31.4rem' $height='4rem'>
          <PlusChip />
        </Button>
        <Card />
      </S.CardContainer>
    </S.CardList>
  );
};

export default CardList;
