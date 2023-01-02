import '../styles/_StatCard.scss';

interface Stats {
    img: any,
    title: string,
    stat: string
}

const StatCard = ({ img, title, stat }: Stats) => {
    return (
        <div className="card__box">
            <div>
                <img src={img} alt={`${title} icon`} />
            </div>
            <h3>{title}</h3>
            <p>{stat}</p>
        </div>
    )
}

export default StatCard;