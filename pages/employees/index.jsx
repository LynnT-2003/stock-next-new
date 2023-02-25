import Head from 'next/head'
import LInk from 'next/link'

export default function Home(props) {
    const {employees} = props;

    if (!employees) {return <div>Loading...</div>}

    const list = employees.map(employee => (
        <li key={employee.id}>
            <Link href={`/employees/${employee.id}`}>
                {employee.first_name} {employee.last_name}
            </Link>
        </li>
    ))

return (
  <>
    <Head>
      <title>Employees</title>
    </Head>
    <h1>Employees</h1>
    <div>
      <ul>
        {list}
      </ul>
    </div>
  </>
)
}

export async function getServerSideProps() {
  // employees.json is in /public
  console.debug(`Fetching ${process.env.APIURL}employees`)
  const ret = await fetch(`${process.env.APIURL}employees`)
  const employee = await ret.json()
  console.log({ employee })
  return {
    props: {
      employee
    }
  }
}
