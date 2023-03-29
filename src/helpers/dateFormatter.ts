export const dateFormatter = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return new Date(date).toLocaleDateString('en-US', options);
}