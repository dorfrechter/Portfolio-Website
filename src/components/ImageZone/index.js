import './index.scss'


const ImageZone = ({img,cl}) => {
    return (
        <>
        <img className={cl} src={img}/>
        </>
    )
}

export default ImageZone;