import React, { Component } from "react";
import Odliczanie from "./Odliczanie";
import EdycjaLekcji from "./Edycja";
import uniqid from "uniqid"
import "./Witaj.css";

class Powitanie extends Component{
    constructor(){
        super();
        this.state = {
            Lekcje: [
                {id:0, name:"Lekcja 1", czasG:"7", czasM:"45"},
                {id:1, name:"Lekcja 2", czasG:"8", czasM:"35"},
                {id:2, name:"Lekcja 3", czasG:"9", czasM:"25"},
                {id:3, name:"Lekcja 4", czasG:"10", czasM:"15"},
                {id:4, name:"Lekcja 5", czasG:"11", czasM:"15"},
                {id:5, name:"Lekcja 6", czasG:"12", czasM:"15"}
            ],
            edytowaneLekcje: {
                id: uniqid(),
                name: "",
                czasG: -1,
                czasM: -1
            }
        }
        this.dodanieLekcji = this.dodanieLekcji.bind(this);
        this.zapisanieLekcji = this.zapisanieLekcji.bind(this);
        this.usuwanieLekcji = this.usuwanieLekcji.bind(this);
        this.edycjaLekcjiE = this.edycjaLekcjiE.bind(this); 
    }

    usuwanieLekcji(id){
        this.setState(prevState => ({
         Lekcje: prevState.Lekcje.filter(element => element.id !== id)   
        }));
    }

    dodanieLekcji(val){
        //this.setState({edytowaneLkecje: val});

        this.setState(prevState => {
            return{
                edytowaneLekcje: Object.assign(prevState.edytowaneLekcje, val)
            }
        })
    };

    edycjaLekcjiE(id){
        this.setState(prevState => ({
            edytowaneLekcje: {...prevState.Lekcje.find(element => element.id ===id)}
        }))
    }

    zapisanieLekcji(){
        this.setState(prevState => {
            const czyLekcjaJuzIstnieje = prevState.Lekcje.find(
                element => element.id === prevState.edytowaneLekcje.id
            );
            let aktualizowanieLekcji;
            if(czyLekcjaJuzIstnieje){
                aktualizowanieLekcji = prevState.Lekcje.map(element =>
                {
                    if(element.id === prevState.edytowaneLekcje.id)
                        return prevState.edytowaneLekcje;
                    
                    return element
                })                
            }
            else{
                aktualizowanieLekcji = [...prevState.Lekcje, prevState.edytowaneLekcje];
            }
            return{
            Lekcje:aktualizowanieLekcji,
            edytowaneLekcje:{
                id: uniqid(),
                name: "",
                czasG: -1,
                czasM: -1
                }
            }
        });
    }

    render(){
        const Lekcje = this.state.Lekcje.map(element => {
            return <Odliczanie key={element.id} id={element.id} name={element.name} czasG={element.czasG} czasM={element.czasM} 
            Usun={id => this.usuwanieLekcji(id)}
            edytujLekcje = {id => this.edycjaLekcjiE(id)}/>
        })
        return(
        <>
            {Lekcje}
            
                
                <EdycjaLekcji 
                    name = {this.state.edytowaneLekcje.name}
                    czasG = {this.state.edytowaneLekcje.czasG}
                    czasM = {this.state.edytowaneLekcje.czasM}
                    onInputChange = {val => this.dodanieLekcji(val)}  onSave = {val => this.zapisanieLekcji(val)}/>
            
        </>
        )
    };
}

export default Powitanie;