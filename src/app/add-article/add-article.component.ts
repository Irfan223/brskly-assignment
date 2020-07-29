import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
public selectedFile: any;
public article = {description: ''};
  constructor(private dialogRef: MatDialogRef<AddArticleComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private http: HttpClient) { }

  ngOnInit(): void {
  }
  fileUpload(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  fileUploadHandler(event) {
    event.preventDefault();
    console.log(this.article.description);

    const data: FormData = new FormData();
    data.append( 'image', this.selectedFile);
    data.append('description', this.article.description);
    this.http.post('http://localhost:5000/api/article', data)
    .subscribe(res => {
         if(res['status'] === 200) {
          this.dialogRef.close(res['status']);
         }
    })
  }
}
