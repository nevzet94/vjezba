import React, { Component } from 'react'
import { Layout, Img, Input, Button, P, Box } from '../styled/global'
import { Modal, ModalClosed } from '../styled/modal'
const Asocijacija1 = {
    A: ['Slon', 'Krava', 'Koza', 'Ovca', 'Zivotinja'],
    B: ['Slon', 'Krava', 'Koza', 'Ovca', 'Zivotinja'],
    C: ['Slon', 'Krava', 'Koza', 'Ovca', 'Zivotinja'],
    D: ['Slon', 'Krava', 'Koza', 'Ovca', 'Zivotinja'],
    Konacno: ['Konj']

}


class Header extends Component {
    constructor() {
        super();
        this.state = {
            modal: 'modalClosed',
            a1: 'A1',
            a2: 'A2',
            a3: 'A3',
            a4: 'A4',
            aKonacno: 'A konačno',
            b1: 'B1',
            b2: 'B2',
            b3: 'B3',
            b4: 'B4',
            bKonacno: 'B konačno',
            c1: 'C1',
            c2: 'C2',
            c3: 'C3',
            c4: 'C4',
            cKonacno: 'C konačno',
            d1: 'D1',
            d2: 'D2',
            d3: 'D3',
            d4: 'D4',
            dKonacno: 'D konačno',
            konacno: 'Konačno rješenje',
            konacnoPR: '',
            konacnoRJ: '',
            tim: false,
            tim1: 0,
            tim2: 0,
        };
    }
    inputValue = (event) => {
        this.setState({
            konacnoRJ: event.target.value
        })
    }
    konacno = () => {
        var konacnoPR = this.state.konacnoPR
        var konacnoRJ
        var tim1=this.state.tim1
        var tim2=this.state.tim2
   var konacnoKL
        if (konacnoPR === 'A' && this.state.konacnoRJ === Asocijacija1.A[4]) {
            konacnoKL = 'aKonacno'
            konacnoRJ = Asocijacija1.A[4]
            if(this.state.tim===false){
            tim1 +=4

        }
            else{
            tim2 +=4
        }

        }

        else if (konacnoPR === 'B' && this.state.konacnoRJ === Asocijacija1.B[4]) {
            konacnoKL = 'bkonacno'
            konacnoRJ = Asocijacija1.B[4]
            var asocijacija1B
            if(this.state.tim===false){
            tim1 +=4
            asocijacija1B='#3665a3'

        }
            else{
            tim2 +=4
            asocijacija1B='#a80f0f'
        }
        }
        else if (konacnoPR === 'C' && this.state.konacnoRJ === Asocijacija1.C[4]) {
            konacnoKL = 'cKonacno'
            konacnoRJ = Asocijacija1.C[4]
            if(this.state.tim===false)
            tim1 +=4
            else
            tim2 +=4
        }
        else if (konacnoPR === 'D' && this.state.konacnoRJ === Asocijacija1.D[4]) {
            konacnoKL = 'dKonacno'
            konacnoRJ = Asocijacija1.D[4]
            if(this.state.tim===false)
            tim1 +=4
            else
            tim2 +=4
        }
        else if (konacnoPR === 'konacno' && this.state.konacnoRJ === Asocijacija1.Konacno[0]) {
            konacnoKL = 'konacno'
            konacnoRJ = Asocijacija1.Konacno
            if(this.state.tim===false)
            tim1 +=10
            else
            tim2 +=10

        }
        console.log(Asocijacija1.Konacno[0])


        this.setState({
            [konacnoKL]: konacnoRJ,
            modal: 'modalClosed',
            tim1: tim1,
            tim2: tim2,
        })
    }


    openModal = (konacno) => {
        this.setState({
            modal: 'modal',
            konacnoPR: konacno,
        })
        console.log(konacno)

    }
    tim=()=>{
        this.setState({
            tim: !this.state.tim
        })
    }


