import { ButtonModal } from './ModalButton.style';

interface ModalButtonProps {
  text: string;
  variant: 'comment' | 'cancel' | 'confirm';
  onClick?: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ text, onClick, variant = 'confirm' }) => {
  return (
    <ButtonModal variant={variant} onClick={onClick}>
      {text}
    </ButtonModal>
  );
};

export default ModalButton;
