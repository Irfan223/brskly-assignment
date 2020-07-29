import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {
public selectedFile: any;
public id:any;
  constructor(private dialogRef: MatDialogRef<UpdateImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient) { }

  ngOnInit(): void {
    // console.log(this.data)
    // alert(this.data.id)
    this.id = this.data.id;
  }
  fileUpload(event) {
    this.selectedFile = event.target.files[0];
  }
  fileUploadHandler(event) {
    event.preventDefault();
    const data: FormData = new FormData();
    data.append( 'image', this.selectedFile);
    // var data = 'hello'
    this.http.post('http://localhost:5000/api/article/'+this.id, data)
    .subscribe(res => {
      console.log(res);
      // alert(res['status'])
      if(res['status'] === 200) {
        this.dialogRef.close(res['status']);
       }
    })
  }

}
