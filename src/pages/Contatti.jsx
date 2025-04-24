export default function Contatti() {

    document.body.classList.remove(
        'img-back',
        'img-back-2',
        'img-back-3',
        'img-back-home',
        'img-back-games'
    );

    return <div className="container">
        <h2 className="text-center mt-3 mb-3"><strong>Puoi contattarci alle seguenti mail!</strong></h2>
        <a href="https://workspace.google.com/intl/it/gmail/"><p>mvacchi816@gmail.com</p></a>
        <a href="https://workspace.google.com/intl/it/gmail/"><p>enrico.ciccolini90@gmail.com</p></a>
    </div>
};