import React from 'react';
import "../styles/ContatctPage.css"
import { Prompt } from 'react-router-dom' //KONIECZNOŚĆ W CELU ZABEZPIECZENIA FORMULARZA PRZED UTRATĄ DANYCH - jeżeli użytkownik wypełni formularz i bez potwierdzenia zmieni zakładkę to straci treść formularza

class ContactPage extends React.Component {
    state = {
        value: '',
    }
    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            value: ''
        })
    }


    handleTextareaChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea
                        value={this.state.value}
                        onChange={this.handleTextareaChange}
                        placeholder="Wpisz wiadomość"> </textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="Masz wypełniony formularz, czy napewno chcesz opuścić tę strone"
                />

                {/* Prompt wymaga podania dwóch atrybutów. Prompt następuje wtedy gdy następuje zmiana ścieżki url czyli jeżeli użytkownik chce opuścić tą strone tego url-a */}
                {/* when={} - pierwszy atrybut to jest warunek, kiedy ma się coś wydarzyć, w jakiej sytuacji ma się coś wydarzyć, jeżeli this.state.value jest true wówczas wywal popup z message */}
                {/* message={} - jaka ma byc informacja gdy warunek "when" się wypełni*/}
                {/* Wynikiem takiego działania jest wyskakujący popup z informację (message) oraz dwoma buttonami ok i anuluj */}
            </div>
        );
    }
}

export default ContactPage;
