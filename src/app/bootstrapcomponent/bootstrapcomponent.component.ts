import {
  Component,
  ElementRef,
  HostListener,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-bootstrapcomponent',
  templateUrl: './bootstrapcomponent.component.html',
  styleUrls: ['./bootstrapcomponent.component.css'],
})
export class BootstrapcomponentComponent implements OnInit, OnChanges {
  counter: number = 0;
  @ViewChild('input') input: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  onCount(event: any) {
    if (event) {
      this.counter++;

      // let count = this.counter;
      // console.log({count});
      // console.table({count});
      // console.info('count', count);   // ctrl+shift+L
    }
  }

  check(event: any) {
    if (this.input.nativeElement.value == "good" ||
        this.input.nativeElement.value == "fine" ||
        this.input.nativeElement.value == "tired") {
      this.input.nativeElement.setCustomValidity('"' + this.input.nativeElement.value + '" is not a feeling.');
    } else {
      // input is fine -- reset the error message
      this.input.nativeElement.setCustomValidity('');
    }
  }

  @HostListener('submit', ['$event']) onPageLoad(event: Event) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = Array.from(document.getElementsByClassName('needs-validation'));
    let form = <HTMLFormElement>(forms[0]);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }

}
