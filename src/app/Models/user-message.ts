export class UserMessage{
    Id          :number; // `orm:"column(msg_id);auto"`
    Sender      :string; // `orm:"column(sender);size(32)"`
    Receiver    :string; // `orm:"column(receiver);size(32)"`
    Content     :string; // `orm:"column(content)"`
    SendingTime :string; // `orm:"column(sending_time);type(timestamp);auto_now"`
    MsgType     :string; // `orm:"column(msg_type);size(32)"`
    IsDealed    :boolean; // `orm:"column(isDealed);"`
}