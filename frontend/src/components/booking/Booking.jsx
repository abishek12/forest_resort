import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CiClock1,
  CiMail,
  CiPhone,
  CiCreditCard1,
  CiWallet,
  CiCalendar,
} from 'react-icons/ci'
import { MdSports } from 'react-icons/md'
import { FaPersonSwimming } from 'react-icons/fa6'
import { TbPlayFootball } from 'react-icons/tb'
import { Button } from 'react-bootstrap'
import { FaRegUser } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import '../../assets/css/booking.css'
import BookingRating from './BookingRating'
import ReviewForm from './ReviewForm'
import BookingDetails from './BookingDetails'
import { convertDateTimeSlot } from '../../utils/date-time'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import QrCode from "../../assets/ForestQrCode.jpg"

const Booking = () => {
  const navigate = useNavigate()
  // fetcsh user data from redux store
  const [userInfo, setUserInfo] = useState(null)

  const [dates, setDates] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [bookingDate, setBookingDate] = useState(null)
  const [activeStep, setActiveStep] = useState(0)

  const [selectedTime, setSelectedTime] = useState(null)
  const [selectedPeriod, setSelectedPeriod] = useState('AM')
  const [selectedService, setSelectedService] = useState('futsal')
  const [selectedServiceId, setSelectedServiceId] = useState(null)

  const [isTimeSelected, setIsTimeSelected] = useState(false)
  const [isServiceSelected, setIsServiceSelected] = useState(false)
  const [isTimeSlotSelected, setIsTimeSlotSelected] = useState(false)

  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const [unavailableSlots, setUnavailableSlots] = useState([])
  const [servicesData, setServicesData] = useState([])

  const [showButton, setShowButton] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
    const getDates = () => {
      let today = new Date()
      let datesArray = []
      for (let i = 0; i < 7; i++) {
        let date = new Date(today)
        date.setDate(today.getDate() + i)
        const formattedDate = convertDateTimeSlot(date)
        datesArray.push(formattedDate) // Store the formatted date string
      }
      setDates(datesArray)
    }

    const getUserData = () => {
      const storedUser = localStorage.getItem('userInfo')
      if (storedUser) {
        setUserInfo(JSON.parse(storedUser))
      }
    }

    getUserData()
    getDates()
  }, [])

  // Adult and children selects
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const increaseGuests = type => {
    if (type === 'adults') {
      setAdults(adults + 1)
    } else if (type === 'children') {
      setChildren(children + 1)
    }
  }

  const decreaseGuests = type => {
    if (type === 'adults' && adults > 0) {
      setAdults(adults - 1)
    } else if (type === 'children' && children > 0) {
      setChildren(children - 1)
    }
  }

  const closeDropdown = () => {
    setIsOpen(false)
  }

  const handleDateClick = date => {
    const formattedDate = convertDateTimeSlot(date)
    setSelectedDate(date)
    setBookingDate(formattedDate)
    fetchUnavailableSlots(formattedDate)
    if (date) {
      setIsTimeSlotSelected(true)
    } else {
      setIsTimeSlotSelected(false)
    }
  }

  const handleTimeClick = time => {
    setSelectedTime(time)
    if (time) {
      setIsTimeSelected(true)
    } else {
      setIsTimeSelected(false)
    }
  }

  const formatDate = date => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const day = days[date.getDay()]
    const dateNumber = String(date.getDate()).padStart(2, '0')
    return { day, dateNumber }
  }

  const handleNext = () => {
    if (activeStep === 1) {
      if (!isServiceSelected) {
        return
      }
    }
    if (activeStep === 2) {
      if (!isTimeSlotSelected && !isTimeSelected) {
        return
      }
    }
    if (activeStep === 2) {
      if (!isTimeSelected) {
        return
      }
    }
    setActiveStep(prevStep => prevStep + 1)
  }

  const isNextDisabled =
    (activeStep === 1 && !isServiceSelected) ||
    (activeStep === 2 && (!isTimeSlotSelected || !isTimeSelected))

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1)
  }

  const timeSlots = {
    AM: [
      '06:00-07:00',
      '07:00-08:00',
      '08:00-09:00',
      '09:00-10:00',
      '10:00-11:00',
      '11:00-12:00',
    ],
    PM: [
      '12:00-01:00',
      '01:00-02:00',
      '02:00-03:00',
      '03:00-04:00',
      '04:00-05:00',
      '05:00-06:00',
      '06:00-07:00',
      '07:00-08:00',
      '08:00-09:00',
      '09:00-10:00',
    ],
  }

  const swimmingSlots = {
    AM: ['00:00'],
    PM: ['00:00'],
  }

  const handleLoginRedirect = () => {
    navigate('/login')
  }

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const servicesResponse = await axios.get('/services')
        if (servicesResponse.data.message === 'success') {
          setServicesData(servicesResponse.data.items)
        }
      } catch (error) {
        console.error('Error fetching services data:', error)
      }
    }
    fetchServicesData()
  }, [])

  // Fetch unavailable time slots

  const fetchUnavailableSlots = async bookingDate => {
    try {
      console.log('API IS CALLING')
      const response = await axios.get(
        `/booking/unavailable-times?date=${bookingDate}&service=${selectedServiceId}`
      )
      if (response.data.message === 'success') {
        const data = response.data.unavailableSlots
        setUnavailableSlots(data)
      } else {
        console.error('Unable to fetch slots!')
      }
    } catch (error) {
      console.error('Unable to fetch unavailable slots: ', error)
    }
  }

  /* Filters the slots from the api and remaining */
  function findMatchingRecords(unavailableSlots, timeSlots) {
    return unavailableSlots.filter(item => {
      // Check if the slot exists in the corresponding period array
      return timeSlots[item.period].includes(item.slot)
    })
  }

  const handleTransactionDetail = () => {
    if (selectedService === 'futsal' && selectedService !== 'pool') {
      if (!selectedDate || !selectedTime || !selectedPeriod) {
        toast('Please select a date, time, and period (AM/PM)!')
        return
      }
    }
    if (selectedService !== 'futsal' && selectedService === 'pool') {
      if (!selectedDate) {
        alert('Please select a date for swimming!')
        return
      }
    }
    setTimeout(() => {
      setShowButton(true)
    }, 1000)
  }

  const handleTransactionIdBtn = () => {
    if (!transactionId) {
      toast('Please, enter a Transaction ID!')
    }
  }

  const handleBookingSubmit = async () => {
    const bookingData = {
      service: selectedServiceId,
      user: userInfo.userId,
      date: bookingDate,
      timeSlot: {
        slot: selectedTime,
        period: selectedPeriod,
      },
      payment: {
        reference: transactionId,
        amount: 500,
        status: 'pending',
      },
      persons: {
        children: children,
        adult: adults,
      },
    }
    console.log(bookingData)

    try {
      const response = await axios.post('/booking', bookingData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.data.message) {
        toast('Booking successful!')
      }
    } catch (error) {
      console.error('Error creating booking:', error)
      toast('Something went wrong, please try again.')
    }
  }

  const handlePeriodToggle = period => {
    setSelectedPeriod(period)
    //resets the seleceted times when the perios changes
    setSelectedTime(null)
  }

  const handleServiceClick = service => {
    setSelectedService(service)
    setSelectedTime(null)
    const selectedServiceId = servicesData
      .filter(items =>
        service ? items.type === service : items.type === 'futsal'
      )
      .find(items => items._id)

    // console.log(selectedServiceId);

    if (selectedServiceId) {
      setSelectedServiceId(selectedServiceId._id)
      console.log('selected Service ID:', selectedServiceId._id)
      setIsServiceSelected(true)
    } else {
      console.log('no matching service found')
      setIsServiceSelected(false)
      setSelectedServiceId(null)
    }
  }

  // Animation variants for date cards
  const dateCardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    selected: { scale: 1.1, backgroundColor: '#6c757d', color: '#fff' },
  }

  const steps = ['Basic Details', 'Services', 'Time Slots', 'Confirmation']

  const getStepContent = step => {
    switch (step) {
      case 0:
        return (
          <div className='card p-4 mt-4'>
            <h4>Personal Details</h4>
            <hr className='border border-secondary border-1 opacity-10 mb-4' />
            <div className='row mb-4'>
              <div className='col-lg-4 col-md-12 col-sm-12'>
                <div className='input-group'>
                  <span className='input-group-text'>
                    <FaRegUser />
                  </span>
                  <input
                    type='text'
                    className='form-control'
                    value={userInfo.fullname}
                    readOnly
                  />
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='input-group'>
                  <span className='input-group-text'>
                    <CiMail />
                  </span>
                  <input
                    type='text'
                    className='form-control'
                    value={userInfo.email}
                    readOnly
                  />
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-12'>
                <div className='input-group'>
                  <span className='input-group-text'>
                    <CiPhone />
                  </span>
                  <input
                    type='text'
                    className='form-control'
                    value={userInfo.phone_no}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 1:
        return (
          <>
            <div className='p-4'>
              <p className='h4 text-black pb-4 tw-font-sans tw-font-bold'>
                Please, choose the service you want!
              </p>
              <motion.div className='tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4'>
                {/* SWIMMING Card */}
                <motion.div
                  className={`px-2 cursor-pointer tw-text-2xl border-2 rounded-lg relative overflow-hidden ${
                    selectedService === 'pool'
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                  onClick={() => handleServiceClick('pool')}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                    rotate: selectedService === 'pool' ? 0 : 1, // Slight tilt on hover
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {selectedService === 'pool' && (
                    <motion.div
                      className='tw-absolute tw-top-2 tw-right-2 tw-bg-blue-500 tw-text-white tw-p-2 tw-rounded-full'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      ✓
                    </motion.div>
                  )}
                  <FaPersonSwimming className='tw-text-4xl tw-mb-2 tw-text-blue-500' />
                  <p className='tw-font-bold tw-text-3xl tw-text-gray-800'>
                    SWIMMING
                  </p>
                  <p className='tw-text-sm tw-text-gray-600 tw-mb-4'>
                    Relax and enjoy our state-of-the-art swimming pool.
                  </p>
                  <div className='tw-relative tw-h-[250px] tw-w-full tw-rounded-lg tw-overflow-hidden'>
                    <img
                      src='/img/shape/swimm.jpg'
                      className='tw-h-full tw-w-full tw-object-cover'
                      alt='Swimming Pool'
                    />
                    {selectedService === 'pool' && (
                      <motion.div
                        className='tw-absolute tw-inset-0 tw-bg-black/10 tw-rounded-lg'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>

                {/* FUTSAL Card */}
                <motion.div
                  className={`px-2 cursor-pointer tw-text-2xl border-2 rounded-lg relative overflow-hidden ${
                    selectedService === 'futsal'
                      ? 'border-green-500 bg-gradient-to-br from-green-50 to-green-100'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                  onClick={() => handleServiceClick('futsal')}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                    rotate: selectedService === 'futsal' ? 0 : -1, // Slight tilt on hover
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {selectedService === 'futsal' && (
                    <motion.div
                      className='tw-absolute tw-top-2 tw-right-2 tw-bg-green-500 tw-text-white tw-p-2 tw-rounded-full'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      ✓
                    </motion.div>
                  )}
                  <TbPlayFootball className='tw-text-4xl tw-mb-2 tw-text-green-500' />
                  <p className='tw-font-bold tw-text-3xl tw-text-gray-800'>
                    FUTSAL
                  </p>
                  <p className='tw-text-sm tw-text-gray-600 tw-mb-4'>
                    Enjoy a thrilling game of futsal with friends.
                  </p>
                  <div className='tw-relative tw-h-[250px] tw-w-full tw-rounded-lg tw-overflow-hidden'>
                    <img
                      src='/img/shape/footsaal.jpg'
                      className='tw-h-full tw-w-full tw-object-cover'
                      alt='Futsal Court'
                    />
                    {selectedService === 'futsal' && (
                      <motion.div
                        className='tw-absolute tw-inset-0 tw-bg-black/10 tw-rounded-lg'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )

      case 2:
        return (
          <div className='card p-4'>
            <h3 className=' mb-4 fw-bold'>Select Slot</h3>
            <div className='row mb-4'>
              {dates.map((dateString, index) => {
                const date = new Date(dateString)
                const { day, dateNumber } = formatDate(date)
                const isSelected =
                  selectedDate &&
                  date.toDateString() === selectedDate.toDateString()

                return (
                  <div
                    className='col-3 col-lg-2 col-md-2 col-sm-3 mb-3'
                    key={index}
                  >
                    <motion.div
                      className={`card p-2 text-center ${
                        isSelected ? 'bg-secondary text-light ' : ''
                      }`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleDateClick(date)}
                      variants={dateCardVariants}
                      initial='initial'
                      animate='animate'
                      whileHover='hover'
                      whileTap='selected'
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                    >
                      <p className='mb-1'>{day}</p>
                      <p>{dateNumber}</p>
                    </motion.div>
                  </div>
                )
              })}
            </div>

            {selectedService === 'futsal' && selectedService !== 'pool' && (
              <div
                className=' card time-slot px-4 py-2'
                style={{
                  fontFamily: 'Poppins',
                }}
              >
                <h3 className='fw-bold'>Select Time</h3>
                <div className='mb-4 tw-space-x-2 lg:tw-space-x-2 md:tw-space-x-2 sm:tw-space-x-2 sm:tw-space-y-2 lg:tw-space-y-0 md:tw-space-y-0 tw-col-auto row-lg-1 row-md-1 col-sm-1 lg:tw-w-[2560px] md:tw-w-[768px] max-sm:tw-w-[425px] max-sm:tw-ml-[-15px]'>
                  <motion.button
                    className={`btn hover:tw-scale-105 active:tw-scale-110`}
                    onClick={() => handlePeriodToggle('AM')}
                    style={{
                      cursor: 'pointer',
                      background: selectedPeriod === 'AM' ? 'green' : 'red',
                    }}
                    initial='initial'
                    animate='animate'
                    whileHover='hover'
                    whileTap='selected'
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  >
                    AM
                  </motion.button>
                  <motion.button
                    className={`btn ${
                      selectedPeriod === 'PM' ? 'btn-primary' : 'btn-secondary'
                    } hover:tw-scale-105 active:tw-scale-110`}
                    onClick={() => handlePeriodToggle('PM')}
                    style={{
                      cursor: 'pointer',
                      background: selectedPeriod === 'PM' ? 'green' : 'red',
                    }}
                    initial='initial'
                    animate='animate'
                    whileHover='hover'
                    whileTap='selected'
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  >
                    PM
                  </motion.button>
                </div>
                <div className='row mb-2'>
                  {timeSlots[selectedPeriod].map((time, index) => {
                    // const isUnavailable = isTimeUnavailable(time);
                    const isSelected = selectedTime === time
                    const isUnavailable = findMatchingRecords(
                      unavailableSlots,
                      timeSlots
                    ).some(
                      record =>
                        record.slot === time && record.period === selectedPeriod
                    )
                    return (
                      <div
                        className='col-3 col-lg-2 col-md-2 col-sm-3 m-2 mb-0 mx-3 border border-2 tw-w-40 tw-rounded-lg'
                        key={index}
                      >
                        <motion.div
                          className={`time-slot-card pt-2 d-flex justify-content-center align-items-center tw-ml-[-15px] rounded-3 tw-mr-[-15px] ${
                            isSelected ? 'bg-success text-light' : ''
                          } ${
                            isUnavailable
                              ? 'tw-bg-red-500 text-light cursor-not-allowed'
                              : ''
                          }`}
                          onClick={
                            !isUnavailable
                              ? () => handleTimeClick(time)
                              : undefined
                          }
                          style={{
                            cursor: isUnavailable ? 'not-allowed' : 'pointer',
                          }}
                          variants={dateCardVariants}
                          initial='initial'
                          animate='animate'
                          whileHover='hover'
                          whileTap='selected'
                          transition={{ duration: 1.2, ease: 'easeInOut' }}
                        >
                          <p>{time}</p>
                        </motion.div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {selectedService === 'pool' && (
              <div className='row mb-2'>
                {swimmingSlots[selectedPeriod].map((time, index) => {
                  const isSelected = selectedTime === time
                  return (
                    <div
                      className='col-lg-2 col-md-3 col-sm-4 m-2 mb-4 mx-3 border tw-rounded-lg tw-w-fit'
                      key={index}
                    >
                      <h3>Pick the time</h3>
                      <div
                        className={`tw-m-5 ${
                          isSelected ? 'bg-secondary text-light' : ''
                        }`}
                        onClick={
                          !isSelected ? () => handleTimeClick(time) : undefined
                        }
                      >
                        <p className='border tw-flex tw-justify-center'>
                          {time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {selectedService === 'pool' && selectedDate && (
              <div className='card p-4'>
                <p className='h4 mb-4'>Selected Date</p>
                <p>{selectedDate.toLocaleDateString()}</p>
              </div>
            )}
            <div className='tw-relative'>
              <div
                className='tw-font-bold border mt-4 tw-rounded-md px-2 py-2'
                onClick={toggleDropdown}
              >
                <h3 className='fw-bold'>
                  Please, select the numbers of Adults and Children!
                </h3>
                <div className='border tw-bg-green-200 tw-w-fit px-2'>
                  <IoMdArrowDropdown className='tw-inline-block' size={20} />
                  {adults} adults, {children} children
                </div>
              </div>
              {isOpen && (
                <div className='tw-absolute tw-bg-gray-100 tw-rounded-md tw-border tw-border-black tw-p-4 tw-w-[210px] tw-z-50'>
                  <div className='tw-flex tw-items-center tw-justify-between tw-py-2'>
                    <label htmlFor='Adults'>Adults</label>
                    <div className='tw-flex tw-pb-1'>
                      <button
                        className='reserveBtns'
                        onClick={() => decreaseGuests('adults')}
                      >
                        -
                      </button>
                      <span className='tw-px-4 tw-flex tw-place-items-center'>
                        {adults}
                      </span>
                      <button
                        className='reserveBtns'
                        onClick={() => increaseGuests('adults')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='tw-flex tw-place-items-center tw-justify-between tw-py-2'>
                    <label htmlFor='Children'>Children</label>
                    <div className='tw-flex tw-pb-1'>
                      <button
                        className='reserveBtns'
                        onClick={() => decreaseGuests('children')}
                      >
                        -
                      </button>
                      <span className='tw-px-4 tw-flex tw-place-items-center tw-text-center'>
                        {children}
                      </span>
                      <button
                        className='reserveBtns'
                        onClick={() => increaseGuests('children')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={closeDropdown}
                    className='reserveBtns tw-pt-2 tw-w-full'
                  >
                    Done
                  </button>
                </div>
              )}
              <span className='alert-error'></span>
            </div>
          </div>
        )

      case 3:
        return (
          <div className='card p-4 mt-4 tw-bg-white tw-rounded-lg tw-shadow-md'>
            <h4 className='tw-text-2xl tw-font-bold tw-text-gray-800 tw-mb-4'>
              Confirmation
            </h4>
            <hr className='tw-border tw-border-gray-200 tw-mb-4' />
            <p className='tw-text-gray-600 tw-mb-6'>
              Please confirm your booking details.
            </p>

            {/* Booking Details */}
            <div className='tw-space-y-6 tw-mb-6'>
              <div className='tw-flex tw-justify-between tw-items-center'>
                <div className='tw-flex tw-items-center tw-gap-2'>
                  <MdSports className='tw-text-xl tw-text-gray-600 mb-3' />
                  <p className='tw-text-gray-700'>
                    {selectedService === 'pool' ? 'Swimming' : 'Futsal'}
                  </p>
                </div>
                <p className='tw-text-gray-800 tw-font-semibold'>
                  {selectedService === 'pool'
                    ? 'N/A'
                    : selectedDate && selectedDate.getDay() === 6
                    ? 'Rs. 1500'
                    : 'Rs. 1200'}
                </p>
              </div>
              <hr className='tw-border tw-border-gray-700 ' />
              <div className='tw-flex tw-justify-between tw-items-center my-3'>
                <div className='tw-flex tw-items-center tw-gap-2'>
                  <CiCreditCard1 className='tw-text-xl tw-text-gray-600 mb-3' />
                  <p className='tw-text-gray-700'>Advance Amount</p>
                </div>
                <p className='tw-text-green-600 tw-font-semibold'>
                  {selectedService === 'pool' ? 'N/A' : 'Rs. 300'}
                </p>
              </div>
              <hr className='tw-border tw-border-gray-700 ' />
              <div className='tw-flex tw-justify-between tw-items-center'>
                <div className='tw-flex tw-items-center tw-gap-2'>
                  <CiWallet className='tw-text-xl tw-text-gray-600 mb-3' />
                  <p className='tw-text-gray-700'>Remaining Amount</p>
                </div>
                <p className='tw-text-red-600 tw-font-semibold'>
                  {selectedService === 'pool'
                    ? 'N/A'
                    : selectedDate && selectedDate.getDay() === 6
                    ? 'Rs. 1200'
                    : 'Rs. 900'}
                </p>
              </div>
              <hr className='tw-border tw-border-gray-700 ' />
            </div>

            {/* Date and Time */}
            <div className='tw-mb-6'>
              <div className='tw-flex tw-items-center tw-gap-2 tw-mb-2'>
                <CiCalendar className='tw-text-xl tw-text-gray-600 mb-3' />
                <p className='tw-text-gray-700'>
                  {selectedDate
                    ? selectedDate.toLocaleDateString('en-CA', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                      })
                    : 'Select a date'}
                </p>
              </div>
              <hr className='tw-border tw-border-gray-700 ' />
              <div className='tw-flex tw-items-center tw-gap-2 my-3'>
                <CiClock1 className='tw-text-xl tw-text-gray-600 mb-3' />
                <p className='tw-text-gray-700'>
                  {selectedTime
                    ? selectedTime.toLocaleString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      })
                    : 'Select a time'}
                </p>
              </div>
              <hr className='tw-border tw-border-gray-700 ' />
            </div>

            {/* QR Code Section */}
            <motion.div
              className='tw-bg-[#F7F7F7] tw-rounded-lg tw-p-4 tw-shadow-sm'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className='tw-flex tw-flex-col tw-items-center tw-gap-2'>
                <h3 className='tw-text-xl tw-font-bold tw-text-gray-800'>
                  Make Your Payment
                </h3>
                <p className='tw-text-gray-600 tw-text-center'>
                  Hello! Please scan the QR code below to complete your payment.
                </p>
                                {/* pricing notes */}
                <div className='text-center mt-0 p-3 border rounded-2 tw-shadow-sm' style={{background:"white"}}>
                  <h5 className='mb-2  tw-text-red-600' style={{ fontWeight: 600,  }}>
                    *NOTE*
                  </h5>
                  <p className='mb-0 tw-text-red-600 tw-font-bold' style={{ fontSize: '14px', fontFamily:"Poppins" }}>
                    "Saturday extra charges Rs. 300 will be added"
                  </p>
                </div>
                <div className='tw-mt-4 tw-p-4 tw-bg-white tw-rounded-lg tw-shadow-inner'>
                  <img
                    src={QrCode}
                    alt='QR Code'
                    className='tw-w-48 tw-h-48 tw-object-contain'
                  />
                </div>

              </div>
            </motion.div>

            {/* Confirmation Button */}
            <motion.div
              className='tw-mt-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {showButton ? (
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='form-group'>
                      <input
                        className='form-control no-arrows'
                        id='transaction_id'
                        name='transaction_id'
                        placeholder='Transaction No.*'
                        type='text'
                        autoComplete='off'
                        required
                        onChange={e => setTransactionId(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}

              <div className='row'>
                <div className='col-lg-12 tw-py-3'>
                  {!showButton ? (
                    <Button
                      type='button'
                      onClick={handleTransactionDetail}
                      className='tw-bg-green-600 tw-w-full'
                    >
                      Confirm Booking
                    </Button>
                  ) : (
                    <Button
                      type='submit'
                      name='transactionId'
                      onClick={handleTransactionIdBtn}
                      className='tw-w-[340px]'
                    >
                      Done
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )
      default:
        return 'Completed.'
    }
  }

  if (!userInfo) {
    return (
      <div className='tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-bg-gray-50'>
        <div className='tw-bg-white tw-shadow-lg tw-rounded-xl tw-p-8 tw-max-w-md tw-text-center tw-transition-all tw-hover:shadow-xl'>
          {/* Illustration */}
          <img
            src='/img/booking/reserve.svg'
            alt='Booking Illustration'
            className='tw-w-72 tw-h-64 tw-mx-auto tw-mb-6'
          />

          {/* Message */}
          <h2 className='tw-text-2xl tw-font-bold tw-text-gray-800 tw-mb-3'>
            To Book, Please Login
          </h2>
          <p className='tw-text-gray-600 tw-mb-6'>
            You need to log in to book a time slot. Don't have an account? Sign
            up now!
          </p>

          {/* Login Button */}
          <button
            className='tw-bg-blue-500 tw-text-white tw-py-2 tw-px-6 tw-rounded-lg tw-font-semibold tw-transition-all tw-hover:bg-blue-600 tw-hover:shadow-md tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500 tw-focus:ring-offset-2'
            onClick={handleLoginRedirect}
          >
            Go to Login
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className=' m-5'>
        {/* Custom Stepper */}
        <div className='stepper'>
          {steps.map((label, index) => (
            <motion.div
              className={`step ${index === activeStep ? 'active' : ''}`}
              key={label}
              initial={{ scale: 1 }}
              animate={{ scale: index === activeStep ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className='step-circle'>{index + 1}</div>
              <div className='step-label'>{label}</div>
            </motion.div>
          ))}
        </div>

        <div className='d-flex justify-content-center mt-4 container'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {getStepContent(activeStep)}
              </motion.div>
            </AnimatePresence>
            <div className='mt-4 d-flex gap-3'>
              <button
                className='btn btn-secondary '
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className='btn btn-primary'
                onClick={
                  activeStep === steps.length - 1
                    ? handleBookingSubmit
                    : handleNext
                }
                style={{ marginLeft: '10px' }}
                disabled={isNextDisabled}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-5 col-sm-12">
            <BookingDetails />
          </div> */}
        </div>

        {/* Rating and Feedback Section */}
        <div className='row mt-4'>
          <BookingRating />
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <ReviewForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking
