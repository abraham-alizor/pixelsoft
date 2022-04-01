import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import LOGO from '../public/images/vector.png';
// import '../styles/nav.css';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div className='bg-img' style={{ minHeight: 650 }}>
				<div className='bg-img-2'>
					<nav className=' shadow-sm fixed w-full z-10'>
						<div className='w-full nav-background'>
							<div className='flex items-center h-20 w-full'>
								<div className='flex items-center  mx-20  justify-start w-full'>
									<div className='flex justify-center items-center flex-shrink-0 w-1/6'>
										<div className='flex flex-row justify-start cursor-pointer'>
											<Image src={LOGO} alt='...logo' />{' '}
											<div className='text-white text-xl font-bold px-6'>T360 °</div>
										</div>
									</div>
									<div className='hidden md:block w-5/6'>
										<div className='flex justify-between'>
											<div className='ml-10 flex items-baseline space-x-4'>
												<Link
													activeClass='Home'
													to='#'
													smooth={true}
													offset={50}
													duration={500}
													className='cursor-pointer font-medium px-3 py-2 text-sm hover:font-black hover:bg-black hover:text-white'
												>
													Services
												</Link>
												<Link
													activeClass='about'
													to='#'
													smooth={true}
													offset={50}
													duration={500}
													className='cursor-pointer  text-black  px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white'
												>
													Investors Room
												</Link>
												<Link
													activeClass='work'
													to='#'
													smooth={true}
													offset={50}
													duration={500}
													className='cursor-pointer text-black  px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white'
												>
													Pricing
												</Link>

												<Link
													activeClass='Services'
													to='#'
													smooth={true}
													offset={50}
													duration={500}
													className='cursor-pointer text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white'
												>
													Careers
												</Link>

												<Link
													activeClass='contact'
													to='#'
													smooth={true}
													offset={50}
													duration={500}
													className='cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black'
												>
													Contact
												</Link>
											</div>
											<div className='ml-10 flex items-baseline space-x-4'>
												<Link
													activeClass='contact'
													to='#'
													smooth={true}
													offset={50}
													duration={500}
													className='cursor-pointer bg-white text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-black hover:text-white'
												>
													T360 DaaS
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className='mr-10 flex md:hidden '>
									<button
										onClick={() => setIsOpen(!isOpen)}
										type='button'
										className='bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
										aria-controls='mobile-menu'
										aria-expanded='false'
									>
										<span className='sr-only'>Open main menu</span>
										{!isOpen ? (
											<svg
												className='block h-6 w-6'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												aria-hidden='true'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M4 6h16M4 12h16M4 18h16'
												/>
											</svg>
										) : (
											<svg
												className='block h-6 w-6'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												aria-hidden='true'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2'
													d='M6 18L18 6M6 6l12 12'
												/>
											</svg>
										)}
									</button>
								</div>
							</div>
						</div>

						<Transition
							show={isOpen}
							enter='transition ease-out duration-100 transform'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='transition ease-in duration-75 transform'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							{(ref) => (
								<div className='md:hidden' id='mobile-menu'>
									<div ref={ref} className='bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3'>
										<Link
											href='#'
											activeClass='home'
											to='home'
											smooth={true}
											offset={50}
											duration={500}
											className='cursor-pointer hover:bg-gray-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
										>
											Services
										</Link>
										<Link
											href='#'
											activeClass='about'
											to='about'
											smooth={true}
											offset={50}
											duration={500}
											className='cursor-pointer hover:bg-gray-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
										>
											Investors Room
										</Link>

										<Link
											href='#'
											activeClass='work'
											to='work'
											smooth={true}
											offset={50}
											duration={500}
											className='cursor-pointer hover:bg-gray-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
										>
											Pricing
										</Link>
										<Link
											href='#'
											activeClass='services'
											to='services'
											smooth={true}
											offset={50}
											duration={500}
											className='cursor-pointer hover:bg-gray-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
										>
											Careers
										</Link>

										<Link
											href='#'
											activeClass='work'
											to='work'
											smooth={true}
											offset={50}
											duration={500}
											className='cursor-pointer hover:bg-gray-800 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'
										>
											Contact
										</Link>
									</div>
								</div>
							)}
						</Transition>
					</nav>
					<div>
						<div className='flex justify-center items-center flex-col pt-40 text-center   space-y-2'>
							<div className='flex justify-center items-center w-full'>
								<div className='w-2/3'>
									<p className='text-gray-100 pb-10 lg:text-8xl text-3xl font-bold'>
										Delivering Purpose Driven Data
									</p>
									<p className='text-gray-100 lg:text-md text-sm pb-10 text font-normal'>
										Transaction 360 (T360 ) is bringing to the market a revolutionary approach to
										address major industry data issues.
									</p>
								</div>
							</div>
							<div className='flex justify-between lg:pt-8'>
								<div className='flex justify-center items-center cursor-pointer hover:shadow-lg  text-lg text-gray-900 font-normal text-white bg-white rounded-lg w-40 h-16'>
									<h1 className='text-center'>Get Started </h1>
								</div>
								<div
									style={{ borderWidth: 1 }}
									className='flex justify-center items-center cursor-pointer hover:shadow-lg  text-lg font-normal text-white bg-transparents border-white rounded-lg w-40 h-16 ml-4'
								>
									<h1 className='text-center'>Learn More </h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

const LogoImg = tw.img`
`;
