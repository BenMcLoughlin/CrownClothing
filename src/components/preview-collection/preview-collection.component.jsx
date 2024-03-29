import React from 'react'
import "./preview-collection.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"

export default function CollectionPreview({title, items}) {
    return (
        <div className="collection-preview">
            <h1>Title</h1>
            <div className="preview">
                {items.filter((item, index) => index <4).map(({id, ...itemProps}) => (
                    <CollectionItem  key={id} {...itemProps}/>
                ))}

            </div>
        </div>
    )
}
