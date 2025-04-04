import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  constructor() { }


 
  getServices() {
    return [
      {"id":"seablue" , "name":"Noleggio Seablue", "value":false, "expand":true},
      {"id":"snacks" , "name":"Bevande fresche & snack", "value":false, "expand":false},
      {"id":"photo" , "name":"Foto istantanee personalizzate", "value":false, "expand":false},
    ];
  }

  getData(id:string) {
    switch (id) {
      case 'seablue': {
        return {
          "name": "Seablue",
          "title": "Seablue",
          "seats": "1",
          "service": ["Noleggio"],
          "description":"Vivi un'esperienza unica con Hugo Experience e scopri i fondali spettacolari del mare con il Seablue, il motorino subacqueo che ti permette di nuotare come un delfino e ammirare la bellezza del mare da una prospettiva inedita.",
          "points":[
            "Libertà totale di movimento sott'acqua, senza sforzo",
            "Esplorazione dei fondali marini tra pesci colorati e grotte naturali",
            " Esperienza sicura e accessibile, perfetta anche per chi non ha esperienza di immersioni",
            " Possibilità di realizzare video e foto subacquee con il tuo smartphone! Grazie a una speciale custodia impermeabile integrata, potrai immortalare la tua avventura direttamente dal tuo telefono.",
            "Adrenalina e divertimento garantiti!"
          ],
          "bottoms":[
            "Perfetto per chi ama l’avventura e vuole vivere il mare in modo diverso.",
            "Prenota ora la tua Seablue e Experience e lasciati trasportare dalla magia del mare"
          ],
          "prices": [
            ["2 ore - € 450","partenza da Isola Bella o Spiaggia di Mazzarò"            ]
          ],
          "pics": [
            "/assets/img/seablue_abovethefold.webp",
            "/assets/img/card_seablue.webp",
            "/assets/img/seablue_02.webp"
            
          ],          
        }
      }
      default: {
        return {error:true}
      }
    }  
  }  
}

