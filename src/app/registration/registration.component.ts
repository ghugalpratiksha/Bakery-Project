import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  profile: any;
  name: any;
  email: any;
  password: any;
  address: any;
  number: any;
  file: any;
  data:any= [];
  selectIndex:any;
  selectObj:any;
  submitButton = true;
  updateButton = false;
  uploadImage: any= [];

  submitBtn(){
    let obj = {
      profile: this.profile,
      name : this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      number: this.number,
    }
    this.data.push(obj);
    this.clear();
    console.log("Submitted: ", this.data);
  }

  clear(){
    this.profile = "",
    this.name = "",
    this.email = "",
    this.password = "",
    this.address = "",
    this.number = ""
  }

  delete(index:any){
    this.data.splice(index,1);
    console.log("This Row Deleted :", index);
    this.clear();
    
    this.submitButton = true;
    this.updateButton = false;
  }

  edit(index:any, editobj:any){
    this.selectIndex = index;
    this.selectObj = editobj;

    this.profile = editobj.profile
    this.name = editobj.name;
    this.email = editobj.email;
    this.password = editobj.password;
    this.address = editobj.address;
    this.number = editobj.number;

    this.submitButton = false;
    this.updateButton = true;
  }

  update(){
    this.data[this.selectIndex].profile = this.profile;
    this.data[this.selectIndex].name = this.name;
    this.data[this.selectIndex].email = this.email;
    this.data[this.selectIndex].password = this.password;
    this.data[this.selectIndex].address = this.address;
    this.data[this.selectIndex].number = this.number;

    this.submitButton = true;
    this.updateButton = false;

    console.log("updated profile: ", this.profile)
    console.log("Updated name: ", this.name);
    console.log("Updated email: ", this.email);
    console.log("Updated password: ", this.password);
    console.log("Updated address: ", this.address);
    console.log("Updated number: ", this.number);
    this.clear();
  }

  handleUpload(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.profile = reader.result;
    }
    reader.readAsDataURL(file);
   }
  
}
