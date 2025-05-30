import * as React from 'react';

const GoalsSection: React.FC = () => {
    return (
        <div data-test-id="goals-section" className="mb-12">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bottom-12 m:bottom-16 -z-10 bg-background-yellow"></div>
                <section className="flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
                    <article className="w-full pt-12 m:grid m:grid-cols-12 m:gap-x-6 m:px-2">
                        <div className="mb-6 m:mb-0 m:col-span-5 m:pt-11">
                            <div className="mb-4 font-bold text-midnight text-h3 m:mb-8 m:text-h2">
                                Powerful ideas from top nonfiction
                            </div>
                            <p className="mb-8 text-base m:text-xl text-dark-grey">
                                Try Blinkist to get the key ideas from <strong>7,500+ bestselling nonfiction titles and podcasts.</strong> Listen or read in just <strong>15&nbsp;minutes.</strong>
                            </p>
                            <a
                                data-test-id="goals-banner-cta-button"
                                href="/en/onboarding/matrix"
                                className="w-full m:w-72 inline-block px-4 rounded border-none font-cera-pro font-medium text-base leading-5 text-center no-underline outline-none cursor-pointer disabled:cursor-not-allowed bg-green text-midnight hover:bg-green-2 hover:text-midnight py-3"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="flex items-center justify-center m:col-span-7 m:justify-start m:ml-7">
                            <svg viewBox="0 0 87 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-16 flex-none text-blue">
                                <path d="M6.29579 34.4683C6.29579 36.0161 5.03408 37.2797 3.48873 37.2797C1.93359 37.2797 0.671875 36.0161 0.671875 34.4683V25.5834C0.671875 24.0259 1.93359 22.7622 3.48873 22.7622C5.04386 22.7622 6.29579 24.0259 6.29579 25.5834V34.4683Z" />
                                <path d="M16.3114 40.8452C16.3114 42.393 15.0595 43.6566 13.5043 43.6566C11.9492 43.6566 10.6973 42.393 10.6973 40.8452V19.1962C10.6973 17.6387 11.9492 16.375 13.5043 16.375C15.0595 16.375 16.3114 17.6387 16.3114 19.1962V40.8452Z" />
                                <path d="M26.3349 50.4254C26.3349 51.9732 25.0731 53.2368 23.5278 53.2368C21.9727 53.2368 20.7109 51.9732 20.7109 50.4254V9.62542C20.7109 8.06787 21.9727 6.8042 23.5278 6.8042C25.0829 6.8042 26.3349 8.06787 26.3349 9.62542V50.4254Z" />
                                <path d="M36.3602 34.938C36.3602 36.4956 35.1083 37.7592 33.5532 37.7592C31.998 37.7592 30.7363 36.4956 30.7363 34.938V25.1029C30.7363 23.5454 31.998 22.2915 33.5532 22.2915C35.1083 22.2915 36.3602 23.5454 36.3602 25.1029V34.938Z" />
                                <path d="M46.3856 44.5188C46.3856 46.0665 45.1337 47.3302 43.5786 47.3302C42.0234 47.3302 40.7715 46.0665 40.7715 44.5188V15.5229C40.7715 13.9653 42.0234 12.7114 43.5786 12.7114C45.1337 12.7114 46.3856 13.9653 46.3856 15.5229V44.5188Z" />
                                <path d="M56.411 38.1316C56.411 39.6794 55.1591 40.943 53.6039 40.943C52.0488 40.943 50.7969 39.6794 50.7969 38.1316V21.9096C50.7969 20.352 52.0488 19.0981 53.6039 19.0981C55.1591 19.0981 56.411 20.352 56.411 21.9096V38.1316Z" />
                                <path d="M66.4384 56.8126C66.4384 58.3603 65.1864 59.624 63.6313 59.624C62.0762 59.624 60.8242 58.3603 60.8242 56.8126V3.2387C60.8242 1.68115 62.0762 0.41748 63.6313 0.41748C65.1864 0.41748 66.4384 1.68115 66.4384 3.2387V56.8126Z" />
                                <path d="M86.4891 38.1316C86.4891 39.6794 85.2372 40.943 83.6821 40.943C82.1269 40.943 80.875 39.6794 80.875 38.1316V21.9096C80.875 20.352 82.1269 19.0981 83.6821 19.0981C85.2372 19.0981 86.4891 20.352 86.4891 21.9096V38.1316Z" />
                                <path d="M76.4638 44.5188C76.4638 46.0665 75.2118 47.3302 73.6567 47.3302C72.1015 47.3302 70.8496 46.0665 70.8496 44.5188V15.5229C70.8496 13.9653 72.1015 12.7114 73.6567 12.7114C75.2118 12.7114 76.4638 13.9653 76.4638 15.5229V44.5188Z" />
                            </svg>
                            <div role="img" aria-label="A mobile phone playing a Blink" className="relative w-44 flex-none mx-1 m:w-56">
                                <svg viewBox="0 0 231 476" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M198.125 476H31.9098C14.2775 476 -0.000550635 461.727 -0.000548255 444.101L-0.000492589 31.8995C-0.000490209 14.2732 14.2776 0 31.9099 0H198.08C215.712 0 229.99 14.2732 229.99 31.8995L229.99 444.055C230.035 461.727 215.757 476 198.125 476Z" fill="#042330" />
                                    <path d="M196.121 11.4424H171.064L171.064 16.2815C171.064 16.5077 171.064 16.6886 171.064 16.9147C171.064 22.9297 166.206 27.8141 160.223 27.8141H70.2557C64.2728 27.8141 59.4146 22.9297 59.4146 16.9147L59.4146 11.4876H34.3585C21.853 11.4876 11.6867 21.7086 11.6867 34.2813L11.6865 441.764C11.6865 454.337 21.8529 464.558 34.3584 464.558H196.12C208.626 464.558 218.792 454.337 218.792 441.764L218.792 34.2813C218.837 21.6634 208.671 11.4424 196.121 11.4424Z" fill="#044063" />
                                    <mask id="mask0_13_1189" maskUnits="userSpaceOnUse" x="11" y="11" width="208" height="454" style={{ maskType: 'alpha' }}>
                                        <path d="M195.875 11.4424H170.819L170.819 16.2815C170.819 16.5077 170.819 16.6886 170.819 16.9147C170.819 22.9297 165.961 27.8141 159.978 27.8141H70.0106C64.0278 27.8141 59.1695 22.9297 59.1695 16.9147L59.1695 11.4876H34.1135C21.608 11.4876 11.4416 21.7086 11.4416 34.2813L11.4415 441.764C11.4415 454.337 21.6078 464.558 34.1134 464.558H195.875C208.381 464.558 218.547 454.337 218.547 441.764L218.547 34.2813C218.592 21.6634 208.426 11.4424 195.875 11.4424Z" fill="#F1F6F4" />
                                    </mask>
                                    <g mask="url(#mask0_13_1189)">
                                    </g>
                                </svg>
                                <div className="absolute top-0 pt-[25%]">
                                    <img 
                                        src="https://static.blinkist.com/wcl/phone-mockup/cover_en.webp" 
                                        alt="Cover Image for the book 'The 5 AM Club' by Robin Sharma" 
                                        loading="lazy" 
                                        width="72%" 
                                        className="object-contain mx-auto rounded-[5%]" 
                                    />
                                    <div className="w-[80%] mx-auto mt-[5%]">
                                        <p className="text-white font-cera-pro font-bold text-center line-clamp-1" style={{ fontSize: '11.872px' }}>
                                            Blink 3 of 8 - The 5 AM Club
                                        </p>
                                        <p className="text-light-grey font-medium text-center line-clamp-1" style={{ fontSize: '8.288px' }}>
                                            by Robin Sharma
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <svg viewBox="0 0 57 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-16 flex-none text-blue">
                                <path d="M6.36024 34.938C6.36024 36.4956 5.10831 37.7592 3.55318 37.7592C1.99804 37.7592 0.736328 36.4956 0.736328 34.938V25.1029C0.736328 23.5454 1.99804 22.2915 3.55318 22.2915C5.10831 22.2915 6.36024 23.5454 6.36024 25.1029V34.938Z" />
                                <path d="M16.3856 44.5188C16.3856 46.0665 15.1337 47.3302 13.5786 47.3302C12.0234 47.3302 10.7715 46.0665 10.7715 44.5188V15.5229C10.7715 13.9653 12.0234 12.7114 13.5786 12.7114C15.1337 12.7114 16.3856 13.9653 16.3856 15.5229V44.5188Z" />
                                <path d="M26.411 38.1316C26.411 39.6794 25.1591 40.943 23.6039 40.943C22.0488 40.943 20.7969 39.6794 20.7969 38.1316V21.9096C20.7969 20.352 22.0488 19.0981 23.6039 19.0981C25.1591 19.0981 26.411 20.352 26.411 21.9096V38.1316Z" />
                                <path d="M36.4384 56.8126C36.4384 58.3603 35.1864 59.624 33.6313 59.624C32.0762 59.624 30.8242 58.3603 30.8242 56.8126V3.2387C30.8242 1.68115 32.0762 0.41748 33.6313 0.41748C35.1864 0.41748 36.4384 1.68115 36.4384 3.2387V56.8126Z" />
                                <path d="M56.4891 38.1316C56.4891 39.6794 55.2372 40.943 53.6821 40.943C52.1269 40.943 50.875 39.6794 50.875 38.1316V21.9096C50.875 20.352 52.1269 19.0981 53.6821 19.0981C55.2372 19.0981 56.4891 20.352 56.4891 21.9096V38.1316Z" />
                                <path d="M46.4638 44.5188C46.4638 46.0665 45.2118 47.3302 43.6567 47.3302C42.1015 47.3302 40.8496 46.0665 40.8496 44.5188V15.5229C40.8496 13.9653 42.1015 12.7114 43.6567 12.7114C45.2118 12.7114 46.4638 13.9653 46.4638 15.5229V44.5188Z" />
                            </svg>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default GoalsSection;
