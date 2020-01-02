import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  userRoleListTemp: any = [];
  userRoleListToSave: any = [];
  checkedInfo: any;
  isChecked =true;

  anchorList: any = [
        {id: '1', roleName: 'anchor1', isChecked: true},
        {id: '2', roleName: 'anchor2', isChecked: false},
        {id: '3', roleName: 'anchor3', isChecked: true},
        {id: '4', roleName: 'anchor4', isChecked: true},
        {id: '5', roleName: 'anchor5', isChecked: true}
    ];

  constructor() {}

    onChangeRole(userRole: string, isChecked) {
        this.checkedInfo = isChecked;
        if (isChecked.target.checked) {
            this.userRoleListTemp.push(userRole);
        } else {
            let index = this.userRoleListTemp.indexOf(userRole);
            this.userRoleListTemp.splice(index, 1);
        }
    }

    checkedEvnt(val) {
        // this.checkedInfo.target.checked = false;
        for(let i =0;i < this.anchorList.length;i++){
          this.anchorList[i].isChecked = val;
        }
    }

}
