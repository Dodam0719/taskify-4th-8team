import * as S from './ModalTools.style';
interface ModalToolsProps {
  hidden: boolean;
}
const ModalTools = ({ hidden }: ModalToolsProps) => {
  const handleClick = (event: any) => {
    // 클릭 이벤트가 ModalTools 내의 요소에서 발생했을 때 이벤트 전파를 중지함
    event.stopPropagation();
  };
  return (
    <S.ModalTool onClick={handleClick}>
      <S.Edit>수정하기</S.Edit>
      <S.Delete>삭제하기</S.Delete>
    </S.ModalTool>
  );
};
export default ModalTools;
