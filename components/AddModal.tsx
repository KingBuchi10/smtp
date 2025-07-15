import { Modal } from '@mui/material';
import React, { useState } from 'react'
import InputModal from './InputModal';
import ButtonConfig2 from './ButtonConfig2';

function AddModal() {
    const [Open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal open={Open} onClose={handleClose} className='flex justify-end p-3'>
                <div className='bg-white w-[500px] p-4'>
                    <div className='text-black text-[15px] font-bold mt-[27.86px] mb-[40.05px] justify-center flex'>
                        <div>Add New Entry</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <InputModal title="Name" placeholder="Enter name" />
                        <InputModal title="Email" placeholder="Enter email" />
                        <InputModal title="Employee's name" placeholder="Employee's name" />

                    </div>

                    <ButtonConfig2 title='Add' />
                </div>
            </Modal>
        </div>
    )
}

export default AddModal
