import React, { useMemo } from "react";

const DemoList = props => {

    const { items } = props

    const sortedList = useMemo( () => {
        console.log('items sorted!')
        return items.sort((a,b) => a - b)
    }, [items])

    console.log('Demo List running')

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

export default React.memo(DemoList)
// export default DemoList