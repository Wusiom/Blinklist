import * as React from 'react';

const SignUpForm: React.FC = () => {
    return (
        <div className="w-full s:border-x border-y border-light-grey s:rounded-md my-8 mx-auto s:px-4 max-w-sm lg:order-1 lg:col-span-2">
            <div className="mt-8 mb-4 text-center font-bold text-h5">Want to see all full key ideas from The 5 AM Club?</div>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 w-6 h-6 mx-auto">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor" />
                <mask id="a" maskUnits="userSpaceOnUse" x="1" y="6" width="22" height="13">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="#fff" />
                </mask>
            </svg>
            <form action="/en/nc/signup" method="post" data-astro-reload="">
                <input type="hidden" name="authenticity_token" value="GYPxZTUrL8KQT5Cbq9u4fFNeMwInTWPlkikPNH2y/BGn9Zfxr5EUl2VB8lGY1nnyKHo5Fdc3THl3hkyM79q3KQ==" />
                <input type="hidden" name="signup[form_id]" value="body-20230118-wcl_reader_signup_wall" />
                <input type="hidden" name="signup[pre_signup_data]" value="{&quot;books_to_add&quot;:[],&quot;categories_to_follow&quot;:[],&quot;content_views_to_report&quot;:[{&quot;content_type&quot;:&quot;book&quot;,&quot;content_id&quot;:&quot;5c43b2fa6cee07000701bf7a&quot;,&quot;viewed_at&quot;:&quot;2025-05-06T13:50:06.815Z&quot;},{&quot;content_type&quot;:&quot;book&quot;,&quot;content_id&quot;:&quot;5c43b2fa6cee07000701bf7a&quot;,&quot;viewed_at&quot;:&quot;2025-05-11T05:26:00.523Z&quot;}]}" />
                <div data-test-id="email" className="mb-4">
                    <input id="signup-email" name="signup[email]" data-test-id="signup-email-input" placeholder="Email address" type="email" className="rounded-md border-2 border-solid border-light-grey px-4 h-12 w-full focus:border-green focus-visible:outline-none" />
                </div>
                <div className="flex-1 inline-block w-full mb-4" data-test-id="password">
                    <div className="rounded-md border-2 border-solid border-light-grey focus:border-green focus-visible:outline-none w-full flex items-center">
                        <input id="signup-password" name="signup[password]" data-test-id="signup-password-input" placeholder="Create password" type="password" className="px-4 h-11 w-full" />
                        <button type="button" data-test-id="togglePassword" className="inline-flex shrink font-medium text-sm text-mid-grey pr-4">Show</button>
                    </div>
                </div>
                <button type="submit" data-test-id="b-button" className="w-full rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none disabled:bg-light-grey cursor-pointer disabled:cursor-not-allowed px-4 bg-green text-midnight hover:bg-green-2 hover:text-midnight disabled:text-white py-3">Create account</button>
                <div className="my-8 w-full h-px bg-light-grey flex justify-center items-center">
                    <span className="bg-white px-4 font-medium text-mid-grey text-sm mb-1">or</span>
                </div>
                <button data-test-id="facebook-login-button" type="button" className="mb-4 py-1.5 pl-4 w-full flex align-middle text-center bg-facebook text-white rounded h-10 border-2 border-solid border-transparent">
                    <svg viewBox="0 0 81 156" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 text-white">
                        <path d="M52.584 155.139V84.378h23.742l3.562-27.585H52.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C78.325.752 69.661 0 59.577 0 38.52 0 24.104 12.853 24.104 36.452v20.341H.29v27.585h23.814v70.761h28.48z" fill="currentColor" />
                    </svg>
                    <span className="text-center w-full font-medium">Sign up with Facebook</span>
                </button>
                <a data-test-id="apple-login-button" href="/en/nc/apple_login?pre_signup_data=%7B%22books_to_add%22%3A%5B%5D%2C%22categories_to_follow%22%3A%5B%5D%2C%22content_views_to_report%22%3A%5B%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-06T13%3A50%3A06.815Z%22%7D%2C%7B%22content_type%22%3A%22book%22%2C%22content_id%22%3A%225c43b2fa6cee07000701bf7a%22%2C%22viewed_at%22%3A%222025-05-11T05%3A26%3A00.523Z%22%7D%5D%7D" rel="nofollow" className="inline-block px-4 py-2.5 h-10 rounded border border-black border-solid items-center justify-center no-underline outline-none cursor-pointer w-full box-border mb-4">
                    <div className="flex items-center justify-center text-center">
                        <img src="https://static.blinkist.com/wcl/auth-popup/apple_signup_en.png" alt="Continue with Apple" loading="lazy" className="object-contain h-5" aria-label="Continue with Apple" />
                    </div>
                </a>
                <div className="mb-8 text-center font-normal text-xs text-grey">
                    <span>Our <a target="_blank" href="/tos" className="underline">Terms of Service</a> apply. For more info on our data processing, see our <a target="_blank" href="/privacy" className="underline">Privacy Policy</a>.</span>
                </div>
            </form>
            <button className="text-blue font-cera-pro w-full mb-6">Already have an account?</button>
        </div>
    );
};

export default SignUpForm; 