import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update-text',
  templateUrl: './update-text.component.html',
  styleUrls: ['./update-text.component.css']
})
export class UpdateTextComponent implements OnInit {
 public article = {description: ''};
 constructor(private dialogRef: MatDialogRef<UpdateTextComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.data);
  }
  updateText() {
    var data = {
      id: this.data.id, 
      description: this.article.description
    }
    this.http.patch('http://localhost:5000/api/article', data)
    .subscribe(res => {
      console.log(res['status']);
      this.dialogRef.close(res['status']);
    })
  }
}
