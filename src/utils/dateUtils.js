/* eslint-disable indent */

export function datetimeformatFromString(str) {
    let t;
    if (str) {
        t = new Date(str);
    } else {
        t = new Date();
    }
    return t.Format("yyyy/MM/dd hh:mm:ss")
}

export function timetrans(d) {
    return datetimeformatFromString(d).replace(/\//g, '-');
}

export function dateFormatFromString(str) {
    return datetimeformatFromString(str).substr(0, 10)
}

export function stringFromDate(date) {
    return datetimeformatFromString(date).substr(0, 16);
}

export function stringFromnDate(date) {
    let t;
    if (date) {
        t = new Date(date);
    } else {
        t = new Date();
    } 
    return t.Format("yyyy年MM月dd日 hh:mm")
}

export function stringFromnDateToNormal(date) {
    return stringFromnDate(date).substring(5)
}

export function twoDateTime() {
    let t = new Date();
    let y = t.getFullYear();
    let m = t.getMonth() + 1;
    if (m < 10) {
        m = '0' + m;
    }
    let date1 = y + '/' + m + '/01';
    let date2 = null;
    switch (m) {
        case '01':
        case '03':
        case '05':
        case '07':
        case '08':
        case '10':
        case '12':
            date2 = y + '/' + m + '/31';
            break;
        case '04':
        case '06':
        case '09':
        case '11':
            date2 = y + '/' + m + '/30';
            break;
        case '02':
            if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
                date2 = y + '/' + m + '/29';
            } else {
                date2 = y + '/' + m + '/28';
            }
            break;
    }

    return [new Date(date1 + ' 00:00'), new Date(date2 + ' 23:59')];
}

export function getDay(time1, time2) {
    let t1 = new Date(time1).getTime();
    let t2 = new Date(time2).getTime();
    return Math.ceil((t1 - t2) / 24 / 60 / 60 / 1000);
}
