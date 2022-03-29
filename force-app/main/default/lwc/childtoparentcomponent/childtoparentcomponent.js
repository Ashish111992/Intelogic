import { LightningElement, api } from "lwc";

export default class ChildToParentComponent extends LightningElement {
    @api sfdcmsg;
    @api sdata;
}
