import format from "date-fns/format";

export const FormatDate = (name) => {
    let formattedDate
    if (name?.values.date !== null) {
        const date = name.values.date ? new Date(name?.values?.date) : '';
        formattedDate = date ? format(date, "dd/MM/yyyy") : date;
    }
    return formattedDate;
};