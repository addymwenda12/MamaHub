/* eslint-disable react/prop-types */

const Main = ({children}) => {
  return (
    <section className='main' style={{minHeight:'100vh',marginLeft:'210px', padding:'0 20px'}}>
      {children}
    </section>
  )
}

export default Main
