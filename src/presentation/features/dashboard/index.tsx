"use client";
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const SitesDashboard = () => {
    return (
        <Table aria-label="Sites table" selectionMode='single' color='primary'>
            <TableHeader>
                <TableColumn>Site</TableColumn>
                <TableColumn>Alert</TableColumn>
                <TableColumn>Savings</TableColumn>
                <TableColumn>Uptime</TableColumn>
                <TableColumn>Power</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>CEO</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell>Paused</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>CEO</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>CEO</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    <TableCell>Vacation</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>CEO</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default SitesDashboard