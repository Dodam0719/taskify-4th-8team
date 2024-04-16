import { useEffect, useRef } from 'react';
import * as S from './ModalAlert.style';
import ModalButton from './ModalButton';

interface ModalAlertProps {
  message: string;
  onClose: () => void;
}

const ModalAlert: React.FC<ModalAlertProps> = ({ message, onClose }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // ref.current는 참조 객체의 현재 값(외부 클릭을 감지하고자 하는 대상)
      // ref.current가 event.target을 포함하는지 판단하여 !연산
      // 즉, event.target이 외부에서 발생했다면 드롭다운 메뉴를 false하여 닫음
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return (
    <S.ModalOverlay>
      <S.ModalWrapper ref={wrapperRef}>
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
