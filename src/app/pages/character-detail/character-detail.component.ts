import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
id: any;
myCharacter: any;
  constructor(private activatedroute: ActivatedRoute, private charactersService: CharactersService ) {
    this.activatedroute.paramMap.subscribe((params)=> {
     this.id = params.get('id'); 
     this.charactersService.getCharacter(this.id).subscribe((data:any)=>{
      console.log(data);
      this.myCharacter = {...data}
     })
    })
   }

  ngOnInit(): void {
  }

}
