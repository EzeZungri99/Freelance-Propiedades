'use client';
import Link from 'next/link';
import { use, useState } from 'react';
import { validateForm } from './validates';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const session = useSession();

  if (session.status === 'authenticated') router.push('/');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData({
      email: '',
      password: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const res = await signIn('credentials', { ...formData, redirect: false})
      console.log(res);
      if(res?.error) setErrors({email : 'Correo o contraseña invalidos'})
      clearForm();
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-black bg-no-repeat bg-cover ">
      <div className=" mx-auto md:max-w-35rem h-50 space-y-8 p-10 bg-white rounded-xl shadow-lg z-10 pl-0 pr-0">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Iniciar sesión
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className=" max-w-xl mr-12 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900"></dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                <form onSubmit={handleSubmit}>
                  {/* input mail */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      {' '}
                      Correo electrónico <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="nombre@dominio.com"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="email"
                      id="integration_shop_name"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <p className='text-red-600'>{errors.email}</p>}
                  </div>

                  {/* input password */}
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      {' '}
                      Contraseña <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="ingrese su Password"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    {errors.password && <p className='text-red-600'>{errors.password}</p>}
                  </div>

                  {/* botones */}
                  <button
                    className="mx-auto block mb-4 md:mb-1 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                    type="submit"
                  >
                    Ingresar
                  </button>

                  <p style={{ fontSize: '11px', textAlign: 'center' }}>
                   
                  </p>
                </form>
                <div className="flex justify-center">
                  <button
                    onClick={() => signIn('google')}
                    className="mx-auto block mb-2 md:mb-0 mr-2 md:mr-4 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500"
                  >
                    Google
                  </button>

                  <button
                    onClick={async () => {
                      const res = await signIn('github');
                    }}
                    className="mx-auto block mb-2 md:mb-0 ml-2 md:ml-4 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500"
                  >
                    GitHub
                  </button>
                </div>
                <p style={{ fontSize: '11px', textAlign: 'center' }}>
                  ¿No tienes cuenta?
                </p>

                <Link href={'/SignIn'}>
                  <button className="mx-auto block mb-2 md:mb-0 bg-blue-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-blue-500">
                    Registrarse
                  </button>
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
