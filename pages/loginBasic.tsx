import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface FormData {
  username: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    router.push('/mydashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input type='text' {...register('username', { required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type='password' {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}
