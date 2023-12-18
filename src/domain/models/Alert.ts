export interface Alert {
    site?: string;
    severity: AlertSeverity;
    metric: string;
    unit: string;
    time: string;
    threshold: number;
    value: number;
}



export enum AlertSeverity {
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}

export interface AlertGrouped {
    count: number;
    details: Alert[];
}

export interface AlertSummary {
    high: AlertGrouped;
    med: AlertGrouped;
    low: AlertGrouped;
}
export const emptyAlert: Alert = {
    site: '',
    severity: AlertSeverity.LOW,
    metric: '',
    unit: '',
    time: '',
    threshold: 0,
    value: 0
};