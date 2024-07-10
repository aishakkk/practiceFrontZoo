import React from 'react';

import Container from '@/components/Container';
import Finance from '@/assets/financial.png'
import Header from '@/components/Header';

const Researcher = () => {
    return (
        <Container>
                <div className=" text-center py-10">
                        <h2 className=' font-normal text-3xl'>вход в профиль</h2>
                    </div>
                
                <div className="justify-center flex pb-72 border-b-2 border-black">
                    <form action="">
                        <div className="flex gap-5">
                            <input type="text" className='py-4 border-2 shadow-md rounded-md  border-gray-400  w-[350px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='имя пользователя' />
                            <input type="text" className=' 400  w-[350px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='пароль' />
                        </div>
                        <div className="flex justify-center">
                    <button className='  mt-4 bg-red-600 w-[350px] rounded-md py-4 shadow-md text-white text-sm font-normal'>Вход</button>
                        </div>

                    </form>
                </div>


           

                    <div className=" mx-auto flex justify-center mt-40  overflow-hidden  flex-col">
                        
                    <div className=" text-center">
                        <h2 className=' font-normal text-3xl'>Отчеты</h2>
                        <span className=' font-medium text-sm text-black'>Страница для генерации отчетов (состояние здоровья животных, используемые препараты и т.д.). </span>
                    </div>
                    <input type="text" name="" className='py-4 my-5  mx-auto border-2 shadow-md  border-gray-400  bg-white w-[600px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='id отчета ' />
                    <div className=" text-center">
                        <h2 className=' font-normal text-3xl'>список всех отчетов</h2>
                        <span className=' font-normal text-sm text-gray-700'>тут находятся все отчеты которые есть</span>
                    </div>
                    <div className=" max-w-6xl flex justify-center">
                        <ul className='flex gap-4 mt-10 flex-wrap justify-end'>
                            <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>заголовок отчета</span>
                                        <span>имя врача</span>
                                        <span>краткое описание отчета</span>
                                        <span>дата отчета</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>заголовок отчета</span>
                                        <span>имя врача</span>
                                        <span>краткое описание отчета</span>
                                        <span>дата отчета</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>   <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>заголовок отчета</span>
                                        <span>имя врача</span>
                                        <span>краткое описание отчета</span>
                                        <span>дата отчета</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>   <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>заголовок отчета</span>
                                        <span>имя врача</span>
                                        <span>краткое описание отчета</span>
                                        <span>дата отчета</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>   <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>заголовок отчета</span>
                                        <span>имя врача</span>
                                        <span>краткое описание отчета</span>
                                        <span>дата отчета</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>   <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>заголовок отчета</span>
                                        <span>имя врача</span>
                                        <span>краткое описание отчета</span>
                                        <span>дата отчета</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>
                          
                        </ul>
                    </div>

             </div>
             <img src={Finance} className=' absolute -bottom-40 right-0 -z-10' alt="" />
             <div className="mt-40  ">
                <Header text="создать новый отчет" />
                <form action="" className=' w-[800px] flex flex-col mx-auto'>
                        <div className="flex gap-5  justify-center ">
                            <input type="text" className='py-4 border-2 shadow-md rounded-md  border-gray-400  w-[300px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='заголовок' />
                            <input type="text" className='py-4 border-2 shadow-md rounded-md  border-gray-400  w-[300px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='имя исследователя/врача' />
                        </div>
                            <input type="text" name="" className='rounded-md py-4 my-5  mx-auto border-2 shadow-md  border-gray-400  bg-white w-[620px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal    ' id=""  placeholder='краткое описание' />
                            <input type="text" name="" className='rounded-md py-8 my-5  mx-auto border-2 shadow-md  border-gray-400  bg-white w-[620px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal    ' id=""  placeholder='полное описание исследования' />
                            <input type="text" className=' mx-auto py-4 border-2 shadow-md rounded-md  border-gray-400  w-[300px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='дата отчета' />
                       
                        <div className="flex justify-center">
                            <button className='  mt-4 bg-red-600 w-[350px] rounded-md py-4 shadow-md text-white text-sm font-normal'>Cохранить</button>
                        </div>

                    </form>
             </div>
        </Container>
    )
};

export default Researcher;
