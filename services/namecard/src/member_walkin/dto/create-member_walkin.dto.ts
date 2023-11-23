export class CreateMemberWalkinDto {
  prefix: string;
  name: string;
  lastname: string;
  position: string;
  agency?: string;
  master_data_typeId: number;
  eventsId: number;
  checkin?: boolean;
}
