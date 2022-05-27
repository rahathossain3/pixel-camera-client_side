import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const Purchase = () => {

    const { itemId } = useParams();
    const [product] = useProductDetails(itemId)
    const { _id, name, img, details, minimumQnt, availableQnt, unitPrice, email } = product;


    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => console.log(data);


    console.log(product);
    return (
        <div>
            <h2>Purchase Your Product</h2>

            <div>
                <div class="hero rounded-md bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 class="text-5xl font-bold">{name}</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>


            {/*  
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} type="text" placeholder="Your Name" className="input input-bordered" />
                        <br />
                        <input {...register("comment")} type="text" placeholder="Your comment" className="input input-bordered" />
                        <br />
                        <input {...register("email")} type="text" placeholder="Email" className="input input-bordered" />
                        <br />
                        <input className=' btn btn-accent hover:btn-ghost' type="submit" />
                    </form>
                </div> 
            </div>*/}

        </div>
    );
};

export default Purchase;