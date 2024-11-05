import Principal from '../principal';
import './styles.css'

function Valores() {
    return (
        <>
            <div className='container'>
                <div className="card" style={{ width: '500px', background: '#ff6200' }}>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>A gente trabalha para o cliente</p>
                            <footer className="blockquote-footer">A gente trabalha para o cliente</footer>
                        </blockquote>
                    </div>
                </div>

                <div className="card" style={{ width: '500px', background: '#ff6200' }}>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>A gente é movido por resultado</p>
                            <footer className="blockquote-footer">A gente é movido por resultado</footer>
                        </blockquote>
                    </div>
                </div>

                <div className="card" style={{ width: '500px', background: '#ff6200' }}>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>A gente vai de turma</p>
                            <footer className="blockquote-footer">A gente vai de turma</footer>
                        </blockquote>
                    </div>
                </div>

                <div className="card" style={{ width: '500px', background: '#ff6200' }}>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>A gente não sabe de tudo</p>
                            <footer className="blockquote-footer">A gente não sabe de tudo</footer>
                        </blockquote>
                    </div>
                </div>

                <div className="card" style={{ width: '500px', background: '#ff6200' }}>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>A gente quer diversidade e inclusão</p>
                            <footer className="blockquote-footer">A gente quer diversidade e inclusão</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Valores;
