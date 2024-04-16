import { ModalOverlay, ModalWrapper, ModalAlertContent, ModalAlertFooter } from './ModalAlert.style';
import ModalButton from './ModalButton';

interface ModalAlertProps {
  message: string;
  onClose: () => void;
}

const ModalAlert: React.FC<ModalAlertProps> = ({ message, onClose }) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalAlertContent>
          <p>{message}</p>
        </ModalAlertContent>
        <ModalAlertFooter>
          <ModalButton text='확인' variant='confirm' onClick={onClose} />
        </ModalAlertFooter>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default ModalAlert;
