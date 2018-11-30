export class BookTransaction {
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
    // post, request, borrowed, returned
}





export class sample{
// http://jsongen.pykaso.net/

    sampleObject = {
    "book_id":"%index%",
	"book_name":"%name%",
    "book_author":"%fullname%",
    "book_description":"some thing about you",
    "book_cover":"url string",

    "book_owner":"%name%",
    "book_borrower":"%name%",

    "campus":"campus location",

    "post_expiration":"%randInt(2018,2030)%-%randInt(1,12)%-%randInt(1,30)%",
    "expect_return_time":"%randInt(2018,2030)%-%randInt(1,12)%-%randInt(1,30)%",
    "actual_return_time":"%randInt(2018,2030)%-%randInt(1,12)%-%randInt(1,30)%", 

    "post_date":"%randInt(2018,2030)%-%randInt(1,12)%-%randInt(1,30)%",
    "book_status":"status"
    }


    static sampleArray = [
        {
        "book_id": 1,
        "book_name": "Claire",
        "book_author": "Willie Anthony",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Elaine",
        "book_borrower": "Beth",
        "campus": "campus location",
        "post_expiration": "2030-12-10",
        "expect_return_time": "2030-11-30",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 2,
        "book_name": "Stephen",
        "book_author": "Christopher Turner",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Christopher",
        "book_borrower": "Kelly",
        "campus": "campus location",
        "post_expiration": "2030-10-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 3,
        "book_name": "Ross",
        "book_author": "Shannon Durham",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Marvin",
        "book_borrower": "Lorraine",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-14",
        "post_date": "2030-12-16",
        "book_status": "status"
        },
        {
        "book_id": 4,
        "book_name": "Keith",
        "book_author": "Marcus Bowers",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Lauren",
        "book_borrower": "Bernard",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-13",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 5,
        "book_name": "Laura",
        "book_author": "Marion Bowles",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Bob",
        "book_borrower": "Tamara",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-10-30",
        "post_date": "2030-10-19",
        "book_status": "status"
        },
        {
        "book_id": 6,
        "book_name": "Geraldine",
        "book_author": "Franklin Murphy",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Jeff",
        "book_borrower": "Monica",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-10-30",
        "actual_return_time": "2030-12-13",
        "post_date": "2030-12-12",
        "book_status": "status"
        },
        {
        "book_id": 7,
        "book_name": "Randall",
        "book_author": "Nina Fink",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Gretchen",
        "book_borrower": "Zachary",
        "campus": "campus location",
        "post_expiration": "2030-12-13",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-18",
        "post_date": "2030-10-30",
        "book_status": "status"
        },
        {
        "book_id": 8,
        "book_name": "Allen",
        "book_author": "Danny Pearce",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Sherri",
        "book_borrower": "Dorothy",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-18",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 9,
        "book_name": "Eric",
        "book_author": "Harriet Crane",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Heidi",
        "book_borrower": "Theodore",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-14",
        "actual_return_time": "2030-11-30",
        "post_date": "2030-12-12",
        "book_status": "status"
        },
        {
        "book_id": 10,
        "book_name": "Craig",
        "book_author": "Louis Chang",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Nicole",
        "book_borrower": "Ruth",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-11",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-19",
        "book_status": "status"
        },
        {
        "book_id": 11,
        "book_name": "Claire",
        "book_author": "Beth Livingston",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Julian",
        "book_borrower": "Shannon",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 12,
        "book_name": "Joyce",
        "book_author": "Audrey Fischer",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Elaine",
        "book_borrower": "Milton",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-11-30",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 13,
        "book_name": "Jacob",
        "book_author": "Sandra Sinclair",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Sarah",
        "book_borrower": "Emily",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-17",
        "post_date": "2030-12-16",
        "book_status": "status"
        },
        {
        "book_id": 14,
        "book_name": "Sheryl",
        "book_author": "Beth Cobb",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Gretchen",
        "book_borrower": "Jack",
        "campus": "campus location",
        "post_expiration": "2030-11-30",
        "expect_return_time": "2030-12-16",
        "actual_return_time": "2030-12-14",
        "post_date": "2030-10-30",
        "book_status": "status"
        },
        {
        "book_id": 15,
        "book_name": "Kent",
        "book_author": "Kyle Stone",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Martin",
        "book_borrower": "Anita",
        "campus": "campus location",
        "post_expiration": "2030-10-18",
        "expect_return_time": "2030-12-11",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 16,
        "book_name": "Arlene",
        "book_author": "Randall Newton",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Virginia",
        "book_borrower": "Bernard",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-10",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 17,
        "book_name": "Sandra",
        "book_author": "Joanna Lowe",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Catherine",
        "book_borrower": "Kelly",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-16",
        "post_date": "2030-12-11",
        "book_status": "status"
        },
        {
        "book_id": 18,
        "book_name": "Catherine",
        "book_author": "Virginia Sparks",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Glenda",
        "book_borrower": "Kristina",
        "campus": "campus location",
        "post_expiration": "2030-12-13",
        "expect_return_time": "2030-12-18",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-10-15",
        "book_status": "status"
        },
        {
        "book_id": 19,
        "book_name": "Zachary",
        "book_author": "Benjamin Hobbs",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Thelma",
        "book_borrower": "Miriam",
        "campus": "campus location",
        "post_expiration": "2030-11-10",
        "expect_return_time": "2030-12-12",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-17",
        "book_status": "status"
        },
        {
        "book_id": 20,
        "book_name": "Bernard",
        "book_author": "Melanie Denton",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Sidney",
        "book_borrower": "Oscar",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-16",
        "post_date": "2030-12-18",
        "book_status": "status"
        },
        {
        "book_id": 21,
        "book_name": "Natalie",
        "book_author": "Jacob Denton",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Luis",
        "book_borrower": "Joanne",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 22,
        "book_name": "Norman",
        "book_author": "Lloyd Mills",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Lois",
        "book_borrower": "Patrick",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-18",
        "book_status": "status"
        },
        {
        "book_id": 23,
        "book_name": "Evelyn",
        "book_author": "Don Briggs",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Dennis",
        "book_borrower": "Patricia",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-11",
        "post_date": "2030-11-30",
        "book_status": "status"
        },
        {
        "book_id": 24,
        "book_name": "Christina",
        "book_author": "Charlene Goldman",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Edgar",
        "book_borrower": "Gretchen",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-18",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-16",
        "book_status": "status"
        },
        {
        "book_id": 25,
        "book_name": "Catherine",
        "book_author": "Steve Fischer",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Dan",
        "book_borrower": "Christopher",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-17",
        "actual_return_time": "2030-11-30",
        "post_date": "2030-10-30",
        "book_status": "status"
        },
        {
        "book_id": 26,
        "book_name": "Dorothy",
        "book_author": "Florence Lynn",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Yvonne",
        "book_borrower": "Warren",
        "campus": "campus location",
        "post_expiration": "2030-12-15",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-14",
        "book_status": "status"
        },
        {
        "book_id": 27,
        "book_name": "Jessica",
        "book_author": "Katharine Gill",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Edgar",
        "book_borrower": "Rita",
        "campus": "campus location",
        "post_expiration": "2030-10-30",
        "expect_return_time": "2030-12-15",
        "actual_return_time": "2030-12-30",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 28,
        "book_name": "Clyde",
        "book_author": "Vernon Case",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Regina",
        "book_borrower": "Susan",
        "campus": "campus location",
        "post_expiration": "2030-12-30",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-11-13",
        "post_date": "2030-12-30",
        "book_status": "status"
        },
        {
        "book_id": 29,
        "book_name": "Jamie",
        "book_author": "Joan Graves",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Jimmy",
        "book_borrower": "Randy",
        "campus": "campus location",
        "post_expiration": "2030-11-18",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-13",
        "post_date": "2030-12-17",
        "book_status": "status"
        },
        {
        "book_id": 30,
        "book_name": "Mary",
        "book_author": "Sherri Fitzpatrick",
        "book_description": "some thing about you",
        "book_cover": "url string",
        "book_owner": "Geoffrey",
        "book_borrower": "Franklin",
        "campus": "campus location",
        "post_expiration": "2030-12-18",
        "expect_return_time": "2030-12-30",
        "actual_return_time": "2030-12-10",
        "post_date": "2030-12-30",
        "book_status": "status"
        }
        ];
        
}

