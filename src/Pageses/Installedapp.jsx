import React, { useEffect, useState } from 'react';
import Installappcard from '../Components/Installappcard';
import { Link } from 'react-router';
import { useDataloader } from '../Hooks/usedataloader';
import { RiseLoader } from 'react-spinners';
import Swal from 'sweetalert2';

const Installedapp = () => {


    const [appcard, setAppcard] = useState([]);
    const [shortorder, setShortorder] = useState('none');

    useEffect(() => {
        const savedata = JSON.parse(localStorage.getItem('carddata'));
        if (savedata) setAppcard(savedata);
    }, [])

    const { loading } = useDataloader()
    if (loading) {
        return (
            <div className='flex justify-center items-center mt-16'>
                <RiseLoader
                    color="#db47bf"
                    margin={5}
                    size={25}
                    speedMultiplier={1}
                />
            </div>
        )
    }


    /* short perform */

    const hadnleshortordwer = (
        () => {
            
            if (shortorder === 'size-ass') {
                return [...appcard].sort((a, b) => a.downloads - b.downloads)
            } else if (shortorder === 'size-des') {
                return [...appcard].sort((a, b) => b.downloads - a.downloads)
            } else {
                return appcard;
            }
        }
    )();


    /* remove card  */

    const deletdata = (id) => {
        const exsitngdata = JSON.parse(localStorage.getItem('carddata'))
        let updatelist = exsitngdata.filter(dtaa => dtaa.id !== id)

        setAppcard(updatelist)

        localStorage.setItem('carddata', JSON.stringify(updatelist));

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className='max-w-10/12 mx-auto'>
            <div>
                <div className='my-10 text-center'>
                    <h2 className=' text-4xl font-bold'>Your Installed Apps</h2>
                    <p className='my-6 text-[20px] text-gray-500'>Explore All Trending Apps on the Market developed by us</p>

                </div>

                <div className='flex justify-between items-center'>
                    <h3 className='text-xl md:text-2xl font-bold '>({appcard.length}) App Found </h3>
                    <select value={shortorder} onChange={(e) => setShortorder(e.target.value)} className='text-xl font-bold border rounded-xl'>
                        <option value="none"> Short by Size</option>
                        <option value="size-ass"> low to high</option>
                        <option value="size-des"> high to low</option>


                    </select>
                </div>
            </div>


            <div className='mt-10'>

                {
                    appcard.length !== 0 ? (
                        hadnleshortordwer.map(card => (
                            <Installappcard deletdata={deletdata} card={card} />

                        ))
                    ) : (
                        <div>
                            <p className="text-center text-3xl font-bold text-gray-600">No App available to install</p>
                            <div className='flex justify-center items-center mt-8'>
                                <Link to='/allapps'><button className='btn bg-[#00D390] text-white font-bold'>Go Apps</button>
                                </Link>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>


    );
};

export default Installedapp;