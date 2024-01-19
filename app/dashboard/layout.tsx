const DashboardLayout = ({children}: { children: React.ReactNode}) => {
    return (
        <div className="flex flex-col gap-yi4">
            <nav className="bg-black text-white">
                This is a shared for dashboard segment
            </nav>
            
            {children}</div>
    );
}

export default DashboardLayout;