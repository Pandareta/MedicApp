import React from 'react';
import styles from "./TopDoctors.module.css";
import TopDoctors from './TopDoctors';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTopDoctorsHome } from '../../../../Redux/actions/generalActionsDoctors';

const ListDoctors = () => {

  const { topDoctors } = useSelector((state) => state.generalDoctors);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTopDoctorsHome());
  },[]);

  return (
    <section className={styles.MainContainer}>
    <h2 className={styles.TitleCards}>Médicos <b>Top</b></h2>
    <section className={styles.ContainerCards}>
      {topDoctors && topDoctors?.map((doctor) => {
        const splitAddress = doctor.address.split(",");
        const doctorId = doctor._id || doctor.id; // Support both _id (real DB) and id (dummy)
        return(
          <TopDoctors
          key = {doctorId} 
          id = {doctorId}
          name = {doctor.name}
          specialities = {doctor.specialities}
          rating = {doctor.rating}
          schedule = {doctor.schedule.hour}
          address = {splitAddress.slice(0, splitAddress.length-2).join(",")}
          image = {doctor.image}
          />
        )
      })}
    </section>
    </section>
  )
}

export default ListDoctors;