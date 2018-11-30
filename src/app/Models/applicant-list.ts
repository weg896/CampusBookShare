export class ApplicantList{
    Id          :number; // `orm:"column(book_id);pk"`
    Applicant   :string; // `orm:"column(applicant);size(32)"`
    AppliedTime :string; // `orm:"column(applied_time);type(timestamp);auto_now"`
}