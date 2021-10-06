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
      this.toastr.success(resolve.value);
    }).catch((reject) => {
      this.toastr.error(reject);
    });
  }
}
