import Layout from "@/components/Layout";
import { useState } from "react";


const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority:"2",
    timeToFinish:60
}

const ResourceCreate = () =>{

    const [form, setForm ] = useState(DEFAULT_DATA);

    const submitForm = () => {
       // alert(JSON.stringify(form));
       fetch("/api/resources",
       {
        headers: { "Content-type" : "application/json" } ,
        method: "POST",
        body: JSON.stringify(form)
       })
    }

    const resetForm = () => setForm(DEFAULT_DATA)

    const handleChange = (e) => {
       const {name, value} = e.target;
        console.log(name+" "+value);
       setForm({
         ...form,
         [name] : value
        });
    }

    return(
        <Layout>
          <div className="container">
            <div className="columns">
                <div className="column is-8 is-offset-2">
                    <div className="resource-form">
                        <h1 className="title">Add Resources</h1>
                        <form >
                            <div className="field">
                                <label className="label">Title</label>
                                <div className="control">
                                    <input className="input" type="text" onChange={handleChange} name="title" placeholder="Learn Next JS and Sanity IO..." required value={form.title}></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="It is a quick description" onChange={handleChange} name="description" required value={form.description}></textarea>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Link</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="http://www.link.com" onChange={handleChange} name="link" value={form.link}></input>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Priority</label>
                                <div className="control">
                                    <div className="select">
                                    <select  value={form.priority} onChange={handleChange} name="priority">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    </div>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Time to finish</label>
                                <div className="control">
                                    <input className="input" type="number" placeholder="Enter a number between 1 and 999" onChange={handleChange} name="timeToFinish" value={form.timeToFinish}></input>
                                </div>
                                <p class="help">Time in minutes</p>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" onClick={submitForm} type="button" >Submit</button>
                                </div>
                                <div class="control">
                                    <button className="button is-link is-light" onClick={resetForm}  type="button"  >Reset form</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
          </div>
        
        </Layout>
    )
}

export default ResourceCreate;