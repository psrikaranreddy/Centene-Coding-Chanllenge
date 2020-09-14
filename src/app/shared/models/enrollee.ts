export type Enrollee = {
    id?:string;
    active: boolean;
    name: string;
    dateOfBirth?: string;
};
  
export type MappedEnrollee = {
  [id: string]: Enrollee;
};
  