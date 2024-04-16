import * as S from './ModalAlert.style';
import ModalButton from './ModalButton';

interface ModalAlertProps {
  message: string;
  onClose: () => void;
}

const ModalAlert: React.FC<ModalAlertProps> = ({ message, onClose }) => {
  return (
    <S.ModalOverlay>
      <S.ModalWrapper>
        <S.ModalAlertContent>
          <p>{message}</p>
        </S.ModalAlertContent>
        <S.ModalAlertFooter>
          <ModalButton text='확인' variant='confirm' onClick={onClose} />
        </S.ModalAlertFooter>
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
};

export default ModalAlert;
