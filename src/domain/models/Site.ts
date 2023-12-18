import { AlertSummary } from "./Alert";

export interface Site {
    _id: string;
    name: string;
    savings: string; 
    uptime: string;
    power: string; 
}

export type SiteSummary = Site &  {alerts: AlertSummary}