import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCities } from '../../features/firebaseFunction'
import db from '../../firebaseConfig'
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

function DisplayView() {

  return (
    <div>
     <div>DisplayView:</div>
    </div>
  )
}

export default DisplayView