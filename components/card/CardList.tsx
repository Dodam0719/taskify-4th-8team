import Card from './Card';
import CardHeader from './CardHeader';
import { CardListStyle } from './CardList.style';
import AddCardButton from './add-card-button/AddCardButton';

interface CardListStyle {
  children: string;
}

const CardList = ({ children }: CardListStyle) => {
  return (
    <CardListStyle>
      <CardHeader>{children}</CardHeader>
      <div className='card-container'>
        <AddCardButton />
        <Card />
      </div>
    </CardListStyle>
  );
};

export default CardList;
