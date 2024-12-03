
import style from './styles.module.css';
import { destaquesData } from './data/destaques';

function Destaques() {
    return (
        <>
            <div>
                {destaquesData.map((card, index) => (
                    <div className={style.card} key={index}>
                        <div className={style['card-img-container']}>
                            <img className={style['card-img-top']} src={card.imgSrc} alt="Card image cap" />
                        </div>
                        <div className={style['card-body']}>
                            <h5 className={style['card-title']}>{card.title}</h5>
                            <p className={style['card-text']}>{card.description}</p>
                            <div>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th className="form-check-label">#</th>
                                            <th className="form-check-label">Qual o impacto?</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {card.impacts.map((impact) => (
                                            <tr key={impact.id}>
                                                <td className="form-check-label">{impact.id}</td>
                                                <td className="form-check-label">{impact.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className={style['form-check']}>
                                {card.values.map((value, index) => (
                                    <label key={index} className="form-check-label">
                                        {value}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Destaques;
