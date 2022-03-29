import { LightningElement } from "lwc";

export default class ParentY extends LightningElement {
    meetingRoomInfo = [
        { roomName: "A101", roomCapacity: "10" },
        { roomName: "A102", roomCapacity: "4" },
        { roomName: "A103", roomCapacity: "3" },
        { roomName: "A104", roomCapacity: "5" }
    ];
}
