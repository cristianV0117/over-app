import {MDBBtn, MDBCard, MDBInput} from "mdbreact";
import {toast} from "react-nextjs-toast";

const Hanged = () => {
    class Hanged extends React.Component {

        state = {
            countBad: 0,
            countGood: 0,
            congratulations: `¡¡Felicitaciones!! has ganado,`,
            looser: `¡Lo sentimos! has perdido,`,
            minorThanFiveCharacters: `Debe ser una palabra menor a 5 caracteres`,
            secretWord: ''
        }

        componentDidMount() {
            console.log("loaded")
        }

        secretWord = (secretWord) => {
            if (secretWord.length > 5) {
                toast.notify(this.state.minorThanFiveCharacters, {
                    title: '¡OH NO!',
                    type: "error",
                    duration: 20
                })
                return
            }
            this.setState({secretWord: secretWord})
        }

        generateInputs = () => {
            if (!this.state.secretWord) {
                return
            }
            const word = this.state.secretWord
            let inputs = ''
            for (let index = 0; index < word.length; index++) {
                inputs +=
                    `<div className="col-md-12">
                        <input word="${word[index]}" id="${index}" maxlength="1" placeholder="Ej: letra" class="form-control col-md-12 mt-4 inputs" type="text" />
                    </div>`
            }
            document.getElementById('hanged').innerHTML = inputs
            this.inputList()
        }

        inputList = () => {
            let word = this.state.secretWord
            let inputsList = document.getElementsByClassName('inputs')
            for (let index = 0; index < inputsList.length; index++) {
                inputsList[index].addEventListener('keyup', (event) => {
                    this.dataCompare(word, event.key, inputsList)
                })
            }
        }

        dataCompare = (word, firstWord, inputList) => {
            if (word.includes(firstWord)) {
                for (let index = 0; index < word.length; index++) {
                    if (word[index] === firstWord) {
                        for (let position = 0; position < inputList.length; position++) {
                            let newWord = document.getElementById(index);
                            newWord.disabled = true;
                            newWord.value = firstWord;
                        }
                        this.setState((preState) => {
                            return {
                                countGood : preState.countGood + 1
                            }
                        })
                        if (this.state.countGood === word.length) {
                            toast.notify(`${this.state.congratulations} la palabra secreta es: ${word}`, {
                                title: `¡OK! ${String.fromCodePoint(0x1F600)}`,
                                type: "success",
                                duration: 40
                            })
                            document.getElementById('hanged').innerHTML = ''
                        }
                    }
                }
            } else {
                this.setState((preState) => {
                    return {
                        countBad : preState.countBad + 1
                    }
                })
                document.getElementById('wordStatus').innerHTML = `<hr />Intentos fallidos <strong>${this.state.countBad}</strong> de 5`
                if (5 === this.state.countBad) {
                    toast.notify(`${this.state.looser} la palabra correcta era ${word}`, {
                        title: `¡OH NO! ${String.fromCodePoint(0x1F600)}`,
                        type: "error",
                        duration: 40
                    })
                    document.getElementById('hanged').innerHTML = ''
                }
            }
        }

        render() {
            return (
                <div className="container col-md-12">
                    <MDBCard>
                        <div className="col-md-12 mt-5 default">
                            <center><h3><b>JUEGO DE AHORCADOS &#x1F642;</b></h3></center>
                            <hr />
                            <MDBInput
                                maxLength='5'
                                className='mt-5'
                                label='Escribe la palabra secreta'
                                icon='password'
                                type='password'
                                onChange={e => this.secretWord(e.target.value)}
                                name="secret_word"
                            />
                            <center>
                                <MDBBtn
                                    onClick={this.generateInputs}
                                    outline
                                    color='success'
                                >Guardar palabra
                                </MDBBtn>
                            </center>
                            <center>
                                <MDBBtn
                                    onClick={() => location.reload()}
                                    outline
                                    color='primary'
                                >Reiniciar juego
                                </MDBBtn>
                            </center>
                            <div id='hanged' className='row col-md-12'></div>
                            <div id='wordStatus'></div>
                            <div id='response'></div>
                            <hr />
                        </div>
                    </MDBCard>
                </div>
            )
        }
    }

    return <Hanged />
}

export default Hanged