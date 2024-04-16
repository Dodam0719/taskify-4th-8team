import * as S from './ModalButton.style';

interface ModalButtonProps {
  text: string;
  variant: 'comment' | 'cancel' | 'confirm';
  onClick?: () => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ text, onClick, variant = 'confirm' }) => {
  return (
    <S.ButtonModal variant={variant} onClick={onClick}>
      {text}
    </S.ButtonModal>
  );
};

export default ModalButton;
