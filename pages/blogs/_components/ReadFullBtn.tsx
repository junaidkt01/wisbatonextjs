const ReadFullBtn = ({ onClick, title }: { onClick?: () => void; title: string; }) => {

    return (
        <div className='read-full-btn' onClick={onClick} >
            <p>{title}</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M12.9676 19.6606L19.5404 13.0878C19.684 12.9454 19.798 12.776 19.8757 12.5892C19.9536 12.4025 19.9936 12.2023 19.9936 12C19.9936 11.7977 19.9536 11.5975 19.8757 11.4108C19.798 11.224 19.684 11.0546 19.5404 10.9123L12.9676 4.33942" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    )
}

export default ReadFullBtn
