import React from 'react';
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {
    SliderWrapper,
    StyledHeroSwiper,
    StyledSwiperSlide
} from "./Slider.styled";
import {nanoid} from "nanoid";
import face1 from '../../assets/images/face1.jpeg';
import face2 from '../../assets/images/face2.jpeg';
import face3 from '../../assets/images/face3.jpeg';
import face4 from '../../assets/images/face4.jpeg';
import face5 from '../../assets/images/face5.jpeg';
import face6 from '../../assets/images/face6.jpeg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ReviewItem} from "../ReviewItem/ReviewItem";

const SwiperWithPagination = () => {

    const sliderInfo = [
        {
            id: nanoid(),
            img: face1,
            name: 'Ганна Мазур',
            rating: 3.5,
            review: `Дякую розробникам! Програма варта уваги кожного. Відразу знайшовся і вільний час і роботи стали якісніше на 100%. Раджу усім знайомим:)`
        },
        {
            id: nanoid(),
            img: face2,
            name: 'Микола Верьовкін',
            rating: 4.5,
            review: 'Дякую крутим розробникам!\n' +
                'Хто міг подумати що життя стане настільки легше! Чому я раніше цього не знайшов?:)\n' +
                '\n' +
                'Пс, виявляється тут ще можна орфографічні помилки виправляти, круто!'
        },
        {
            id: nanoid(),
            img: face3,
            rating: 5,
            name: 'Ганна Мазур',
            review: 'Wow'
        },
        {
            id: nanoid(),
            img: face4,
            rating: 4,
            name: 'Олександр Петров',
            review: 'Ця програма змінила моє життя! \n Більше часу для родини та хобі, менше стресу на роботі. Рекомендую!'
        },
        {
            id: nanoid(),
            img: face5,
            rating: 5,
            name: 'Ірина Сидоренко',
            review: 'Я в захваті від цього додатку! \n Тепер я можу ефективно керувати своїм часом та завданнями. Дякую розробникам!'
        },
        {
            id: nanoid(),
            img: face6,
            rating: 4.5,
            name: 'Павло Іванов',
            review: 'Просто чудово! Спрощує життя і допомагає бути більш організованим. Велике спасибі команді за такий корисний продукт!'
        }
    ]
    return (
        <>
            <SliderWrapper>
                <StyledHeroSwiper
                    slidesPerView={"auto"}
                    spaceBetween={8}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                >
                    {sliderInfo.map((item) => {
                        const {
                            review,
                            img,
                            rating,
                            name
                        } = item

                        return <StyledSwiperSlide key={item.id}>
                            <ReviewItem
                                review={review}
                                img={img}
                                rating={rating}
                                name={name}
                            />
                        </StyledSwiperSlide>
                    })}
                </StyledHeroSwiper>
            </SliderWrapper>
        </>
    )
        ;

};

export default SwiperWithPagination;
