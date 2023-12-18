import { Site, SiteSummary } from "@/domain/models/Site";
import { AxiosConsumer } from "@/infrastrucutre/consumers/axios";

export const SiteService = {
    creation: new AxiosConsumer<Site>(),
    get: new AxiosConsumer<SiteSummary[]>(),
}
