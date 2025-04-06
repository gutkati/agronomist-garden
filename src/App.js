import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import "./styles/index.scss"
import React, {useState} from "react";
import {useUsers} from "./Context/UserContext";

function App() {
    const {users} = useUsers()
    const [searchName, setSearchName] = useState("")
    const [searchCompany, setSearchCompany] = useState("")
    let filtered = [...users]
    if (searchName) {
        filtered = filtered.filter(user =>
            user.name.includes(searchName)
        )
    }

    if (searchCompany) {
        filtered = filtered.filter(user =>
            user.company.includes(searchCompany)
        )
    }

    return (
            <div className="app">
                <Header
                    searchName={searchName}
                    setSearchName={setSearchName}
                    searchCompany={searchCompany}
                    setSearchCompany={setSearchCompany}
                />
                <Main users={filtered}/>
            </div>
    );
}

export default App;