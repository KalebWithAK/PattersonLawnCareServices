import { useState } from 'react'
import Layout from '../components/layout'
import '../styles/contact.css'

export default function Contact() {
  /*const states = [
    'AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 
    'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 
    'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 
    'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 
    'VT', 'WA', 'WI', 'WV', 'WY', 
    'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 
    'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 
    'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
    'Minnesota', 'Minor Outlying Islands', 'Mississippi', 'Missouri', 'Montana', 
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 
    'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 
    'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 
    'South Dakota', 'Tennessee', 'Texas', 'U.S. Virgin Islands', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]*/

  const [name, setName]: [any, any] = useState<string>('')
  const [email, setEmail]: [any, any] = useState<string>('')
  const [phone, setPhone]: [any, any] = useState<string>('')
  const [street, setStreet]: [any, any] = useState<string>('')
  const [city, setCity]: [any, any] = useState<string>('')
  const [state, setState]: [any, any] = useState<string>('')
  const [zip, setZip]: [any, any] = useState<string>('')
  //const [services, setServices]: [any, any] = useState<string[]>([])

  console.log(name, email, phone, street, city, state, zip)
  return (
    <Layout>
      <main className='contact'>
        <button style={{ width: 'fit-content' }}><a href='sms:+17044936965'>Connect via Text</a></button>

        <form>
          <h3>Service Request Form</h3>

          <label htmlFor='name'>Name</label>
          <input type='text' id='name' onChange={setName} />
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' onChange={setEmail} />
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' id='phone' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' onChange={setPhone} />

          <label htmlFor='street'>Street</label>
          <input type='text' id='street' onChange={setStreet} />
          <label htmlFor='city'>City</label>
          <input type='text' id='city' onChange={setCity} />
          <label htmlFor='state'>State</label>
          <input type='text' id='state' onChange={setState} />
          <label htmlFor='zip' >Zip Code</label>
          <input type='text' id='zip' onChange={setZip} />

          {/*<label for='services'>Services</label>*/}

          <input className='button' style={{ width: '100%' }} type='submit' value='Submit' />
        </form>
      </main>
    </Layout>
  )
}