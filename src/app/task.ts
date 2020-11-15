export interface Task {
  id: number;
  description: string;
  timeCreated?: number;
  timeStarted?: number;
  timeCompleted?: number;
  timeOnTask?: number;
  timeOnSBreak?: number;
  timeOnLBreak?: number;
  completeCycles?: number;
  taskNotes?: string;
}