    render() {
        return (


            <Layout displayFlex width='100%' height='100vh' fixed alignCenter justifyCenter flexDirection='column'>
                <Layout position='absolute' left='10px' top='45%'>
                    <P textAlign='center' fontSize='35px' width='100%'>Tim 1</P>
                    <P textAlign='center' fontSize='35px' width='100%'>{this.state.tim1}</P></Layout>
                <Layout position='absolute' right='10px' top='45%'>
                    <P textAlign='center' fontSize='35px' width='100%'>Tim 2</P>
                    <P textAlign='center' fontSize='35px' width='100%'>{this.state.tim2}</P></Layout>

                <Layout displayFlex width='80%' justifyAround alignCenter>
                    <Box onClick={(e) => this.setState({ a1: Asocijacija1.A[0] })}>{this.state.a1}</Box>
                    <Box onClick={(e) => this.setState({ b1: Asocijacija1.B[0] })} >{this.state.b1}</Box>
                </Layout>
                <Layout displayFlex width='70%' justifyAround alignCenter>
                    <Box onClick={(e) => this.setState({ a2: Asocijacija1.A[1] })}>{this.state.a2}</Box>
                    <Box onClick={(e) => this.setState({ b2: Asocijacija1.A[1] })} >{this.state.b2}</Box>
                </Layout>
                <Layout displayFlex width='60%' justifyAround alignCenter>
                    <Box onClick={(e) => this.setState({ a3: Asocijacija1.A[2] })} >{this.state.a3}</Box>
                    <Box onClick={(e) => this.setState({ b3: Asocijacija1.B[2] })} >{this.state.b3}</Box>
                </Layout>
                <Layout displayFlex width='50%' justifyAround alignCenter>
                    <Box onClick={(e) => this.setState({ a4: Asocijacija1.A[3] })} >{this.state.a4}</Box>
                    <Box onClick={(e) => this.setState({ b4: Asocijacija1.B[3] })} >{this.state.b4}</Box>
                </Layout>
                <Layout displayFlex width='80%' justifyCenter alignCenter>
                    <Box onClick={(e) => this.openModal('A', e)}>{this.state.aKonacno}</Box>
                    <Box onClick={(e) => this.openModal('B', e)} >{this.state.bKonacno}</Box>
                </Layout>
                <Layout displayFlex width='80%' justifyCenter alignCenter>
                    <Box onClick={(e) => this.openModal('konacno', e)}>{this.state.konacno}</Box>
                </Layout>
                <Layout displayFlex width='80%' justifyCenter alignCenter>
                    <Box onClick={(e) => this.openModal('C', e)}>{this.state.cKonacno}</Box>
                    <Box onClick={(e) => this.openModal('D', e)}>{this.state.dKonacno}</Box>
                </Layout>
                <Layout displayFlex width='50%' justifyAround alignCenter>
                    <Box onClick={(e) => this.setState({ c1: Asocijacija1.C[0] })}>{this.state.c1}</Box>
                    <Box onClick={(e) => this.setState({ d1: Asocijacija1.D[0] })}>{this.state.d1}</Box>
                </Layout>
                <Layout displayFlex width='60%' justifyAround alignCenter>
                    <Box onClick={(e) => this.setState({ c2: Asocijacija1.A[1] })}>{this.state.c2}</Box>
                    <Box onClick={(e) => this.setState({ d2: Asocijacija1.A[1] })}>{this.state.d2}</Box>
                </Layout>
                <Layout displayFlex width='70%' justifyAround alignCenter>
                    <Box onClick={(e) => this.setState({ c3: Asocijacija1.C[2] })}>{this.state.c3}</Box>
                    <Box onClick={(e) => this.setState({ d3: Asocijacija1.D[2] })}>{this.state.d3}</Box>
                </Layout>
                <Layout displayFlex width='80%' justifyAround alignCenter>
                    <Box onClick={(e) => this.setState({ c4: Asocijacija1.C[3] })}>{this.state.c4}</Box>
                    <Box onClick={(e) => this.setState({ d4: Asocijacija1.D[3] })}>{this.state.d4}</Box>
                </Layout>
                <Button onClick={this.tim} height='50px' width='150px' fontSize='30px'>Dalje</Button>




                {/* // modal */}
                <Modal >
                    <div className={this.state.modal}>
                        <h1>Unesite rješenje</h1>
                        <input onChange={this.inputValue} />
                        <Button onClick={this.konacno}>Potvrdite unos</Button>
                    </div>
                </Modal>

            </Layout>

        )
    }
}

export { Header }