import React from 'react'


//Batch1 Directory Component
const Home_batch_1 = React.lazy(() => import('../src/Component/batch-1/Externalchannels'))
const Assessments = React.lazy(() => import('../src/Component/batch-1/Assessmentsbatch1'))

// Homebatch1
const routes = [
    { path: '/', exact: true, name: 'Home_batch_1', component: Home_batch_1},
    { path: '/assessments', name: 'Assessments', component: Assessments },
]

export default routes