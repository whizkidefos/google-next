function Avatar({ url, className }) {
    return (
        <img loading="lazy" src={url} alt="profile pix" className={`h-10 w-10 object-cover rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} />
    )
}

export default Avatar;
