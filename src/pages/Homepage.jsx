export default function Homepage() {

    document.body.classList.remove(
        'img-back',
        'img-back-2',
        'img-back-3',
        'img-back-home',
    );

    document.body.classList.add('img-back-home');

    return <div>

        <h1 className="text-red fw-bold text-center mt-4 mb-4">BOOK ROOMS</h1>
        <div className="container text-center mb-4">
            <div className="row align-items-start my-gap">
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold">Cos'è una Book Room?</h3>
                    <p>Una Book Room è come un'escape room, però virtuale!</p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold">Lo scopo</h3>
                    <p>Devi indovinare attraverso delle scelte, quale sia la via giusta per uscirne vivo!</p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold">Pronto a metterti alla prova?</h3>
                    <p>"Logica, intuito e creatività: le Book Room sono il modo perfetto per mettere alla prova il tuo cervello divertendoti!"</p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold">Un divertimento assicurato</h3>
                    <p>Chiunque abbia provato le nostre Book Room ne è uscito soddisfatto!</p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold">Coinvolgimento narrativo</h3>
                    <p>Ogni Book Room è basata su una storia unica che ti trascina dentro un mondo misterioso. Sei il protagonista: le tue scelte scrivono il finale!</p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold">Gioca dove e quando vuoi</h3>
                    <p>Ti basta un dispositivo e una connessione: nessun orario, nessun limite. Vivi l’esperienza ovunque ti trovi, da solo o in compagnia!</p>
                </div>
            </div>
        </div>

    </div>

};
