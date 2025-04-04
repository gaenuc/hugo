import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() { }

  getData(id:string) {
    switch (id) {
      case 'blumax-40-cavalli': {
        return {
          "name": "Blumax 40 Cavalli",
          "title": "Blumax",
          "seats": "7 (6 con Skipper)",
          "service": ["Noleggio senza patente","Noleggio con skipper"],
          "description":"Barca da 40 cavalli, perfetta per chi vuole esplorare la costa in autonomia, senza bisogno di patente nautica.",
          "fuel": "Escluso",
          "check_in": [
            "Pontile Porto Giardini Naxos",
            "Isola Bella",
            "Spiaggia di Mazzarò"
          ],
          "prices": [
            ["€ 200 2 ore","partenza da Isola Bella / Spiaggia di Mazzarò"],
            ["€ 250 4 ore "," partenza dal Pontile Portum"],
            ["€ 350 intera giornata ","partenza dal Pontile Portum "],
            
          ],
          "skipperPrices": [
            
            ["€ 300 4 ore ","(partenza dal Pontile Portum)"],
            ["€ 450 intera giornata"," (partenza dal Pontile Portum)"],
            
          ],
          "pics": [
            "https://dummyimage.com/1920x650"
          ]
        }        
      }
      case 'fiat-500-dolce-vita-tour': {
        return {
          "name": "Fiat 500 Dolce Vita Tour",
          "title": "Fiat 500 Dolce Vita",
          "seats": "4 (3 con skipper)",
          "service": ["Noleggio senza patente","Noleggio con skipper"],
          "description": "Vivi l'autentico Italian Style a bordo della leggendaria Fiat 500 del mare! Immergiti nel fascino della Dolce Vita e scopri le meraviglie della costa siciliana con un'esperienza unica. Naviga tra le grotte segrete e le acque cristalline di Taormina, sorseggiando un bicchiere di prosecco mentre il sole bacia il mare. Un viaggio nel tempo, un'esperienza da raccontare!",
          "fuel": "Escluso",
          "check_in": [
            "Pontile Porto Giardini Naxos",
            "Isola Bella",
            "Spiaggia di Mazzarò"
          ],
          "prices": [
            ["€ 250","1 ora e mezza"],
            ["","Possibilità di prolungare su richiesta, da concordare con l'operatore."]
          ],
          "skipperPrices": [
            
          ],
          "pics": [
            "https://dummyimage.com/1920x650"
          ]
        }
      } 
      case 'allegra-20': {
        return {
          "name": "Allegra 20",
          "title": "Allegra 20",
          "seats": "6-7",
          "service": ["Noleggio senza patente","Noleggio con skipper"],
          "description":"Barca da 40 cavalli, perfetta per chi vuole esplorare la costa in autonomia, senza bisogno di patente nautica.",
          "fuel": "Escluso",
          "check_in": [
            "Pontile Porto Giardini Naxos",
            "Isola Bella",
            "Spiaggia di Mazzarò"
          ],
          "prices": [
            ["€ 300","2 ore (partenza da Isola Bella o Spiaggia di Mazzarò)"],
            ["€ 300","mezza giornata (partenza dal Pontile Portum)"],
            ["€ 400","intera giornata (partenza dal Pontile Portum)"]
          ],
          "skipperPrices": [
            ["€ 350","mezza giornata (partenza dal Pontile Portum)"],
            ["€ 500","intera giornata (partenza dal Pontile Portum)"]
          ],
          "pics": [
            "https://dummyimage.com/1920x650"
          ]
        }
      }
      case 'allegra-21-sun': {
        return {
          "name": "Allegra 21 Sun",
          "title": "Allegra 21 Sun",
          "seats": "7 (opzione 7 persone senza skipper, o 6 + 1 skipper)",
          "service": ["Noleggio senza patente","Noleggio con skipper"],
          "description":"Barca da 40 cavalli, perfetta per chi vuole esplorare la costa in autonomia, senza bisogno di patente nautica.",
          "fuel": "Escluso",
          "check_in": [
            "Pontile Porto Giardini Naxos",
            "Isola Bella",
            "Spiaggia di Mazzarò"
          ],
          "prices": [
            ["€ 450","2 ore (partenza da Isola Bella o Spiaggia di Mazzarò)"],
            ["€ 450","mezza giornata (partenza dal Pontile Portum)"],
            ["€ 650","intera giornata (partenza dal Pontile Portum)"]
          ],
          "skipperPrices": [          
            ["€ 500","mezza giornata (partenza dal Pontile Portum)"],
            ["€ 750","intera giornata (partenza dal Pontile Portum)"]
          ],
          "pics": [
            "https://dummyimage.com/1920x650"
          ]
        }
      }
      default: {
        return {error:true}
      }
    }
  }
}
