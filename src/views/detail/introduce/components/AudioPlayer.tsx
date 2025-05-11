import * as React from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/outline';

export const AudioPlayer: React.FC = () => {
  return (
    <div className="p-2 m:p-4 bg-midnight rounded-md m:rounded-t-none w-full">
      <div data-test-id="audio-player" className="flex flex-row gap-4 items-center text-white">
        <button 
          data-test-id="toggleAudioPlayer" 
          type="button" 
          name="toggleAudioPlayer" 
          aria-label="Audio Player Play/Pause Button" 
          className="text-white hover:text-green"
        >
          <PlayCircleIcon className="w-12 h-12" />
        </button>
        <div className="grow flex flex-col">
          <div className="truncate font-medium text-sm text-white">Listen to the Intro</div>
          <div className="flex flex-row gap-4 items-center">
            <div data-test-id="advanceAudio" data-test-progress="0" className="py-2 cursor-pointer w-full">
              <div className="relative w-full h-1 rounded-full bg-lightest-grey">
                <div className="absolute h-1 rounded-l-full pointer-events-none bg-green" style={{ width: '0%' }} />
              </div>
            </div>
            <span data-test-id="">00:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 