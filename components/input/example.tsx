import { useForm } from 'react-hook-form';

interface UserFormProps {
  occupation: 'student' | 'professor';
  name: string;
  id: string;
  pwd: string;
  email: string;
  phone?: string;
}

export const HookFormEx = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormProps>({
    mode: 'onSubmit',
  });

  console.log('errors', errors);

  return (
    <form onSubmit={handleSubmit((e) => console.log(e))}>
      <div>
        <label>Occupation: </label>
        <label htmlFor='student'>student</label>
        <input type='radio' value='student' id='student' {...register('occupation')} />
        <label htmlFor='professor'>professor</label>
        <input type='radio' value='professor' id='professor' {...register('occupation')} />
      </div>
      <div>
        <label>name: </label>
        <input type='text' {...register('name')} />
      </div>
      <div>
        <label>id: </label>
        <input type='text' {...register('id')} />
      </div>
      <div>
        <label>pwd: </label>
        <input type='text' {...register('pwd')} />
      </div>
      <div>
        <label>email: </label>
        <input type='text' {...register('email')} />
      </div>
      {true ? (
        <div>
          <label>phone: </label>
          <input type='text' {...register('phone')} />
        </div>
      ) : null}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default HookFormEx;
