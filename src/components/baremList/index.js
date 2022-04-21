import React from 'react';
import BaremListItem from '../baremListItem';

function BaremList({list}) {
    return (
        <div>
            Toptan Fiyat (Adet): {list.map((item, id) => <BaremListItem key={id} minQuantity={item.minimumQuantity} maxQuantity={item.maximumQuantity} price={item.price}/> )}
        </div>
    );
}

export default BaremList;