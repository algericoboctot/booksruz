const FacebookIcon = (props) => {
    const { color } = props;
    return(
        <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_187_117)">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.390259 14.856C0.390259 21.992 5.50683 27.926 12.1987 29.1293V18.7625H8.65613V14.7758H12.1987V11.5858C12.1987 7.9974 14.4812 6.00466 17.7096 6.00466C18.7322 6.00466 19.8351 6.16374 20.8577 6.32283V9.99133H19.0475C17.3152 9.99133 16.922 10.8681 16.922 11.9853V14.7758H20.7007L20.0713 18.7625H16.922V29.1293C23.6138 27.926 28.7304 21.9932 28.7304 14.856C28.7304 6.9173 22.3539 0.422363 14.5603 0.422363C6.76679 0.422363 0.390259 6.9173 0.390259 14.856Z" fill={color}/>
            </g>
            <defs>
                <clipPath id="clip0_187_117">
                    <rect width="28.3401" height="28.7069" fill={color} transform="translate(0.390259 0.422363)"/>
                </clipPath>
            </defs>
        </svg>
    );
}

export default FacebookIcon;