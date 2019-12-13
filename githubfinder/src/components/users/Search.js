import React,{useState,useContext} from 'react'

import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
import './search.css'

const  Search =()=>  {
    const githubContext=useContext(GithubContext);
    const alertContext=useContext(AlertContext);

    
    const [text,settext]=useState("");

    
    
    const onChange = (e) => {
        settext(e.target.value )
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        if(text===""){
       alertContext.setAlert("please enter something in the text box");
        }
    else{
        githubContext.searchUsers(text)
        settext("")

    }    
    }

     
        return (
            <div>
                <form onSubmit={onsubmit}>
                <div className="textbox_button">
                    <input type="text" name="text" autocomplete="off" placeholder=" Search user..." onChange={onChange} />
                    <input type="submit" value="Search" />
</div>
                </form>
              { githubContext.users.length >0&& (<button className="clear" onClick={githubContext.clear}>Clear</button>)} 

            </div>
        )
    
}



export default Search;
