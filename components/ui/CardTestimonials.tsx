import Image from 'next/image';
import { StarIcon } from '@/components/ui/icons';

interface CardTestimonialsProps {
    authorName: string;
    authorRole: string;
    text: string;
    rating: number;
    photo: string;
}

export function CardTestimonials({authorName, authorRole, text, rating, photo}: CardTestimonialsProps) {
    return(
        <div className='w-full md:w-110.5 md:h-92.5 flex flex-col items-center justify-center gap-6 p-6 pb-10 bg-white border-[#F8FAFC] border rounded-2xl'>
            <div className='flex flex-col items-center md:flex-row w-full gap-4'>
                <Image src={photo} alt="Testimonial" width={128} height={128} className='w-32 h-32' />
                <div>
                    <span className='text-p1 font-bold text-primary'>{authorName}</span>
                    <p>{authorRole}</p>
                </div>
            </div>

            <div className='flex items-center gap-1 w-full'>
                {Array.from({ length: rating }, (_, i) => (
                    <StarIcon key={i} />
                ))}
            </div>
            <p className='italic'>{text}</p>
        </div>
    )
}