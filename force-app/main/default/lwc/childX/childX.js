import { api, LightningElement, track } from "lwc";

export default class ChildX extends LightningElement {
    @track greeting;
    @api meetingRoomInfo = { roomName: "A-01", roomCapacity: "12" };

    greetinghandler(event) {
        this.greeting = event.target.value;
    }
}
