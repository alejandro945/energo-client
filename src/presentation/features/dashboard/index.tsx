"use client";
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Spinner, Card, CardHeader, Image, Divider, CardBody } from "@nextui-org/react";
import { SiteService } from '@/core/services/SiteService';
import useSWR from 'swr';
import { SiteSummary } from '@/domain/models/Site';
import { statusAlertColorMap, statusColorBaseOnThreshold } from '@/core/mappers';
import { AlertGrouped } from '@/domain/models/Alert';

const SitesDashboard = () => {
    const { data, isLoading } = useSWR('/site/summary', SiteService.get.getAll)
    const [selectedSite, setSelectedSite] = React.useState<SiteSummary | null>(null)

    return (
        <div className='p-2 flex flex-col w-full justify-center items-center gap-4'>
            <Table aria-label="Sites table" selectionMode='single' color='primary'>
                <TableHeader>
                    <TableColumn>Site</TableColumn>
                    <TableColumn>Alert</TableColumn>
                    <TableColumn>Savings</TableColumn>
                    <TableColumn>Uptime</TableColumn>
                    <TableColumn>Power</TableColumn>
                </TableHeader>
                <TableBody isLoading={isLoading} loadingContent={<Spinner label="Loading..." />}>
                    {data?.map((site: SiteSummary, index: number) => (
                        <TableRow key={index} onClick={(e) => { console.log(e); setSelectedSite(site) }}>
                            <TableCell>{site.name}</TableCell>
                            <TableCell>
                                <div className='flex gap-2'>
                                    {Object.entries(site.alerts).map(([key, value]) => {
                                        const count = (value as AlertGrouped).count
                                        return (
                                            <Chip key={key} radius='full' color={count > 0 ? statusAlertColorMap[key] : 'default'} size="lg" variant="solid" className='max-w-full text-white h-10' classNames={{ content: "w-6 text-center" }}>
                                                {count}
                                            </Chip>
                                        )
                                    })}
                                </div>
                            </TableCell>
                            <TableCell>
                                <Chip radius="sm" color={statusColorBaseOnThreshold(70, Number(site.savings.split('%')[0]))} size="sm" variant="flat">
                                    {site.savings}
                                </Chip>
                            </TableCell>
                            <TableCell>
                                <Chip radius="sm" color={statusColorBaseOnThreshold(300, Number(site.uptime.split('h')[0]))} size="sm" variant="flat">
                                    {site.uptime}
                                </Chip>
                            </TableCell>
                            <TableCell>{site.power}</TableCell>
                        </TableRow>
                    )
                    )}
                </TableBody>
            </Table>
            <Divider />
            <h6 className='text-xl self-start'>Site Details</h6>
            <Card className="w-full">
                <CardHeader className="flex gap-3">
                    {selectedSite?.alerts ?
                        <>
                            <Image
                                alt="logo"
                                height={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{selectedSite?.name}</p>
                                <p className="text-small text-default-500">{selectedSite?.power}</p>
                            </div>
                        </>
                        :
                        <p className="text-md">Please select a site</p>
                    }
                </CardHeader>
                {selectedSite?.alerts && <Divider />}
                {selectedSite?.alerts && <CardBody>
                    <>
                        {Object.entries(selectedSite?.alerts).map(([key, value], index: number) => {
                            const details = (value as AlertGrouped).details
                            return (
                                <>
                                    {details.map((alert, i) => (
                                        <div key={i} className='flex justify-between gap-2'>
                                            <p className='text-md text-bold'>{key.toUpperCase()}-{alert.metric}</p>
                                            <p className='text-md'>{alert.value} {alert.unit}</p>
                                            <p className='text-md'>{alert.time}</p>
                                        </div>
                                    )
                                    )}
                                </>
                            )
                        })}
                    </>
                </CardBody>}
            </Card>
        </div>
    )
}

export default SitesDashboard