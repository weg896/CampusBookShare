export class BugReport{
    Id       :number; // `orm:"column(report_id);auto"`
    Reporter :string; // `orm:"column(reporter);size(32)"`
    Content  :string; // `orm:"column(content)"`
    Response :string; // `orm:"column(response);null"`
}