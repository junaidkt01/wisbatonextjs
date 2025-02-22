// import '../components/Home/Home.css';

const ScrollButton = ({ color, hide, nextSection }: { color: string; hide?: boolean; nextSection: string }) => {

    const scrollToNextSection = () => {
        const nextSections = document.querySelector(nextSection);
        if (nextSections) {
            nextSections.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div onClick={scrollToNextSection} className={`hero-scroll-icon-div ${hide ? 'hide' : ""} scroll-animation`} style={{ color: color }}>
            <svg width="24" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20L12 4" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M4.33941 12.9675L10.9123 19.5404C11.0546 19.6839 11.224 19.7979 11.4108 19.8757C11.5975 19.9535 11.7977 19.9936 12 19.9936C12.2023 19.9936 12.4025 19.9535 12.5892 19.8757C12.776 19.7979 12.9454 19.6839 13.0878 19.5404L19.6606 12.9675" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p>scroll</p>
        </div>
    )
}

export default ScrollButton
