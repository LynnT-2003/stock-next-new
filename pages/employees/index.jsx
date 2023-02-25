import Head from 'next/head'
import Link from 'next/link'

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
      <title>employee</title>
    </Head>
    <h1>employee</h1>
    <div>
      <ul>
        {list}
      </ul>
    </div>
  </>
)
}

export async function getServerSideProps() {
  // employee.json is in /public
  console.debug(`Fetching ${process.env.APIURL}employees`)
  const ret = await fetch(`${process.env.APIURL}employees`)
  console.log(ret)
  const employee = await ret.json()
  console.log({ employee })
  return {
    props: {
      employee
    }
  }
}
