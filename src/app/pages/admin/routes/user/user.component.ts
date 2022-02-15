import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.less' ]
})
export class UserComponent {
  code = `import { NzCodeEditorModule } from 'ng-zorro-antd/code-editor'
@Component({})
export class SomeComponent {}
  `;

}
