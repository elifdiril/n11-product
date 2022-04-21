import React from 'react';

function BaremListItem({minQuantity, maxQuantity, price}) {
    return (
        <div>
            {minQuantity} - {maxQuantity} {price}
        </div>
    );
}

export default BaremListItem;