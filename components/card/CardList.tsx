import Card from './Card';
import CardHeader from './CardHeader';
import AddCardButton from './add-card-button/AddCardButton';
import * as S from './CardList.style';
import { CardListStyle } from './type';

const CardList = ({ children }: CardListStyle) => {
  return (
    <S.CardList>
      <CardHeader>{children}</CardHeader>
      <S.CardContainer>
        <AddCardButton />
        <Card />
      </S.CardContainer>
    </S.CardList>
  );
};

export default CardList;
