import React from 'react';

import Frame from '@/components/Frame';
import Container from '@/components/Container';
import Header from '@/components/Header';

import { EnvelopeIcon } from '@heroicons/react/24/outline';

import femaleVeterinarianDog from '@/assets/femaleVeterinarianDog.png'
import Rectangle from '@/assets/Rectangle.png'
import Doctor from '@/assets/doctor.png'
import Collection from '@/assets/collection.png'
import Footer from '@/components/Footer';

const Dashboard = () => {
    return  (
        <div>
            <div className="relative isolate overflow-hidden h-[783px]">
                <img
                    alt=""
                    src={Rectangle}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div
                    aria-hidden="true"
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                >
                    <div
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    />
                </div>
        
                <div className="mx-auto max-w-7xl flex justify-center mt-24 px-6 lg:px-8 text-center items-center ">
                    <div className="mx-auto text-[#0B3B3C] font-scada lg:mx-0 w-1/2  py-16 bg-white -z-10  opacity-80">
                    <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">Добро пожаловать в ZooMed!</h2>
                    <p className="mt-6 text-lg leading-8 font-scada ">
                    Разработка технологий производства гипериммунных биогенных препаратов для профилактики и лечения болезней животных бактериальной и вирусной этиологии
                    </p>
                    <div className="flex flex-col gap-2 w-2/3 justify-center mx-auto mt-5">
                    <button className='text-white bg-red-600 px-20  py-5 text-lg font-normal'>Вход</button>
                    <button className='text-white bg-red-600 px-20  py-5 text-lg font-normal'>Регистрация</button>
                    </div>
                    </div>
                </div>
            </div>
            <Frame/>
            <Container >
                <div className="mx-auto flex justify-center  flex-col">
                    <div className="flex justify-center">

                <img src={femaleVeterinarianDog} alt="" />
                    </div>
                    <div className="mx-auto max-w-7xl flex justify-center mt-5 px-6 lg:px-8 text-center items-center ">
                    <div className="mx-auto text-[#0B3B3C] font-scada lg:mx-0 ">
                    <h2 className="text-4xl font-bold tracking-tight  sm:text-5xl py-5">ВХОД В ПРОФИЛЬ</h2>
                    <form action="" className='flex flex-col gap-5 '>
                        <input type="text" name="" className='px-5 placeholder:text-black  placeholder:text-center py-5 text-lg font-normal' placeholder='Имя Пользователя' id="" />
                        <input type="text" name="" className=' px-5 placeholder:text-black  placeholder:text-center py-5 text-lg font-normal' placeholder='Пароль' id="" />
                    <button className='text-white bg-red-600 px-20  py-5 text-lg font-normal'>Вход</button>
                    </form>
                    </div>
                </div>
                </div>
            </Container>
            <Header text="ЛИЧНЫЙ КАБИНЕТ"/>
            <Container >
                <div className=" flex justify-center gap-44">
                        <div className=" h-[463px] bg-gray-600 w-[320px] overflow-hidden px-10">
                            {/* img  */}
                        </div>   
                        <div className="h-[350px] mt-10 border-r-2 border-black md:block hidden"></div>
                        <div className="w-[508px]">
                            <div className="flex flex-col">
                                <div className=" flex items-center">
                                <img src={Doctor} alt="" />
                                     <div className=""><h2 className=' bg-red-600 text-white px-2 py-1 font-medium text-2xl  rounded-md'>Нурда  Лох и свинья</h2>
                                     </div> 
                                </div>
                                <div className="text-2xl  font-light flex flex-col">
                                <span className=''>Должность: Ветеринар</span>
                                    <span>Образование: Мед.университет 
                                    им. Асфендиярова</span>
                                    <span>Направление: Домашние питомцы</span>
                                    <span>Доп. информации</span>
                                </div>
                                <div className="flex gap-3 pt-10 items-center">
                                    <EnvelopeIcon className='w-10 h-10'/>
                                    <span className='text-2xl'>darmanovich@sample.ru</span>
                                </div>
                            </div>
                        </div>                 
                </div>
            </Container>
            <Header text='НАЗНАЧЕНИЯ' />
            <Container>
            <div className=" mx-auto flex justify-center mt-40  overflow-hidden  flex-col">
                <img src={Collection} className=' absolute right-10 z-10 top-0' alt="" />
                    <div className=" text-center">
                        <h2 className=' font-normal text-3xl'>ID животного</h2>
                        <span className='font-normal text-sm text-[#6C7279]'>тут находятся все препараты которые назначались (имя животного)</span>
                    </div>
                    <div className=" max-w-6xl flex justify-center">
                        <ul className='flex gap-4 mt-10 flex-wrap justify-end'>
                            <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>название медикамента</span>
                                        <span>имя врача</span>
                                        <span>описание причины назначения</span>
                                        <span>период назначения</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">редактировать</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>название медикамента</span>
                                        <span>имя врача</span>
                                        <span>описание причины назначения</span>
                                        <span>период назначения</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">редактировать</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>название медикамента</span>
                                        <span>имя врача</span>
                                        <span>описание причины назначения</span>
                                        <span>период назначения</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">редактировать</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>название медикамента</span>
                                        <span>имя врача</span>
                                        <span>описание причины назначения</span>
                                        <span>период назначения</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">редактировать</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>название медикамента</span>
                                        <span>имя врача</span>
                                        <span>описание причины назначения</span>
                                        <span>период назначения</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">редактировать</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[420px] w-[60%] h-32 bg-white flex justify-between p-4">
                                    <div className="flex flex-col  font-light text-gray-500">
                                        <span className=' text-md font-normal font-scada text-black '>название медикамента</span>
                                        <span>имя врача</span>
                                        <span>описание причины назначения</span>
                                        <span>период назначения</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">редактировать</button></div>
                                </div>
                            </li>
                          
                        </ul>
                    </div>

             </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Dashboard;
