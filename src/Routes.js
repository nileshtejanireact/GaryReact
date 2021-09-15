import React from 'react'


//Batch1 Directory Component
const Home_batch_1 = React.lazy(() => import('../src/pages/batch-1/Homebatch1'))
const Assessments = React.lazy(() => import('../src/pages/batch-1/Assessmentsbatch1'))
const Externalchannels = React.lazy(() => import('../src/pages/batch-1/Externalchannels'))
const Student_addessment = React.lazy(() => import('../src/pages/batch-1/Student_assessment'))
const Chapterinner1 = React.lazy(() => import('../src/pages/batch-1/Chapterinner1'))
const Chapterinner2 = React.lazy(() => import('../src/pages/batch-1/Chapterinner2'))
const Chapterinner3 = React.lazy(() => import('../src/pages/batch-1/Chapterinner3'))

//Batch2 Directory Component
const Listview = React.lazy(() => import('../src/pages/batch-2/Listview'))
const Contentupload = React.lazy(() => import('../src/pages/batch-2/Contentupload'))
const Allocation = React.lazy(() => import('../src/pages/batch-2/Allocation'))

//Batch3 Directory Component
const Dashboardtrainee01 = React.lazy(() => import('../src/pages/batch-3/Dashboardtrainee01'))
const Dashboardtrainee02 = React.lazy(() => import('../src/pages/batch-3/Dashboardtrainee02'))
const Dashboardtrainee03 = React.lazy(() => import('../src/pages/batch-3/Dashboardtrainee03'))

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
    { path: '/listview', name: 'Listview', component: Listview },
    { path: '/contentupload', name: 'Contentupload', component: Contentupload },
    { path: '/allocation', name: 'Allocation', component: Allocation },

    //Batch3 parth
    { path: '/dashboardtrainee01', name: 'Dashboardtrainee01', component: Dashboardtrainee01 },
    { path: '/dashboardtrainee02', name: 'Dashboardtrainee02', component: Dashboardtrainee02 },
    { path: '/dashboardtrainee03', name: 'Dashboardtrainee03', component: Dashboardtrainee03 },
    
]

export default routes