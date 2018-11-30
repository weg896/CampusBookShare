
import { CookieService } from 'ngx-cookie-service';

export class CurrentUser {
    static Id           :number; // `orm:"column(pid);auto"`
    static Username     :string; // `orm:"column(username);size(32)"`
    static Nickname     :string; // `orm:"column(nickname);size(32);null"`
    static Email        :string; // `orm:"column(email);size(32);null"`
    static Campus       :string; // `orm:"column(campus);size(32);null"`
    static StudentId    :string; // `orm:"column(student_id);size(16);null"`
    static Avatar       :string; // `orm:"column(avatar);null"`
    static LendCount    :number; // `orm:"column(lend_count)"`
    static BorrowCount  :number; // `orm:"column(borrow_count)"`
    static PostCount    :number; // `orm:"column(post_count)"`
    static RequestCount :number; // `orm:"column(request_count)"`
    static Score        :number; // `orm:"column(score)"`
    static SignupDate   :string; // `orm:"column(signup_date);type(timestamp);auto_now"`
    static Badge        :string; // `orm:"column(badge);size(32);null"`
    static EmailVerifyed:boolean; // `orm:"column(email_verifyed);"`

    static loginHelper:LoginHelper;

    private static cookie:CookieService;


    public static setCookiesInstance(cook:CookieService){
        this.cookie = cook;
    }

    public static isLogin():boolean{
        return this.cookie.get('islogin').localeCompare('true') == 0;
    }

    public static login(){
        this.cookie.set('islogin', 'true');
    }

    public static logout(){
        this.cookie.set('islogin','');
    }
}

class LoginHelper{
    Id       :number; // `orm:"column(uid);auto"`
    Username :string; // `orm:"column(username);size(32)"`
    Password :string; // `orm:"column(password);size(64)"`
    Email    :string; // `orm:"column(email);size(32);null"`
}
