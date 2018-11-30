import { ApplicantList } from './applicant-list';

export class BookTransHasApplicants {
    Id               :number; // `orm:"column(book_id);auto"`
    BookName         :string; // `orm:"column(book_name);size(64)"`
    BookAuthor       :string; // `orm:"column(book_author);size(64);null"`
    BookDescription  :string; // `orm:"column(book_description);null"`
    BookCover        :string; // `orm:"column(book_cover);null"`
    BookOwner        :string; // `orm:"column(book_owner);size(32);null"`
    BookBorrower     :string; // `orm:"column(book_borrower);size(32);null"`
    Campus           :string; // `orm:"column(campus);size(32)"`
    PostExpiration   :string; // `orm:"column(post_expiration);type(date)"`
    ExpectReturnTime :string; // `orm:"column(expect_return_time);type(date)"`
    ActualReturnTime :string; // `orm:"column(actual_return_time);type(date);null"`
    PostDate         :string; // `orm:"column(post_date);type(timestamp);auto_now"`
    OwnerRating      :number; // `orm:"column(owner_rating);null"`
    BorrowerRating   :number; // `orm:"column(borrower_rating);null"`
    OwnerComment     :string; // `orm:"column(owner_comment);null"`
    BorrowerComment  :string; // `orm:"column(borrower_comment);null"`
    BookStatus       :string; // `orm:"column(book_status);size(32)"`
    Applicants       :ApplicantList[];
}