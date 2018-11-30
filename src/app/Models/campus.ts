export class Campus{
    Id         :number; // `orm:"column(campus_id);auto"`
    CampusName :string; // `orm:"column(campus_name);size(100)"`
    CampusEmailStandard :string; // `orm:"column(campus_email_standard);size(100)"`
    AlterEmailStandard  :string; // `orm:"column(alter_email_standard);size(100)"`
}