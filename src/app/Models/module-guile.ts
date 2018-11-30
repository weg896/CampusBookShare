// for design purpose
/*
type ApplicantList struct {
    Id          int       `orm:"column(book_id);pk"`
    Applicant   string    `orm:"column(applicant);size(32)"`
    AppliedTime time.Time `orm:"column(applied_time);type(timestamp);auto_now"`
}

type BookTransaction struct {
    Id               int       `orm:"column(book_id);auto"`
    BookName         string    `orm:"column(book_name);size(64)"`
    BookAuthor       string    `orm:"column(book_author);size(64);null"`
    BookDescription  string    `orm:"column(book_description);null"`
    BookCover        string    `orm:"column(book_cover);null"`
    BookOwner        string    `orm:"column(book_owner);size(32);null"`
    BookBorrower     string    `orm:"column(book_borrower);size(32);null"`
    Campus           string    `orm:"column(campus);size(32)"`
    PostExpiration   string `orm:"column(post_expiration);type(date)"`
    ExpectReturnTime string `orm:"column(expect_return_time);type(date)"`
    ActualReturnTime string `orm:"column(actual_return_time);type(date);null"`
    PostDate         time.Time `orm:"column(post_date);type(timestamp);auto_now"`
    OwnerRating      int       `orm:"column(owner_rating);null"`
    BorrowerRating   int       `orm:"column(borrower_rating);null"`
    OwnerComment     string    `orm:"column(owner_comment);null"`
    BorrowerComment  string    `orm:"column(borrower_comment);null"`
    BookStatus       string    `orm:"column(book_status);size(32)"`
}
type BookTransHasApplicants struct {
    Id               int       `orm:"column(book_id);auto"`
    BookName         string    `orm:"column(book_name);size(64)"`
    BookAuthor       string    `orm:"column(book_author);size(64);null"`
    BookDescription  string    `orm:"column(book_description);null"`
    BookCover        string    `orm:"column(book_cover);null"`
    BookOwner        string    `orm:"column(book_owner);size(32);null"`
    BookBorrower     string    `orm:"column(book_borrower);size(32);null"`
    Campus           string    `orm:"column(campus);size(32)"`
    PostExpiration   time.Time `orm:"column(post_expiration);type(date)"`
    ExpectReturnTime time.Time `orm:"column(expect_return_time);type(date)"`
    ActualReturnTime time.Time `orm:"column(actual_return_time);type(date);null"`
    PostDate         time.Time `orm:"column(post_date);type(timestamp);auto_now"`
    OwnerRating      int       `orm:"column(owner_rating);null"`
    BorrowerRating   int       `orm:"column(borrower_rating);null"`
    OwnerComment     string    `orm:"column(owner_comment);null"`
    BorrowerComment  string    `orm:"column(borrower_comment);null"`
    BookStatus       string    `orm:"column(book_status);size(32)"`
    Applicants       []ApplicantList
}

type BugReport struct {
    Id       int    `orm:"column(report_id);auto"`
    Reporter string `orm:"column(reporter);size(32)"`
    Content  string `orm:"column(content)"`
    Response string `orm:"column(response);null"`
}

type Campus struct {
    Id         int    `orm:"column(campus_id);auto"`
    CampusName string `orm:"column(campus_name);size(100)"`
    CampusEmailStandard string `orm:"column(campus_email_standard);size(100)"`
    AlterEmailStandard string `orm:"column(alter_email_standard);size(100)"`
}

type User struct {
    Id       int    `orm:"column(uid);auto"`
    Username string `orm:"column(username);size(32)"`
    Password string `orm:"column(password);size(64)"`
    Email    string `orm:"column(email);size(32);null"`
}

type UserMessage struct {
    Id          int       `orm:"column(msg_id);auto"`
    Sender      string    `orm:"column(sender);size(32)"`
    Receiver    string    `orm:"column(receiver);size(32)"`
    Content     string    `orm:"column(content)"`
    SendingTime time.Time `orm:"column(sending_time);type(timestamp);auto_now"`
    MsgType     string       `orm:"column(msg_type);size(32)"`
    IsDealed       bool         `orm:"column(isDealed);"`
}

type UserProfile struct {
    Id           int       `orm:"column(pid);auto"`
    Username     string    `orm:"column(username);size(32)"`
    Nickname     string    `orm:"column(nickname);size(32);null"`
    Email        string    `orm:"column(email);size(32);null"`
    Campus       string    `orm:"column(campus);size(32);null"`
    StudentId    string    `orm:"column(student_id);size(16);null"`
    Avatar       string    `orm:"column(avatar);null"`
    LendCount    int       `orm:"column(lend_count)"`
    BorrowCount  int       `orm:"column(borrow_count)"`
    PostCount    int       `orm:"column(post_count)"`
    RequestCount int       `orm:"column(request_count)"`
    Score        int       `orm:"column(score)"`
    SignupDate   time.Time `orm:"column(signup_date);type(timestamp);auto_now"`
    Badge        string    `orm:"column(badge);size(32);null"`
    EmailVerifyed bool     `orm:"column(email_verifyed);"`
}
*/