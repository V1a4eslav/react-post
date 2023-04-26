export const dateFormatter = (date: string):string => {
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return new Date(date).toLocaleDateString('en-US', options);
}