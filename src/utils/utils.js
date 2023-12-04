export const nowDate = () => {
    const today = new Date();
    const year = today.getFullYear();       // 년도
    const month = today.getMonth() + 1;     // 월
    const date = today.getDate();           // 날짜
    let hours = today.getHours();           // 시
    let minutes = today.getMinutes();       // 분

    return `${year}-${month}-${date} ${hours}:${minutes}`;
}