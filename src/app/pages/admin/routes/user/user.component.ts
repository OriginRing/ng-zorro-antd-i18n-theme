import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  code = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor'
@Component({})
export class SomeComponent {}
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
