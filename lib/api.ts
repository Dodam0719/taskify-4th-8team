import client from './axios';

// export async function signUp(data: object) {

//   try {
//     const response = await client.post('/users/', data);
//     if (response.status === 201) {
//       alert('가입이 완료되었습니다.');
//       const result = response.data;
//       window.location.href = '/login';
//       return result;
//     }
//   } catch (error: any) {
//     console.log(error.response.data.message);
//     alert(error.response.data.message);
//   }
// }

export async function logIn(data: object) {
  try {
    const response = await client.post('/auth/login', data);
    if (response.status === 201) {
      const result = response.data;
      window.location.href = '/mydashboard';
      return result;
    }
  } catch (error: any) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
}
