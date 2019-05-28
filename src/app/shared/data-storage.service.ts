

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubscriberData } from '../data/subscriber-data';
import { Offer } from '../_models/Offer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const endpoint = environment.apiUrl;;

@Injectable()
export class DataStorageService {

    constructor(private http : HttpClient){}

    public hideButton = true;

    enrollSubscriberData(subs : SubscriberData ){
        console.log('Hello World'+ subs);
        return this.http.post(endpoint+"enroll/",  
        subs,
        {responseType: 'json'});
    }

    getOfferData(){
        return this.http.get(endpoint+"offers/",  
         {responseType: 'json'});
    }

    createSingleOffer(offer :Offer){
        return this.http.post(endpoint+"offer/",
         offer,  
         {responseType: 'json'});
    }

    deleteOffer(offer: Offer){
        return this.http.delete(endpoint+"offer/"+offer.offerId);
    }


    modifyOffer(offer : Offer){
        return this.http.put(endpoint+"offer/",
        offer,
        {responseType : 'json'});
    }


    getAllSubscriber(){
        return this.http.get(endpoint+"subscribers/");
    }
    
   

}
