import {h} from "preact";
import useStoreon from 'storeon/preact'
import {useState} from 'preact/hooks';

export default () => {
    const {dispatch, projects} = useStoreon("projects")
    const [name, setName] = useState("")
    const addProject = e => dispatch("projects/add", name)

    return (
        <div>
            <h1 className="hello">Projects</h1>
            <pre>
            {JSON.stringify(projects)}
           </pre>

            <div>
                <form>
                    <input type="text" onKeyUp={e => setName((e.target as HTMLInputElement).value)}/>
                    <button type="button" value="add" onClick={addProject}>Add</button>
                </form>
            </div>
        </div>
    )
}
