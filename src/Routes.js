import React from 'react'


//Batch1 Directory Component
const Home_batch_1 = React.lazy(() => import('../src/Component/batch-1/Chapterinner1'))
const Assessments = React.lazy(() => import('../src/Component/batch-1/Assessmentsbatch1'))
// const Home_batch_1 = React.lazy(() => import('../src/Component/batch-1/Externalchannels'))
// const student_addessment = React.lazy(() => import('../src/Component/batch-1/student_addessment'))
// const Chapterinner1 = React.lazy(() => import('../src/Component/batch-1/Chapterinner1'))

// Homebatch1
const routes = [
    { path: '/', exact: true, name: 'Home_batch_1', component: Home_batch_1},
    { path: '/assessments', name: 'Assessments', component: Assessments },
    // { path: '/externalchannels', name: 'Externalchannels', component: Externalchannels },
    // { path: '/student_assessment', name: 'Externalchannels', component: Student_assessment },
    // { path: '/student_assessment', name: 'Externalchannels', component: Chapterinner1 },
]

export default routes