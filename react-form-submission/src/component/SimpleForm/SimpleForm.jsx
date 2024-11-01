import './SimpleForm.css'
export default function SimpleForm() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('from submitted')
  }
  return (
    <div >
      <form className='flex flex-col mx-auto max-w-xl p-20'  onSubmit={handleSubmit}>
        <input type="text"   className="border"/>
        <br />
        <input type="email" className="border"/>
        <br />
        <input type="password"  className="border"/>
        <br />
        <input type="submit" value="submit" className='btn btn-outline w-24 mx-auto'/>
      </form>
    </div>
  ) 
}
