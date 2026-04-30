import { useState } from 'react';
function App() {
  const [formData, setFormData] = useState({
    name: '', email: '', gender:'', country:''  });
    function handleChange(event) {
      const { name, value} = event.target;
      setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = (event) =>{
    event.preventDefault();
    alert("Submitted");
    console.log(formData);
}
return (
  <div>
    <h2> FORM</h2>
    <form onSubmit={handleSubmit}>
      <div> 
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}
        />
  </div>

  <div> 
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange}
        />
  </div>
  <div> 
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male"
        checked={formData.gender === "Male"} onChange={handleChange}
        />Male

        <input type="radio" name="gender" value="Female"
        checked={formData.gender === "Female"} onChange={handleChange}
        />Female
 </div>
  <div> 
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange} >
          <option value="India"> India</option>
          <option value="USA"> USA</option>
          <option value="UK"> UK</option>
          </select>
        </div>
        <button type="submit">SUBMIT</button>
</form>
</div>
);
}
export default App;