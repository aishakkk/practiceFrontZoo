import React from 'react';

import Container from '@/components/Container';
import Frame from '@/components/Frame';
import Header from '@/components/Header';

import FemaleVet from '@/assets/femaleVet.png'
import Veterinarian from '@/assets/Veterinarian.png'
import Stars from '@/assets/start.png'
import Group from '@/assets/Group.png'
import Like from '@/assets/Like.png'
import Frame5 from '@/assets/frame5.png'

const Veterinary = () => {
    return (
        <div>
         
              <div className="relative isolate overflow-hidden h-[600px] pt-10 bg-green-600 ">
                <img
                    alt=""
                    src={Veterinarian}
                    className="absolute -bottom-[140px] right-2"
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
                    <div className="mx-auto text-[#0B3B3C] font-scada lg:mx-0 w-1/2  py-16">
                    <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">ЖИВОТНЫЕ</h2>
                    <div className="flex flex-col gap-8  w-[400px] justify-center mx-auto mt-5">
                        <button className='text-white bg-red-600 px-10  py-3 text-lg font-normal'>список</button>
                        <button className='text-white bg-red-600 px-10  py-3 text-lg font-normal'>добавить нового пациента</button>
                    </div>
                    </div>
                </div>
            </div>
            <Frame/>
            <Container>
                    <div className=" text-center pb-10">
                        <h2 className=' font-medium text-3xl'>СПИСОК</h2>
                        <span className='font-normal text-sm text-[#6C7279]'>тут показывает весь список пациентов которые были зарегистрированы</span>
                    </div>
            <div className=" mx-auto flex justify-center mt-40 pt-10  overflow-hidden  flex-col">
                <img src={FemaleVet} className=' absolute right-10 -z-10 bottom-0' alt="" />
                    <div className=" max-w-6xl flex justify-center mx-auto">
                        <ul className='flex gap-4 mt-10 '>
                            <li className='flex flex-col'>
                                <div className=" sm:w-[210px] w-[60%] h-[201px] border-[20px] border-red-600 bg-white flex justify-between p-4">
                                 </div>
                                 <div className="flex flex-col font-medium text-green-700">
                                    <span>имя</span>
                                    <span>ID</span>
                                    <span>краткое описание</span>
                                    <a href='' className=' border-b-2 text-center w-32 border-green-700'>редактировать</a>
                                 </div>
                            </li>
                            <li className='flex flex-col'>
                                <div className=" sm:w-[210px] w-[60%] h-[201px] border-[20px] border-red-600 bg-white flex justify-between p-4">
                                 </div>
                                 <div className="flex flex-col font-medium text-green-700">
                                    <span>имя</span>
                                    <span>ID</span>
                                    <span>краткое описание</span>
                                    <a href='' className=' border-b-2 text-center w-32 border-green-700'>редактировать</a>
                                 </div>
                            </li>    <li className='flex flex-col'>
                                <div className=" sm:w-[210px] w-[60%] h-[201px] border-[20px] border-red-600 bg-white flex justify-between p-4">
                                 </div>
                                 <div className="flex flex-col font-medium text-green-700">
                                    <span>имя</span>
                                    <span>ID</span>
                                    <span>краткое описание</span>
                                    <a href='' className=' border-b-2 text-center w-32 border-green-700'>редактировать</a>
                                 </div>
                            </li>    <li className='flex flex-col'>
                                <div className=" sm:w-[210px] w-[60%] h-[201px] border-[20px] border-red-600 bg-white flex justify-between p-4">
                                 </div>
                                 <div className="flex flex-col font-medium text-green-700">
                                    <span>имя</span>
                                    <span>ID</span>
                                    <span>краткое описание</span>
                                    <a href='' className=' border-b-2 text-center w-32 border-green-700'>редактировать</a>
                                 </div>
                            </li>    <li className='flex flex-col'>
                                <div className=" sm:w-[210px] w-[60%] h-[201px] border-[20px] border-red-600 bg-white flex justify-between p-4">
                                 </div>
                                 <div className="flex flex-col font-medium text-green-700">
                                    <span>имя</span>
                                    <span>ID</span>
                                    <span>краткое описание</span>
                                    <a href='' className=' border-b-2 text-center w-32 border-green-700'>редактировать</a>
                                 </div>
                            </li>
                          
                        </ul>
                    </div>

             </div>
            </Container>
            <Header text='ИНФОРМАЦИЯ'/>
            <div className="bg-green-600 max-w-[1450px] mx-auto pb-10">
                <div className="flex justify-center gap-4 pt-10 pb-20"> 
                    <input type="text" name="" className='py-4 border-2 shadow-md  border-gray-400  w-[600px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='id животного' />
                    <button className=' bg-red-600 px-4 py-5 shadow-md text-white text-sm font-normal'>Найти</button>
                </div>
                <div className=" max-w-3xl mx-auto text-white ">
                    <div className=" bg-gray-600 w-full py-2 ">
                        <div className='text-center m-auto font-semibold font-scada  text-2xl '><span className=' text-center text-green-700'>СТАТУС ЗДОРОВЬЯ</span></div>
                    </div>
                    <div className="opacity-70 py-10 bg-white flex ">
                        <div className="flex flex-col  font-normal text-xl gap-5 px-3 text-black border-r-2 border-black">
                                                <span>имя </span>
                                                <span>ID</span>
                                                <span>КЛИНИКА</span>
                                                <span>СОСТОЯНИЕ</span>
                        </div>
                        <div className="">s</div>
                    </div>
                </div>
            </div>
            <Header text='ИСТОРИЯ МЕДИКАМЕНТОВ'/>
            <Container>
            <div className="flex justify-center gap-4 pt-10 pb-20"> 
                    <input type="text" name="" className='py-4 border-2 shadow-md  border-gray-400  w-[600px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='id животного' />
                    <button className=' bg-red-600 px-4 py-5 shadow-md text-white text-sm font-normal'>Найти</button>
                </div>
               
            <div className="mx-aut w-[900px] mx-auto">
            <table className="min-w-full  divide-y divide-red-600">
                <thead className="bg-red-600">
                <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-white sm:pl-6">
                    имя животного
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm  font-medium text-white">
                    медикаменты
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-normal text-white">
                    дата назначения
                    </th>
                    <th scope="col" className="px-1 py-3.5 text-left text-sm font-normal text-white">
                    описание медикамента
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white opacity-90">
                
                    <tr >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        s
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    </tr>
                    <tr >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        s
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    </tr>
                    <tr >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        s
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    </tr>
                    <tr >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        s
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    </tr> <tr >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        s
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    </tr>
                    <tr >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        s
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">s</td>
                    </tr>
                </tbody>
            </table>
            </div>
           

            </Container>
            <div className=" mx-auto flex justify-center mt-40 mb-40 overflow-hidden  flex-col">
                {/* <img src={Collection} className=' absolute right-10 z-10 top-0' alt="" /> */}
                    <div className=" text-center">
                        <h2 className=' font-normal text-3xl'>Медикаменты</h2>
                        <span className='font-normal text-sm text-[#6C7279]'>Описание и список всех медикаментов </span>
                    </div>
                    <div className=" max-w-6xl flex justify-center">
                        <ul className='flex gap-4 mt-10 flex-wrap justify-end'>
                            <li>
                                <div className=" sm:w-[430px] w-[60%] h-32 bg-green-600 flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-green-700">
                                        <span className=' text-md font-normal font-scada text-green-700 '>название</span>
                                        <span>производство</span>
                                        <span>краткое описание</span>
                                        <span>основные ингридиенты</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[430px] w-[60%] h-32 bg-green-600 flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-green-700">
                                        <span className=' text-md font-normal font-scada text-green-700 '>название</span>
                                        <span>производство</span>
                                        <span>краткое описание</span>
                                        <span>основные ингридиенты</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[430px] w-[60%] h-32 bg-green-600 flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-green-700">
                                        <span className=' text-md font-normal font-scada text-green-700 '>название</span>
                                        <span>производство</span>
                                        <span>краткое описание</span>
                                        <span>основные ингридиенты</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[430px] w-[60%] h-32 bg-green-600 flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-green-700">
                                        <span className=' text-md font-normal font-scada text-green-700 '>название</span>
                                        <span>производство</span>
                                        <span>краткое описание</span>
                                        <span>основные ингридиенты</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[430px] w-[60%] h-32 bg-green-600 flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-green-700">
                                        <span className=' text-md font-normal font-scada text-green-700 '>название</span>
                                        <span>производство</span>
                                        <span>краткое описание</span>
                                        <span>основные ингридиенты</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>
                            <li>
                                <div className=" sm:w-[430px] w-[60%] h-32 bg-green-600 flex justify-between p-4 items-center">
                                    <div className="flex flex-col  font-light text-green-700">
                                        <span className=' text-md font-normal font-scada text-green-700 '>название</span>
                                        <span>производство</span>
                                        <span>краткое описание</span>
                                        <span>основные ингридиенты</span>
                                    </div>
                                    <div > <button className="px-3 py-5 rounded-sm bg-red-600 text-white">посмотреть больше</button></div>
                                </div>
                            </li>
                          
                        </ul>
                    </div>

             </div>
            
               <Container>
               <img src={Like} className=' absolute top-0 left-0' alt="" />
               <img src={Group} className='absolute bottom-0 right-0 ' alt="" />
               <img src={Frame5} className='absolute bottom-0  left-0 ' alt="" />

                <div className=" text-center z-10 items-center">
                        <img src={Stars} className=' mx-auto py-3' alt="" />
                        <h2 className=' font-normal text-4xl pb-4'>Медикаменты</h2>
                        <span className='font-normal text-md text-[#6C7279]'>Описание и список всех медикаментов </span>
                    </div>
                    <div className="flex justify-center gap-4 pt-10 pb-20"> 
                        <input type="text" name="" className='py-4 border-2 shadow-md  border-gray-400  w-[600px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='название медикамента' />
                    </div>
                    <div className="mx-aut w-[900px] mx-auto">
            <table className="min-w-full  divide-y divide-red-600 border-red-600">
                <thead className="bg-[#bb8073]">
                <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-black sm:pl-6">имя</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-black sm:pl-6">группа</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-black sm:pl-6">годы исследования</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-black sm:pl-6">восстонавление</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-black sm:pl-6">побочные эффекты</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-black sm:pl-6">риск</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-black sm:pl-6">общая эффективность</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-red-600 bg-white text-center  opacity-60">
                
                    <tr >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    селофорт
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">для кошек и собак</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">2024</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">85%</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">рвота</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">0%</td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Препарат обладает доказанной эффективностью</td>
                    </tr>
                   
                </tbody>
            </table>
                    </div>
                    <div className="mt-10 rounded-full bg-[#88888888] mx-auto w-96 h-96">
                        <img src="" className=' w-full h-full rounded-full' alt="" />
                    </div>
               </Container>
          
             
        </div>
    );
};

export default Veterinary;
