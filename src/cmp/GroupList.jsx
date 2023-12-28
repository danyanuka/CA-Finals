import { GroupPreview } from './GroupPreview'

export function GroupList({ board }) {
    const groups = board?.groups
    return (

        <ul className="group-list">
            {
                groups?.map(group => <li key={group.id}>
                    <GroupPreview group={group} />
                </li>)
            }
        </ul>


    )
}
