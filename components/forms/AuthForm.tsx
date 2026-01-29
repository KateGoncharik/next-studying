'use client';

import { zodResolver } from '@hookform/resolvers/zod';

import {
  // DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
// import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

interface AuthFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
  formType: 'SIGN_IN' | 'SIGN_UP';
  // formType: string;
}

export const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  // onSubmit,
  formType,
}: AuthFormProps<T>) => {
  const form = useForm<FieldValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit: SubmitHandler<FieldValues> = async () => {
    // onSubmit({});
  };

  const buttonText = formType === 'SIGN_IN' ? 'Sign In' : 'Sign Up';

  return (
    <Form {...form}>
      <form
        className="mt-10 space-y-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        {buttonText}

        {Object.keys(defaultValues).map((field) => {
          return (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      {field.name === 'email'
                        ? 'Email Address'
                        : field.name.charAt(0).toUpperCase() +
                          field.name.slice(1)}
                    </FormLabel>
                    <FormControl>
                      <Input
                        required
                        type={field.name === 'password' ? 'password' : 'text'}
                        placeholder=""
                        {...field}
                        className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                      ></Input>
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                );
              }}
            />
          );
        })}
        <Button
          className="primary-text-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? buttonText === 'Sign In'
              ? 'Signing In...'
              : 'Signing Up...'
            : buttonText}
        </Button>
        {formType === 'SIGN_IN' ? (
          <p>
            Don&apos;t have an account?{' '}
            <Link href={ROUTES.SIGNUP}>Sign up</Link>
          </p>
        ) : (
          <p>
            Already have an account? <Link href={ROUTES.SIGNIN}>Sign in</Link>
          </p>
        )}
      </form>
    </Form>
  );
};
