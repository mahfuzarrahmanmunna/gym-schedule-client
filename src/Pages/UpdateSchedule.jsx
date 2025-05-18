import React, { useState } from "react";
// import "react-clock/dist/Clock.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router";
import TimeFormate from "../libs/TimeFormate";
import Swal from "sweetalert2";

const UpdateSchedule = () => {
    const data = useLoaderData()

    const {
        date,
        day,
        time,
        title,
        _id
    } = data || {}
    const [titles, setTitles] = useState(title)
    const [dates, setDates] = useState(date)
    const [days, setDays] = useState(day)
    const [times, setTimes] = useState(time)
    const handleUpdateSchedule = (e) => {
        e.preventDefault()
        const updatedData = {
            date: dates,
            day: days,
            time: times,
            title: titles
        }

        // Updated data here
        fetch(`http://localhost:3000/schedule/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log('after updated data', data);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your data has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleUpdateSchedule} className='bg-base-200 py-12 lg:px-24 mt-8 rounded-2xl shadow '>
                <h1 className='text-center text-3xl font-bold '>Update Gym Schedule</h1>
                <p className='mb-8 text-center text-gray-600'>
                    Update a new schedule for your own
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* Title */}
                    <fieldset className="fieldset  w-full p-4">
                        <label className="label">Title</label>
                        <input
                            type="text"
                            name='title'
                            value={titles}
                            onChange={(e) => setTitles(e.target.value)}
                            className="input w-full"
                            placeholder="My awesome page"
                        />
                    </fieldset>
                    {/* date */}
                    <fieldset className="fieldset  w-full p-4">
                        {/* <label className="label">Date</label>
                                <input type="date" name='date' className="input w-full" placeholder="Date" /> */}
                        <label className="label font-bold">
                            <span className="label-text">Date</span>
                        </label>
                        <DatePicker
                            className="input input-bordered w-full"
                            value={dates}
                            onChange={(dates) => setDates(dates.toLocaleDateString('en-CA'))}
                        // selected={startDate}
                        // onChange={(date) => setStartDate(date)}
                        />
                    </fieldset>

                    {/* Day */}
                    <fieldset className="fieldset w-full p-4">
                        <label className="label">Day</label>
                        <select
                            value={days}
                            onChange={e => setDays(e.target.value)}
                            name="day" className="select w-full">
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
                            // selected={selectedTime}
                            // onChange={handleTimeChange}
                            value={times}
                            onChange={(times) => setTimes(TimeFormate(times))}
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

export default UpdateSchedule;