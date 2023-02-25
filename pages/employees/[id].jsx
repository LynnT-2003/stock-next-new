import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function employeePage(props) {
  const { employee } = props;

  if (!employee) return (<div>Loading...</div>)
  return (
    <>
      <Head>
        <title>employees</title>
      </Head>
      <h1>{employee.first_name} {employee.last_name}</h1>
      <div>
        <p>Gender: {employee.gender}</p>
        <p>Email: {employee.email}</p>
        <p>Phone Number: {employee.phone}</p>
        <p>Age: {employee.age}</p>
        <p>Job: {employee.job_title}</p>
        <p>Department: {employee.department}</p>
        <p>Salary: {employee.salary}</p>
        <p>Year Of Experience: {employee.years_of_experience}</p>
        <br />
      </div>
      <Link href="/employee">Back to employee List</Link>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(`Fetching employee ID: ${context.params['id']}`)
  console.debug(`Fetching ${process.env.APIURL}employee/${context.params['id']}`)
  const ret = await fetch(`${process.env.APIURL}employee/${context.params['id']}`)
  const employee = await ret.json()
  console.log(employee)
  return {
    props: {
      employee
    }
  }

}