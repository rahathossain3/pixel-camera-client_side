import React from 'react';

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
    // const { name, img } = product;

    const { _id, name, img, details, minimumQnt, availableQnt, unitPrice, email } = product;

    const availableQuality = <span className='font-semibold'>{availableQnt}</span>
    const minimumQuality = <span className='font-semibold'>{minimumQnt}</span>



    return (
        <tr>
            <th>{index + 1}</th>
            <td> <div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>
                <span title={name}> {name.slice(0, 30)}</span>
            </td>
            <td>
                <span class=" text-md font-bold text-green-900 ">Minimum: </span>{minimumQuality}
                <hr />
                <span class=" text-md font-bold text-green-900 ">Available: </span>{availableQuality}
            </td>

            <td>{unitPrice}</td>
            <td>
                <label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" class="btn btn-error btn-xs">Delete</label>
            </td>
            <td>{email}</td>
        </tr>
    );
};

export default ProductRow;