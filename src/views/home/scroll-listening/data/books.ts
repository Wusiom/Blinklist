export interface Book {
    id: string;
    title: string;
    imageUrl: string;
    backgroundColor: string;
    hasAudio?: boolean;
    audioUrl?: string;
    audioDuration?: string;
}

export const books: Book[] = [
    {
        id: '1',
        title: 'The Future We Choose',
        imageUrl: 'https://images.blinkist.io/images/books/5f23fe406cee070006bddbf7/1_1/1080.jpg',
        backgroundColor: 'rgb(196, 224, 242)',
        audioUrl: 'https://api.blinkist.com/v4/books/5f038bad6cee0700061ac4ff/chapters/5f038bad6cee0700061ac500.m4a',
        audioDuration: '1:02'
    },
    {
        id: '2',
        title: 'The Lincoln Conspiracy',
        imageUrl: 'https://images.blinkist.io/images/books/5f0d5fde6cee070006796fe4/1_1/1080.jpg',
        backgroundColor: 'rgb(187, 212, 251)',
        audioUrl: 'https://api.blinkist.com/v4/books/5f038bad6cee0700061ac4ff/chapters/5f038bad6cee0700061ac500.m4a',
        audioDuration: '1:02'
    },
    {
        id: '3',
        title: 'For a New Liberty',
        imageUrl: 'https://images.blinkist.io/images/books/5f083e1b6cee0700061671f3/1_1/1080.jpg',
        backgroundColor: 'rgb(207, 211, 231)',
        audioUrl: 'https://api.blinkist.com/v4/books/5f038bad6cee0700061ac4ff/chapters/5f038bad6cee0700061ac500.m4a',
        audioDuration: '1:02'
        
    },
    {
        id: '4',
        title: 'The Coddling of the American Mind',
        imageUrl: 'https://images.blinkist.io/images/books/5f038bad6cee0700061ac4ff/1_1/1080.jpg',
        backgroundColor: 'rgb(198, 205, 240)',
        hasAudio: true,
        audioUrl: 'https://api.blinkist.com/v4/books/5f038bad6cee0700061ac4ff/chapters/5f038bad6cee0700061ac500.m4a',
        audioDuration: '1:02'
    },
    {
        id: '5',
        title: 'The Lincoln Conspiracy',
        imageUrl: 'https://images.blinkist.io/images/books/5f0d5fde6cee070006796fe4/1_1/1080.jpg',
        backgroundColor: 'rgb(187, 212, 251)',
        audioUrl: 'https://api.blinkist.com/v4/books/5f038bad6cee0700061ac4ff/chapters/5f038bad6cee0700061ac500.m4a',
        audioDuration: '1:02'
    },
    {
        id: '6',
        title: 'For a New Liberty',
        imageUrl: 'https://images.blinkist.io/images/books/5f083e1b6cee0700061671f3/1_1/1080.jpg',
        backgroundColor: 'rgb(207, 211, 231)',
        audioUrl: 'https://api.blinkist.com/v4/books/5f038bad6cee0700061ac4ff/chapters/5f038bad6cee0700061ac500.m4a',
        audioDuration: '1:02'
        
    },
    {
        id: '7',
        title: 'The Coddling of the American Mind',
        imageUrl: 'https://images.blinkist.io/images/books/5f038bad6cee0700061ac4ff/1_1/1080.jpg',
        backgroundColor: 'rgb(198, 205, 240)',
        hasAudio: true,
        audioUrl: 'https://api.blinkist.com/v4/books/5f038bad6cee0700061ac4ff/chapters/5f038bad6cee0700061ac500.m4a',
        audioDuration: '1:02'
    }
]; 