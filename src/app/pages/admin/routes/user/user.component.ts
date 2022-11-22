import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

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
  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, public nzMessageService: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ 'cron-expression', [ Validators.required ] ],
      cronLinux: [ '* 1 * * *', [ Validators.required ] ],
      cronSpring: [ '0 * 1 * * *', [ Validators.required ] ]
    });
  }

  submitForm(): void {
    this.nzMessageService.success(JSON.stringify(this.validateForm.value));
  }
}
