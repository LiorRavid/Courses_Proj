import moment from "moment/moment";


export const getFormatedDate = (date)=>{
    const newDate = new Date(date);
    const formatedDate = moment.utc(newDate).format('YYYY-MM-DD');
    return formatedDate;
}
