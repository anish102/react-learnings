function Picture() {
    const imgUrl = './src/assets/react.svg';
    const handleClick = (e) => e.target.style.display = "none";
    return (<img onClick={(e) => handleClick(e)} src={imgUrl}></img>)
}

export default Picture