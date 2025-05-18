import React, { useEffect, useState } from 'react';
import ScheduleTable from './ScheduleTable';

const Schedule = () => {
    const [schedule, setSchedule] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`http://localhost:3000/schedule?searchParams=${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSchedule(data)
            })
    }, [search])


    // console.log(schedule);
    console.log(search);
    return (
        <>
            <div className="w-[400px] mx-auto mb-4 mt-12">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="search"
                    className="input input-bordered w-full"
                    required
                />
            </div>

            <div className="overflow-x-auto my-12 rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr >
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Day</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedule.map((item, index) => (
                            <ScheduleTable
                                item={item}
                                key={index}
                                index={index}
                                setSchedule={setSchedule}
                                schedule={schedule}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Schedule;