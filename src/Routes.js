import React from 'react'


//Batch1 Directory Component
const Home_batch_1 = React.lazy(() => import('../src/Component/batch-1/Homebatch1'))
const Assessments = React.lazy(() => import('../src/Component/batch-1/Assessmentsbatch1'))
const Externalchannels = React.lazy(() => import('../src/Component/batch-1/Externalchannels'))
const Student_addessment = React.lazy(() => import('../src/Component/batch-1/Student_assessment'))
const Chapterinner1 = React.lazy(() => import('../src/Component/batch-1/Chapterinner1'))
const Chapterinner2 = React.lazy(() => import('../src/Component/batch-1/Chapterinner2'))
const Chapterinner3 = React.lazy(() => import('../src/Component/batch-1/Chapterinner3'))

//Batch2 Directory Component
const Listview = React.lazy(() => import('../src/Component/batch-2/Listview'))
const Contentupload = React.lazy(() => import('../src/Component/batch-2/Contentupload'))
const Allocation = React.lazy(() => import('../src/Component/batch-2/Allocation'))

// parth
const routes = [
    //Batch1 parth
    { path: '/', exact: true, name: 'Home_batch_1', component: Home_batch_1},
    { path: '/assessments', name: 'Assessments', component: Assessments },
    { path: '/externalchannels', name: 'Externalchannels', component: Externalchannels },
    { path: '/student_assessment', name: 'Externalchannels', component: Student_addessment },
    { path: '/chapterinner1', name: 'Chapterinner1', component: Chapterinner1 },
    { path: '/chapterinner2', name: 'Chapterinner2', component: Chapterinner2 },
    { path: '/chapterinner3', name: 'Chapterinner3', component: Chapterinner3 },

    //Batch2 parth
    { path: '/listview', name: 'Chapterinner3', component: Listview },
    { path: '/contentupload', name: 'Chapterinner3', component: Contentupload },
    { path: '/allocation', name: 'Chapterinner3', component: Allocation },
    
]

export default routes