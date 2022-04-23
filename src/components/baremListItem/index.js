import React from 'react';

function BaremListItem({minQuantity, maxQuantity, price}) {
    return (
        <div>
            {minQuantity} - {maxQuantity} {price} TL
        </div>
    );
}

export default BaremListItem;