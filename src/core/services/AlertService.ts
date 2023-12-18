import { Alert } from "@/domain/models/Alert";
import { AxiosConsumer } from "@/infrastrucutre/consumers/axios";

export const AlertService = new AxiosConsumer<Alert>();