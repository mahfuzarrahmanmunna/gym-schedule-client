import React from 'react';
import { FaFile, FaTrash } from 'react-icons/fa';
import { MdDone, MdOutlineDoneAll } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ScheduleTable = ({ item, index, setSchedule, schedule }) => {
    const { title, date, day, time, _id } = item || {}
    // const isCompleted = false;
    // console.log(item);

    const handleCompleted = (id) => {
        console.log(id);
        fetch(`https://gym-server-liart.vercel.app/schedule/schedule${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(data => {
                console.log('completed data', data);
                console.log(item);
                if (data?.modifiedCount) {
                    Swal.fire('data updated')
                    const updated = schedule.map(item =>
                        item._id === id ? { ...item, isCompleted: true } : item
                    );
                    setSchedule(updated);
                }
            })
    }


    const handleDelete = (id) => {
        // console.log(id);

        // Delete functionality here
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://gym-server-liart.vercel.app/schedule/schedule${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingSchedule = schedule.filter(prev => prev._id !== id);
                            setSchedule(remainingSchedule)
                        }
                    })
            }
        });


    }
    return (
        <tr >
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{date}</td>
            <td>{day}</td>
            <td>{time}</td>
            <td className='flex gap-1 items-center'>
                <button onClick={() => handleDelete(_id)} className='btn btn-xs'>
                    <FaTrash size={15} />
                </button>
                <Link to={`/updated/${_id}`} className='btn btn-xs'>
                    <FaFile size={15} />
                </Link>
                <button onClick={() => handleCompleted(_id)} className='btn btn-xs'>
                    {item?.isCompleted ?
                        <MdOutlineDoneAll /> : <MdDone size={15} />
                    }
                </button>
            </td>
        </tr>
    );
};

export default ScheduleTable;