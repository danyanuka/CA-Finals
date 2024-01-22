
export function Header({ title }) {
    return (
        <div className="header">
            <div className="title">
                <i className='icon-logo'></i>
                <h1>Trello</h1>
            </div>
            <h3 className='sub-title'>{title}</h3>
        </div>
    )
}