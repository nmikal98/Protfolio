import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ContactService } from 'src/app/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  FormData: FormGroup | any;
  submitted = false;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    public toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.FormData.controls;
  }

  onSubmit(FormData: any) {
    this.submitted = true;
    if (this.FormData.invalid) {
      this.toaster.error('Form Submission Failed');
      return;
    }

    this.contact.PostMessage(FormData).subscribe(
      (resopnse) => {
        location.href = 'https://mailthis.to/confirm';
        this.FormData.reset();
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
