import * as S from './ModalSignupAlert.style';
import ModalButton from './ModalButton';
import ModalBackground from './ModalBackground';
import { useRouter } from 'next/navigation';

interface ModalAlertProps {
  message: any;
  onClose: () => void;
  width?: string;
  height?: string;
  mobileWidth?: string;
  mobileHeight?: string;
}

const ModalSignupAlert: React.FC<ModalAlertProps> = ({ message, onClose, width, height, mobileWidth, mobileHeight }) => {
  const router = useRouter();
  const modalRouter = () => {
    router.push('/login');
  };

  return (
    <ModalBackground onClose={modalRouter} width='54rem' height='25rem' mobileWidth='32.7rem' mobileHeight='22rem'>
      <S.ModalAlertContent>
        <p>{message}</p>
      </S.ModalAlertContent>
      <S.ModalAlertFooter>
        <ModalButton text='확인' variant='confirm' onClick={modalRouter} />
      </S.ModalAlertFooter>
    </ModalBackground>
  );
};

export default ModalSignupAlert;
