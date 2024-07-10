import React from 'react'
import Logo from '@/assets/ZooMedlogo.png';
import doctorAndDog from '@/assets/navbar.png';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'

const Navbars = () => {
  return (
    <Disclosure as="nav" className="bg-white shadow">
    <div className="mx-auto  max-w-full px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button */}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              alt="Your Company"
              src={Logo}
              className="h-8 w-auto"
            />
          </div>
        </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
            <a
              href="#"
              className="inline-flex items-center  font-normal  px-1 pt-1 text-sm  text-red-600 hover:text-red-700"
            >
              Отчеты 
            </a>
            <a
              href="#"
              className="inline-flex items-center  font-normal  px-1 pt-1 text-sm  text-red-600 hover:text-red-700"
            >
              Главная 
            </a>
            <a
              href="#"
              className="inline-flex items-center  font-normal  px-1 pt-1 text-sm  text-red-600 hover:text-red-700"
            >
              Вход/Профиль 
            </a>
            <a
              href="#"
              className="inline-flex items-center  font-normal  px-1 pt-1 text-sm  text-red-600 hover:text-red-700"
            >
              Назначения 
            </a>
            <a
              href="#"
              className="inline-flex items-center  font-normal  px-1 pt-1 text-sm  text-red-600 hover:text-red-700"
            >
              Животные 
            </a>
            <a
              href="#"
              className="inline-flex items-center  font-normal  px-1 pt-1 text-sm  text-red-600 hover:text-red-700"
            >
              Медикоменты 
            </a>
            <img src={doctorAndDog} className=' hidden md:block'></img>
          </div>
      </div>
    </div>

    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 pb-4 pt-2">
        <DisclosureButton
          as="a"
          href=""
          className="block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-red-600 hover:text-red-700"
        >
          Отчеты
        </DisclosureButton>
        <DisclosureButton
          as="a"
          href="/"
          className="block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-red-600 hover:text-red-700"
        >
          Главная
        </DisclosureButton>  
        <DisclosureButton
          as="a"
          href="/admin"
          className="block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-red-600 hover:text-red-700"
        >
       Вход/Профиль 
        </DisclosureButton>  <DisclosureButton
          as="a"
          href="/researcher"
          className="block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-red-600 hover:text-red-700"
        >
             Назначения 
        </DisclosureButton>  
        <DisclosureButton
          as="a"
          href="#"
          className="block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-red-600 hover:text-red-700"
        >
          Животные
        </DisclosureButton>  <DisclosureButton
          as="a"
          href="/veterinary"
          className="block border-l-4 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-red-600 hover:text-red-700"
        >
          Медикоменты
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>

  )
}

export default Navbars