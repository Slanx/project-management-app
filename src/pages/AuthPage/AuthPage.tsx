import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IFormInputs } from './AuthPage.types';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18next/i18next';

const schema = yup
  .object({
    name: yup.string().required('Введите имя').min(2, 'Минимум 2 символа'),
    login: yup.string().required('Введите логин').min(3, 'Минимум 3 символа'),
    password: yup.string().required('Введите пароль').min(3, 'Минимум 3 символа'),
  })
  .required();

const AuthPage = () => {
  const { t } = useTranslation();
  const inputsArray = [
    {
      name: 'name' as const,
      labelText: t('name'),
    },
    {
      name: 'login' as const,
      labelText: t('login'),
    },
    {
      name: 'password' as const,
      labelText: t('password'),
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormInputs) => alert(JSON.stringify(data));

  const changeLang = () => {
    i18n.changeLanguage('ru');
  };

  const classNames = {
    name: errors.name ? 'signInLabelError' : 'signInLabel',
    login: errors.login ? 'signInLabelError' : 'signInLabel',
    password: errors.password ? 'signInLabelError' : 'signInLabel',
  };

  return (
    <div className="container flex items-center justify-center mt-[10%]">
      <button className="button1" onClick={changeLang}>
        Сменить язык
      </button>
      <div className=" shadow-md p-5 w-[500px] mx-auto flex flex-col items-center">
        <h1 className="text-2xl mb-10 capitalize">{t('registration')}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          {inputsArray.map((item) => {
            return (
              <div className="mb-10 relative" key={item.name}>
                <label htmlFor="name" className={classNames[item.name]}>
                  <input
                    className="outline-none p-1 rounded-lg text-black"
                    {...register(item.name)}
                    type="text"
                    name={item.name}
                    autoComplete="off"
                  />
                  <div className=" absolute left-2 top-[-19px] p-1 bg-white uppercase text-xs ">
                    {item.labelText}
                  </div>
                </label>
                {errors[item.name] && <p className="text-red-600">{errors[item.name]?.message}</p>}
              </div>
            );
          })}
          <button type="submit" className="button1 capitalize">
            {t('signUp')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
