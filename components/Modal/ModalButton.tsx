import { ButtonModal } from './ModalButton.style';

interface ModalButtonProps {
  text: string;
  size: 'addSmall' | 'addLarge' | 'small' | 'large';
  variant: 'comment' | 'cancel' | 'confirm';
  onClick?: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ text, onClick, size = 'large', variant = 'confirm' }) => {
  return (
    <ButtonModal size={size} variant={variant} onClick={onClick}>
      {text}
    </ButtonModal>
  );
};

export default ModalButton;
