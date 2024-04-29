import * as S from './ModalAlert.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';

interface ModalAlertProps {
  message: string;
  onClose: () => void;
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}

const ModalAlert: React.FC<ModalAlertProps> = ({ message, onClose }) => {
  return (
    <ModalBackground onClose={onClose} width='54rem' height='25rem' mobileWidth='32.7rem' mobileHeight='22rem'>
      <S.ModalAlertContent>
        <p>{message}</p>
      </S.ModalAlertContent>
      <S.ModalAlertFooter>
        <ModalButton text='확인' variant='confirm' onClick={onClose} />
      </S.ModalAlertFooter>
    </ModalBackground>
  );
};

export default ModalAlert;
