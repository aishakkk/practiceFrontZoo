import React from 'react';

const Admin = () => {
    return (
        <div className='relative isolate pt-10  pb-10 bg-red-600 text-white '>
         
            <div className=" text-center py-10 w-[350px] mx-auto pb-72">
                        <h2 className=' font-normal text-2xl mb-10'>зарегестрируйте нового пользователя!</h2>
                        <button className='text-white bg-green-600  w-[300px]  py-3 text-lg font-normal'>регистрация</button>     
            </div>
            <div className=" border-b-2 border-black"></div>
            <div className=" text-center py-10">
                        <h2 className=' font-normal text-3xl'>добавьте новый препарат</h2>
                    </div>
                
                <div className="justify-center flex pb-72 border-b-2 border-black">
                    <form action="">
                        <div className="flex gap-5 flex-wrap w-[600px]">
                        <input type="text" className='py-4 border-2 shadow-md rounded-md  border-gray-400  w-[250px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='имя пользователя' />
                        <input type="text" className='py-4 border-2 shadow-md rounded-md  border-gray-400  w-[250px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='состав ' />
                        <input type="text" className='py-4 border-2 shadow-md rounded-md  border-gray-400  w-[250px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='стоимость ' />
                        </div>
                        <div className="flex justify-center">
                    <button className='  mt-4 bg-green-600 w-[350px] rounded-md py-4 shadow-md text-white text-sm font-normal'>добавить</button>
                        </div>

                    </form>
                </div>





                <div className=" text-center py-10 w-[400px] mx-auto">
                        <h2 className=' font-normal text-3xl'>отредактируйте препарат или удалите</h2>
                    </div>
                
                <div className="justify-center flex ">
                    <form action="">
                        <div className="flex gap-5 flex-wrap w-[750px]">
                        <input type="text" className='py-4 border-2 shadow-md rounded-md  border-gray-400  w-[350px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='id препарата' />
                        <input type="text" className='py-4 border-2 shadow-md rounded-md  border-gray-400  w-[350px] placeholder:pl-4 placeholder:text-sm placeholder:font-normal  ' id=""  placeholder='что хотели изменить ' />
                         </div>
                        <div className="flex justify-center mt-4 items-center flex-col gap-2">
                    <button className='  mt-4 bg-green-600 w-[350px] rounded-md py-4 shadow-md text-white text-sm font-normal'>добавить</button>
                    <button className='  mt-4 bg-green-600 w-[350px] rounded-md py-4 shadow-md text-white text-sm font-normal'>удалить препарат</button>
                        </div>

                    </form>
                </div>
        </div>
    );
};

export default Admin;
