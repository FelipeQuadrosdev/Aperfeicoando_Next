

export default function sobreLayout({
    children
}:
    {
        children: React.ReactNode
    }) {

    return (
        <div>
            <h2>SubMenu</h2>
            <br />
            {children}
        </div>
    )
}