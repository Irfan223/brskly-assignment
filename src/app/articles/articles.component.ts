import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddArticleComponent} from '../add-article/add-article.component';
import { UpdateTextComponent } from '../update-text/update-text.component';
import { UpdateImageComponent } from '../update-image/update-image.component';
import { HttpClient } from '@angular/common/http';
declare const Buffer;
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 public data = [];
  constructor(public dialog: MatDialog, public http: HttpClient) {}

  ngOnInit(): void {
    this.getArticle();
  }
  getArticle() {
    this.data = [];
    this.http.get('http://localhost:5000/api/article')
    .subscribe(res => {
      console.log(res['data']);
      for (const dd of res['data']) {
       var imgURL = btoa(
          dd.image.data.reduce((data, byte) => data + String.fromCharCode(byte), '')
       )
         this.data.push({id: dd.article_id, description: dd.description, url: imgURL});
      }
    })
  }
  addNewArticle() {
    const dialogRef = this.dialog.open(AddArticleComponent, {width: '450px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 200) {
          this.getArticle();
      }
    });
  }
  updateText(id) {
    const dialogRef = this.dialog.open(UpdateTextComponent, {data: {
      id: id,
    },  width: '450px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 200) {
        this.getArticle();
    }
    });
  }
  updateImage(id) {
    const dialogRef = this.dialog.open(UpdateImageComponent, {data: {
      id: id
    }});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result === 200) {
        this.getArticle();
    }
    });
  }
}
