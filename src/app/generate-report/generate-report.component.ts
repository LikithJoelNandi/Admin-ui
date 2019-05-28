import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  filteredReviews: Response;

  constructor(
    private dataStorageService : DataStorageService
  ) { }

  ngOnInit() {
  }

  ConvertToCSV(objArray: any): string {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";

    for (var index in objArray[0]) {
        //Now convert each value to string and comma-separated
        row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}
  

getSubscriberData(){
  this.dataStorageService.getAllSubscriber()
  .subscribe(
    (response : Response)=>{
      this.filteredReviews = response;
    }
  );
}

getOfferData(){
  this.dataStorageService.getOfferData()
  .subscribe(
    (response : Response)=>{
      this.filteredReviews = response;
    }
  );
}


  downloadFile(value :string) {
    var fileName = 'SubscriberData.csv';
    if(value == 'subscriberdata'){
      this.getSubscriberData();
    }else{
      this.getOfferData();
      fileName = 'OfferData.csv';
    }
   

    var csvData = this.ConvertToCSV(this.filteredReviews);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
  
    if(navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, 'one.csv');
    } else {
      var a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url)
  }

  

}
