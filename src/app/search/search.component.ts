import { Component, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnChanges {

@Input() AddUser:boolean = false;

 @Output() AddUserChange = new EventEmitter<boolean>();

 addUser() {
   this.AddUser = true;
   this.AddUserChange.emit(this.AddUser);
 }

 backToSearch(){
    this.AddUser = false;
    this.AddUserChange.emit(this.AddUser);
 }

 ngOnChanges(): void {
   console.log('Changes detected:');
   
 }

}
