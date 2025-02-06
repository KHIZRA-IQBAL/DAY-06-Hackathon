// src\app\shoppingbasket\page.tsx
import Shoppingbasket from '@/components/shoppingbasket/shoppingbasket'
import React from 'react'
import { Suspense } from 'react';

const Shooping = () => {
  return (
    <>
    <Suspense>
    <Shoppingbasket/>
    </Suspense>
    </>
  )
}

export default Shooping
