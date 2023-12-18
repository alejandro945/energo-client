"use client";
import { AlertService } from '@/core/services/AlertService';
import { SiteService } from '@/core/services/SiteService';
import { Alert, AlertSeverity, emptyAlert } from '@/domain/models/Alert';
import { Site } from '@/domain/models/Site';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/select';
import { Spinner } from '@nextui-org/spinner';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWR from 'swr';

const AlertsPage = () => {
    const { data, isLoading } = useSWR('/site', SiteService.get.getAll)

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<Alert>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<Alert> = async (data) => {
        try {
            await AlertService.post('alert/send', data)
        } catch (error) {
            console.log(error)
        } finally {
            reset();
        }
    }

    return (
        <div className='p-2 w-full justify-center align.center'>
            {isLoading ?
                <Spinner label="Loading..." />
                :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Select
                                label="Select a site"
                                color='primary'
                                {...register('site')}
                                isRequired
                            >
                                {data.map((site: Site) => (
                                    <SelectItem key={site._id} value={site._id}>
                                        {site.name}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Select
                                label="Select a severity"
                                color='primary'
                                {...register('severity')}
                                isRequired
                            >
                                {Object.values(AlertSeverity).map((severity: string) => (
                                    <SelectItem key={severity} value={severity}>
                                        {severity}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input color='primary' isRequired label="Metric" variant="bordered" classNames={{ input: ["bg-gray-50"] }} {...register('metric')} />
                            <Input color='primary' isRequired label="Unit" variant="bordered" classNames={{ input: ["bg-gray-50"] }} {...register('unit')} />
                            <Input color='primary' isRequired label="Time" variant="bordered" classNames={{ input: ["bg-gray-50"] }} {...register('time')} />
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                            <Input type="number" isRequired color='primary' variant="bordered" label="Threshold" classNames={{ input: ["bg-gray-50"] }} {...register('threshold')} />
                            <Input type="number" isRequired color='primary' variant="bordered" label="Value" classNames={{ input: ["bg-gray-50"] }} {...register('value')} />
                        </div>
                        <div className="flex w-full flex-wrap items-end justify-end">
                            <Button color="primary" type='submit'>
                                Create
                            </Button>
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

export default AlertsPage