import { StartAndEndDate } from '../models/modelType/startAndEndDate';
import { toast } from 'react-toastify';


export const showToast = (message: string, type: string) => {
    switch (type)
    {
        case 'success':
            toast.success(message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            break;
        case 'warn':
            toast.warn(message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            break;
        case 'error':
            toast.error(message, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            break;
    }
    
}

export const generateFilePreview = (data: any): any => {
    return URL.createObjectURL(data);
}

export const getStartAndEndDateOfMonth = (year: number, month: number): StartAndEndDate => {
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    return {
        start: startDate,
        end: endDate
    };
};

export const range = (from: number, to: number, step: number) => {
    return [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);
}

export const getYear = (date: Date) => {
    return date.getFullYear();
}

export const getMonth = (date: Date) => {
    return date.getMonth();
}

export const toShortDate = (date: Date): string => {
    return date.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export const toShortDateTime = (date: Date): string => {
    return date.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
}

export const toShortDateYMD = (date: Date): string => {
    return date.toLocaleString('en-CA', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export const epochToDate = (value: number): Date => {
    return new Date(value * 1000);
}


export const epochToDateString = (value: number, format: string): string => {
    return new Date(value * 1000).toLocaleString(format);
}
export const epochToShortDate = (value: number): string => {
    if (0 == value) return '';
    return toShortDate(epochToDate(value));
}

export const epochToShortDateTime = (value: number): string => {
    if (0 == value) return '';
    return toShortDateTime(epochToDate(value));
}

export const parseShortDate = (dateString: string): Date => {
    var dateComponents = dateString.split("/");
    if (dateComponents.length === 3) {
        var day = parseInt(dateComponents[0], 10);
        var month = parseInt(dateComponents[1], 10);
        var year = parseInt(dateComponents[2], 10);
        return new Date(year, month - 1, day);
    }
    throw new Error("Invalid date format");
}
