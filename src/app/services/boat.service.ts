import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoatService {

  constructor() { }


  getData(id:string) {
    switch (id) {
      case 'blumax-40-cavalli': {
        return {
          "name": "Blumax 40 Cavalli",
          "title": "Blumax",
          "subtitle": "",
          "seats": "7 (6 con Skipper)",
          "service": ["Noleggio senza patente","Noleggio con skipper"],
          "description":"Barca da 40 cavalli, perfetta per chi vuole esplorare la costa in autonomia, senza bisogno di patente nautica.",
          "description2":"",
          "fuel": "Escluso",
          "check_in": [
            "Pontile Portum Giardini Naxos",
            "Isola Bella",
            "Spiaggia di Mazzarò"
          ],
          "prices": [
            ["2 ore - € 200","partenza da Isola Bella / Spiaggia di Mazzarò"],
            ["4 ore - € 250","partenza dal Pontile Portum"],
            ["Intera giornata - € 350"," partenza dal Pontile Portum"],
            
          ],
          "skipperPrices": [
            
            ["4 ore - € 300","partenza dal Pontile Portum"],
            ["Intera giornata - € 450","partenza dal Pontile Portum"],
            
          ],
          "pics": [
            "https://dummyimage.com/1920x650",
            "https://dummyimage.com/624x786",
            "/assets/card_blumax.jpg",
          ],
          "extras": [
            {"link": true,}
          ],
          "additional":false
        }        
      }
      case 'fiat-500-dolce-vita': {
        return {
          "name": "Fiat 500 Dolce Vita ",
          "title": "Fiat 500 Dolce Vita",
          "subtitle": "",
          "seats": "5 (4 con skipper)",
          "service": ["Noleggio senza patente","Noleggio con skipper"],
          "description": "Vivi l'autentico Italian Style a bordo della leggendaria Fiat 500 del mare! Immergiti nel fascino della Dolce Vita e scopri le meraviglie della costa siciliana con un'esperienza unica. Naviga tra le grotte segrete e le acque cristalline di Taormina, sorseggiando un bicchiere di prosecco mentre il sole bacia il mare. Un viaggio nel tempo, un'esperienza da raccontare!",
          "fuel": "Escluso",
          "check_in": [
            "Pontile Portum Giardini Naxos",
            "Isola Bella",
            "Spiaggia di Mazzarò"
          ],
          "prices": [
            ["1 ora e mezza - € 250",""],
            ["","Possibilità di prolungare su richiesta, da concordare con l'operatore."]
          ],
          "skipperPrices": [
            
          ],
          "pics": [
            "/assets/img/dolcevita_abovethefold.jpg",
            "/assets/img/dolcevita.jpg",
            "/assets/img/above_dolcevita.webp"
          ],
          "additional": true,
          "add": [
          {
            "title": "Dolce Vita Tour",
            "durata": "1 ora e Mezza",
            "prezzo": "250 €",
            "descrizione": "Giro completo della costa tra Giardini Naxos e Taormina, con visita alle grotte marine e soste per il bagno. Incluso prosecco a bordo per rendere l’esperienza ancora più speciale.",
            "check_in": " Isola Bella, Spiaggia di Mazzarò o Pontile Portum",
            "img":"/assets/img/dolcevita_tour.jpg"
          },
          {
            "title": "Dolce Vita Sunset Tour",
            "durata": "1 ora e Mezza",
            "prezzo": "300 €",
            "descrizione": "Giro completo della costa tra Giardini Naxos e Taormina, con visita alle grotte marine e soste per il bagno. Incluso prosecco a bordo per rendere l’esperienza ancora più speciale.",
            "check_in": " Isola Bella, Spiaggia di Mazzarò o Pontile Portum",
            "img":"/assets/img/dolcevita_tour_sunset.png"
          }
        ]
        }
      } 
      case 'allegra-20': {
        return {
          "name": "Allegra 20",
          "title": "Allegra 20",
          "subtitle": "",
          "seats": "6-7",
          "service": ["Noleggio senza patente","Noleggio con skipper"],
          "description":"Un motoscafo bello e compatto, perfetto per passare divertenti giornate in barca insieme ai vostri familiari e agli amici.",
          "fuel": "Escluso",
          "check_in": [
            "Pontile Portum Giardini Naxos",
            "Isola Bella",
            "Spiaggia di Mazzarò"
          ],
          "prices": [
            ["2 ore - € 300","partenza da Isola Bella o Spiaggia di Mazzarò"],
            ["Mezza giornata - € 300","partenza dal Pontile Portum"],
            ["Intera giornata - € 400","partenza dal Pontile Portum"]
          ],
          "skipperPrices": [
            ["Mezza giornata - € 350","partenza dal Pontile Portum"],
            ["Intera giornata € 500","partenza dal Pontile Portum"]
          ],
          "pics": [
            "https://dummyimage.com/1920x650",
            "https://dummyimage.com/624x786",
            "https://dummyimage.com/624x786"
          ],
          "additional":false
        }
      }
      case 'allegra-21-sun': {
        return {
          "name": "Allegra 21 Sun",
          "title": "Allegra 21 Sun",
          "subtitle": " Comfort e stile italiano a bordo",
          "seats": "7 (6 con skipper)",
          "service": ["Noleggio con patente","Noleggio con skipper"],
          "description":"L'Allegra 21 Sun unisce eleganza e sportività in un design 100% italiano. Con ampi spazi prendisole, cabina doppia e bagno interno, è perfetta per chi cerca relax, comodità e riservatezza durante il tour in mare.",
          "description2":"Motorizzata con 135 cavalli, è disponibile solo con patente nautica o skipper. Ideale per coppie, famiglie e piccoli gruppi.",

          "fuel": "Escluso",
          "check_in": [
            "Pontile Portum Giardini Naxos",
            "Isola Bella",
            "Spiaggia di Mazzarò"
          ],
          "prices": [
            ["2 ore - € 450","partenza da Isola Bella o Spiaggia di Mazzarò"],
            ["Mezza giornata - € 450","partenza dal Pontile Portum"],
            ["Intera giornata - € 650","partenza dal Pontile Portum"]
          ],
          "skipperPrices": [          
            ["Mezza giornata - € 500","partenza dal Pontile Portum"],
            ["Intera giornata - € 750","partenza dal Pontile Portum"]
          ],
          "pics": [
            "https://dummyimage.com/1920x650",
            "https://dummyimage.com/624x786",
            "https://dummyimage.com/624x786"
          ],
          "additional":false
        }
      }
      // case 'seablue': {
      //   return {
      //     "name": "Seablue",
      //     "title": "Seablue",
      //     "seats": "1",
      //     "service": ["Noleggio"],
      //     "description":"Vivi un’esperienza unica con Hugo Experience e scopri i fondali spettacolari del mare con il Seablue, il motorino subacqueo che ti permette di nuotare come un delfino e ammirare la bellezza del mare da una prospettiva inedita.",
      //     "fuel": "Escluso",
      //     "check_in": [
      //       "Pontile Portum Giardini Naxos",
      //       "Isola Bella",
      //       "Spiaggia di Mazzarò"
      //     ],
      //     "prices": [
      //       ["2 ore - € 450","partenza da Isola Bella o Spiaggia di Mazzarò"],
      //       ["Mezza giornata - € 450","partenza dal Pontile Portum"],
      //       ["Intera giornata - € 650","partenza dal Pontile Portum"]
      //     ],
      //     "skipperPrices": [          
      //       ["Mezza giornata - € 500","partenza dal Pontile Portum"],
      //       ["Intera giornata - € 750","partenza dal Pontile Portum"]
      //     ],
      //     "pics": [
      //       "https://dummyimage.com/1920x650",
      //       "https://dummyimage.com/624x786"
      //     ],
      //     "additional":false
      //   }
      // }
      default: {
        return {error:true}
      }
    }
  }

  getLocation(loc:string) {
    switch (loc) {
      case "Pontile Portum Giardini Naxos":{
        return "https://www.google.it/maps/place/Portum+srl/@37.8240132,15.2685907,17z/data=!3m1!4b1!4m6!3m5!1s0x131411d3f5d7a9e9:0x17d94e76a260092c!8m2!3d37.8240132!4d15.2711656!16s%2Fg%2F11bbs_yqty";
      } 
      case "Isola Bella": {
        return "https://www.google.it/maps/place/Isola+Bella/@37.8505474,15.2952339,16z/data=!3m1!4b1!4m6!3m5!1s0x1314119cd875773d:0x427fa3d25138e7db!8m2!3d37.8505475!4d15.3001048!16s%252Fg%252F122yh6ng";
      }
      case "Spiaggia di Mazzarò": {
        return "https://www.google.it/maps/place/Isola+Bella/@37.8505474,15.2952339,16z/data=!3m1!4b1!4m6!3m5!1s0x1314119cd875773d:0x427fa3d25138e7db!8m2!3d37.8505475!4d15.3001048!16s%2Fg%2F122yh6ng";
      }
      default: {
        return "";
      }
    }
  }  
}





// https://www.google.it/maps/place/Portum+srl/@37.8240132,15.2685907,17z/data=!3m1!4b1!4m6!3m5!1s0x131411d3f5d7a9e9:0x17d94e76a260092c!8m2!3d37.8240132!4d15.2711656!16s%2Fg%2F11bbs_yqty

// https://www.google.it/maps/place/Isola+Bella/@37.8505474,15.2952339,16z/data=!3m1!4b1!4m6!3m5!1s0x1314119cd875773d:0x427fa3d25138e7db!8m2!3d37.8505475!4d15.3001048!16s%252Fg%252F122yh6ng

// https://www.google.it/maps/place/Isola+Bella/@37.8505474,15.2952339,16z/data=!3m1!4b1!4m6!3m5!1s0x1314119cd875773d:0x427fa3d25138e7db!8m2!3d37.8505475!4d15.3001048!16s%2Fg%2F122yh6ng

