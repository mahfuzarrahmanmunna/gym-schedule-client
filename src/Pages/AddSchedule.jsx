import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import TimeFormate from '../libs/TimeFormate';

const AddSchedule = () => {
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleAddSchedule = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const formateHour = TimeFormate(selectedTime);
        const formateDate = startDate.toLocaleDateString('en-CA')
        const { title, day } = Object.fromEntries(formData.entries());
        const schedule = {
            title: title,
            day: day,
            time: formateHour,
            date: formateDate
        }
        console.log(schedule);

        // post here
        fetch('http://localhost:3000/schedule', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(schedule)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(`after added schedule `, data);
                    console.log(data.insertedId);
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleAddSchedule} className='bg-base-200 py-12 lg:px-24 mt-8 rounded-2xl shadow '>
                <h1 className='text-center text-3xl font-bold '>Added Gym Schedule</h1>
                <p className='mb-8 text-center text-gray-600'>
                    Added a new schedule for your own
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* Title */}
                    <fieldset className="fieldset  w-full p-4">
                        <label className="label">Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="My awesome page" />
                    </fieldset>
                    {/* date */}
                    <fieldset className="fieldset  w-full p-4">
                        {/* <label className="label">Date</label>
                        <input type="date" name='date' className="input w-full" placeholder="Date" /> */}
                        <label className="label font-bold">
                            <span className="label-text">Day</span>
                        </label>
                        <DatePicker
                            className="input input-bordered w-full"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                        />
                    </fieldset>

                    {/* Day */}
                    <fieldset className="fieldset w-full p-4">
                        <label className="label">Day</label>
                        <select name="day" className="select w-full">
                            <option value="">Select a day</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </fieldset>
                    {/* time */}
                    <fieldset className="fieldset  w-full p-4">
                        <label className="label font-bold">
                            <span className="label-text">Time</span>
                        </label>

                        <DatePicker
                            className="input input-bordered w-full"
                            selected={selectedTime}
                            onChange={handleTimeChange}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                        />
                    </fieldset>
                </div>
                <div className='px-4'>
                    <input type="submit" value="Add Schedule" className='w-full btn btn-info btn-outline' />
                </div>
            </form>
        </div>
    );
};

export default AddSchedule;