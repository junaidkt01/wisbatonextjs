const SupportPerson = ({ name, title, avatar, number }: { name: string; title: string; avatar: string; number: number; }) => {
    
    const redirectToWhatsApp = (number: number) => {
        const url = `https://wa.me/${number}`;
        window.open(url, '_blank');
    }

    return (
        <div className='chat-person'>
            <div style={{ display: 'flex', alignItems: "center", gap: "16px" }} >
                <img src={`/images/${avatar}`} alt="" />
                <div className="person-name"><p>{name}</p><p>{title}</p></div>
            </div>
            <div>
                <svg onClick={() => redirectToWhatsApp(number)} className="chat-platform-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_51_72)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30 19.7427C30 25.1225 25.6044 29.4847 20.1822 29.4847C18.4604 29.4847 16.8424 29.045 15.4361 28.2725L10 30L11.7719 24.7732C10.8777 23.3048 10.3635 21.583 10.3635 19.7427C10.3635 14.3619 14.7591 10 20.182 10C25.6044 10 30 14.3619 30 19.7427ZM20.1822 11.5516C15.6294 11.5516 11.9272 15.2255 11.9272 19.7427C11.9272 21.5342 12.5108 23.1943 13.4994 24.5453L12.4685 27.5866L15.6401 26.5788C16.943 27.4338 18.5045 27.9329 20.182 27.9329C24.7328 27.9329 28.4361 24.2587 28.4361 19.7426C28.4365 15.2255 24.7332 11.5516 20.1822 11.5516ZM25.1399 21.9866C25.0791 21.8869 24.9186 21.8272 24.6789 21.7077C24.4382 21.5886 23.2543 21.0102 23.0339 20.931C22.8136 20.8515 22.6518 20.8115 22.4924 21.0501C22.3319 21.2891 21.8705 21.827 21.7296 21.9864C21.5896 22.1462 21.4496 22.1656 21.2089 22.0462C20.9677 21.9271 20.1919 21.674 19.273 20.8614C18.5581 20.2274 18.0751 19.4465 17.9338 19.2075C17.7942 18.9689 17.9199 18.8398 18.0391 18.7205C18.1478 18.6129 18.2803 18.4416 18.4005 18.3027C18.521 18.1627 18.561 18.0627 18.6412 17.9033C18.7215 17.7438 18.6816 17.6049 18.6207 17.4855C18.561 17.3664 18.0793 16.1911 17.8784 15.7125C17.6791 15.2354 17.4783 15.2531 17.337 15.2531C17.197 15.2531 16.9372 15.2947 16.9372 15.2947C16.9372 15.2947 16.4547 15.3545 16.2345 15.5934C16.0142 15.832 15.3925 16.4104 15.3925 17.5846C15.3925 18.7597 16.2543 19.8957 16.3745 20.0541C16.495 20.2138 18.039 22.7038 20.4858 23.6599C22.9327 24.6159 22.9327 24.2968 23.3741 24.2565C23.8146 24.2177 24.7977 23.6793 24.9985 23.1216C25.1999 22.5638 25.1999 22.0856 25.1399 21.9866Z" fill="white" />
                    <defs>
                        <linearGradient id="paint0_linear_51_72" x1="4.5" y1="34" x2="40" y2="12" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#20B038" />
                            <stop offset="1" stop-color="#60D66A" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default SupportPerson