import React, {useState,useEffect} from 'react'

const CreateUserTable = () => {
  const [users,setUsers] = useState([]);
  const [formData,setFormData] =useState({
    name:"",
    lastName:"",
    position:"",
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    const handleRefresh = (event) => {
      if (event.persisted || event.type === "beforeunload") {
        localStorage.removeItem("users");
      }
    };

    window.addEventListener("beforeunload",handleRefresh);

    return () => {
      window.removeEventListener("beforeunload",handleRefresh)
    };
  }, []);

    const handleInputChange = (e) => {
      const {name,value} = e.target;
      setFormData((prevData) => ({...prevData, [name]:value}));
    };

    const handleAddUser = () => {
      const updatedUsers = [...users,formData];
      setUsers(updatedUsers);
      localStorage.setItem("users",JSON.stringify(updatedUsers));
      setFormData({name: "",lastName:"",position:""});
    };

    const handleDeleteUser = (index) => {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

  return (
    <div className='p-4 rounded-md ml-20 mr-20'>
      <h2 className='flex justify-between  text-xl font-bold mb-4  '>
      Create User Here
      </h2>

      <div className='flex justify-center items-center gap-4 mb-4'>
        <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder='Name'
        className='p-2 border border-black rounded-md w-full'
        />

        <input 
        type="text" 
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder='Last name'
        className='p-2 border border-black rounded-md w-full'
        />

        <input 
        type="text" 
        name="position"
        value={formData.position}
        onChange={handleInputChange}
        placeholder='position'
        className='p-2 border border-black rounded-md w-full'
        />

        <button 
        onClick={handleAddUser} 
        className='p-2 bg-blue-500 text-white rounded-md w-[500px]'
        >Save
        </button>
      </div>

      <div className='flex justify-center items-center'>
        <table className='w-[1000px] mt-20 mb-10 border border-black'>
          <thead className='bg-sky-200'>
            <tr>
              <th className='border border-black p-2'>Name</th>
              <th className='border border-black p-2'>Last Name</th>
              <th className='border border-black p-2'>Position</th>
              <th className='border border-black p-2'>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className='border border-black p-2 text-center'>{user.name}</td>
                <td className='border border-black p-2 text-center'>{user.lastName}</td>
                <td className='border border-black p-2 text-center'>{user.position}</td>
                <td className='border border-black p-2 text-center'>
                  <button onClick={() => handleDeleteUser(index)} className='text-red-500'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default CreateUserTable