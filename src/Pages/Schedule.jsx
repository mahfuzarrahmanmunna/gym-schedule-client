import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ScheduleTable from './ScheduleTable';

const Schedule = () => {
    const initialSchedule = useLoaderData()
    const [schedule, setSchedule] = useState(initialSchedule)
    console.log(schedule);
    return (
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
    );
};

export default Schedule;