import './index.scss'


const ImageZone = ({img,cl}) => {
    return (
        <>
        <img className={cl} src={img} alt=''/>
        </>
    )
}

export default ImageZone;