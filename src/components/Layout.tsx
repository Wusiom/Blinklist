import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import titleLogo from '../assets/title.svg'
import Footer from './footer'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({ children }) {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="sticky top-0 z-40 border-b border-gray-200 bg-white">
                    <div className="mx-auto max-w-7xl px-4 m:px-12">
                        <div className="flex h-18 justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="-mr-2 flex items-center l:hidden">
                                    {/* Mobile menu button */}
                                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-600  hover:text-gray-700">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon aria-hidden="true" className="l:hidden flex size-10 items-center justify-center group-data-open:hidden" />
                                        <XMarkIcon aria-hidden="true" className="hidden size-10 group-data-open:block" />
                                    </DisclosureButton>
                                </div>
                                <div className="flex">
                                    <div className="flex shrink-0 items-center">
                                        <img
                                            alt="Wusion"
                                            src={titleLogo}
                                            className="mr-2 m:h-6 h-5"
                                        />
                                    </div>
                                    <div className="l:inline-flex hidden">
                                        <Disclosure>
                                            {({ open }) => (
                                                <div>
                                                    <DisclosureButton className="cursor-pointer ml-10 inline-flex items-center justify-center whitespace-nowrap rounded-sm text-md font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 hover:text-blue-2 px-0 py-0">
                                                        Categories
                                                        <ChevronDownIcon aria-hidden="true" className={`ml-2 h-6 w-6 p-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                                                    </DisclosureButton>
                                                </div>
                                            )}
                                        </Disclosure>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-8">
                                <a target="_blank" href="/en/content/business" className="cursor-pointer items-center justify-center whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md text-sm hover:text-blue-2 px-0 py-0 m:inline-flex hidden">For Business</a>
                                <button className="cursor-pointer items-center justify-center whitespace-nowrap font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md text-sm hover:text-blue-2 px-0 py-0 m:inline-flex hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="mr-1 h-6 w-6"><path fill="currentColor" fillRule="evenodd" d="M6.75 9.003c.41 0 .75-.34.75-.75V4.5H19v16H7.5v-3.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75h13c.41 0 .75-.34.75-.75V3.75c0-.41-.34-.75-.75-.75h-13c-.41 0-.75.34-.75.75v4.503c0 .41.34.75.75.75Z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="m16.52 11.823-3.81-3.71a.754.754 0 0 0-1.06.01c-.29.3-.28.77.01 1.06l2.59 2.53H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h10.37l-2.37 2.43c-.29.3-.28.77.01 1.06.3.29.77.28 1.06-.01l3.71-3.81c.29-.3.28-.77-.01-1.06Z" clipRule="evenodd"></path></svg>Login</button>
                                <a target="_blank" type="button" className="cursor-pointer items-center justify-center whitespace-nowrap text-md font-medium ring-offset-white transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-green hover:bg-green-2 text-midnight xs:inline-flex hidden px-4">
                                    Get started
                                </a>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="l:hidden">
                        <div className="space-y-1 pt-2 pb-3">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    aria-current={item.current ? 'page' : undefined}
                                    className={classNames(
                                        item.current
                                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                                            : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                                        'block border-l-4 py-2 pr-4 pl-3 text-base font-medium',
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 pt-4 pb-3">
                            <div className="flex items-center px-4">
                                <div className="shrink-0">
                                    <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1">
                                {userNavigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>

                <div className="m:gap-20 flex flex-col gap-16">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}
