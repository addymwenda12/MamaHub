/* eslint-disable react/prop-types */

const Main = ({children}) => {
  return (
    <section className='main' style={{minHeight:'100vh',flex:1,display:'flex',gap:'10px'}}>
      {children}
    </section>
  )
}

export default Main
