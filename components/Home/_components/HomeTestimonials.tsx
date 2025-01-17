// import "./homeSections.css";
import { testimonialQuots } from '../../../utils/TestimonialQuotes';
import Image from "next/image";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1080 },
//         items: 2,
//         slidesToSlide: 1,
//     },
//     tablet: {
//         breakpoint: { max: 1080, min: 464 },
//         items: 2,
//         slidesToSlide: 1,
//     },
//     custom: {
//         breakpoint: { max: 768, min: 464 },
//         items: 2,
//         slidesToSlide: 1,
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//         slidesToSlide: 1,
//     },
// };


const HomeTestimonials = () => {
    return (
        <div className="home-testimonials" >
            {
                testimonialQuots?.slice(0, 2).map((item) => <HomeTestimonial key={item?.id} />)
            }
            {/* <HomeTestimonial />
            <HomeTestimonial /> */}
            {/* <Carousel
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                // customRightArrow={<CustomRightArrow onClick={() => { }} />} customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
                className="cards-carouse" draggable responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile", "custom"]}>
                {Array.from({ length: 10 })?.map((_) => (
                    <HomeTestimonial />
                ))}
            </Carousel> */}
        </div>
    )
}

export default HomeTestimonials

const HomeTestimonial = () => {
    return (
        <div className="home-testimonial">
            <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2050_2176)">
                        <path d="M20 0C8.97204 0 0 8.97204 0 20C0 31.028 8.97204 40 20 40C31.028 40 40 31.028 40 20C40 8.97204 31.0281 0 20 0ZM16.8987 28.3377C15.7308 29.4366 14.268 29.9858 12.5103 29.9858C10.9446 29.9858 9.55705 29.2718 8.34861 27.8431C7.16724 26.4975 6.57681 25.0412 6.57681 23.4753C6.57681 18.8863 9.74011 14.4511 16.0673 10.169C16.2924 10.0166 16.8575 9.88256 17.188 10.2497L17.7979 11.0167C18.0928 11.5155 17.7356 11.9781 17.5044 12.1699C16.4048 13.082 15.6053 13.7875 15.1064 14.2865C14.1281 15.3154 13.4049 16.3453 12.9274 17.3721C12.8182 17.6068 13.0969 17.7559 13.2417 17.8032C16.847 18.9848 18.6503 21.0679 18.6503 24.0522C18.6499 25.8105 18.066 27.2392 16.8987 28.3377ZM30.6202 28.3377C29.4522 29.4366 27.9895 29.9858 26.2318 29.9858C24.666 29.9858 23.2785 29.2718 22.0701 27.8431C20.8887 26.4975 20.2983 25.0412 20.2983 23.4753C20.2983 18.8863 23.4616 14.4511 29.7888 10.169C30.0139 10.0166 30.579 9.88256 30.9095 10.2497L31.5194 11.0167C31.8143 11.5155 31.4571 11.9781 31.2258 12.1699C30.1263 13.082 29.3268 13.7875 28.8279 14.2865C27.8496 15.3154 27.1264 16.3453 26.6489 17.3721C26.5397 17.6068 26.8184 17.7559 26.9632 17.8032C30.5685 18.9848 32.3718 21.0679 32.3718 24.0522C32.3714 25.8105 31.7875 27.2392 30.6202 28.3377Z" fill="#F7931E" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2050_2176">
                            <rect width="40" height="40" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <p className="testimonial-desc" ><strong>Wisbato</strong> offered me the perfect website solution for my publishing agency. I did not want my website to be too flashy but it needed to have a perfect blend of old school and modernity. The web development team at Wisbato knew what I needed and offered me the website of my dreams. Thank you Wisbato!</p>
            <div className="testimonial-profile" >
                {/* <img width={40} src="/images/avatar.webp" alt="..." /> */}
                <Image height={40} width={40} src="/images/avatar.webp" alt="..." />
                <div>
                    <p>JAMES JO</p>
                    <p> CEO of Abc Company</p>
                </div>
            </div>
        </div>
    )
}