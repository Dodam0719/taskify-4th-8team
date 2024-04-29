import * as S from './ModalButton.style';

interface ModalButtonProps {
  text: string;
  fullWidth?: boolean;
  variant: 'comment' | 'cancel' | 'confirm';
  onClick?: () => void;
  onClose?: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ text, fullWidth = false, onClick, variant = 'confirm' }) => {
  return (
    <S.ButtonModal $variant={variant} $fullWidth={fullWidth} onClick={onClick}>
      {text}
    </S.ButtonModal>
  );
};

export default ModalButton;
