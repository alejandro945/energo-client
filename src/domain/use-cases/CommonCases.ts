
export interface ICommonCases<T> {
    getAll: (url: string) => Promise<any>;
    post: (url: string, data: T) => Promise<T>;
}