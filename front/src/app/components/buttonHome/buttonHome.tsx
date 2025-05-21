"use client"

function ButtonHome () {
    const handleButton = () => {
        window.location.href = '/'
    }
    
    return (
       <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition" onClick={handleButton}>
          Shop Now
        </button>
    )
}

export default ButtonHome