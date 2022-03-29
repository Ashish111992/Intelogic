import { LightningElement } from "lwc";
import digitalImage from "@salesforce/resourceUrl/digitallogo";
import ibmEroor from "@salesforce/label/c.IbmError";
import { track } from "lwc";

export default class FirstLWComponent extends LightningElement {
    Labellist = ibmEroor;
    logo = digitalImage;
    ceolist;
    @track divValue = false;
    @track CityList = ['Nagpur', 'Pune','Hyderabad','Bangluru'];

    showdivhandler(event) {
        this.divValue = event.target.checked;
    }
    showlisthandler() {
        this.ceolist = [
            {
                id: 1,
                name: "Ashish",
                title: "Toshniwal"
            },
            {
                id: 2,
                name: "Raju",
                title: "Baba"
            }
        ];
       
        
    }
}
