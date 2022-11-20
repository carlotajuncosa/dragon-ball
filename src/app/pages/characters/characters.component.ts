import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  myCharacters?: any[];
  constructor(private characterservice: CharactersService) {
    this.characterservice.getAllCharacters().subscribe((data: any) => {
      console.log(data);
      
      const characterData: any[] = data.map((character: any)=> ({
        id: character._id,
        name: character.name,
        image: character.img,
        race: character.race,
      }))
      this.myCharacters = [...characterData]
    });
  }

  ngOnInit(): void {}
}
