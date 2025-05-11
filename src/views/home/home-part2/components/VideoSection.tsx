import * as React from 'react';

const VideoSection: React.FC = () => {
    return (
        <div className="l:flex hidden items-center">
            <div className="relative mx-auto aspect-video w-full max-w-3xl">
                <button className="bg-opacity-40 absolute top-0 right-0 left-0 z-10 flex aspect-video cursor-pointer items-center justify-center rounded-2xl bg-black/50 transition-opacity duration-500 opacity-100" aria-label="Play video">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-midnight h-16 w-16 rounded-full text-white">
                        <path d="M12 0C5.37333 0 0 5.37333 0 12C0 18.6267 5.37333 24 12 24C18.6267 24 24 18.6267 24 12C24 5.37333 18.6267 0 12 0ZM17.5633 12.5767L13.6667 14.8267L9.77 17.0767C9.32667 17.3333 8.77 17.0133 8.77 16.5V12V7.5C8.77 6.98667 9.32667 6.66667 9.77 6.92333L13.6667 9.17333L17.5633 11.4233C18.0067 11.68 18.0067 12.32 17.5633 12.5767Z" fill="currentColor" />
                    </svg>
                    <div className="text-midnight absolute top-0 right-0 z-10 m-2 h-8 w-8 rounded-full bg-white p-1 transition-opacity duration-500 opacity-100" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" fillRule="evenodd" className="h-full w-full">
                            <path fill="currentColor" d="M14.381 2.516a.25.25 0 0 1 .139.224v20a.25.25 0 0 1-.402.198L6.692 17.24H3.488c-1.208 0-2.179-.986-2.179-2.19v-4.622c0-1.204.971-2.19 2.179-2.19h3.204l7.426-5.698a.25.25 0 0 1 .263-.026zm-1.269 2.572L7.237 9.596a.25.25 0 0 1-.152.052H3.488c-.421 0-.771.346-.771.782v4.622c0 .436.35.782.771.782h3.597a.25.25 0 0 1 .152.052l5.875 4.508V5.088zm5.703.605a.25.25 0 0 1 .352-.034c1.944 1.605 3.524 4.291 3.524 7.08s-1.586 5.477-3.524 7.08a.25.25 0 0 1-.352-.033l-.579-.7a.25.25 0 0 1 .033-.352c1.684-1.393 3.014-3.712 3.014-5.995s-1.324-4.601-3.013-5.994a.25.25 0 0 1-.034-.352l.578-.7zm-2.21 2.719a.25.25 0 0 1 .349-.055c1.335.971 2.469 2.448 2.469 4.383s-1.133 3.412-2.469 4.383a.25.25 0 0 1-.349-.055l-.534-.735a.25.25 0 0 1 .055-.349c1.117-.811 1.889-1.914 1.889-3.244s-.773-2.432-1.889-3.244a.25.25 0 0 1-.055-.349l.534-.734z" />
                        </svg>
                    </div>
                </button>
                <video className="lazy z-20 w-full rounded-2xl entered loaded" autoPlay muted loop playsInline width="768" height="432" poster="https://static.blinkist.com/cdn-cgi/image/quality=20,width=768,format=webp/https://static.blinkist.com/web-growth/homepage/video-poster.png?c=365" data-ll-status="loaded">
                    <source data-src="https://static.blinkist.com/web-growth/homepage/video-en.webm?c=365" type="video/webm" src="https://static.blinkist.com/web-growth/homepage/video-en.webm?c=365" />
                    <source data-src="https://static.blinkist.com/web-growth/homepage/video-en.c.mp4?c=365" type="video/mp4" src="https://static.blinkist.com/web-growth/homepage/video-en.c.mp4?c=365" />
                    <track kind="captions" label="English" />
                </video>
            </div>
        </div>
    );
};

export default VideoSection; 