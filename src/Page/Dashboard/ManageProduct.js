import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

import DeleteConfirmModal from './DeleteConfirmModal';
import ProductRow from './ProductRow';

const ManageProduct = () => {

    //modal
    const [deletingProduct, setDeletingProduct] = useState('');

    //react query 
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product', {
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='container text-center pt-4'>


            <hr />
            <h2 className='text-5xl mb-4 text-center mt-3'>this is from manage Product</h2>

            <h2 className="text-2xl">Manage Doctor: {products.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Minimum quantity/Available quantity </th>
                            <th>Product Price $</th>
                            <th>Action</th>
                            <th>Supplier Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductRow
                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingProduct={setDeletingProduct}
                            > </ProductRow>)
                        }
                    </tbody>

                </table>
            </div>
            {deletingProduct && <DeleteConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingDoctor={setDeletingProduct}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProduct;