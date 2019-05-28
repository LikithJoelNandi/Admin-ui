import { OnInit, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class TSPToastrService implements OnInit {
    
    constructor(
        private toastr: ToastrService,
    ){ }
   
    ngOnInit(): void {
        
    }

    sendSuccessMessage(msg : string){
        this.toastr.success(msg);
    }

    sendErrorMessage(msg : string){
        this.toastr.error(msg);
    }

    sendWarningMessage(msg : string){
        this.toastr.warning(msg);
    }

    sendInfoMessage(msg : string){
        this.toastr.info(msg);
    }

}
