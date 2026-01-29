'use client';
import { AuthForm } from '@/components/forms/AuthForm';
import { SignInSchema } from '@/lib/validations';

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: 'test@gmail.com', password: '123456' }}
      onSubmit={(data) => {
        return Promise.resolve({ success: true, data });
      }}
    />
  );
};

export default SignIn;
