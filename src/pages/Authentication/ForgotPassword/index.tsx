import { Controller, useForm } from "react-hook-form";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useFetchExample } from "@/hooks/account/useFetchAccount";

type ForgotPasswordFields = {
  email: string;
};

export const ForgotPassword = () => {
  const { isLoading } = useFetchExample();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFields>({
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: ForgotPasswordFields) => console.log(data);

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Recuperar a senha
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email é obrigatorio.",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email inválido.",
                        },
                      }}
                      render={({ field }) => (
                        <>
                          <input
                            {...field}
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="mail@provedor.com"
                          />
                          {errors.email && (
                            <p className="mt-2 text-sm text-red-600">
                              {errors.email.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {isLoading ? <LoadingSpinner /> : "Enviar email"}
                  </button>
                  <div className="flex justify-center mt-2">
                    <a
                      href="/login"
                      className="font-normal text-indigo-600 hover:text-indigo-500 underline"
                    >
                      Voltar a página de login
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://i.imgur.com/sJCBtJH.png"
          alt=""
        />
      </div>
    </div>
  );
};
