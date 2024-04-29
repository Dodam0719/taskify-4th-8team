import React, { useRef, useEffect } from 'react';
import * as S from './ModalBackground.style';

interface ModalBackgroundProps {
  children: React.ReactNode;
  onClose: () => void;
  width?: string;
  height?: string;
  tabletWidth?: string;
  tabletHeight?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({
  children,
  onClose,
  width,
  height,
  tabletWidth,
  tabletHeight,
  mobileWidth,
  mobileHeight,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseDown(event: MouseEvent) {
      // ref.current는 참조 객체의 현재 값(외부 클릭을 감지하고자 하는 대상)
      // ref.current가 event.target을 포함하는지 판단하여 !연산
      // 즉, event.target이 외부에서 발생했다면 드롭다운 메뉴를 false하여 닫음
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [onClose]);

  return (
    <S.ModalOverlay>
      <S.ModalWrapper
        ref={wrapperRef}
        width={width}
        height={height}
        $tabletWidth={tabletWidth}
        $tabletHeight={tabletHeight}
        $mobileWidth={mobileWidth}
        $mobileHeight={mobileHeight}>
        {children}
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
};

export default ModalBackground;
