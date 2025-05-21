
import { IUser } from "../../../../../interfaces"

interface Props {
    user: IUser
}

function YourInfo(user: Props) {
    const userData = user.user
    
    console.log(userData);

    return (
        <div className='flex flex-col items-center justify-center space-y-4 bg-white rounded-lg p-4 shadow-lg'>
        <div className="flex flex-col justify-center items-center border-b border-gray-300 py-2">
        <p className="font-bold">Email:</p>
        <p className="text-gray-600">{userData.email}</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b border-gray-300 py-2">
        <p className="font-bold">Address:</p>
        <p className="text-gray-600">{userData.address}</p>
        </div>
        <div className="flex flex-col justify-center items-center py-2">
        <p className="font-bold">Phone:</p>
        <p className="text-gray-600">{userData.phone}</p>
        </div>
        </div>
    )
}

export default YourInfo