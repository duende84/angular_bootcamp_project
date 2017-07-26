import { Attendee } from "../attendees/attendee.model";
import { Task } from "../tasks/task.model";

export class Note {
	id:number;
	value:number;
	task:string;
	attendee:string;
}