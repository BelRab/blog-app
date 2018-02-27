import {
  Component,
  OnInit,
  Input,        // <-- Rajouter l'input qui n'existais pas avant,
  HostBinding
} from '@angular/core';
import { Article } from './article.model'; // <-- Importation de le classe Article

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    // Ici j'ai declaré mon classe avant mais y'auras besoin par ce que on va les rajouter dans les inputs
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
