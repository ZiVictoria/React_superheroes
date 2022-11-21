import './../../styles/index.css'


function getSuperheroes(props) {
    return (
        <div className="card">
            <div className="title">
                <h4>{props.name}</h4>
            </div>
            <img className="image" src={props.img} alt="superhoroes_img"/>
            <div className="container">
                <div><span className="el_name">Вселенная:</span> {props.univers}</div>
                <div><span className="el_name">Альтер эго:</span> {props.alter_ego}</div>
                <div><span className="el_name">Род деятельности:</span> {props.career}</div>
                <div><span className="el_name">Друзья:</span> {props.friend}</div>
                <div><span className="el_name">Суперсилы:</span> {props.superpower}</div>
            </div>
        </div>
    )
}

export default getSuperheroes;