import AdminLayout from "@/presentation/components/Layout"


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    )
}