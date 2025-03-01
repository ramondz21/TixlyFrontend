import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


export function fn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}