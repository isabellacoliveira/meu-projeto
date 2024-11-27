import seguro from '../../assets/seguro.png';
import acess from '../../assets/ssi.jpg';
import person from '../../assets/person.png';
import crip from '../../assets/entregas/crip.jpg'
import family from '../../assets/family.jpg'
import style from './styles.module.css';

function Destaques() {
    return (
        <>
            <div>
                <div className={style.card}>
                    <div className={style['card-img-container']}>
                        <img className={style['card-img-top']} src={seguro} alt="Card image cap" />
                    </div>
                    <div className={style['card-body']}>
                        <h5 className={style['card-title']}>💳 Adição do Seguro Cartão Protegido no Tapete Laranja</h5>
                        <p className={style['card-text']}>Colocar aqui os valores de negócios.</p>
                        <div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th className="form-check-label">#</th>
                                        <th className="form-check-label">Qual o impacto?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="form-check-label">1</td>
                                        <td className="form-check-label">Pipopopo</td>
                                    </tr>
                                    <tr>
                                        <td className="form-check-label">2</td>
                                        <td className="form-check-label">Pipopopo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={style['form-check']}>
                            <label className="form-check-label">
                                ✅ A gente trabalha para o cliente
                            </label>

                            <label className="form-check-label">
                                ✅ A gente é movido por resultado
                            </label>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style['card-img-container']}>
                        <img className={style['card-img-top']} src={acess} alt="Card image cap" />
                    </div>
                    <div className={style['card-body']}>
                        <h5 className={style['card-title']}>👨‍🦽 Correção de inconsistências de acessibilidade na jornada</h5>
                        <p className={style['card-text']}>Colocar aqui os valores de negócios.</p>
                        <div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th className="form-check-label">#</th>
                                        <th className="form-check-label">Qual o impacto?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="form-check-label">1</td>
                                        <td className="form-check-label">Pipopopo</td>
                                    </tr>
                                    <tr>
                                        <td className="form-check-label">2</td>
                                        <td className="form-check-label">Pipopopo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={style['form-check']}>
                            <label className="form-check-label">
                                ✅ A gente trabalha para o cliente
                            </label>

                            <label className="form-check-label">
                                ✅ A gente é movido por resultado
                            </label>

                            <label className="form-check-label">
                                ✅ A gente quer diversidade e inclusão
                            </label>

                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style['card-img-container']}>
                        <img className={style['card-img-top']} src={person} alt="Card image cap" />
                    </div>
                    <div className={style['card-body']}>
                        <h5 className={style['card-title']}>🏦 Envelopamento das Home Uniclass e Personnalité</h5>
                        <p className={style['card-text']}>Colocar aqui os valores de negócios.</p>
                        <div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th className="form-check-label">#</th>
                                        <th className="form-check-label">Qual o impacto?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="form-check-label">1</td>
                                        <td className="form-check-label">Pipopopo</td>
                                    </tr>
                                    <tr>
                                        <td className="form-check-label">2</td>
                                        <td className="form-check-label">Pipopopo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={style['form-check']}>
                            <label className="form-check-label">
                                ✅ A gente trabalha para o cliente
                            </label>

                            <label className="form-check-label">
                                ✅ A gente é movido por resultado
                            </label>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style['card-img-container']}>
                        <img className={style['card-img-top']} src={crip} alt="Card image cap" />
                    </div>
                    <div className={style['card-body']}>
                        <h5 className={style['card-title']}>🔒Integrações com o Caronte</h5>
                        <p className={style['card-text']}>Colocar aqui os valores de negócios.</p>
                        <div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th className="form-check-label">#</th>
                                        <th className="form-check-label">Qual o impacto?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="form-check-label">1</td>
                                        <td className="form-check-label">Aumento da segurança do sistema de abertura de conta</td>
                                    </tr>
                                    <tr>
                                        <td className="form-check-label">2</td>
                                        <td className="form-check-label">Adequação do sistema as conformidades da politica de segurança do Itaú</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={style['form-check']}>
                            <label className="form-check-label">
                                ✅ A gente trabalha para o cliente
                            </label>

                            <label className="form-check-label">
                                ✅ A gente é movido por resultado
                            </label>
                        </div>
                    </div>
                </div>

                <div className={style.card}>
                    <div className={style['card-img-container']}>
                        <img className={style['card-img-top']} src={family} alt="Card image cap" />
                    </div>
                    <div className={style['card-body']}>
                        <h5 className={style['card-title']}>🫂 Family & Friends - Testes Iscas</h5>
                        <p className={style['card-text']}>Colocar aqui os valores de negócios.</p>
                        <div>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th className="form-check-label">#</th>
                                        <th className="form-check-label">Qual o impacto?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="form-check-label">1</td>
                                        <td className="form-check-label">Pipopopo</td>
                                    </tr>
                                    <tr>
                                        <td className="form-check-label">2</td>
                                        <td className="form-check-label">Pipopopo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={style['form-check']}>
                            <label className="form-check-label">
                                ✅ A gente vai de turma
                            </label>

                            <label className="form-check-label">
                                ✅ A gente trabalha para o cliente
                            </label>
                            <label className="form-check-label">
                                ✅ A gente é movido por resultado
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Destaques;
