
export class NormalUserProfile {
    Id           :number; // `orm:"column(pid);auto"`
    Username     :string; // `orm:"column(username);size(32)"`
    Nickname     :string; // `orm:"column(nickname);size(32);null"`
    Email        :string; // `orm:"column(email);size(32);null"`
    Campus       :string; // `orm:"column(campus);size(32);null"`
    StudentId    :string; // `orm:"column(student_id);size(16);null"`
    Avatar       :string; // `orm:"column(avatar);null"`
    LendCount    :number; // `orm:"column(lend_count)"`
    BorrowCount  :number; // `orm:"column(borrow_count)"`
    PostCount    :number; // `orm:"column(post_count)"`
    RequestCount :number; // `orm:"column(request_count)"`
    Score        :number; // `orm:"column(score)"`
    SignupDate   :string; // `orm:"column(signup_date);type(timestamp);auto_now"`
    Badge        :string; // `orm:"column(badge);size(32);null"`
    EmailVerifyed:boolean; // `orm:"column(email_verifyed);"`
}