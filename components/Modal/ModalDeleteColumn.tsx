import * as S from './ModalDeleteColumn.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';

interface ModalDeleteColumnProps {
  message: string;
  onClose: () => void;
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}

const ModalDeleteColumn: React.FC<ModalDeleteColumnProps> = ({ message, onClose }) => {
  return (
    <ModalBackground onClose={onClose} width='54rem' height='25rem' mobileWidth='32.7rem' mobileHeight='22rem'>
      <S.ModalDeleteColumnContent>
        <p>{message}</p>
      </S.ModalDeleteColumnContent>
      <S.ModalDeleteColumnFooter>
        <ModalButton text='취소' variant='cancel' onClick={onClose} />
        <ModalButton text='삭제' variant='confirm' />
      </S.ModalDeleteColumnFooter>
    </ModalBackground>
  );
};

export default ModalDeleteColumn;
