import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import $wal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  oneButton(): void {
    $wal.fire({
      title: 'Título',
      text: 'Este es el texto del cuadro de diálogo',
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonColor: '#5360a9'
    }).then((resolve) => {
      this.toastr.success(`One Button: ${resolve.value}`);
    }).catch((reject) => {
      this.toastr.error(`One Button: ${reject}`);
    });
  }

  twoButtons(): void {
    $wal.fire({
      title: 'Dos botones',
      text: 'Este es una cuadro de diálogo con dos botones',
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonColor: '#069539',
      showCancelButton: true,
      cancelButtonColor: '#cc253a',
    }).then((resolve) => {
      console.log(resolve);
      if (resolve.value) {
        this.toastr.success(`Two Buttons: ${resolve.value}`);
      } else if (resolve.dismiss.toString() == 'cancel') {
        this.toastr.error(`Two Buttons: ${resolve.dismiss.toString()}`);
      }
    }).catch((reject) => {
      console.log(reject);
      this.toastr.error(`Two Buttons: ${reject}`);
    });
  }
}
